/* ============================================================
   bitacora.js — Bitácora del coordinador (código -> nombre y parroquia)
   Solo funciona en el dispositivo del coordinador. Los datos se guardan
   en este navegador (localStorage), sin enviarse a ningún servidor.
   Requiere: gestion-del-riesgo/codigo-grd.js cargado antes.
   ============================================================ */
(function () {
  'use strict';
  if (typeof CodigoGRD === 'undefined') { console.warn('Bitácora: falta codigo-grd.js'); return; }
  const C = CodigoGRD;
  const K_DATOS = 'gdr_bitacora_v1';
  const K_PIN = 'gdr_bitacora_pin_v1';
  const RE_FECHA = /^\d{4}-\d{2}-\d{2}$/;

  // ---------- utilidades ----------
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const limpiar = (s, max) => String(s == null ? '' : s)
    .replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
  const clave = s => limpiar(s, 200).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const enmascarar = n => { const t = String(n || ''); return t ? t.charAt(0) + '•••••' : ''; };
  const sumarDias = (iso, n) => { const d = new Date(iso + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };

  // ---------- lógica (sin pantalla; se prueba aparte) ----------
  function estadosDe(datos, codigo) { const a = datos.avances[codigo]; return (a && a.estados) || {}; }

  function resumen(datos) {
    const r = { registradas: 0, enFormacion: 0, basico: 0, confirmadas: 0, parroquias: {}, modulos: {}, sinRegistrar: [], ultimo: '' };
    C.MODULOS.forEach(id => { r.modulos[id] = { empezaron: 0, cerraron: 0, cumplieron: 0 }; });
    const reg = {};
    datos.personas.forEach(p => {
      reg[p.codigo] = true;
      const e = estadosDe(datos, p.codigo);
      const alguno = Object.keys(e).some(id => e[id] >= 1);
      const bas = C.BASICO.every(id => e[id] === 3);
      const conf = !!p.confirmadoBasico;
      r.registradas++; if (alguno) r.enFormacion++; if (bas) r.basico++; if (conf) r.confirmadas++;
      const k = clave(p.parroquia);
      const f = r.parroquias[k] || (r.parroquias[k] = { nombre: p.parroquia, registradas: 0, enFormacion: 0, basico: 0, confirmadas: 0 });
      f.registradas++; if (alguno) f.enFormacion++; if (bas) f.basico++; if (conf) f.confirmadas++;
      C.MODULOS.forEach(id => {
        const v = e[id];
        if (v >= 1) r.modulos[id].empezaron++;
        if (v >= 2) r.modulos[id].cerraron++;
        if (v >= 3) r.modulos[id].cumplieron++;
      });
      const a = datos.avances[p.codigo]; if (a && a.fecha > r.ultimo) r.ultimo = a.fecha;
    });
    Object.keys(datos.avances).forEach(c => { if (!reg[c]) r.sinRegistrar.push(c); });
    return r;
  }

  function fusionar(datos, L) {
    const prev = datos.avances[L.codigo];
    if (!prev) { datos.avances[L.codigo] = { fecha: L.fecha, estados: Object.assign({}, L.estados) }; return 'nuevo'; }
    let cambio = false;
    Object.keys(L.estados).forEach(id => {
      if (!(prev.estados[id] >= L.estados[id])) { prev.estados[id] = L.estados[id]; cambio = true; }
    });
    if (L.fecha > prev.fecha) { prev.fecha = L.fecha; cambio = true; }
    return cambio ? 'actualizado' : 'sin cambios';
  }

  function procesarLineas(datos, texto, hoy) {
    const res = { nuevos: 0, actualizados: 0, sinCambios: 0, errores: [] };
    const limite = sumarDias(hoy, 1);
    C.extraerLineas(texto).forEach(it => {
      if (!it.linea) { res.errores.push({ renglon: it.renglon, motivo: 'No hay una línea de avance (debe empezar con GRD1).' }); return; }
      const L = C.leerLinea(it.linea);
      if (!L.ok) { res.errores.push({ renglon: it.renglon, motivo: L.error }); return; }
      if (L.codigo.slice(0, 3) !== datos.caritas) { res.errores.push({ renglon: it.renglon, motivo: 'El código es de otra Cáritas Local (' + L.codigo.slice(0, 3) + ').' }); return; }
      if (L.fecha > limite) { res.errores.push({ renglon: it.renglon, motivo: 'La fecha es futura (' + L.fecha + '): revisa el reloj del teléfono de origen.' }); return; }
      const r = fusionar(datos, L);
      if (r === 'nuevo') res.nuevos++; else if (r === 'actualizado') res.actualizados++; else res.sinCambios++;
    });
    return res;
  }

  function registrar(datos, d, hoy) {
    const nombre = limpiar(d.nombre, 80);
    let par = limpiar(d.parroquia, 80);
    if (!nombre) return { ok: false, error: 'Escribe el nombre.' };
    if (!par) return { ok: false, error: 'Escribe la parroquia.' };
    if (!d.consentimiento) return { ok: false, error: 'Marca que la persona aceptó que se guarden su nombre y su parroquia.' };
    const kp = clave(par);
    const mismaPar = datos.personas.find(p => clave(p.parroquia) === kp);
    if (mismaPar) par = mismaPar.parroquia;           // evita «San José» / «san jose» como dos parroquias
    const dup = datos.personas.find(p => clave(p.nombre) === clave(nombre) && clave(p.parroquia) === kp);
    if (dup) return { ok: false, error: 'Ya existe esa persona en esa parroquia (código ' + dup.codigo + '). Si es otra persona con el mismo nombre, añade un apellido o inicial.' };
    let codigo;
    if (d.codigoExistente) {
      const c = C.normalizarCodigo(d.codigoExistente);
      if (!c.ok || c.codigo.slice(0, 3) !== datos.caritas) return { ok: false, error: 'Ese código no es válido para esta Cáritas Local.' };
      if (datos.personas.some(p => p.codigo === c.codigo)) return { ok: false, error: 'Ese código ya está registrado.' };
      codigo = c.codigo;
    } else {
      // salta los números que ya tienen avance recibido o están registrados (no repetir el código de otra persona)
      do {
        if (datos.siguiente > 9999) return { ok: false, error: 'Se agotaron los números de esta Cáritas Local.' };
        codigo = C.generarCodigo(datos.caritas, datos.siguiente);
        datos.siguiente++;
      } while (datos.avances[codigo] || datos.personas.some(p => p.codigo === codigo));
    }
    datos.personas.push({ codigo, nombre, parroquia: par, alta: hoy, consentimiento: true, confirmadoBasico: null });
    return { ok: true, codigo };
  }

  function textoReporte(datos, opc, hoy) {
    const r = resumen(datos);
    const L = [];
    L.push('REPORTE GRD · ' + (opc.nombreCaritas || ('Cáritas ' + datos.caritas)) + ' · generado ' + hoy +
      (r.ultimo ? ' · último avance recibido ' + r.ultimo : ''));
    L.push('Registradas: ' + r.registradas + ' · En formación: ' + r.enFormacion +
      ' · Completaron el Básico (según su avance): ' + r.basico + ' · Confirmadas por el coordinador: ' + r.confirmadas);
    let lista = Object.keys(r.parroquias).map(k => r.parroquias[k]);
    if (opc.agrupar) {
      const otras = { nombre: 'Otras parroquias (menos de 3 personas)', registradas: 0, enFormacion: 0, basico: 0, confirmadas: 0 };
      const grandes = [];
      lista.forEach(f => {
        if (f.registradas >= 3) grandes.push(f);
        else { otras.registradas += f.registradas; otras.enFormacion += f.enFormacion; otras.basico += f.basico; otras.confirmadas += f.confirmadas; }
      });
      lista = otras.registradas ? grandes.concat([otras]) : grandes;
    }
    lista.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
    L.push('', 'Por parroquia (registradas / en formación / completaron Básico / confirmadas):');
    lista.forEach(f => L.push('- ' + f.nombre + ': ' + [f.registradas, f.enFormacion, f.basico, f.confirmadas].join(' / ')));
    L.push('', 'Por módulo (empezaron / cerraron / cumplieron):');
    let hay = false;
    C.MODULOS.forEach(id => { const m = r.modulos[id]; if (m.empezaron) { hay = true; L.push(id + ': ' + m.empezaron + ' / ' + m.cerraron + ' / ' + m.cumplieron); } });
    if (!hay) L.push('(todavía sin avances recibidos)');
    L.push('', 'Este reporte no lleva nombres ni códigos y reemplaza a los anteriores. «Cumplieron» = cerraron el módulo con 50 % o más de puntos y, si tiene, hicieron la actividad de grupo (según su propio avance).');
    if (r.sinRegistrar.length) L.push('Nota: ' + r.sinRegistrar.length + ' código(s) con avance aún sin registrar en la bitácora no están incluidos.');
    return L.join('\n');
  }

  function celdaCSV(v) {
    let s = String(v == null ? '' : v);
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;        // evita fórmulas en Excel
    return /[",\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }
  function csvParroquias(datos) {
    const r = resumen(datos);
    const filas = ['parroquia,registradas,en_formacion,completaron_basico,confirmadas'];
    Object.keys(r.parroquias).map(k => r.parroquias[k]).sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
      .forEach(f => filas.push([celdaCSV(f.nombre), f.registradas, f.enFormacion, f.basico, f.confirmadas].join(',')));
    return filas.join('\n');
  }

  function validarRespaldo(o) {
    if (!o || typeof o !== 'object' || o.version !== 1 || C.PREFIJOS.indexOf(o.caritas) < 0) return null;
    const limpio = { version: 1, caritas: o.caritas, siguiente: 1, personas: [], avances: {} };
    const vistos = {};
    (Array.isArray(o.personas) ? o.personas : []).slice(0, 5000).forEach(p => {
      if (!p || typeof p !== 'object') return;
      const c = C.normalizarCodigo(p.codigo);
      if (!c.ok || vistos[c.codigo]) return;
      const nombre = limpiar(p.nombre, 80), par = limpiar(p.parroquia, 80);
      if (!nombre || !par) return;
      vistos[c.codigo] = 1;
      limpio.personas.push({
        codigo: c.codigo, nombre, parroquia: par,
        alta: RE_FECHA.test(p.alta) ? p.alta : '', consentimiento: p.consentimiento === true,
        confirmadoBasico: RE_FECHA.test(p.confirmadoBasico) ? p.confirmadoBasico : null
      });
    });
    if (o.avances && typeof o.avances === 'object') {
      Object.keys(o.avances).slice(0, 10000).forEach(k => {
        const c = C.normalizarCodigo(k); const a = o.avances[k];
        if (!c.ok || c.codigo !== k || !a || !RE_FECHA.test(a.fecha)) return;
        const est = {};
        Object.keys(a.estados || {}).forEach(id => { if (C.MODULOS.indexOf(id) >= 0 && [1, 2, 3].indexOf(a.estados[id]) >= 0) est[id] = a.estados[id]; });
        limpio.avances[k] = { fecha: a.fecha, estados: est };
      });
    }
    let max = 0;
    Object.keys(limpio.avances).concat(limpio.personas.map(p => p.codigo)).forEach(c => {
      if (c.slice(0, 3) === limpio.caritas) max = Math.max(max, parseInt(c.slice(4, 8), 10) || 0);
    });
    limpio.siguiente = Math.max(max + 1, Math.min(9999, parseInt(o.siguiente, 10) || 1));
    return limpio;
  }

  window.GDR_BITACORA = { resumen, fusionar, procesarLineas, registrar, textoReporte, csvParroquias, validarRespaldo, celdaCSV, clave };

  // ---------- almacenamiento y PIN ----------
  let datos = null, desbloqueada = false, vista = 'resumen', verNombres = true, filtro = '', aviso = null, caritasLista = [], ultimaTarjeta = null, editando = null, borrador = null, avisoProcesado = null, textoReporteActual = '';

  function leerDatos() { try { const t = localStorage.getItem(K_DATOS); return t ? JSON.parse(t) : null; } catch (e) { return null; } }
  function guardarDatos() {
    try { localStorage.setItem(K_DATOS, JSON.stringify(datos)); return true; }
    catch (e) { aviso = { tipo: 'mal', texto: 'No se pudo guardar en este navegador (¿modo privado o sin espacio?). Haz un respaldo ahora.' }; return false; }
  }
  const hayCripto = () => !!(window.crypto && window.crypto.subtle && window.TextEncoder);
  async function derivarPin(pin, sal) {
    const enc = new TextEncoder();
    const llave = await crypto.subtle.importKey('raw', enc.encode(pin), 'PBKDF2', false, ['deriveBits']);
    const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: enc.encode(sal), iterations: 100000, hash: 'SHA-256' }, llave, 256);
    return Array.from(new Uint8Array(bits)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  function leerPin() { try { const t = localStorage.getItem(K_PIN); return t ? JSON.parse(t) : null; } catch (e) { return null; } }
  function salAleatoria() { const a = new Uint8Array(12); crypto.getRandomValues(a); return Array.from(a).map(b => b.toString(16).padStart(2, '0')).join(''); }

  function descargar(nombre, texto, tipo) {
    const b = new Blob([texto], { type: tipo || 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(b); a.download = nombre;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  function copiar(texto, ok) {
    const respaldo = () => { const ta = document.createElement('textarea'); ta.value = texto; document.body.appendChild(ta); ta.select(); let r = false; try { r = document.execCommand('copy'); } catch (e) { } ta.remove(); ok(r); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texto).then(() => ok(true), respaldo); else respaldo();
  }

  // ---------- pantallas ----------
  const raiz = () => document.getElementById('resultados');

  function marco(contenido) {
    raiz().innerHTML = '<button class="btn-volver" data-acc="salir">← Volver</button>' +
      '<div class="bitacora' + (verNombres ? '' : ' bit-oculta') + '" id="bit-raiz">' +
      '<h2>Bitácora del coordinador</h2>' + contenido + '</div>';
    window.scrollTo({ top: 0 });
  }
  const avisoHTML = () => { if (!aviso) return ''; const h = '<p class="bit-msg bit-' + aviso.tipo + '" role="status">' + esc(aviso.texto) + '</p>'; aviso = null; return h; };

  function pantallaCrear() {
    const opts = caritasLista.map(c => '<option value="' + esc(c.prefijo) + '">' + esc(c.nombre) + '</option>').join('');
    marco(avisoHTML() +
      '<p>Aquí guardas, solo en este dispositivo, el <b>nombre y la parroquia</b> de cada código. Crea un PIN para abrirla.</p>' +
      '<div class="bit-form"><label>Cáritas Local de este equipo<select id="bit-caritas">' + opts + '</select></label>' +
      '<label>PIN (4 a 6 números)<input id="bit-pin1" type="password" inputmode="numeric" maxlength="6" autocomplete="off"></label>' +
      '<label>Repite el PIN<input id="bit-pin2" type="password" inputmode="numeric" maxlength="6" autocomplete="off"></label>' +
      '<button class="btn-guardar" data-acc="crear">Crear bitácora</button></div>' +
      '<p class="bit-nota">Si olvidas el PIN no hay forma de recuperarlo. Por eso conviene guardar un respaldo en tu USB.</p>');
  }
  function pantallaPin() {
    marco(avisoHTML() + '<div class="bit-form"><label>PIN<input id="bit-pin" type="password" inputmode="numeric" maxlength="6" autocomplete="off"></label>' +
      '<button class="btn-guardar" data-acc="entrar">Abrir</button></div>' +
      '<p class="bit-nota"><a href="#" data-acc="olvide">Olvidé mi PIN</a></p>');
    const i = document.getElementById('bit-pin'); if (i) i.focus();
  }

  function barra() {
    const t = [['resumen', 'Resumen'], ['personas', 'Personas'], ['recibir', 'Recibir avances'], ['reporte', 'Reporte'], ['respaldo', 'Respaldo']];
    return '<div class="bit-barra">' + t.map(x => '<button class="bit-tab' + (vista === x[0] ? ' activa' : '') + '" data-acc="ir:' + x[0] + '">' + x[1] + '</button>').join('') +
      '<button class="bit-tab" data-acc="nombres">' + (verNombres ? 'Ocultar nombres' : 'Mostrar nombres') + '</button>' +
      '<button class="bit-tab" data-acc="cerrar">Cerrar bitácora</button></div>';
  }
  const nombreCaritas = () => { const c = caritasLista.find(x => x.prefijo === datos.caritas); return c ? c.nombre : 'Cáritas ' + datos.caritas; };

  function vistaResumen() {
    const r = resumen(datos);
    const parr = Object.keys(r.parroquias).map(k => r.parroquias[k]).sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
    let h = '<div class="bit-cifras"><div><b>' + r.registradas + '</b>registradas</div><div><b>' + r.enFormacion + '</b>en formación</div>' +
      '<div><b>' + r.basico + '</b>completaron el Básico</div><div><b>' + r.confirmadas + '</b>confirmadas</div></div>';
    if (r.sinRegistrar.length) h += '<p class="bit-msg bit-aviso">' + r.sinRegistrar.length + ' código(s) enviaron avance pero no están registrados. Ve a «Personas» para registrarlos.</p>';
    h += '<h3>Por parroquia</h3>';
    h += parr.length ? '<table class="bit-tabla"><tr><th>Parroquia</th><th>Reg.</th><th>En formación</th><th>Básico</th><th>Conf.</th></tr>' +
      parr.map(f => '<tr><td>' + esc(f.nombre) + '</td><td>' + f.registradas + '</td><td>' + f.enFormacion + '</td><td>' + f.basico + '</td><td>' + f.confirmadas + '</td></tr>').join('') + '</table>'
      : '<p class="bit-nota">Aún no hay personas registradas.</p>';
    h += '<h3>Por módulo</h3><table class="bit-tabla"><tr><th>Módulo</th><th>Empezaron</th><th>Cerraron</th><th>Cumplieron</th></tr>' +
      C.MODULOS.filter(id => r.modulos[id].empezaron).map(id => '<tr><td>' + id + '</td><td>' + r.modulos[id].empezaron + '</td><td>' + r.modulos[id].cerraron + '</td><td>' + r.modulos[id].cumplieron + '</td></tr>').join('') + '</table>';
    h += '<p class="bit-nota">«Completaron el Básico» = B1 a B10 cumplidos según el avance que cada persona envió. «Confirmadas» = las que tú confirmaste en persona.</p>';
    return h;
  }

  function formPersona(p, codigoPre) {
    const parr = {}; datos.personas.forEach(x => { parr[clave(x.parroquia)] = x.parroquia; });
    const lista = Object.keys(parr).map(k => '<option value="' + esc(parr[k]) + '">').join('');
    const editar = !!p;
    return '<div class="bit-form bit-caja"><h3>' + (editar ? 'Editar persona' : 'Nueva persona') + '</h3>' +
      (codigoPre ? '<p>Código recibido: <b>' + esc(codigoPre) + '</b></p>' : '') +
      '<label>Nombre<input id="bit-nombre" maxlength="80" autocomplete="off" value="' + esc(borrador ? borrador.nombre : (p ? p.nombre : '')) + '"></label>' +
      '<label>Parroquia<input id="bit-parroquia" maxlength="80" list="bit-parroquias" autocomplete="off" value="' + esc(borrador ? borrador.parroquia : (p ? p.parroquia : '')) + '"></label>' +
      '<datalist id="bit-parroquias">' + lista + '</datalist>' +
      (editar ? '' : '<label class="bit-check"><input id="bit-consent" type="checkbox"> La persona aceptó que su nombre y su parroquia se guarden en esta bitácora para dar seguimiento a su formación.</label>') +
      '<label class="bit-check" style="margin-top:12px;"><input id="bit-menor" type="checkbox"> Es menor de 18 años.</label>' +
      '<label class="bit-check" id="bit-consent-menor-label" style="display:none;"><input id="bit-consent-menor" type="checkbox"> Tengo en papel el consentimiento de su madre, padre o tutor, firmado y guardado bajo llave.</label>' +
      '<div class="bit-fila"><button class="btn-guardar" data-acc="' + (editar ? 'guardar-edicion:' + esc(p.codigo) : 'registrar' + (codigoPre ? ':' + esc(codigoPre) : '')) + '">' + (editar ? 'Guardar cambios' : 'Registrar y generar código') + '</button>' +
      '<button class="btn-cancelar" data-acc="cancelar-form">Cancelar</button></div></div>';
  }

  function vistaPersonas() {
    let h = avisoHTML();
    if (ultimaTarjeta) {
      h += '<div class="bit-tarjeta" id="bit-tarjeta"><p>Código para <b class="bit-nom">' + esc(ultimaTarjeta.nombre) + '</b></p><p class="bit-codigo">' + esc(ultimaTarjeta.codigo) + '</p>' +
        '<p>Este código se escribe en el curso. No lleva tu nombre.</p><p class="bit-nopr"><button class="btn-guardar" data-acc="imprimir">Imprimir tarjeta</button> <button class="btn-cancelar" data-acc="cerrar-tarjeta">Cerrar</button></p></div>';
    }
    const r = resumen(datos);
    if (r.sinRegistrar.length) {
      h += '<div class="bit-msg bit-aviso"><b>Códigos con avance sin registrar:</b><br>' +
        r.sinRegistrar.map(c => esc(c) + ' <button class="bit-mini" data-acc="nuevo-con:' + esc(c) + '">Registrar</button>').join('<br>') + '</div>';
    }
    if (editando === 'nuevo') h += formPersona(null, null);
    else if (editando && editando.indexOf('nuevo-con:') === 0) h += formPersona(null, editando.slice(10));
    else if (editando) { const p = datos.personas.find(x => x.codigo === editando); if (p) h += formPersona(p); }
    else h += '<p><button class="btn-guardar" data-acc="nuevo">+ Nueva persona</button></p>';
    h += '<label class="bit-buscar">Buscar<input id="bit-buscar" value="' + esc(filtro) + '" placeholder="nombre, código o parroquia"></label><div id="bit-lista">' + listaPersonas() + '</div>';
    return h;
  }
  function listaPersonas() {
    const f = clave(filtro);
    const ps = datos.personas.filter(p => !f || clave(p.nombre).indexOf(f) >= 0 || clave(p.codigo).indexOf(f) >= 0 || clave(p.parroquia).indexOf(f) >= 0)
      .sort((a, b) => a.codigo.localeCompare(b.codigo));
    if (!ps.length) return '<p class="bit-nota">' + (datos.personas.length ? 'Nadie coincide con la búsqueda.' : 'Todavía no hay personas. Registra la primera.') + '</p>';
    return '<div class="bit-lista">' + ps.map(p => {
      const e = estadosDe(datos, p.codigo);
      const n = C.BASICO.filter(id => e[id] === 3).length;
      const a = datos.avances[p.codigo];
      return '<div class="bit-persona"><div><b class="bit-nom">' + esc(verNombres ? p.nombre : enmascarar(p.nombre)) + '</b> <span class="bit-cod">' + esc(p.codigo) + '</span><br>' +
        esc(p.parroquia) + ' · Básico ' + n + '/10' + (a ? ' · último avance ' + esc(a.fecha) : ' · sin avance recibido') +
        (p.confirmadoBasico ? ' · <b>Confirmado ' + esc(p.confirmadoBasico) + '</b>' : '') + '</div>' +
        '<div class="bit-acciones"><button class="bit-mini" data-acc="editar:' + esc(p.codigo) + '">Editar</button>' +
        '<button class="bit-mini" data-acc="tarjeta:' + esc(p.codigo) + '">Tarjeta</button>' +
        '<button class="bit-mini" data-acc="confirmar:' + esc(p.codigo) + '">' + (p.confirmadoBasico ? 'Quitar confirmación' : 'Confirmar Básico') + '</button>' +
        '<button class="bit-mini bit-rojo" data-acc="baja:' + esc(p.codigo) + '">Dar de baja</button></div></div>';
    }).join('') + '</div>';
  }

  function vistaRecibir() {
    let h = avisoHTML();
    h += '<p>Pega aquí las líneas que te envíen (empiezan con <code>GRD1|</code>), una por renglón. Puedes pegar el chat completo: la app busca las líneas. También puedes cargar un archivo .txt.</p>' +
      '<textarea id="bit-lineas" rows="8" class="bit-ta" placeholder="GRD1|HAB-0007-T|2026-11-17|B1:3,B2:2|2499"></textarea>' +
      '<div class="bit-fila"><button class="btn-guardar" data-acc="procesar">Procesar avances</button>' +
      '<label class="btn-cancelar bit-archivo">Cargar archivo<input id="bit-archivo" type="file" accept=".txt,text/plain" hidden></label></div>';
    if (avisoProcesado) {
      const p = avisoProcesado;
      h += '<div class="bit-msg bit-ok"><b>Resultado:</b> ' + p.nuevos + ' nuevo(s) · ' + p.actualizados + ' actualizado(s) · ' + p.sinCambios + ' sin cambios · ' + p.errores.length + ' con problema.</div>';
      if (p.errores.length) h += '<ul class="bit-errores">' + p.errores.slice(0, 50).map(e => '<li>Renglón ' + e.renglon + ': ' + esc(e.motivo) + '</li>').join('') + '</ul>';
      avisoProcesado = null;
    }
    h += '<p class="bit-nota">Cada línea trae el avance completo de esa persona hasta ese día. Si llega repetida o tarde, no pasa nada: se conserva lo más avanzado. El control final de la línea detecta errores al copiar, pero no impide que alguien la escriba a mano: es un registro de seguimiento, no una prueba.</p>';
    return h;
  }

  function vistaReporte() {
    const agrupar = !!document.getElementById('bit-agrupar') && document.getElementById('bit-agrupar').checked;
    textoReporteActual = textoReporte(datos, { nombreCaritas: nombreCaritas(), agrupar }, C.hoy());
    return avisoHTML() + '<p>Este es el reporte para el encargado nacional. <b>No lleva nombres ni códigos.</b> Cada reporte reemplaza al anterior, así que puedes enviarlo por el canal que tengas (WhatsApp, USB, impreso).</p>' +
      '<label class="bit-check"><input id="bit-agrupar" type="checkbox" data-acc="reporte-recalcular"' + (agrupar ? ' checked' : '') + '> Agrupar las parroquias con menos de 3 personas en «Otras» (protege a quienes se identifican fácil en una comunidad pequeña)</label>' +
      '<pre class="bit-pre" id="bit-texto">' + esc(textoReporteActual) + '</pre>' +
      '<div class="bit-fila"><button class="btn-guardar" data-acc="copiar-reporte">Copiar texto</button><button class="btn-cancelar" data-acc="txt-reporte">Descargar .txt</button><button class="btn-cancelar" data-acc="csv-reporte">Descargar .csv por parroquia</button></div>'
    '<h3>Cambiar PIN</h3>' +
      '<div class="bit-form">' +
      '<label>PIN actual: <input type="password" id="bit-pin-act" inputmode="numeric" maxlength="6" autocomplete="off" style="width:100%; padding:8px; margin-bottom:8px;"></label>' +
      '<label>Nuevo PIN (4 a 6 números): <input type="password" id="bit-pin-nuevo1" inputmode="numeric" maxlength="6" autocomplete="off" style="width:100%; padding:8px; margin-bottom:8px;"></label>' +
      '<label>Repite el nuevo PIN: <input type="password" id="bit-pin-nuevo2" inputmode="numeric" maxlength="6" autocomplete="off" style="width:100%; padding:8px; margin-bottom:8px;"></label>' +
      '<button class="btn-guardar" data-acc="cambiarpin">Cambiar PIN</button>' +
      '</div>' +
      '<p class="bit-nota">Si olvidas el PIN no hay forma de recuperarlo. Guarda un respaldo.</p>';
  }

  function vistaRespaldo() {
    return avisoHTML() + '<p class="bit-msg bit-aviso"><b>Cuidado:</b> el respaldo contiene nombres y parroquias. Guárdalo solo en tu USB personal y no lo envíes por WhatsApp.</p>' +
      '<div class="bit-fila"><button class="btn-guardar" data-acc="respaldar">Guardar respaldo</button>' +
      '<label class="btn-cancelar bit-archivo">Restaurar respaldo<input id="bit-restaurar" type="file" accept=".json,application/json" hidden></label></div>' +
      '<p class="bit-nota">Restaurar reemplaza lo que hay ahora. Haz un respaldo cada vez que recibas avances: si el navegador se limpia o la laptop se daña, sin respaldo se pierde todo.</p>' +

      // --- CAMBIAR PIN ---
      '<h3>Cambiar PIN</h3>' +
      '<div class="bit-form">' +
      '<label>PIN actual: <input type="password" id="bit-pin-act" inputmode="numeric" maxlength="6" autocomplete="off" style="width:100%; padding:8px; margin-bottom:8px;"></label>' +
      '<label>Nuevo PIN (4 a 6 números): <input type="password" id="bit-pin-nuevo1" inputmode="numeric" maxlength="6" autocomplete="off" style="width:100%; padding:8px; margin-bottom:8px;"></label>' +
      '<label>Repite el nuevo PIN: <input type="password" id="bit-pin-nuevo2" inputmode="numeric" maxlength="6" autocomplete="off" style="width:100%; padding:8px; margin-bottom:8px;"></label>' +
      '<button class="btn-guardar" data-acc="cambiarpin">Cambiar PIN</button>' +
      '</div>' +
      '<p class="bit-nota">Si olvidas el PIN no hay forma de recuperarlo. Guarda un respaldo.</p>' +

      // --- BORRAR TODO ---
      '<h3>Borrar todo</h3><p class="bit-nota">Elimina la bitácora completa de este equipo (derecho de cancelación).</p><button class="btn-mini bit-borrar" data-acc="borrar">Borrar toda la bitácora</button>';
  }
  function pintar() {
    if (!desbloqueada || !datos) return;
    let cuerpo;
    if (vista === 'personas') cuerpo = vistaPersonas();
    else if (vista === 'recibir') cuerpo = vistaRecibir();
    else if (vista === 'reporte') cuerpo = vistaReporte();
    else if (vista === 'respaldo') cuerpo = vistaRespaldo();
    else cuerpo = avisoHTML() + vistaResumen();
    marco('<p class="bit-sub">' + esc(nombreCaritas()) + ' · contiene nombres: no la proyectes ni la compartas</p>' + barra() + '<div class="bit-cuerpo">' + cuerpo + '</div>');
    document.querySelector('.accesos-rapidos').style.setProperty('display', 'grid', 'important');
  }

  // ---------- eventos ----------
  const valor = id => { const e = document.getElementById(id); return e ? e.value : ''; };

  async function accion(acc) {
    const partes = acc.split(':'); const a = partes[0]; const arg = partes.slice(1).join(':');
    if (a === 'salir') { if (typeof volverInicio === 'function') volverInicio(); return; }
    if (a === 'crear') {
      const p1 = valor('bit-pin1'), p2 = valor('bit-pin2'), pref = valor('bit-caritas');
      if (!/^\d{4,6}$/.test(p1)) { aviso = { tipo: 'mal', texto: 'El PIN debe tener de 4 a 6 números.' }; return pantallaCrear(); }
      if (p1 !== p2) { aviso = { tipo: 'mal', texto: 'Los dos PIN no coinciden.' }; return pantallaCrear(); }
      const sal = salAleatoria();
      try { localStorage.setItem(K_PIN, JSON.stringify({ sal, hash: await derivarPin(p1, sal) })); } catch (e) { aviso = { tipo: 'mal', texto: 'No se pudo guardar el PIN en este navegador.' }; return pantallaCrear(); }
      datos = { version: 1, caritas: pref, siguiente: 1, personas: [], avances: {} };
      guardarDatos(); desbloqueada = true; vista = 'resumen'; return pintar();
    }
    // --- CAMBIAR PIN ---
    if (a === 'cambiarpin') {
      const pinAct = document.getElementById('bit-pin-act').value;
      const pinNuevo1 = document.getElementById('bit-pin-nuevo1').value;
      const pinNuevo2 = document.getElementById('bit-pin-nuevo2').value;

      // 1. Verificar PIN actual
      const g = leerPin();
      if (!g) return;
      const hashAct = await derivarPin(pinAct, g.sal);
      if (hashAct !== g.hash) {
        alert('PIN actual incorrecto.');
        return;
      }

      // 2. Validar nuevo PIN
      if (!/^\d{4,6}$/.test(pinNuevo1)) {
        alert('El PIN debe tener de 4 a 6 números.');
        return;
      }
      if (pinNuevo1 !== pinNuevo2) {
        alert('Los dos PIN no coinciden.');
        return;
      }
      if (pinNuevo1 === pinAct) {
        alert('El PIN nuevo no puede ser igual al actual.');
        return;
      }

      // 3. Guardar nuevo PIN
      const nuevaSal = salAleatoria();
      const nuevoHash = await derivarPin(pinNuevo1, nuevaSal);
      try {
        localStorage.setItem(K_PIN, JSON.stringify({ sal: nuevaSal, hash: nuevoHash }));
        alert('PIN cambiado.');
        document.getElementById('bit-pin-act').value = '';
        document.getElementById('bit-pin-nuevo1').value = '';
        document.getElementById('bit-pin-nuevo2').value = '';
      } catch (e) {
        alert('No se pudo guardar el nuevo PIN.');
      }
      return;
    }
    if (a === 'entrar') {
      const pin = valor('bit-pin'); const g = leerPin();
      if (!g) { aviso = { tipo: 'mal', texto: 'No hay PIN guardado.' }; return pantallaPin(); }
      const h = await derivarPin(pin, g.sal);
      if (h !== g.hash) { aviso = { tipo: 'mal', texto: 'PIN incorrecto.' }; await new Promise(r => setTimeout(r, 800)); return pantallaPin(); }
      datos = leerDatos(); if (!datos) { aviso = { tipo: 'mal', texto: 'No se pudieron leer los datos. Restaura un respaldo.' }; return pantallaPin(); }
      document.querySelector('.accesos-rapidos').style.setProperty('display', 'grid', 'important');
      desbloqueada = true; vista = 'resumen'; return pintar();
    }
    if (a === 'olvide') {
      if (window.confirm('Sin el PIN no se puede abrir la bitácora. Si continúas se BORRA toda y empiezas de nuevo (puedes restaurar un respaldo después). ¿Borrar?')) {
        try { localStorage.removeItem(K_DATOS); localStorage.removeItem(K_PIN); } catch (e) { }
        datos = null; desbloqueada = false; return abrirBitacora();
      }
      return;
    }
    if (!desbloqueada || !datos) return;
    if (a === 'ir') { vista = arg; editando = null; borrador = null; return pintar(); }
    if (a === 'nombres') { verNombres = !verNombres; return pintar(); }
    if (a === 'cerrar') { desbloqueada = false; datos = null; ultimaTarjeta = null; editando = null; if (typeof volverInicio === 'function') volverInicio(); return; }
    if (a === 'nuevo') { editando = 'nuevo'; borrador = null; return pintar(); }
    if (a === 'nuevo-con') { editando = 'nuevo-con:' + arg; vista = 'personas'; return pintar(); }
    if (a === 'cancelar-form') { editando = null; borrador = null; return pintar(); }
    if (a === 'editar') { editando = arg; borrador = null; return pintar(); }
    if (a === 'registrar') {
      const esMenor = document.getElementById('bit-menor')?.checked;
      const tieneConsent = document.getElementById('bit-consent-menor')?.checked;
      if (esMenor && !tieneConsent) { aviso = { tipo: 'mal', texto: 'Para registrar a un menor, debe tener el consentimiento en papel.' }; return pintar(); }
      const r = registrar(datos, { nombre: valor('bit-nombre'), parroquia: valor('bit-parroquia'), consentimiento: !!(document.getElementById('bit-consent') || {}).checked, menor: esMenor });
      if (!r.ok) { borrador = { nombre: valor('bit-nombre'), parroquia: valor('bit-parroquia') }; aviso = { tipo: 'mal', texto: r.error }; return pintar(); }
      borrador = null; guardarDatos(); ultimaTarjeta = { codigo: r.codigo, nombre: datos.personas[datos.personas.length - 1].nombre }; editando = null;
      aviso = { tipo: 'ok', texto: 'Registrada. Entrega el código a la persona.' }; return pintar();
    }
    if (a === 'guardar-edicion') {
      const p = datos.personas.find(x => x.codigo === arg); if (!p) return;
      const nombre = limpiar(valor('bit-nombre'), 80); let par = limpiar(valor('bit-parroquia'), 80);
      if (!nombre || !par) { borrador = { nombre: valor('bit-nombre'), parroquia: valor('bit-parroquia') }; aviso = { tipo: 'mal', texto: 'El nombre y la parroquia no pueden quedar vacíos.' }; return pintar(); }
      const igual = datos.personas.find(x => x.codigo !== p.codigo && clave(x.parroquia) === clave(par)); if (igual) par = igual.parroquia;
      p.nombre = nombre; p.parroquia = par; guardarDatos(); editando = null; borrador = null; aviso = { tipo: 'ok', texto: 'Cambios guardados.' }; return pintar();
    }
    if (a === 'tarjeta') { const p = datos.personas.find(x => x.codigo === arg); if (p) ultimaTarjeta = { codigo: p.codigo, nombre: p.nombre }; return pintar(); }
    if (a === 'cerrar-tarjeta') { ultimaTarjeta = null; return pintar(); }
    if (a === 'imprimir') { document.body.classList.add('bit-imprime'); const q = () => { document.body.classList.remove('bit-imprime'); window.removeEventListener('afterprint', q); }; window.addEventListener('afterprint', q); window.print(); return; }
    if (a === 'confirmar') {
      const p = datos.personas.find(x => x.codigo === arg); if (!p) return;
      if (p.confirmadoBasico) { p.confirmadoBasico = null; }
      else { if (!window.confirm('¿Confirmas, por haberlo visto tú, que esta persona completó el nivel Básico?')) return; p.confirmadoBasico = C.hoy(); }
      guardarDatos(); return pintar();
    }
    if (a === 'baja') {
      const p = datos.personas.find(x => x.codigo === arg); if (!p) return;
      if (!window.confirm('Dar de baja a esta persona borra su nombre, su parroquia y su avance de esta bitácora. Esto no se puede deshacer. ¿Continuar?')) return;
      datos.personas = datos.personas.filter(x => x.codigo !== arg); delete datos.avances[arg];
      guardarDatos(); aviso = { tipo: 'ok', texto: 'Persona dada de baja.' }; return pintar();
    }
    if (a === 'procesar') {
      const res = procesarLineas(datos, valor('bit-lineas'), C.hoy());
      if (res.nuevos + res.actualizados > 0) guardarDatos();
      avisoProcesado = res; return pintar();
    }
    if (a === 'reporte-recalcular') return pintar();
    if (a === 'copiar-reporte') return copiar(textoReporteActual, ok => { aviso = { tipo: ok ? 'ok' : 'mal', texto: ok ? 'Copiado.' : 'No se pudo copiar: selecciónalo y cópialo a mano.' }; const m = document.querySelector('.bit-cuerpo'); if (m) m.insertAdjacentHTML('afterbegin', avisoHTML()); });
    if (a === 'txt-reporte') return descargar('reporte-GRD-' + datos.caritas + '-' + C.hoy() + '.txt', textoReporteActual);
    if (a === 'csv-reporte') return descargar('parroquias-GRD-' + datos.caritas + '-' + C.hoy() + '.csv', csvParroquias(datos), 'text/csv');
    if (a === 'respaldar') { descargar('bitacora-GRD-' + datos.caritas + '-' + C.hoy() + '.json', JSON.stringify(datos, null, 1), 'application/json'); aviso = { tipo: 'ok', texto: 'Respaldo descargado. Guárdalo en tu USB personal.' }; return pintar(); }
    if (a === 'borrar-todo') {
      if (!window.confirm('Se borrará TODA la bitácora de este equipo (personas, parroquias y avances). ¿Continuar?')) return;
      if (!window.confirm('Última confirmación: ¿ya guardaste un respaldo si lo necesitas?')) return;
      try { localStorage.removeItem(K_DATOS); localStorage.removeItem(K_PIN); } catch (e) { }
      datos = null; desbloqueada = false; ultimaTarjeta = null; return abrirBitacora();
    }
  }

  function alClick(ev) {
    const el = ev.target.closest('[data-acc]');
    if (!el || !document.getElementById('bit-raiz') && !el.closest('.btn-volver')) return;
    if (el.tagName === 'A') ev.preventDefault();
    if (el.tagName === 'INPUT' && el.type === 'checkbox') return;   // los casilleros usan 'change'
    accion(el.getAttribute('data-acc'));
  }
  function alCambiar(ev) {
    const el = ev.target;
    if (el.id === 'bit-agrupar') { pintar(); return; }

    if (el.id === 'bit-menor') {
      const labelMenor = document.getElementById('bit-consent-menor-label');
      if (labelMenor) labelMenor.style.display = el.checked ? 'flex' : 'none';
    }

    if (el.id === 'bit-archivo' && el.files && el.files[0]) {
      const lector = new FileReader();
      lector.onload = () => { const ta = document.getElementById('bit-lineas'); if (ta) ta.value = String(lector.result || '').slice(0, 200000); };
      lector.readAsText(el.files[0]); return;
    }
    if (el.id === 'bit-restaurar' && el.files && el.files[0]) {
      const lector = new FileReader();
      lector.onload = () => {
        let o = null; try { o = JSON.parse(String(lector.result || '')); } catch (e) { }
        const v = validarRespaldo(o);
        if (!v) { aviso = { tipo: 'mal', texto: 'El archivo no es un respaldo válido de esta bitácora.' }; return pintar(); }
        if (!window.confirm('Se reemplazará la bitácora actual por el respaldo (' + v.personas.length + ' personas). ¿Continuar?')) return;
        datos = v; guardarDatos(); aviso = { tipo: 'ok', texto: 'Respaldo restaurado: ' + v.personas.length + ' personas.' }; pintar();
      };
      lector.readAsText(el.files[0]);
    }
  }
  function alEscribir(ev) {
    if (ev.target.id === 'bit-buscar') {
      filtro = ev.target.value; const l = document.getElementById('bit-lista'); if (l) l.innerHTML = listaPersonas();
    }
  }
  document.addEventListener('click', alClick);
  document.addEventListener('change', alCambiar);
  document.addEventListener('input', alEscribir);

  // ---------- entrada ----------
  async function cargarCaritas() {
    if (caritasLista.length) return;
    try {
      const r = await fetch('./datos/diocesis.json'); const j = await r.json();
      caritasLista = (j.caritas_locales || []).map(c => ({ prefijo: String(c.codigo).replace(/^CU-/, ''), nombre: c.nombre }))
        .filter(c => C.PREFIJOS.indexOf(c.prefijo) >= 0);
    } catch (e) { /* se usa la lista mínima */ }
    if (!caritasLista.length) caritasLista = C.PREFIJOS.map(p => ({ prefijo: p, nombre: 'Cáritas ' + p }));
  }

  window.abrirBitacora = async function () {
    if (!hayCripto()) { marco('<p class="bit-msg bit-mal">Este navegador no permite crear el PIN en esta dirección. Abre la app desde <b>http://localhost:8000</b> (la USB) o desde la dirección https de la app.</p>'); return; }
    // Ocultar las tarjetas de categorías si están visibles
    const seccionBloques = document.querySelector('.bloques');
    if (seccionBloques) seccionBloques.style.display = 'none';
    await cargarCaritas();
    if (desbloqueada && datos) return pintar();
    if (!leerPin() || !leerDatos()) return pantallaCrear();
    return pantallaPin();
  };

  // Botón «Bitácora» en el menú: solo para el rol coordinador local / administrador
  function agregarBoton() {
    const caja = document.querySelector('.accesos-rapidos');
    if (!caja || caja.querySelector('.btn-bitacora')) return;
    let rol = 'analista'; try { rol = (typeof obtenerRolActual === 'function') ? obtenerRolActual() : 'analista'; } catch (e) { }
    if (rol !== 'consultor' && rol !== 'admin') return;
    const b = document.createElement('button');
    b.className = 'btn-acceso btn-bitacora';
    b.setAttribute('onclick', 'abrirBitacora()');
    b.innerHTML = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="M9 11h6M9 15h6"/></svg><span>Bitácora</span>';
    caja.appendChild(b);
  }
  agregarBoton();

  // Formación: el botón de la constancia ahora abre «Mi avance» dentro del curso
  window.abrirAvanceCurso = function () {
    const c = document.getElementById('resultados'); if (!c) return;
    c.innerHTML = '<button class="btn-volver" onclick="abrirFormacion()">← Volver a Formación</button>' +
      '<div style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.1);margin-top:15px;">' +
      '<iframe src="gestion-del-riesgo/index.html?avance=1" style="width:100%;height:80vh;border:0;display:block;" title="Mi avance en el curso"></iframe></div>';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  window.exportarConstancia = window.abrirAvanceCurso;
})();
// ===== MOSTRAR BOTÓN DE COORDINACIÓN SOLO EN LAPTOP =====
document.addEventListener('DOMContentLoaded', () => {
  // Detectamos si estamos en una computadora (localhost o 127.0.0.1)
  const esLaptop = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname === '';
  if (esLaptop) {
    const btn = document.getElementById('btn-coordinacion');
    if (btn) {
      btn.style.display = 'block';
    }
  }
});