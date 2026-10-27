// ============================================================
// MEJORAS - GdR Cáritas Cuba
// Cargar DESPUÉS de riesgos.js y ANTES de app.js.
// Redefine funciones de riesgos.js sin modificar ese archivo.
// Si algo falla, quita la línea <script src="js/mejoras.js"> de
// index.html y la app vuelve a su comportamiento anterior.
// ============================================================
(function () {
  'use strict';

  // ---------- CONFIGURACIÓN ----------
  // La IA en línea envía el texto de las preguntas a un servicio externo.
  // Déjala en false mientras no se decida la política de privacidad y
  // mientras la clave API siga en el navegador.
  const IA_ONLINE_HABILITADA = false;
  const IA_TIMEOUT_MS = 12000;
  const DIAS_AVISO_RESPALDO = 7;
  const AVISO_EMERGENCIA =
    '\n\n⚠️ Respuesta orientativa. Ante una emergencia, siga las indicaciones de la Defensa Civil.';

  // ---------- UTILIDADES ----------
  function normalizar(s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9ñ\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function escaparHTML(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function limpiarTexto(v, max) {
    if (v == null) return '';
    return String(v).replace(/[<>]/g, '').replace(/"/g, '”').trim().slice(0, max || 2000);
  }

  // ============================================================
  // 1. BÚSQUEDA DEL ASISTENTE OFFLINE
  // ============================================================
  const PALABRAS_VACIAS = new Set([
    'de', 'la', 'el', 'los', 'las', 'un', 'una', 'unos', 'unas', 'y', 'o', 'que', 'en', 'a',
    'por', 'para', 'con', 'del', 'al', 'se', 'es', 'como', 'cual', 'cuales', 'qué', 'mi',
    'mis', 'su', 'sus', 'lo', 'le', 'hay', 'son', 'ser', 'esta', 'este', 'esto', 'puedo',
    'debo', 'hacer'
  ]);

  function raiz(t) { return t.slice(0, 6); }

  function tokens(texto) {
    return normalizar(texto).split(' ')
      .filter(t => t.length > 2 && !PALABRAS_VACIAS.has(t));
  }

  function puntuarPregunta(consultaTokens, p) {
    const claves = new Set();
    (p.palabras_clave || []).forEach(k => tokens(k).forEach(t => claves.add(raiz(t))));
    const enPregunta = new Set(tokens(p.pregunta || '').map(raiz));
    const enCorta = new Set(tokens(p.respuesta_corta || '').map(raiz));
    let puntos = 0;
    consultaTokens.forEach(t => {
      const r = raiz(t);
      if (claves.has(r)) puntos += 3;
      if (enPregunta.has(r)) puntos += 2;
      if (enCorta.has(r)) puntos += 1;
    });
    return puntos;
  }

  function buscarMejores(texto, preguntas, max) {
    const q = tokens(texto);
    if (q.length === 0) return [];
    const minimo = q.length === 1 ? 2 : 3;
    return preguntas
      .map(p => ({ p, puntos: puntuarPregunta(q, p) }))
      .filter(x => x.puntos >= minimo)
      .sort((a, b) => b.puntos - a.puntos)
      .slice(0, max || 3)
      .map(x => x.p);
  }

  window.buscarEnMotorReglas = async function (texto) {
    if (typeof todasLasPreguntas === 'undefined' || todasLasPreguntas.length === 0) {
      agregarMensajeChat('El motor de reglas no está disponible en este momento.', 'bot');
      return;
    }
    const mejores = buscarMejores(texto, todasLasPreguntas, 3);
    if (mejores.length === 0) {
      agregarMensajeChat(
        'No encontré una respuesta. Prueba con otras palabras (ej: "riesgo", "vulnerabilidad", "evacuación") ' +
        'o consulta la Biblioteca y la Formación.' + AVISO_EMERGENCIA, 'bot');
      return;
    }
    const m = mejores[0];
    let salida = '💡 **' + m.pregunta + '**\n\n' + (m.respuesta_corta || '') + '\n\n' + (m.respuesta_larga || '');
    if (mejores.length > 1) {
      salida += '\n\n**Preguntas relacionadas:**\n' + mejores.slice(1).map(x => '• ' + x.pregunta).join('\n');
    }
    agregarMensajeChat(salida + AVISO_EMERGENCIA, 'bot');
  };

  // ============================================================
  // 2. CHAT: sin HTML inyectado, con tiempo límite y sin IA por defecto
  // ============================================================
  window.agregarMensajeChat = function (texto, tipo) {
    const contenedor = document.getElementById('chat-mensajes');
    const id = 'msg-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
    const div = document.createElement('div');
    div.id = id;
    div.className = 'mensaje ' + tipo;
    div.innerHTML = escaparHTML(texto)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    contenedor.appendChild(div);
    contenedor.scrollTop = contenedor.scrollHeight;
    return id;
  };

  const _abrirAsistenteIA = window.abrirAsistenteIA;
  window.abrirAsistenteIA = function () {
    _abrirAsistenteIA();
    const entrada = document.getElementById('chat-input');
    if (entrada) entrada.placeholder = 'Pregunta sin nombres ni datos personales';
  };

  window.enviarMensajeIA = async function () {
    const input = document.getElementById('chat-input');
    const texto = input.value.trim();
    if (!texto) return;

    agregarMensajeChat(texto, 'usuario');
    input.value = '';
    const idEscribiendo = agregarMensajeChat('Buscando…', 'bot escribiendo');
    const quitarEscribiendo = () => { const e = document.getElementById(idEscribiendo); if (e) e.remove(); };

    const claveValida = typeof CONFIG_IA !== 'undefined' && CONFIG_IA.apiKey &&
      CONFIG_IA.apiKey !== 'TU_CLAVE_AQUI';
    const usarIA = IA_ONLINE_HABILITADA && claveValida && navigator.onLine;

    if (!usarIA) {
      quitarEscribiendo();
      await window.buscarEnMotorReglas(texto);
      return;
    }

    const control = new AbortController();
    const temporizador = setTimeout(() => control.abort(), IA_TIMEOUT_MS);
    try {
      const respuesta = await fetch(CONFIG_IA.apiUrl, {
        method: 'POST',
        signal: control.signal,
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + CONFIG_IA.apiKey },
        body: JSON.stringify({
          model: CONFIG_IA.modelo,
          messages: [
            {
              role: 'system',
              content: 'Eres un asistente de Gestión de Riesgo de Desastres para Cáritas Cuba. Responde en español, ' +
                'breve y práctico. Si no estás seguro, dilo. Ante emergencias, indica seguir siempre las ' +
                'indicaciones de la Defensa Civil. No pidas ni uses datos personales.'
            },
            { role: 'user', content: texto }
          ]
        })
      });
      clearTimeout(temporizador);
      if (!respuesta.ok) throw new Error('HTTP ' + respuesta.status);
      const datos = await respuesta.json();
      quitarEscribiendo();
      agregarMensajeChat(datos.choices[0].message.content + AVISO_EMERGENCIA, 'bot');
    } catch (error) {
      clearTimeout(temporizador);
      quitarEscribiendo();
      const motivo = error.name === 'AbortError' ? 'La conexión es muy lenta.' : 'No se pudo conectar con la IA.';
      agregarMensajeChat('⚠️ ' + motivo + ' Uso la base de conocimiento offline.', 'bot');
      await window.buscarEnMotorReglas(texto);
    }
  };

  // ============================================================
  // 3. IMPORTAR JSON: validar, limpiar y fusionar por fecha
  // ============================================================
  const RE_ID = /^[A-Za-z0-9_.:-]{3,80}$/;
  const RE_FECHA = /^\d{4}-\d{2}-\d{2}$/;

  function validarRiesgo(r) {
    if (!r || typeof r !== 'object' || Array.isArray(r)) return null;
    if (typeof r.id !== 'string' || !RE_ID.test(r.id)) return null;
    const prob = parseInt(r.probabilidad, 10);
    const imp = parseInt(r.impacto, 10);
    if (!(prob >= 1 && prob <= 5) || !(imp >= 1 && imp <= 5)) return null;

    const { nivel, clasificacion } = calcularNivel(prob, imp); // se recalcula, no se confía en el archivo
    const nombreLocal = limpiarTexto(r.caritas_local, 120);
    const local = (typeof caritasLocales !== 'undefined')
      ? caritasLocales.find(c => c.nombre === nombreLocal) : null;
    const pob = parseInt(r.poblacion_afectada, 10);

    return {
      id: r.id,
      fecha_identificacion: RE_FECHA.test(r.fecha_identificacion) ? r.fecha_identificacion : fechaHoy(),
      fecha_actualizacion: RE_FECHA.test(r.fecha_actualizacion) ? r.fecha_actualizacion : fechaHoy(),
      titulo: limpiarTexto(r.titulo, 200),
      descripcion: limpiarTexto(r.descripcion, 3000),
      categoria: limpiarTexto(r.categoria, 80),
      caritas_local: nombreLocal,
      caritas_codigo: local ? local.codigo : limpiarTexto(r.caritas_codigo, 12) || 'CU-UNK',
      amenaza: limpiarTexto(r.amenaza, 3000),
      vulnerabilidad: limpiarTexto(r.vulnerabilidad, 3000),
      capacidad: limpiarTexto(r.capacidad, 3000),
      probabilidad: prob,
      impacto: imp,
      nivel_riesgo: nivel,
      clasificacion: clasificacion,
      zona_geografica: limpiarTexto(r.zona_geografica, 200),
      poblacion_afectada: pob >= 0 && pob <= 10000000 ? pob : 0,
      responsable: limpiarTexto(r.responsable, 120),
      tratamiento: limpiarTexto(r.tratamiento, 3000),
      estado: limpiarTexto(r.estado, 40) || 'Abierto',
      notas: limpiarTexto(r.notas, 3000)
    };
  }

  window.importarJSON = async function (event) {
    const archivo = event.target.files[0];
    if (!archivo) return;
    try {
      if (archivo.size > 5 * 1024 * 1024) { alert('❌ El archivo es demasiado grande (máx. 5 MB).'); return; }
      const datos = JSON.parse(await archivo.text());
      const lista = Array.isArray(datos) ? datos : (datos && Array.isArray(datos.riesgos) ? datos.riesgos : null);
      if (!lista) { alert('❌ El archivo no tiene el formato de Cáritas.'); return; }
      if (lista.length > 5000) { alert('❌ El archivo tiene demasiados registros.'); return; }

      const actuales = new Map((await obtenerRiesgos()).map(r => [r.id, r]));
      let nuevos = 0, actualizados = 0, sinCambios = 0, invalidos = 0;

      for (const bruto of lista) {
        const r = validarRiesgo(bruto);
        if (!r) { invalidos++; continue; }
        const previo = actuales.get(r.id);
        if (!previo) { await guardarRiesgo(r); nuevos++; }
        else if (r.fecha_actualizacion > previo.fecha_actualizacion) { await guardarRiesgo(r); actualizados++; }
        else { sinCambios++; }
      }

      alert('✅ Importación completada\n\n- Nuevos: ' + nuevos + '\n- Actualizados (versión más reciente): ' +
        actualizados + '\n- Sin cambios (el local es igual o más reciente): ' + sinCambios +
        '\n- Descartados por datos inválidos: ' + invalidos);
      mostrarListaRiesgos();
    } catch (error) {
      console.error('Error al importar:', error);
      alert('❌ No se pudo leer el archivo. ¿Es un respaldo .json de esta app?');
    } finally {
      event.target.value = '';
    }
  };

  // ============================================================
  // 4. CSV SEGURO (comillas y fórmulas de Excel)
  // ============================================================
  function celdaCSV(v) {
    let s = String(v == null ? '' : v);
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
    return '"' + s.replace(/"/g, '""') + '"';
  }

  window.exportarCSV = async function () {
    try {
      const riesgos = await obtenerRiesgos();
      if (riesgos.length === 0) { alert('No hay riesgos para exportar.'); return; }
      const enc = ['ID', 'Fecha Identificación', 'Cáritas Local', 'Código', 'Título', 'Categoría', 'Probabilidad',
        'Impacto', 'Nivel', 'Clasificación', 'Responsable', 'Tratamiento', 'Estado', 'Zona', 'Población', 'Descripción'];
      const filas = riesgos.map(r => [r.id, r.fecha_identificacion, r.caritas_local, r.caritas_codigo, r.titulo,
        r.categoria, r.probabilidad, r.impacto, r.nivel_riesgo, r.clasificacion, r.responsable, r.tratamiento,
        r.estado, r.zona_geografica, r.poblacion_afectada, r.descripcion]);
      const csv = [enc.map(celdaCSV).join(';'), ...filas.map(f => f.map(celdaCSV).join(';'))].join('\n');
      const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'riesgos-' + fechaHoy() + '-' + (riesgos[0].caritas_codigo || 'Cuba') + '.csv';
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      alert('❌ Error al exportar CSV: ' + error.message);
    }
  };

  // ============================================================
  // 5. EDITAR NO REABRE UN RIESGO
  // ============================================================
  // El formulario guarda siempre estado = 'Abierto'. Al editar, conservamos el estado anterior.
  let guardandoDesdeFormulario = false;
  const _guardarRiesgo = window.guardarRiesgo;
  window.guardarRiesgo = async function (riesgo) {
    if (guardandoDesdeFormulario) {
      const previo = (await obtenerRiesgos()).find(r => r.id === riesgo.id);
      if (previo && previo.estado) riesgo.estado = previo.estado;
    }
    return _guardarRiesgo(riesgo);
  };
  const _manejarSubmitRiesgo = window.manejarSubmitRiesgo;
  window.manejarSubmitRiesgo = async function (event) {
    guardandoDesdeFormulario = true;
    try { return await _manejarSubmitRiesgo(event); }
    finally { guardandoDesdeFormulario = false; }
  };

  // ============================================================
  // 6. RESPALDO: almacenamiento persistente + aviso
  // ============================================================
  const CLAVE_RESPALDO = 'gdr_ultimo_respaldo';
  const CLAVE_OCULTAR = 'gdr_aviso_oculto_hasta';

  function leerLS(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function escribirLS(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sin acceso */ } }

  async function pedirPersistencia() {
    try {
      if (navigator.storage && navigator.storage.persist && !(await navigator.storage.persisted())) {
        await navigator.storage.persist();
      }
    } catch (e) { /* no soportado: seguimos */ }
  }

  function diasDesde(iso) {
    return Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  }

  const _exportarJSON = window.exportarJSON;
  window.exportarJSON = async function () {
    const cantidad = (await obtenerRiesgos()).length;
    await _exportarJSON();
    if (cantidad > 0) {
      escribirLS(CLAVE_RESPALDO, new Date().toISOString());
      const aviso = document.getElementById('aviso-respaldo');
      if (aviso) aviso.remove();
    }
  };

  async function mostrarAvisoRespaldo() {
    const riesgos = await obtenerRiesgos();
    if (riesgos.length === 0) return;
    const ultimo = leerLS(CLAVE_RESPALDO);
    const dias = ultimo ? diasDesde(ultimo) : null;
    if (dias !== null && dias < DIAS_AVISO_RESPALDO) return;
    const oculto = leerLS(CLAVE_OCULTAR);
    if (oculto && new Date(oculto).getTime() > Date.now()) return;

    const caja = document.createElement('div');
    caja.id = 'aviso-respaldo';
    caja.setAttribute('role', 'alert');
    caja.style.cssText = 'background:#fff3cd;color:#664d03;border:1px solid #ffecb5;padding:10px 14px;' +
      'margin:8px;border-radius:8px;font-size:15px;line-height:1.4;';
    caja.innerHTML = '⚠️ <strong>Tus datos solo están en este teléfono.</strong> ' +
      (dias === null ? 'Aún no has hecho ningún respaldo.' : 'Tu último respaldo fue hace ' + dias + ' días.') +
      ' Exporta el JSON y envíaselo a tu coordinador.<br>' +
      '<button id="aviso-exportar" style="margin:6px 8px 0 0;padding:6px 12px;">📤 Exportar ahora</button>' +
      '<button id="aviso-ocultar" style="margin-top:6px;padding:6px 12px;">Recordármelo mañana</button>';
    document.body.insertBefore(caja, document.body.firstChild);
    document.getElementById('aviso-exportar').onclick = () => window.exportarJSON();
    document.getElementById('aviso-ocultar').onclick = () => {
      escribirLS(CLAVE_OCULTAR, new Date(Date.now() + 86400000).toISOString());
      caja.remove();
    };
  }

  async function esperarBaseDatos() {
    for (let i = 0; i < 50; i++) {
      if (typeof dbRiesgos !== 'undefined' && dbRiesgos) return true;
      await new Promise(r => setTimeout(r, 100));
    }
    return false;
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', async () => {
      pedirPersistencia();
      if (await esperarBaseDatos()) { try { await mostrarAvisoRespaldo(); } catch (e) { console.error(e); } }
    });
  }

  // ============================================================
  // 7. FORMACIÓN: lecciones con formato + explicación al fallar
  // ============================================================
  window.abrirCurso = async function (idCurso) {
    const contenedor = document.getElementById('resultados');
    const datos = await (await fetch('./datos/formacion.json')).json();
    const curso = datos.cursos.find(c => c.id === idCurso);
    if (!curso) return;

    let html = '<button class="btn-volver" onclick="abrirFormacion()">← Volver a Formación</button>' +
      '<div class="curso-contenido"><h2>' + curso.titulo + '</h2>' +
      '<p class="nivel-curso">Nivel: ' + curso.nivel + ' · ' + (curso.duracion_min || '') + ' min</p>';

    curso.lecciones.forEach(lec => {
      html += '<div class="leccion" id="' + lec.id + '"><h3>📖 ' + lec.titulo + '</h3><div>' +
        convertirMarkdownAHTML(lec.contenido) + '</div></div>';
    });

    html += '<h3>📝 Evaluación</h3><form id="form-quiz">';
    curso.quiz.forEach((q, index) => {
      html += '<div class="pregunta-quiz"><p><strong>' + (index + 1) + '. ' + q.pregunta + '</strong></p>';
      q.opciones.forEach((op, i) => {
        html += '<label><input type="radio" name="q' + index + '" value="' + i + '" required> ' + op + '</label><br>';
      });
      html += '</div>';
    });
    html += '<button type="button" class="btn-guardar" onclick="evaluarQuiz(\'' + curso.id + '\')">Enviar respuestas</button>' +
      '</form><div id="resultado-quiz"></div></div>';

    contenedor.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.evaluarQuiz = async function (idCurso) {
    const datos = await (await fetch('./datos/formacion.json')).json();
    const curso = datos.cursos.find(c => c.id === idCurso);
    const form = document.getElementById('form-quiz');
    const falladas = [];
    let correctas = 0;

    curso.quiz.forEach((q, index) => {
      const sel = form.querySelector('input[name="q' + index + '"]:checked');
      if (sel && parseInt(sel.value, 10) === q.respuesta_correcta) correctas++;
      else falladas.push(q);
    });

    const total = curso.quiz.length;
    const pct = Math.round((correctas / total) * 100);
    const aprobado = pct >= 80;
    let html = '<div class="resultado-quiz-exito"><h3>' +
      (aprobado ? '🎉 ¡Muy bien! ' : '📚 ') + 'Acertaste ' + correctas + ' de ' + total + ' (' + pct + '%).' +
      (aprobado ? '' : ' Repasa estas preguntas y vuelve a intentarlo.') + '</h3>';

    if (falladas.length > 0) {
      html += '<ul>' + falladas.map(q => {
        const lec = curso.lecciones.find(l => l.id === q.leccion_repaso);
        return '<li><strong>' + q.pregunta + '</strong><br>' + (q.explicacion || '') +
          (lec ? '<br><a href="#' + lec.id + '">Repasar: ' + lec.titulo + '</a>' : '') + '</li>';
      }).join('') + '</ul>';
    }
    html += '<button class="btn-guardar" onclick="abrirCurso(\'' + curso.id + '\')">Intentar de nuevo</button></div>';
    document.getElementById('resultado-quiz').innerHTML = html;
  };

  // Para pruebas automáticas (no se usa en la app)
  window.GDR_MEJORAS = { normalizar, tokens, buscarMejores, validarRiesgo, celdaCSV, limpiarTexto, escaparHTML };
})();
