// ============================================
// MÓDULO DE RIESGOS - GdR Cáritas Cuba
// ============================================

const DB_NAME = 'GdR_Caritas_Cuba';
const DB_VERSION = 1;
const STORE_RIESGOS = 'riesgos';

let dbRiesgos = null;
let caritasLocales = [];
// ===== 0. CARGAR CÁRITAS LOCALES =====
async function cargarCaritasLocales() {
  try {
    const respuesta = await fetch('./datos/diocesis.json');
    const datos = await respuesta.json();
    caritasLocales = datos.caritas_locales;
    console.log('✅ Cáritas locales cargadas:', caritasLocales.length);
  } catch (error) {
    console.error('❌ Error al cargar Cáritas locales:', error);
    caritasLocales = [];
  }
}

// ===== 0.1 GENERAR OPCIONES DE CÁRITAS LOCALES =====
function generarOpcionesCaritas() {
  return caritasLocales.map(c =>
    `<option value="${c.nombre}">${c.nombre}</option>`
  ).join('');
}


// ===== 1. INICIALIZAR BASE DE DATOS =====
function abrirBaseDatos() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_RIESGOS)) {
        const store = db.createObjectStore(STORE_RIESGOS, { keyPath: 'id' });
        store.createIndex('fecha', 'fecha_identificacion', { unique: false });
        store.createIndex('categoria', 'categoria', { unique: false });
        store.createIndex('nivel', 'nivel_riesgo', { unique: false });
        console.log('✅ Object store "riesgos" creado');
      }
    };

    request.onsuccess = (event) => {
      dbRiesgos = event.target.result;
      console.log('✅ Base de datos abierta');
      resolve(dbRiesgos);
    };

    request.onerror = (event) => {
      console.error('❌ Error al abrir DB:', event.target.error);
      reject(event.target.error);
    };
  });
}

// ===== 2. GUARDAR RIESGO =====
function guardarRiesgo(riesgo) {
  return new Promise((resolve, reject) => {
    const transaccion = dbRiesgos.transaction([STORE_RIESGOS], 'readwrite');
    const store = transaccion.objectStore(STORE_RIESGOS);
    const request = store.put(riesgo);

    request.onsuccess = () => {
      console.log('✅ Riesgo guardado:', riesgo.id);
      resolve(riesgo);
    };

    request.onerror = (event) => {
      console.error('❌ Error al guardar:', event.target.error);
      reject(event.target.error);
    };
  });
}

// ===== 3. OBTENER TODOS LOS RIESGOS =====
function obtenerRiesgos() {
  return new Promise((resolve, reject) => {
    const transaccion = dbRiesgos.transaction([STORE_RIESGOS], 'readonly');
    const store = transaccion.objectStore(STORE_RIESGOS);
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

// ===== 4. ELIMINAR RIESGO =====
function eliminarRiesgo(id) {
  return new Promise((resolve, reject) => {
    const transaccion = dbRiesgos.transaction([STORE_RIESGOS], 'readwrite');
    const store = transaccion.objectStore(STORE_RIESGOS);
    const request = store.delete(id);

    request.onsuccess = () => {
      console.log('✅ Riesgo eliminado:', id);
      resolve();
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

// ===== 5. CALCULAR NIVEL DE RIESGO =====
function calcularNivel(probabilidad, impacto) {
  const nivel = probabilidad * impacto;
  let clasificacion = 'Bajo';
  let color = 'verde';

  if (nivel >= 16) {
    clasificacion = 'Crítico';
    color = 'rojo';
  } else if (nivel >= 10) {
    clasificacion = 'Alto';
    color = 'naranja';
  } else if (nivel >= 5) {
    clasificacion = 'Medio';
    color = 'amarillo';
  }

  return { nivel, clasificacion, color };
}

// ===== 6. GENERAR ID ÚNICO =====
function generarID() {
  return 'R-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

// ===== 7. FORMATEAR FECHA =====
function fechaHoy() {
  const hoy = new Date();
  const yyyy = hoy.getFullYear();
  const mm = String(hoy.getMonth() + 1).padStart(2, '0');
  const dd = String(hoy.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

// ===== 8. MOSTRAR FORMULARIO =====
async function mostrarFormularioRiesgo(idRiesgo = null) {
  const contenedor = document.getElementById('resultados');
  // Si es edición, cargar los datos del riesgo
  let riesgoEditando = null;
  if (idRiesgo) {
    const riesgos = await obtenerRiesgos();
    riesgoEditando = riesgos.find(r => r.id === idRiesgo);
    if (!riesgoEditando) {
      alert('No se encontró el riesgo a editar.');
      return;
    }
  }
  contenedor.innerHTML = `
    <button class="btn-volver" onclick="volverInicio()">← Volver</button>
    
    <div class="formulario-riesgo">
      <h2>${idRiesgo ? '✏️ Editar riesgo' : '📝 Registrar nuevo riesgo'}</h2>
      
      <form id="form-riesgo" onsubmit="manejarSubmitRiesgo(event)">
        
        <div class="campo">
          <label for="titulo">Título del riesgo *</label>
          <input type="text" id="titulo" required placeholder="Ej: Inundación en comunidad X" value="${riesgoEditando ? riesgoEditando.titulo : ''}">
        </div>
        
        <div class="campo">
          <label for="descripcion">Descripción *</label>
          <textarea id="descripcion" required placeholder="Describe el riesgo con detalle..."></textarea>
        </div>
        
        <div class="campo-doble">
          <div class="campo">
            <label for="categoria">Categoría *</label>
            <select id="categoria" required>
              <option value="">Selecciona...</option>
              <option value="Operativo">Operativo</option>
              <option value="Financiero">Financiero</option>
              <option value="Humanitario">Humanitario</option>
              <option value="Seguridad">Seguridad</option>
              <option value="Reputacional">Reputacional</option>
              <option value="Climático">Climático (Laudato si')</option>
            </select>
          </div>
          
          <div class="campo">
            <label for="fecha">Fecha de identificación *</label>
            <input type="date" id="fecha" value="${fechaHoy()}" required>
          </div>
                  
        <div class="campo">
          <label for="caritas_local">Cáritas Local *</label>
          <select id="caritas_local" required>
            <option value="">Selecciona la Cáritas Local...</option>
            ${generarOpcionesCaritas()}
          </select>
        </div>
                
        <div class="campo">
          <label for="amenaza">Amenaza *</label>
          <textarea id="amenaza" required placeholder="¿Qué evento podría causar daño?"></textarea>
        </div>
        
        <div class="campo">
          <label for="vulnerabilidad">Vulnerabilidad *</label>
          <textarea id="vulnerabilidad" required placeholder="¿Qué condiciones aumentan el riesgo?"></textarea>
        </div>
        
        <div class="campo">
          <label for="capacidad">Capacidad *</label>
          <textarea id="capacidad" required placeholder="¿Qué recursos tenemos para enfrentarlo?"></textarea>
        </div>
        
        <div class="campo-doble">
          <div class="campo">
            <label for="probabilidad">Probabilidad (1-5) *</label>
            <select id="probabilidad" required onchange="actualizarNivelPreview()">
              <option value="">Selecciona...</option>
              <option value="1">1 - Muy baja (raro)</option>
              <option value="2">2 - Baja (poco probable)</option>
              <option value="3">3 - Media (posible)</option>
              <option value="4">4 - Alta (probable)</option>
              <option value="5">5 - Muy alta (casi seguro)</option>
            </select>
          </div>
          
          <div class="campo">
            <label for="impacto">Impacto (1-5) *</label>
            <select id="impacto" required onchange="actualizarNivelPreview()">
              <option value="">Selecciona...</option>
              <option value="1">1 - Insignificante</option>
              <option value="2">2 - Menor</option>
              <option value="3">3 - Moderado</option>
              <option value="4">4 - Mayor</option>
              <option value="5">5 - Catastrófico</option>
            </select>
          </div>
        </div>
        
        <div class="nivel-preview" id="nivel-preview">
          Nivel de riesgo: <strong>—</strong>
        </div>
        
        <div class="campo-doble">
          <div class="campo">
            <label for="zona">Zona geográfica</label>
            <input type="text" id="zona" placeholder="Ej: La Habana, Baracoa...">
          </div>
          
          <div class="campo">
            <label for="poblacion">Población afectada</label>
            <input type="number" id="poblacion" placeholder="Número de personas">
          </div>
        </div>
        
        <div class="campo-doble">
          <div class="campo">
            <label for="responsable">Responsable *</label>
            <input type="text" id="responsable" required placeholder="Nombre del responsable">
          </div>
          
          <div class="campo">
            <label for="tratamiento">Tratamiento *</label>
            <select id="tratamiento" required>
              <option value="">Selecciona...</option>
              <option value="Evitar">Evitar</option>
              <option value="Mitigar">Mitigar</option>
              <option value="Transferir">Transferir</option>
              <option value="Aceptar">Aceptar</option>
            </select>
          </div>
        </div>
        
        <div class="campo">
          <label for="notas">Notas adicionales</label>
          <textarea id="notas" placeholder="Observaciones libres..."></textarea>
        </div>
        
        <div class="acciones-form">
          <button type="button" class="btn-cancelar" onclick="volverInicio()">Cancelar</button>
          <button type="submit" class="btn-guardar">💾 Guardar riesgo</button>
        </div>
        
      </form>
    </div>
  `;
  // Si es edición, rellenar los campos con los datos existentes
  if (riesgoEditando) {
    document.getElementById('form-riesgo').dataset.idRiesgo = riesgoEditando.id;
    document.getElementById('titulo').value = riesgoEditando.titulo || '';
    document.getElementById('descripcion').value = riesgoEditando.descripcion || '';
    document.getElementById('categoria').value = riesgoEditando.categoria || '';
    document.getElementById('fecha').value = riesgoEditando.fecha_identificacion || fechaHoy();
    document.getElementById('caritas_local').value = riesgoEditando.caritas_local || '';
    document.getElementById('amenaza').value = riesgoEditando.amenaza || '';
    document.getElementById('vulnerabilidad').value = riesgoEditando.vulnerabilidad || '';
    document.getElementById('capacidad').value = riesgoEditando.capacidad || '';
    document.getElementById('probabilidad').value = riesgoEditando.probabilidad || '';
    document.getElementById('impacto').value = riesgoEditando.impacto || '';
    document.getElementById('zona').value = riesgoEditando.zona_geografica || '';
    document.getElementById('poblacion').value = riesgoEditando.poblacion_afectada || '';
    document.getElementById('responsable').value = riesgoEditando.responsable || '';
    document.getElementById('tratamiento').value = riesgoEditando.tratamiento || '';
    document.getElementById('notas').value = riesgoEditando.notas || '';

    // Actualizar vista previa del nivel
    actualizarNivelPreview();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 9. VISTA PREVIA DEL NIVEL =====
function actualizarNivelPreview() {
  const prob = parseInt(document.getElementById('probabilidad').value) || 0;
  const imp = parseInt(document.getElementById('impacto').value) || 0;
  const preview = document.getElementById('nivel-preview');

  if (prob && imp) {
    const { nivel, clasificacion, color } = calcularNivel(prob, imp);
    preview.innerHTML = `
      Nivel de riesgo: <strong class="nivel-${color}">${nivel} — ${clasificacion}</strong>
    `;
  } else {
    preview.innerHTML = 'Nivel de riesgo: <strong>—</strong>';
  }
}

// ===== 10. MANEJAR SUBMIT =====
async function manejarSubmitRiesgo(event) {
  event.preventDefault();
  const esEdicion = document.getElementById('form-riesgo').dataset.idRiesgo;
  const probabilidad = parseInt(document.getElementById('probabilidad').value);
  const impacto = parseInt(document.getElementById('impacto').value);
  const { nivel, clasificacion } = calcularNivel(probabilidad, impacto);

  const riesgo = {
    id: esEdicion || generarID(),
    fecha_identificacion: document.getElementById('fecha').value,
    fecha_actualizacion: fechaHoy(),
    titulo: document.getElementById('titulo').value,
    descripcion: document.getElementById('descripcion').value,
    categoria: document.getElementById('categoria').value,
    caritas_local: document.getElementById('caritas_local').value,
    caritas_codigo: caritasLocales.find(c => c.nombre === document.getElementById('caritas_local').value)?.codigo || 'CU-UNK',
    amenaza: document.getElementById('amenaza').value,
    vulnerabilidad: document.getElementById('vulnerabilidad').value,
    capacidad: document.getElementById('capacidad').value,
    probabilidad: probabilidad,
    impacto: impacto,
    nivel_riesgo: nivel,
    clasificacion: clasificacion,
    zona_geografica: document.getElementById('zona').value,
    poblacion_afectada: parseInt(document.getElementById('poblacion').value) || 0,
    responsable: document.getElementById('responsable').value,
    tratamiento: document.getElementById('tratamiento').value,
    estado: 'Abierto',
    notas: document.getElementById('notas').value
  };

  try {
    await guardarRiesgo(riesgo);
    alert('✅ Riesgo guardado correctamente');
    mostrarListaRiesgos();
  } catch (error) {
    alert('❌ Error al guardar: ' + error.message);
  }
}

// ===== 11. MOSTRAR LISTA DE RIESGOS =====
async function mostrarListaRiesgos(filtroCaritas = '') {
  const contenedor = document.getElementById('resultados');

  try {
    let riesgos = await obtenerRiesgos();

    // Aplicar filtro por Cáritas Local
    if (filtroCaritas) {
      riesgos = riesgos.filter(r => r.caritas_local === filtroCaritas);
    }

    // SI NO HAY RIESGOS (Muestra mensaje contextual y mantiene el filtro)
    if (riesgos.length === 0) {
      const mensaje = filtroCaritas
        ? `📋 No hay riesgos registrados en <strong>${filtroCaritas}</strong>.`
        : '📋 No hay riesgos registrados todavía.';

      contenedor.innerHTML = `
        <button class="btn-volver" onclick="volverInicio()">← Volver</button>
        <div class="lista-riesgos">
                  <div class="cabecera-lista">
          <h2>📋 Riesgos registrados (${riesgos.length})</h2>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
            <button class="btn-guardar" onclick="mostrarFormularioRiesgo()">➕ Nuevo riesgo</button>
            <button class="btn-guardar" onclick="exportarJSON()" style="background: #16a34a;">📤 Exportar JSON</button>
            <button class="btn-guardar" onclick="exportarCSV()" style="background: #ea580c;">📊 Exportar CSV</button>
            <label class="btn-guardar" style="background: #0284c7; cursor: pointer; margin: 0; display: inline-block; text-align: center;">
              📥 Importar JSON
              <input type="file" id="input-importar" accept=".json" onchange="importarJSON(event)" style="display: none;">
            </label>
          </div>
        </div>
          
          <div class="filtro-caritas">
            <label for="filtro-caritas-lista">🔍 Filtrar por Cáritas Local:</label>
            <select id="filtro-caritas-lista" onchange="mostrarListaRiesgos(this.value)">
              <option value="">Todas las Cáritas Locales</option>
              ${generarOpcionesCaritas()}
            </select>
          </div>
          
          <div class="sin-riesgos">
            <p>${mensaje}</p>
            ${filtroCaritas
          ? '<button class="btn-guardar" onclick="mostrarFormularioRiesgo()">➕ Registrar riesgo en ' + filtroCaritas + '</button>'
          : '<button class="btn-guardar" onclick="mostrarFormularioRiesgo()">➕ Registrar primer riesgo</button>'
        }
          </div>
        </div>
      `;

      // Marcar el filtro seleccionado
      if (filtroCaritas) {
        const select = document.getElementById('filtro-caritas-lista');
        if (select) {
          for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value === filtroCaritas) {
              select.selectedIndex = i;
              break;
            }
          }
        }
      }
      return; // Sale de la función si está vacía
    }

    // SI HAY RIESGOS (Ordena y muestra la lista normal)
    riesgos.sort((a, b) => b.fecha_identificacion.localeCompare(a.fecha_identificacion));

    let html = `
      <button class="btn-volver" onclick="volverInicio()">← Volver</button>
      <div class="lista-riesgos">
              <div class="cabecera-lista">
          <h2>📋 Riesgos registrados (${riesgos.length})</h2>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
            <button class="btn-guardar" onclick="mostrarFormularioRiesgo()">➕ Nuevo riesgo</button>
            <button class="btn-guardar" onclick="exportarJSON()" style="background: #16a34a;">📤 Exportar JSON</button>
            <button class="btn-guardar" onclick="exportarCSV()" style="background: #ea580c;">📊 Exportar CSV</button>
            <label class="btn-guardar" style="background: #0284c7; cursor: pointer; margin: 0; display: inline-block; text-align: center;">
              📥 Importar JSON
              <input type="file" id="input-importar" accept=".json" onchange="importarJSON(event)" style="display: none;">
            </label>
          </div>
        </div>
        
        <div class="filtro-caritas">
          <label for="filtro-caritas-lista">🔍 Filtrar por Cáritas Local:</label>
          <select id="filtro-caritas-lista" onchange="mostrarListaRiesgos(this.value)">
            <option value="">Todas las Cáritas Locales</option>
            ${generarOpcionesCaritas()}
          </select>
        </div>
    `;

    riesgos.forEach(r => {
      const colorNivel = r.nivel_riesgo >= 16 ? 'rojo' :
        r.nivel_riesgo >= 10 ? 'naranja' :
          r.nivel_riesgo >= 5 ? 'amarillo' : 'verde';

      html += `
        <div class="tarjeta-riesgo nivel-borde-${colorNivel}">
          <div class="tarjeta-header">
            <h3>${r.titulo}</h3>
            <span class="badge-${colorNivel}">${r.clasificacion} (${r.nivel_riesgo})</span>
          </div>
          <p class="meta">
           ⛪ ${r.caritas_local || '—'} ${r.caritas_codigo ? '(' + r.caritas_codigo + ')' : ''} · 📅 ${r.fecha_identificacion} · 📂 ${r.categoria} · 👤 ${r.responsable}
          </p>
          <p class="descripcion-corta">${r.descripcion.substring(0, 150)}...</p>
          <div class="tarjeta-acciones">
            <button class="btn-mini btn-ver" onclick="verDetalleRiesgo('${r.id}')">👁 Ver</button>
            <button class="btn-mini btn-editar" onclick="editarRiesgo('${r.id}')">✏️ Editar</button>
            <button class="btn-mini btn-eliminar" onclick="confirmarEliminar('${r.id}')">🗑 Eliminar</button>
          </div>
      `;
    });

    html += '</div>';
    contenedor.innerHTML = html;

    // Marcar el filtro seleccionado (para la lista normal)
    if (filtroCaritas) {
      const select = document.getElementById('filtro-caritas-lista');
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].value === filtroCaritas) {
            select.selectedIndex = i;
            break;
          }
        }
      }
    }
  } catch (error) {
    contenedor.innerHTML = `<p>Error al cargar riesgos: ${error.message}</p>`;
  }
}

// ===== 12. VER DETALLE =====
async function verDetalleRiesgo(id) {
  const riesgos = await obtenerRiesgos();
  const r = riesgos.find(x => x.id === id);
  if (!r) return;

  const contenedor = document.getElementById('resultados');
  const colorNivel = r.nivel_riesgo >= 16 ? 'rojo' :
    r.nivel_riesgo >= 10 ? 'naranja' :
      r.nivel_riesgo >= 5 ? 'amarillo' : 'verde';

  contenedor.innerHTML = `
    <button class="btn-volver" onclick="mostrarListaRiesgos()">← Volver a la lista</button>
    <div class="detalle-riesgo">
      <h2>${r.titulo}</h2>
      <span class="badge-${colorNivel}">${r.clasificacion} (${r.nivel_riesgo})</span>
      
      <h3>Descripción</h3>
      <p>${r.descripcion}</p>
      
      <h3>Categoría</h3>
      <p>${r.categoria}</p>
      
      <h3>Amenaza</h3>
      <p>${r.amenaza}</p>
      
      <h3>Vulnerabilidad</h3>
      <p>${r.vulnerabilidad}</p>
      
      <h3>Capacidad</h3>
      <p>${r.capacidad}</p>
      
      <h3>Evaluación</h3>
      <p>Probabilidad: ${r.probabilidad} · Impacto: ${r.impacto} · Nivel: ${r.nivel_riesgo}</p>
      
      <h3>Ubicación</h3>
      <p>${r.zona_geografica || '—'} · Población afectada: ${r.poblacion_afectada || '—'}</p>
      
      <h3>Responsable</h3>
      <p>${r.responsable}</p>
      
      <h3>Tratamiento</h3>
      <p>${r.tratamiento} · Estado: ${r.estado}</p>
      
      ${r.notas ? `<h3>Notas</h3><p>${r.notas}</p>` : ''}
    </div>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 13. CONFIRMAR ELIMINAR =====
async function confirmarEliminar(id) {
  if (confirm('¿Estás seguro de eliminar este riesgo? Esta acción no se puede deshacer.')) {
    await eliminarRiesgo(id);
    mostrarListaRiesgos();
  }
}

// ===== 14. EXPORTAR A CSV =====
async function exportarCSV() {
  const riesgos = await obtenerRiesgos();
  if (riesgos.length === 0) {
    alert('No hay riesgos para exportar');
    return;
  }

  const encabezados = [
    'ID', 'Fecha', 'Título', 'Categoría', 'Probabilidad', 'Impacto',
    'Nivel', 'Clasificación', 'Responsable', 'Tratamiento', 'Estado', 'Zona'
  ];

  const filas = riesgos.map(r => [
    r.id, r.fecha_identificacion, r.titulo, r.categoria,
    r.probabilidad, r.impacto, r.nivel_riesgo, r.clasificacion,
    r.responsable, r.tratamiento, r.estado, r.zona_geografica || ''
  ]);

  const csv = [encabezados, ...filas]
    .map(fila => fila.map(c => `"${c}"`).join(','))
    .join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const sufijo = riesgos.length > 0 ? `-${riesgos[0].caritas_codigo || 'Cuba'}` : '';
  a.download = `riesgos-${fechaHoy()}${sufijo}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// ===== 15. EXPORTAR A JSON =====
async function exportarJSON() {
  const riesgos = await obtenerRiesgos();
  if (riesgos.length === 0) {
    alert('No hay riesgos para exportar');
    return;
  }

  const json = JSON.stringify(riesgos, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `riesgos-${fechaHoy()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// ===== 17. ABRIR GUÍA DE USO =====
async function abrirGuia() {
  const contenedor = document.getElementById('resultados');

  try {
    const respuesta = await fetch('./datos/guia-uso.md');
    const texto = await respuesta.text();

    // Convertir Markdown a HTML básico
    const html = convertirMarkdownAHTML(texto);

    contenedor.innerHTML = `
      <button class="btn-volver" onclick="volverInicio()">← Volver</button>
      <div class="guia-contenido">
        ${html}
      </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (error) {
    contenedor.innerHTML = `
      <button class="btn-volver" onclick="volverInicio()">← Volver</button>
      <p>Error al cargar la guía: ${error.message}</p>
    `;
  }
}

// ===== 18. CONVERTIR MARKDOWN A HTML =====
function convertirMarkdownAHTML(md) {
  let html = md;

  // Encabezados
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Negrita
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Cursiva
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Código en línea
  html = html.replace(/`(.*?)`/g, '<code>$1</code>');

  // Enlaces
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');

  // Listas
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

  // Saltos de línea
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');

  // Párrafos
  html = '<p>' + html + '</p>';

  // Limpiar
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>(<h[1-6]>)/g, '$1');
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul>)/g, '$1');
  html = html.replace(/(<\/ul>)<\/p>/g, '$1');

  return html;
}
// ===== 23. ABRIR PRIVACIDAD =====
async function abrirPrivacidad() {
  const contenedor = document.getElementById('resultados');

  try {
    const respuesta = await fetch('./datos/privacidad.md');
    const texto = await respuesta.text();
    const html = convertirMarkdownAHTML(texto);

    contenedor.innerHTML = `
      <button class="btn-volver" onclick="volverInicio()">← Volver</button>
      <div class="guia-contenido">
        ${html}
      </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (error) {
    contenedor.innerHTML = `
      <button class="btn-volver" onclick="volverInicio()">← Volver</button>
      <p>Error al cargar la política: ${error.message}</p>
    `;
  }
}
// ===== 20. IMPORTAR JSON (CON FUSIÓN SEGURA) =====
async function importarJSON(event) {
  const archivo = event.target.files[0];
  if (!archivo) return;

  try {
    const texto = await archivo.text();
    const datos = JSON.parse(texto);

    // Aceptar tanto si es un objeto con "riesgos" como si es una lista directa
    let listaRiesgos = [];
    if (datos.riesgos && Array.isArray(datos.riesgos)) {
      listaRiesgos = datos.riesgos;
    } else if (Array.isArray(datos)) {
      listaRiesgos = datos;
    } else {
      alert('❌ El archivo no tiene el formato correcto de Cáritas.');
      return;
    }

    const riesgosActuales = await obtenerRiesgos();
    const mapaActuales = new Map(riesgosActuales.map(r => [r.id, r]));

    let nuevos = 0;
    let actualizados = 0;
    let conflictos = 0;

    const modo = confirm(`¿Deseas actualizar los riesgos existentes con el mismo ID?\n\n- Aceptar: Actualizar (sobreescribe)\n- Cancelar: Conservar los actuales (no sobreescribe)`);

    const sobreescribir = modo;

    for (const riesgo of listaRiesgos) {
      const existente = mapaActuales.get(riesgo.id);

      if (existente) {
        if (sobreescribir) {
          await guardarRiesgo(riesgo);
          actualizados++;
        } else {
          conflictos++;
        }
      } else {
        await guardarRiesgo(riesgo);
        nuevos++;
      }
    }

    alert(`✅ Importación completada:\n\n- Nuevos riesgos: ${nuevos}\n- Actualizados: ${actualizados}\n- Conservados (sin cambios): ${conflictos}`);

    mostrarListaRiesgos();
    event.target.value = '';

  } catch (error) {
    console.error('Error al importar:', error);
    alert('❌ Error al leer el archivo.');
  }
}
// ===== 25. ABRIR ASISTENTE IA =====
function abrirAsistenteIA() {
  const contenedor = document.getElementById('resultados');

  contenedor.innerHTML = `
    <button class="btn-volver" onclick="volverInicio()">← Volver</button>
    <div class="chat-contenedor">
      <h2>🤖 Asistente IA</h2>
      <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">
        Pregúntame sobre Gestión de Riesgo de Desastres.
      </p>
      
      <div id="chat-mensajes" class="chat-mensajes">
        <div class="mensaje bot">
          ¡Hola! Soy tu asistente de GRD. ¿En qué puedo ayudarte hoy?
        </div>
      </div>
      
      <div class="chat-input-area">
        <input type="text" id="chat-input" placeholder="Escribe tu pregunta..." onkeypress="if(event.key==='Enter') enviarMensajeIA()">
        <button onclick="enviarMensajeIA()">Enviar</button>
      </div>
    </div>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 26. ENVIAR MENSAJE A LA IA =====
async function enviarMensajeIA() {
  const input = document.getElementById('chat-input');
  const texto = input.value.trim();
  if (!texto) return;

  // Mostrar mensaje del usuario
  agregarMensajeChat(texto, 'usuario');
  input.value = '';

  // Mostrar "escribiendo..."
  const idEscribiendo = agregarMensajeChat('Escribiendo...', 'bot escribiendo');

  // Detectar si hay internet
  if (navigator.onLine) {
    try {
      // Llamar a DeepSeek
      const respuesta = await fetch(CONFIG_IA.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CONFIG_IA.apiKey}`
        },
        body: JSON.stringify({
          model: CONFIG_IA.modelo,
          messages: [
            { role: 'system', content: 'Eres un experto en Gestión de Riesgo de Desastres para Cáritas Cuba. Responde de forma clara, breve y práctica. Usa el marco de Cáritas Internationalis y Laudato si\'.' },
            { role: 'user', content: texto }
          ]
        })
      });

      // Verificar si la respuesta es correcta
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }

      const datos = await respuesta.json();
      const respuestaIA = datos.choices[0].message.content;

      document.getElementById(idEscribiendo).remove();
      agregarMensajeChat(respuestaIA, 'bot');

    } catch (error) {
      document.getElementById(idEscribiendo).remove();
      console.error('Error de conexión con DeepSeek:', error);

      // Si el error es por falta de saldo (402)
      if (error.message.includes('402')) {
        agregarMensajeChat('⚠️ La cuenta de IA no tiene saldo disponible en este momento.\n\n💡 *Usando el motor de reglas offline para responder.*', 'bot');
      } else {
        agregarMensajeChat('⚠️ No se pudo conectar con la IA (posiblemente sin internet).\n\n💡 *Usando el motor de reglas offline.*', 'bot');
      }

      // Usar el motor de reglas como respaldo
      buscarEnMotorReglas(texto, idEscribiendo);
    }
  } else {
    // Sin internet: usar motor de reglas
    document.getElementById(idEscribiendo).remove();
    buscarEnMotorReglas(texto, idEscribiendo);
  }
}
// ===== 27. BUSCAR EN EL MOTOR DE REGLAS (OFFLINE) =====
async function buscarEnMotorReglas(texto, idEscribiendo) {
  // Buscar en las 40 preguntas
  if (typeof todasLasPreguntas !== 'undefined' && todasLasPreguntas.length > 0) {
    const textoLower = texto.toLowerCase();
    const resultados = todasLasPreguntas.filter(p =>
      p.pregunta.toLowerCase().includes(textoLower) ||
      p.respuesta_corta.toLowerCase().includes(textoLower) ||
      p.palabras_clave.some(k => k.includes(textoLower))
    );

    if (resultados.length > 0) {
      const mejor = resultados[0];
      agregarMensajeChat(`💡 **${mejor.pregunta}**\n\n${mejor.respuesta_corta}\n\n${mejor.respuesta_larga}`, 'bot');
    } else {
      agregarMensajeChat('No encontré una respuesta exacta en el motor de reglas. Te recomiendo consultar la pestaña "📚 Consultas" o buscar en la biblioteca.', 'bot');
    }
  } else {
    agregarMensajeChat('El motor de reglas no está disponible en este momento.', 'bot');
  }
}

// ===== 28. AGREGAR MENSAJE AL CHAT =====
function agregarMensajeChat(texto, tipo) {
  const contenedor = document.getElementById('chat-mensajes');
  const id = 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);

  const div = document.createElement('div');
  div.id = id;
  div.className = `mensaje ${tipo}`;
  div.innerHTML = texto.replace(/\n/g, '<br>');
  contenedor.appendChild(div);
  contenedor.scrollTop = contenedor.scrollHeight;

  return id;
}
// ===== 29. ABRIR BIBLIOTECA =====
async function abrirBiblioteca() {
  const contenedor = document.getElementById('resultados');

  try {
    const respuesta = await fetch('./datos/biblioteca.json');
    const datos = await respuesta.json();

    let html = `
      <button class="btn-volver" onclick="volverInicio()">← Volver</button>
      <div class="biblioteca-contenedor">
        <h2>📚 Biblioteca Offline</h2>
        
        <div class="buscador-biblioteca">
          <input type="text" id="buscar-biblioteca" placeholder="Buscar documento..." oninput="filtrarBiblioteca()">
        </div>
        
        <div id="lista-documentos" class="lista-documentos">
    `;

    datos.documentos.forEach(doc => {
      html += `
        <div class="tarjeta-documento" data-titulo="${doc.titulo.toLowerCase()}">
          <h3>${doc.titulo}</h3>
          <p class="categoria-doc">${doc.categoria}</p>
          <p class="descripcion-doc">${doc.descripcion}</p>
          <button class="btn-abrir-doc" onclick="abrirDocumento('${doc.archivo}')">📖 Leer documento</button>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    contenedor.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (error) {
    contenedor.innerHTML = `<p>Error al cargar la biblioteca: ${error.message}</p>`;
  }
}

// ===== 30. ABRIR UN DOCUMENTO =====
async function abrirDocumento(archivo) {
  const contenedor = document.getElementById('resultados');

  try {
    const respuesta = await fetch('./datos/' + archivo);
    const texto = await respuesta.text();
    const html = convertirMarkdownAHTML(texto);

    contenedor.innerHTML = `
      <button class="btn-volver" onclick="abrirBiblioteca()">← Volver a la Biblioteca</button>
      <div class="guia-contenido">
        ${html}
      </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (error) {
    contenedor.innerHTML = `<p>Error al abrir el documento: ${error.message}</p>`;
  }
}

// ===== 31. FILTRAR BIBLIOTECA =====
function filtrarBiblioteca() {
  const filtro = document.getElementById('buscar-biblioteca').value.toLowerCase();
  const tarjetas = document.querySelectorAll('.tarjeta-documento');

  tarjetas.forEach(tarjeta => {
    const titulo = tarjeta.getAttribute('data-titulo');
    if (titulo.includes(filtro)) {
      tarjeta.style.display = 'block';
    } else {
      tarjeta.style.display = 'none';
    }
  });
}
// ===== 32. ABRIR FORMACIÓN =====
async function abrirFormacion() {
  const contenedor = document.getElementById('resultados');

  try {
    const respuesta = await fetch('./datos/formacion.json');
    const datos = await respuesta.json();

    let html = `
      <button class="btn-volver" onclick="volverInicio()">← Volver</button>
      <div class="formacion-contenedor">
        <h2>🎓 Formación en GRD</h2>
        <p>Completa los cursos para fortalecer tus conocimientos.</p>
        <div class="lista-cursos">
    `;

    datos.cursos.forEach(curso => {
      html += `
        <div class="tarjeta-curso">
          <h3>${curso.titulo}</h3>
          <span class="nivel-curso">${curso.nivel}</span>
          <p>${curso.descripcion}</p>
          <p class="duracion">⏱️ ${curso.duracion_min} min</p>
          <button class="btn-comenzar" onclick="abrirCurso('${curso.id}')">Comenzar curso</button>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
    contenedor.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (error) {
    contenedor.innerHTML = `<p>Error al cargar la formación: ${error.message}</p>`;
  }
}

// ===== 33. ABRIR UN CURSO =====
async function abrirCurso(idCurso) {
  const contenedor = document.getElementById('resultados');
  const respuesta = await fetch('./datos/formacion.json');
  const datos = await respuesta.json();
  const curso = datos.cursos.find(c => c.id === idCurso);

  if (!curso) return;

  let html = `
    <button class="btn-volver" onclick="abrirFormacion()">← Volver a Formación</button>
    <div class="curso-contenido">
      <h2>${curso.titulo}</h2>
      <p class="nivel-curso">Nivel: ${curso.nivel}</p>
  `;

  // Mostrar lecciones
  curso.lecciones.forEach(lec => {
    html += `
      <div class="leccion">
        <h3>📖 ${lec.titulo}</h3>
        <p>${lec.contenido}</p>
      </div>
    `;
  });

  // Mostrar quiz
  html += `<h3>📝 Evaluación</h3><form id="form-quiz">`;
  curso.quiz.forEach((q, index) => {
    html += `
      <div class="pregunta-quiz">
        <p><strong>${index + 1}. ${q.pregunta}</strong></p>
    `;
    q.opciones.forEach((opcion, i) => {
      html += `
        <label>
          <input type="radio" name="q${index}" value="${i}" required>
          ${opcion}
        </label><br>
      `;
    });
    html += `</div>`;
  });

  html += `
      <button type="button" class="btn-guardar" onclick="evaluarQuiz('${curso.id}')">Enviar respuestas</button>
    </form>
    <div id="resultado-quiz"></div>
  </div>
  `;

  contenedor.innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 34. EVALUAR QUIZ =====
async function evaluarQuiz(idCurso) {
  const respuesta = await fetch('./datos/formacion.json');
  const datos = await respuesta.json();
  const curso = datos.cursos.find(c => c.id === idCurso);

  let correctas = 0;
  const form = document.getElementById('form-quiz');

  curso.quiz.forEach((q, index) => {
    const seleccion = form.querySelector(`input[name="q${index}"]:checked`);
    if (seleccion && parseInt(seleccion.value) === q.respuesta_correcta) {
      correctas++;
    }
  });

  const total = curso.quiz.length;
  const porcentaje = Math.round((correctas / total) * 100);

  let mensaje = '';
  if (porcentaje >= 80) {
    mensaje = `🎉 ¡Excelente! Has acertado ${correctas} de ${total} (${porcentaje}%).`;
  } else {
    mensaje = `📚 Has acertado ${correctas} de ${total} (${porcentaje}%). Te recomendamos repasar las lecciones.`;
  }

  document.getElementById('resultado-quiz').innerHTML = `
    <div class="resultado-quiz-exito">
      <h3>${mensaje}</h3>
    </div>
  `;
}
// ===== 35. SISTEMA DE ROLES =====

// Definir roles y permisos
const ROLES = {
  analista: { nombre: 'voluntario', puedeRiesgos: true, puedeExportar: true },
  consultor: { nombre: 'coordinador local', puedeRiesgos: true, puedeExportar: true },
  admin: { nombre: 'Administrador sistema', puedeRiesgos: true, puedeExportar: true }
};

// Obtener el rol guardado (por defecto: analista)
function obtenerRolActual() {
  return localStorage.getItem('gdr_rol') || 'analista';
}

// Guardar el rol
function guardarRol(rol) {
  localStorage.setItem('gdr_rol', rol);
}

// Comprobar si el usuario tiene permiso
function tienePermiso(accion) {
  const rol = obtenerRolActual();
  const permisos = ROLES[rol];
  if (!permisos) return false;
  if (accion === 'riesgos') return permisos.puedeRiesgos;
  if (accion === 'exportar') return permisos.puedeExportar;
  return true;
}

// Abrir pantalla de selección de rol
function abrirRoles() {
  const contenedor = document.getElementById('resultados');
  const rolActual = obtenerRolActual();

  let html = `
    <button class="btn-volver" onclick="volverInicio()">← Volver</button>
    <div class="roles-contenedor">
      <h2>👤 Seleccionar Rol</h2>
      <p>Elige tu rol para acceder a las funciones correspondientes.</p>
      <div class="lista-roles">
  `;

  Object.keys(ROLES).forEach(key => {
    const r = ROLES[key];
    const seleccionado = key === rolActual ? 'rol-seleccionado' : '';
    html += `
      <div class="tarjeta-rol ${seleccionado}" onclick="seleccionarRol('${key}')">
        <h3>${r.nombre}</h3>
        <p>
          ${r.puedeRiesgos ? '✅' : '❌'} Registrar riesgos<br>
          ${r.puedeExportar ? '✅' : '❌'} Exportar datos
        </p>
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;
  contenedor.innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Seleccionar un rol
function seleccionarRol(rol) {
  guardarRol(rol);
  alert(`✅ Rol cambiado a: ${ROLES[rol].nombre}\n\nLa página se recargará para aplicar los cambios.`);
  location.reload(); // Recarga la página para actualizar la interfaz
}

// Ocultar/mostrar botones según el rol
function actualizarInterfazPorRol() {
  const btnRiesgos = document.querySelector('.btn-riesgos');
  const btnDashboard = document.querySelector('.btn-dashboard');
  const btnExportarJSON = document.querySelector('button[onclick="exportarJSON()"]');
  const btnExportarCSV = document.querySelector('button[onclick="exportarCSV()"]');

  if (btnRiesgos) {
    btnRiesgos.style.display = tienePermiso('riesgos') ? 'inline-block' : 'none';
  }

  if (btnDashboard) {
    btnDashboard.style.display = tienePermiso('dashboard') ? 'inline-block' : 'none';
  }

  if (btnExportarJSON) {
    btnExportarJSON.style.display = tienePermiso('exportar') ? 'inline-block' : 'none';
  }

  if (btnExportarCSV) {
    btnExportarCSV.style.display = tienePermiso('exportar') ? 'inline-block' : 'none';
  }
}
// ===== 16. INICIALIZAR AL CARGAR LA PÁGINA =====
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await cargarCaritasLocales();
    await abrirBaseDatos();
    actualizarInterfazPorRol();
    console.log('✅ Módulo de riesgos listo con', caritasLocales.length, 'Cáritas locales');
  } catch (error) {
    console.error('❌ Error al inicializar módulo de riesgos:', error);
  }
});
// ===== 21. EXPORTAR CSV (PARA EXCEL) =====
async function exportarCSV() {
  try {
    const riesgos = await obtenerRiesgos();

    if (riesgos.length === 0) {
      alert('No hay riesgos para exportar.');
      return;
    }

    // Definir las columnas (encabezados)
    const encabezados = [
      'ID',
      'Fecha Identificación',
      'Cáritas Local',
      'Código',
      'Título',
      'Categoría',
      'Probabilidad',
      'Impacto',
      'Nivel',
      'Clasificación',
      'Responsable',
      'Tratamiento',
      'Estado',
      'Zona',
      'Población',
      'Descripción'
    ];

    // Crear las filas con los datos
    const filas = riesgos.map(r => [
      r.id || '',
      r.fecha_identificacion || '',
      r.caritas_local || '',
      r.caritas_codigo || '',
      r.titulo || '',
      r.categoria || '',
      r.probabilidad || '',
      r.impacto || '',
      r.nivel_riesgo || '',
      r.clasificacion || '',
      r.responsable || '',
      r.tratamiento || '',
      r.estado || '',
      r.zona_geografica || '',
      r.poblacion_afectada || '',
      (r.descripcion || '').replace(/"/g, '""') // Escapar comillas dobles
    ]);

    // Unir encabezados y filas con comas
    // Usamos punto y coma (;) como separador para que Excel en español lo abra bien
    const separador = ';';
    const csvContent = [
      encabezados.join(separador),
      ...filas.map(fila => fila.map(c => `"${c}"`).join(separador))
    ].join('\n');

    // Añadir BOM para que Excel reconozca los acentos (UTF-8)
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;

    // Nombre del archivo
    const sufijo = riesgos.length > 0 ? `-${riesgos[0].caritas_codigo || 'Cuba'}` : '';
    a.download = `riesgos-${fechaHoy()}${sufijo}.csv`;

    a.click();
    URL.revokeObjectURL(url);

    alert(`✅ Exportados ${riesgos.length} riesgos a CSV correctamente.\n\nPuedes abrirlo con Excel.`);

  } catch (error) {
    console.error('Error al exportar CSV:', error);
    alert('❌ Error al exportar CSV: ' + error.message);
  }
}
// ===== 22. EDITAR RIESGO =====
async function editarRiesgo(id) {
  await mostrarFormularioRiesgo(id);
}
// ===== 24. ABRIR DASHBOARD =====
async function abrirDashboard() {
  const contenedor = document.getElementById('resultados');
  const riesgos = await obtenerRiesgos();

  if (riesgos.length === 0) {
    contenedor.innerHTML = `
      <button class="btn-volver" onclick="volverInicio()">← Volver</button>
      <p style="text-align:center; padding: 40px;">No hay riesgos registrados para mostrar gráficos.</p>
    `;
    return;
  }

  contenedor.innerHTML = `
    <button class="btn-volver" onclick="volverInicio()">← Volver</button>
    <div class="dashboard-contenido">
      <h2>📊 Panel de Control Nacional</h2>
      
      <div class="graficos-grid">
        <div class="grafico-card">
          <h3>Riesgos por Cáritas Local</h3>
          <div style="position: relative; height: 250px; width: 100%;">
            <canvas id="grafico-caritas"></canvas>
          </div>
        </div>
        
        <div class="grafico-card">
          <h3>Distribución por Nivel</h3>
          <div style="position: relative; height: 250px; width: 100%;">
            <canvas id="grafico-niveles"></canvas>
          </div>
        </div>
      </div>
    </div>
  `;

  const conteoCaritas = {};
  const conteoNiveles = { 'Bajo': 0, 'Medio': 0, 'Alto': 0, 'Crítico': 0 };

  riesgos.forEach(r => {
    const c = r.caritas_local || 'Sin asignar';
    conteoCaritas[c] = (conteoCaritas[c] || 0) + 1;

    if (conteoNiveles[r.clasificacion] !== undefined) {
      conteoNiveles[r.clasificacion]++;
    }
  });

  new Chart(document.getElementById('grafico-caritas'), {
    type: 'bar',
    data: {
      labels: Object.keys(conteoCaritas),
      datasets: [{
        label: 'Cantidad de Riesgos',
        data: Object.values(conteoCaritas),
        backgroundColor: '#1a5490'
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  new Chart(document.getElementById('grafico-niveles'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(conteoNiveles),
      datasets: [{
        data: Object.values(conteoNiveles),
        backgroundColor: ['#16a34a', '#eab308', '#ea580c', '#dc2626']
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}