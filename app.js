// ==========================================
// Bitácora Cuba Offline - app.js
// Fase 2: Registro de actividades con IndexedDB
// ==========================================

let db = null;
const NOMBRE_DB = 'bitacoraCuba';
const VERSION_DB = 1;
const ALMACEN = 'actividades';

// ------------------------------------------
// Inicialización
// ------------------------------------------
document.addEventListener('DOMContentLoaded', async () => {
    inicializarNavegacion();
    detectarEstadoRed();
    window.addEventListener('online', detectarEstadoRed);
    window.addEventListener('offline', detectarEstadoRed);

    // Poner fecha de hoy por defecto en el formulario
    document.getElementById('campoFecha').value = fechaHoy();

    // Inicializar base de datos
    await inicializarDB();

    // Configurar eventos del formulario
    configurarFormulario();

    // Cargar actividades existentes
    await cargarActividades();
});

// ------------------------------------------
// IndexedDB
// ------------------------------------------
function inicializarDB() {
    return new Promise((resolve, reject) => {
        const solicitud = indexedDB.open(NOMBRE_DB, VERSION_DB);

        solicitud.onupgradeneeded = (evento) => {
            const dbTemp = evento.target.result;
            if (!dbTemp.objectStoreNames.contains(ALMACEN)) {
                dbTemp.createObjectStore(ALMACEN, {
                    keyPath: 'id',
                    autoIncrement: true
                });
            }
        };

        solicitud.onsuccess = (evento) => {
            db = evento.target.result;
            console.log('✅ Base de datos lista');
            resolve(db);
        };

        solicitud.onerror = (evento) => {
            console.error('❌ Error al abrir IndexedDB:', evento.target.error);
            reject(evento.target.error);
        };
    });
}

function guardarActividad(actividad) {
    return new Promise((resolve, reject) => {
        const transaccion = db.transaction([ALMACEN], 'readwrite');
        const almacen = transaccion.objectStore(ALMACEN);
        const solicitud = almacen.add(actividad);

        solicitud.onsuccess = () => resolve(solicitud.result);
        solicitud.onerror = () => reject(solicitud.error);
    });
}

function obtenerActividades() {
    return new Promise((resolve, reject) => {
        const transaccion = db.transaction([ALMACEN], 'readonly');
        const almacen = transaccion.objectStore(ALMACEN);
        const solicitud = almacen.getAll();

        solicitud.onsuccess = () => resolve(solicitud.result);
        solicitud.onerror = () => reject(solicitud.error);
    });
}

function eliminarActividad(id) {
    return new Promise((resolve, reject) => {
        const transaccion = db.transaction([ALMACEN], 'readwrite');
        const almacen = transaccion.objectStore(ALMACEN);
        const solicitud = almacen.delete(id);

        solicitud.onsuccess = () => resolve();
        solicitud.onerror = () => reject(solicitud.error);
    });
}

// ------------------------------------------
// Formulario
// ------------------------------------------
function configurarFormulario() {
    const modal = document.getElementById('modalFormulario');
    const btnNueva = document.getElementById('btnNuevaActividad');
    const btnCerrar = document.getElementById('btnCerrarModal');
    const btnCancelar = document.getElementById('btnCancelar');
    const formulario = document.getElementById('formularioActividad');

    // Abrir modal
    btnNueva.addEventListener('click', () => {
        document.getElementById('campoFecha').value = fechaHoy();
        // Cargar la última ciudad usada
        const ultimaCiudad = localStorage.getItem('ultimaCiudad');
        if (ultimaCiudad) {
            document.getElementById('campoCiudad').value = ultimaCiudad;
        }
        // Cargar el último proyecto usado
        const ultimoProyecto = localStorage.getItem('ultimoProyecto');
        if (ultimoProyecto) {
            document.getElementById('campoProyecto').value = ultimoProyecto;
        }
        modal.classList.remove('oculto');
    });

    // Cerrar modal
    btnCerrar.addEventListener('click', () => modal.classList.add('oculto'));
    btnCancelar.addEventListener('click', () => modal.classList.add('oculto'));

    // Cerrar al hacer clic fuera del modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('oculto');
    });

    // Guardar actividad
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();

        const tipoSeleccionado = document.querySelector('input[name="tipoDia"]:checked').value;

        const actividad = {
            fecha: document.getElementById('campoFecha').value,
            tipo: tipoSeleccionado,
            jornada: parseFloat(document.querySelector('input[name="tipoJornada"]:checked').value),
            componente: document.getElementById('campoComponente').value,
            ciudad: document.getElementById('campoCiudad').value,
            tema: document.getElementById('campoTema').value,
            tema: document.getElementById('campoTema').value,
            participantes: parseInt(document.getElementById('campoParticipantes').value) || 0,
            resultados: document.getElementById('campoResultados').value,
            riesgos: document.getElementById('campoRiesgos').value,
            proximos: document.getElementById('campoProximos').value,
            notas: document.getElementById('campoNotas').value,
            creado: new Date().toISOString()
        };


        // Guardar la última ciudad usada (para recordarla)
        localStorage.setItem('ultimaCiudad', document.getElementById('campoCiudad').value);

        // Guardar el último proyecto usado (para recordarlo)
        localStorage.setItem('ultimoProyecto', document.getElementById('campoProyecto').value);

        try {
            await guardarActividad(actividad);
            formulario.reset();
            modal.classList.add('oculto');
            await cargarActividades();
            console.log('✅ Actividad guardada');
        } catch (error) {
            console.error('❌ Error al guardar:', error);
            alert('Hubo un error al guardar. Intenta de nuevo.');
        }
    });
}

// ------------------------------------------
// Cargar y mostrar actividades
// ------------------------------------------
async function cargarActividades() {
    try {
        const actividades = await obtenerActividades();
        mostrarActividades(actividades);
        actualizarContadores(actividades);
    } catch (error) {
        console.error('❌ Error al cargar actividades:', error);
    }
}

function mostrarActividades(actividades) {
    const contenedor = document.getElementById('listaActividades');

    if (actividades.length === 0) {
        contenedor.className = 'lista-vacia';
        contenedor.innerHTML = '<p>Aún no hay actividades registradas.</p>';
        return;
    }

    // Ordenar por fecha descendente (más reciente primero)
    actividades.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    contenedor.className = '';
    contenedor.innerHTML = actividades.map(a => `
        <div class="actividad-item ${a.tipo}">
            <div class="actividad-header">
                <span class="actividad-fecha">${formatearFecha(a.fecha)}</span>
                <div>
                    <span class="actividad-tipo ${a.tipo}">${a.tipo}</span>
                                        ${a.jornada === 0.5 ? '<span class="actividad-jornada">½ día</span>' : ''}
                    <button class="btn-eliminar" data-id="${a.id}" title="Eliminar">🗑️</button>
                </div>
            </div>
            <div class="actividad-componente">${escapar(a.componente)}</div>
                        ${a.ciudad ? `<div class="actividad-ciudad">📍 ${escapar(a.ciudad)}</div>` : ''}
            <div class="actividad-tema">${escapar(a.tema)}</div>
            ${a.participantes > 0 ? `<div class="actividad-participantes">👥 ${a.participantes} participantes</div>` : ''}
            ${a.resultados ? `<div class="actividad-resultados">${escapar(a.resultados)}</div>` : ''}
        </div>
    `).join('');

    // Configurar botones de eliminar
    contenedor.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', async (e) => {
            const id = parseInt(e.target.dataset.id);
            if (confirm('¿Eliminar esta actividad?')) {
                await eliminarActividad(id);
                await cargarActividades();
            }
        });
    });
}

function actualizarContadores(actividades) {
    // Sumar valores de jornada (1 = completo, 0.5 = medio)
    const terreno = actividades
        .filter(a => a.tipo === 'terreno')
        .reduce((suma, a) => suma + (a.jornada || 1), 0);

    const remoto = actividades
        .filter(a => a.tipo === 'remoto')
        .reduce((suma, a) => suma + (a.jornada || 1), 0);

    const total = terreno + remoto;

    document.getElementById('contadorTerreno').textContent = formatearDias(terreno);
    document.getElementById('contadorRemoto').textContent = formatearDias(remoto);
    document.getElementById('contadorTotal').textContent = `${formatearDias(total)}/120`;
}

// Formatea los días: 1.5 se ve como "1.5", 2 se ve como "2"
function formatearDias(numero) {
    if (numero % 1 === 0) return numero.toString();
    return numero.toFixed(1);
}

// ------------------------------------------
// Navegación
// ------------------------------------------
function inicializarNavegacion() {
    const botonesNav = document.querySelectorAll('.nav-item');
    const secciones = document.querySelectorAll('.seccion');

    botonesNav.forEach(boton => {
        boton.addEventListener('click', async () => {
            const seccionDestino = boton.dataset.seccion;
            botonesNav.forEach(b => b.classList.remove('activo'));
            secciones.forEach(s => s.classList.remove('activa'));
            boton.classList.add('activo');
            document.getElementById(`seccion-${seccionDestino}`).classList.add('activa');

            // Actualizar reportes cuando se abre la pestaña Reportes
            if (seccionDestino === 'reportes') {
                await actualizarReportes();
            }
            // Cargar contrato cuando se abre la pestaña Contrato
            if (seccionDestino === 'contrato') {
                await cargarConfiguracion();
            }
        });
    });
}

// ------------------------------------------
// Detectar estado de red
// ------------------------------------------
function detectarEstadoRed() {
    const badge = document.getElementById('estadoRed');
    if (navigator.onLine) {
        badge.textContent = '● Online';
        badge.classList.add('online');
    } else {
        badge.textContent = '● Offline';
        badge.classList.remove('online');
    }
}

// ------------------------------------------
// Utilidades
// ------------------------------------------
function fechaHoy() {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
}

function formatearFecha(fechaISO) {
    const [año, mes, dia] = fechaISO.split('-');
    const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun',
        'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    return `${parseInt(dia)} ${meses[parseInt(mes) - 1]} ${año}`;
}

function escapar(texto) {
    if (!texto) return '';
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

console.log('%c📋 Bitácora Cuba Offline', 'color: #1e40af; font-size: 16px; font-weight: bold;');
console.log('%cFase 2 cargada: Registro con IndexedDB', 'color: #10b981; font-size: 12px;');
// ==========================================
// FASE 3: Módulo de GASTOS
// ==========================================

const ALMACEN_GASTOS = 'gastos';
let dbGastos = null;

// ------------------------------------------
// Inicializar almacén de gastos
// ------------------------------------------
const NOMBRE_DB_GASTOS = 'bitacoraCubaGastos';

function inicializarDBGastos() {
    return new Promise((resolve, reject) => {
        const solicitud = indexedDB.open(NOMBRE_DB_GASTOS, 1);

        solicitud.onupgradeneeded = (evento) => {
            const dbTemp = evento.target.result;
            if (!dbTemp.objectStoreNames.contains(ALMACEN_GASTOS)) {
                dbTemp.createObjectStore(ALMACEN_GASTOS, { keyPath: 'id', autoIncrement: true });
            }
        };

        solicitud.onsuccess = (evento) => {
            dbGastos = evento.target.result;
            console.log('✅ Base de datos de gastos lista');
            resolve(dbGastos);
        };

        solicitud.onerror = (evento) => {
            console.error('❌ Error al abrir IndexedDB gastos:', evento.target.error);
            reject(evento.target.error);
        };
    });
}

function guardarGasto(gasto) {
    return new Promise((resolve, reject) => {
        const transaccion = dbGastos.transaction([ALMACEN_GASTOS], 'readwrite');
        const almacen = transaccion.objectStore(ALMACEN_GASTOS);
        const solicitud = almacen.add(gasto);
        solicitud.onsuccess = () => resolve(solicitud.result);
        solicitud.onerror = () => reject(solicitud.error);
    });
}

function obtenerGastos() {
    return new Promise((resolve, reject) => {
        const transaccion = dbGastos.transaction([ALMACEN_GASTOS], 'readonly');
        const almacen = transaccion.objectStore(ALMACEN_GASTOS);
        const solicitud = almacen.getAll();
        solicitud.onsuccess = () => resolve(solicitud.result);
        solicitud.onerror = () => reject(solicitud.error);
    });
}

function eliminarGasto(id) {
    return new Promise((resolve, reject) => {
        const transaccion = dbGastos.transaction([ALMACEN_GASTOS], 'readwrite');
        const almacen = transaccion.objectStore(ALMACEN_GASTOS);
        const solicitud = almacen.delete(id);
        solicitud.onsuccess = () => resolve();
        solicitud.onerror = () => reject(solicitud.error);
    });
}

// ------------------------------------------
// Configurar formulario de gasto
// ------------------------------------------
function configurarFormularioGasto() {
    const modal = document.getElementById('modalGasto');
    const btnNuevo = document.getElementById('btnNuevoGasto');
    const btnCerrar = document.getElementById('btnCerrarModalGasto');
    const btnCancelar = document.getElementById('btnCancelarGasto');
    const formulario = document.getElementById('formularioGasto');

    const campoMonto = document.getElementById('gastoMonto');
    const campoMoneda = document.getElementById('gastoMoneda');
    const campoTasa = document.getElementById('gasoTasa');
    const ayudaTasa = document.getElementById('ayudaTasa');
    const vistaPrevia = document.getElementById('vistaPrevia');

    // Abrir modal
    btnNuevo.addEventListener('click', () => {
        document.getElementById('gastoFecha').value = fechaHoy();
        // Cargar última tasa usada para la moneda por defecto
        cargarUltimaTasa(campoMoneda.value, campoTasa, ayudaTasa);
        actualizarVistaPrevia();
        // Cargar el último proyecto usado en gastos
        const ultimoProyectoGasto = localStorage.getItem('ultimoProyectoGasto');
        if (ultimoProyectoGasto) {
            document.getElementById('gastoProyecto').value = ultimoProyectoGasto;
        }
        modal.classList.remove('oculto');
    });

    // Cerrar modal
    btnCerrar.addEventListener('click', () => modal.classList.add('oculto'));
    btnCancelar.addEventListener('click', () => modal.classList.add('oculto'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('oculto');
    });

    // Cuando cambia la moneda, cargar la última tasa usada
    campoMoneda.addEventListener('change', () => {
        cargarUltimaTasa(campoMoneda.value, campoTasa, ayudaTasa);
        actualizarVistaPrevia();
    });

    // Vista previa en tiempo real
    campoMonto.addEventListener('input', actualizarVistaPrevia);
    campoTasa.addEventListener('input', actualizarVistaPrevia);

    function actualizarVistaPrevia() {
        const montoTexto = (campoMonto.value || '').replace(',', '.');
        const tasaTexto = (campoTasa.value || '').replace(',', '.');
        const monto = parseFloat(montoTexto) || 0;
        const tasa = parseFloat(tasaTexto) || 0;
        const equivalente = monto * tasa;
        vistaPrevia.innerHTML = `Equivalente: <strong>€ ${equivalente.toFixed(2)}</strong>`;
    }

    // Guardar gasto
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();

        const monto = parseFloat(campoMonto.value);
        const tasa = parseFloat(campoTasa.value);
        const moneda = campoMoneda.value;

        const gasto = {
            fecha: document.getElementById('gastoFecha').value,
            concepto: document.getElementById('gastoConcepto').value,
            categoria: document.getElementById('gastoCategoria').value,
            monto: monto,
            moneda: moneda,
            tasa: tasa,
            equivalenteEUR: monto * tasa,
            comprobante: document.querySelector('input[name="gastoComprobante"]:checked').value,
            proyecto: document.getElementById('gastoProyecto').value,
            receiptNumber: document.getElementById('gastoReceipt').value,
            notas: document.getElementById('gastoNotas').value,
            creado: new Date().toISOString()
        };

        try {
            await guardarGasto(gasto);
            // Guardar la última tasa usada para esta moneda
            guardarUltimaTasa(moneda, tasa);
            // Guardar el último proyecto usado en gastos
            localStorage.setItem('ultimoProyectoGasto', gasto.proyecto);
            formulario.reset();
            modal.classList.add('oculto');
            await cargarGastos();
            console.log('✅ Gasto guardado');
        } catch (error) {
            console.error('❌ Error al guardar gasto:', error);
            alert('Hubo un error al guardar el gasto. Intenta de nuevo.');
        }
    });
}

// ------------------------------------------
// Recordar última tasa por moneda (en localStorage)
// ------------------------------------------
function guardarUltimaTasa(moneda, tasa) {
    localStorage.setItem(`ultimaTasa_${moneda}`, tasa);
}

function cargarUltimaTasa(moneda, campoTasa, ayudaTasa) {
    const tasaGuardada = localStorage.getItem(`ultimaTasa_${moneda}`);
    const ejemplos = {
        'COP': 'Ejemplo: si 1 EUR = 4,500 COP, escribe 0.00022222',
        'CUP': 'Ejemplo: si 1 EUR = 27.5 CUP, escribe 0.0364',
        'MLC': 'Ejemplo: si 1 EUR = 1.08 MLC, escribe 0.9259',
        'USD': 'Ejemplo: si 1 EUR = 1.08 USD, escribe 0.9259',
        'EUR': 'El euro siempre es 1'
    };

    if (moneda === 'EUR') {
        campoTasa.value = 1;
        campoTasa.disabled = true;
    } else {
        campoTasa.disabled = false;
        campoTasa.value = tasaGuardada || '';
    }

    ayudaTasa.textContent = ejemplos[moneda] || '';
}

// ------------------------------------------
// Cargar y mostrar gastos
// ------------------------------------------
async function cargarGastos() {
    try {
        const gastos = await obtenerGastos();
        mostrarGastos(gastos);
        actualizarTotales(gastos);
    } catch (error) {
        console.error('❌ Error al cargar gastos:', error);
    }
}

function mostrarGastos(gastos) {
    const contenedor = document.getElementById('listaGastos');

    if (gastos.length === 0) {
        contenedor.className = 'lista-vacia';
        contenedor.innerHTML = '<p>No hay gastos registrados.</p>';
        return;
    }

    gastos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    const nombresCategorias = {
        'transporte': 'Transporte',
        'alojamiento': 'Alojamiento',
        'comida': 'Comida',
        'materiales': 'Materiales',
        'comunicaciones': 'Comunicaciones',
        'otros': 'Otros'
    };

    contenedor.className = '';
    contenedor.innerHTML = gastos.map(g => `
        <div class="gasto-item">
            <div class="gasto-header">
                <span class="gasto-fecha">${formatearFecha(g.fecha)}</span>
                <div>
                    <span class="gasto-categoria ${g.categoria}">${nombresCategorias[g.categoria] || g.categoria}</span>
                    <button class="btn-eliminar" data-id="${g.id}" title="Eliminar">🗑️</button>
                </div>
            </div>
            <div class="gasto-concepto">${escapar(g.concepto)}</div>
            <div class="gasto-montos">
                <div>
                    <div class="gasto-original">${g.monto.toFixed(2)} ${g.moneda}</div>
                    <div class="gasto-tasa">1 ${g.moneda} = ${g.tasa} EUR</div>
                </div>
                <div class="gasto-equivalente">€ ${g.equivalenteEUR.toFixed(2)}</div>
            </div>
            <div class="gasto-comprobante ${g.comprobante}">
                ${g.comprobante === 'si' ? '✓ Con comprobante' : '✗ Sin comprobante'}
            </div>
            ${g.notas ? `<div class="gasto-tasa" style="margin-top:8px;">📝 ${escapar(g.notas)}</div>` : ''}
        </div>
    `).join('');

    contenedor.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', async (e) => {
            const id = parseInt(e.target.dataset.id);
            if (confirm('¿Eliminar este gasto?')) {
                await eliminarGasto(id);
                await cargarGastos();
            }
        });
    });
}

function actualizarTotales(gastos) {
    let totalEUR = 0;
    const totalesPorMoneda = { EUR: 0, USD: 0, MLC: 0, CUP: 0, COP: 0 };

    gastos.forEach(g => {
        totalEUR += g.equivalenteEUR;
        if (totalesPorMoneda[g.moneda] !== undefined) {
            totalesPorMoneda[g.moneda] += g.monto;
        }
    });

    document.getElementById('totalEUR').textContent = `€ ${totalEUR.toFixed(2)}`;
    document.getElementById('totalMonedaEUR').textContent = totalesPorMoneda.EUR.toFixed(2);
    document.getElementById('totalMonedaUSD').textContent = totalesPorMoneda.USD.toFixed(2);
    document.getElementById('totalMonedaMLC').textContent = totalesPorMoneda.MLC.toFixed(2);
    document.getElementById('totalMonedaCUP').textContent = totalesPorMoneda.CUP.toFixed(2);
    document.getElementById('totalMonedaCOP').textContent = totalesPorMoneda.COP.toFixed(2);
}

// ------------------------------------------
// Actualizar el DOMContentLoaded para incluir gastos
// ------------------------------------------
// NOTA: Como ya existe un listener DOMContentLoaded arriba, agregamos aquí
// otro listener que se ejecuta en paralelo (los navegadores permiten varios)
// ------------------------------------------
// Inicializar el módulo de gastos
// (verifica si el DOM ya cargó para no perder el evento)
// ------------------------------------------
async function inicializarModuloGastos() {
    try {
        await inicializarDBGastos();
        configurarFormularioGasto();
        configurarBotonesExportacion();
        await cargarGastos();
        console.log('✅ Módulo de gastos inicializado');
    } catch (error) {
        console.error('❌ Error al inicializar gastos:', error);
    }
}

if (document.readyState === 'loading') {
    // El DOM aún se está cargando → esperar el evento
    document.addEventListener('DOMContentLoaded', inicializarModuloGastos);
} else {
    // El DOM ya cargó → ejecutar inmediatamente
    inicializarModuloGastos();
}
// ==========================================
// FASE 4: REPORTES - Cálculos y renderizado
// ==========================================

// ------------------------------------------
// Calcular y actualizar todos los reportes
// ------------------------------------------
async function actualizarReportes() {
    try {
        const actividades = await obtenerActividades();
        const gastos = await obtenerGastos();

        // 1. AVANCE GENERAL
        actualizarAvance(actividades);

        // 2. PRÓXIMO CORTE DE MES
        actualizarProximoCorte();

        // 3. TABLA PARA BRIEFING
        actualizarTablaBriefing(actividades);

    } catch (error) {
        console.error('❌ Error al actualizar reportes:', error);
    }
}

// ------------------------------------------
// AVANCE GENERAL
// ------------------------------------------
function actualizarAvance(actividades) {
    const totalDias = actividades.reduce((suma, a) => suma + (a.jornada || 1), 0);
    const porcentaje = (totalDias / 120) * 100;
    const restantes = 120 - totalDias;

    document.getElementById('reporteDiasTrabajados').textContent = formatearDias(totalDias);
    document.getElementById('reportePorcentaje').textContent = `${porcentaje.toFixed(1)}% completado`;
    document.getElementById('reporteRestantes').textContent = `Faltan ${formatearDias(restantes)} días`;
    document.getElementById('barraAvance').style.width = `${Math.min(porcentaje, 100)}%`;
}

// ------------------------------------------
// PRÓXIMO CORTE DE MES (último día del mes actual)
// ------------------------------------------
function actualizarProximoCorte() {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = hoy.getMonth();

    // Último día del mes actual (día 0 del siguiente mes)
    const ultimoDiaMes = new Date(año, mes + 1, 0);
    const diaCorte = ultimoDiaMes.getDate();

    // Días restantes al corte
    const hoySinHora = new Date(año, mes, hoy.getDate());
    const diffMs = ultimoDiaMes - hoySinHora;
    const diasRestantes = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    document.getElementById('reporteProximoCorte').textContent =
        `${diaCorte} de ${meses[mes]} de ${año}`;

    if (diasRestantes === 0) {
        document.getElementById('reporteRestantesCorte').textContent = '¡Hoy es el día del corte!';
    } else if (diasRestantes === 1) {
        document.getElementById('reporteRestantesCorte').textContent = 'Falta 1 día';
    } else {
        document.getElementById('reporteRestantesCorte').textContent = `Faltan ${diasRestantes} días`;
    }
}

// ------------------------------------------
// TABLA PARA BRIEFING
// ------------------------------------------
function actualizarTablaBriefing(actividades) {
    const tbody = document.getElementById('tbodyBriefing');

    if (actividades.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="tabla-vacia">Sin actividades registradas</td></tr>';
        return;
    }

    // Ordenar por fecha (más reciente primero)
    const ordenadas = [...actividades].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    // Agrupar por fecha + ciudad + proyecto para numerar actividades
    const grupos = {};
    ordenadas.forEach(a => {
        const clave = `${a.fecha}|${a.ciudad || ''}|${a.proyecto || ''}`;
        if (!grupos[clave]) grupos[clave] = [];
        grupos[clave].push(a);
    });

    // Generar las filas
    let html = '';
    Object.values(grupos).forEach(grupo => {
        grupo.forEach((a, index) => {
            const numero = grupo.length > 1 ? `${index + 1}. ` : '1. ';
            const jornadaFormato = (a.jornada || 1).toString().replace('.', ',');

            html += `
                <tr>
                    <td>${formatearFechaBriefing(a.fecha)}</td>
                    <td>${jornadaFormato}</td>
                    <td>${escapar(a.ciudad || '')}</td>
                    <td>${numero}${escapar(a.resultados || a.tema || '')}</td>
                    <td>${escapar(a.proyecto || '')}</td>
                </tr>
            `;
        });
    });

    tbody.innerHTML = html;
}

// Formatea fecha como DD/MM/AA (para el Briefing)
function formatearFechaBriefing(fechaISO) {
    if (!fechaISO) return '';
    const [año, mes, dia] = fechaISO.split('-');
    return `${dia}/${mes}/${año.slice(-2)}`;
}
// ==========================================
// FASE 4: EXPORTACIÓN
// ==========================================

// ------------------------------------------
// 1. Exportar Briefing (CSV)
// ------------------------------------------
async function exportarBriefing() {
    try {
        const actividades = await obtenerActividades();

        if (actividades.length === 0) {
            alert('No hay actividades registradas para exportar.');
            return;
        }

        // Ordenar por fecha (más antigua primero para el Briefing)
        const ordenadas = [...actividades].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

        // Agrupar por fecha + ciudad + proyecto para numerar
        const grupos = {};
        ordenadas.forEach(a => {
            const clave = `${a.fecha}|${a.ciudad || ''}|${a.proyecto || ''}`;
            if (!grupos[clave]) grupos[clave] = [];
            grupos[clave].push(a);
        });

        // Encabezado
        let csv = 'Fecha,Jornada,Ciudad,,Actividad,Proyecto,\n';

        // Filas
        Object.values(grupos).forEach(grupo => {
            grupo.forEach((a, index) => {
                const numero = grupo.length > 1 ? `${index + 1}. ` : '1. ';
                const jornadaFormato = (a.jornada || 1).toString().replace('.', ',');
                const fechaFormato = formatearFechaBriefing(a.fecha);
                const ciudad = (a.ciudad || '').replace(/,/g, ' ');
                const actividad = (a.resultados || a.tema || '').replace(/,/g, ' ').replace(/\n/g, ' ');
                const proyecto = a.proyecto || '';

                csv += `${fechaFormato},${jornadaFormato},${ciudad},,"${numero}${actividad}",${proyecto},\n`;
            });
        });

        descargarArchivo(csv, `briefing_${fechaHoy()}.csv`, 'text/csv;charset=utf-8;');
        console.log('✅ Briefing exportado');

    } catch (error) {
        console.error('❌ Error al exportar Briefing:', error);
        alert('Error al exportar el Briefing.');
    }
}

// ------------------------------------------
// 2. Exportar para Agente (JSON)
// ------------------------------------------
async function exportarParaAgente() {
    const fechaInicio = document.getElementById('rangoFechaInicio').value;
    const fechaFin = document.getElementById('rangoFechaFin').value;

    if (!fechaInicio || !fechaFin) {
        alert('Por favor selecciona ambas fechas.');
        return;
    }

    try {
        const actividades = await obtenerActividades();
        const gastos = await obtenerGastos();

        const actividadesFiltradas = actividades.filter(a =>
            a.fecha >= fechaInicio && a.fecha <= fechaFin
        );
        const gastosFiltrados = gastos.filter(g =>
            g.fecha >= fechaInicio && g.fecha <= fechaFin
        );

        const totalDias = actividadesFiltradas.reduce((suma, a) => suma + (a.jornada || 1), 0);
        const totalEUR = gastosFiltrados.reduce((suma, g) => suma + (g.equivalenteEUR || 0), 0);

        const datos = {
            consultora: 'Carmen Marquez Arrieta',
            proyecto: 'P.220-2022-001',
            pais: 'Cuba',
            periodo: {
                inicio: fechaInicio,
                fin: fechaFin
            },
            resumen: {
                totalDiasTrabajados: totalDias,
                totalActividades: actividadesFiltradas.length,
                totalGastosEUR: parseFloat(totalEUR.toFixed(2))
            },
            actividades: actividadesFiltradas.map(a => ({
                fecha: a.fecha,
                jornada: a.jornada || 1,
                tipo: a.tipo,
                componente: a.componente,
                ciudad: a.ciudad,
                tema: a.tema,
                proyecto: a.proyecto,
                participantes: a.participantes,
                resultados: a.resultados,
                riesgos: a.riesgos,
                proximos: a.proximos,
                notas: a.notas
            })),
            gastos: gastosFiltrados.map(g => ({
                fecha: g.fecha,
                concepto: g.concepto,
                categoria: g.categoria,
                monto: g.monto,
                moneda: g.moneda,
                tasa: g.tasa,
                equivalenteEUR: g.equivalenteEUR,
                comprobante: g.comprobante,
                notas: g.notas
            }))
        };

        descargarArchivo(JSON.stringify(datos, null, 2), `informe_agente_${fechaInicio}_a_${fechaFin}.json`, 'application/json');

        document.getElementById('modalRango').classList.add('oculto');
        console.log('✅ JSON para agente exportado');

    } catch (error) {
        console.error('❌ Error al exportar para agente:', error);
        alert('Error al exportar el JSON.');
    }
}

// ------------------------------------------
// 3. Crear respaldo completo (JSON)
// ------------------------------------------
async function crearRespaldo() {
    try {
        const actividades = await obtenerActividades();
        const gastos = await obtenerGastos();

        const respaldo = {
            fechaRespaldo: new Date().toISOString(),
            version: '1.0',
            app: 'Bitácora Cuba Offline',
            totalActividades: actividades.length,
            totalGastos: gastos.length,
            actividades: actividades,
            gastos: gastos
        };

        descargarArchivo(JSON.stringify(respaldo, null, 2), `respaldo_bitacora_${fechaHoy()}.json`, 'application/json');
        console.log('✅ Respaldo creado');

    } catch (error) {
        console.error('❌ Error al crear respaldo:', error);
        alert('Error al crear el respaldo.');
    }
}

// ------------------------------------------
// Utilidad: descargar archivo
// ------------------------------------------
function descargarArchivo(contenido, nombreArchivo, tipo) {
    const blob = new Blob([contenido], { type: tipo });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ------------------------------------------
// Configurar botones de exportación
// ------------------------------------------
function configurarBotonesExportacion() {
    // Botón: Exportar Briefing (CSV)
    document.getElementById('btnExportarBriefing').addEventListener('click', exportarBriefing);

    // Botón: Exportar Statement of accounts (CSV)
    document.getElementById('btnExportarStatement').addEventListener('click', exportarStatement);

    // Botón: Exportar para Agente (JSON) → abre modal
    document.getElementById('btnExportarAgente').addEventListener('click', () => {
        const hoy = new Date();
        const primerDiaMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1);

        document.getElementById('rangoFechaInicio').value =
            `${primerDiaMes.getFullYear()}-${String(primerDiaMes.getMonth() + 1).padStart(2, '0')}-01`;
        document.getElementById('rangoFechaFin').value = fechaHoy();

        document.getElementById('modalRango').classList.remove('oculto');
    });

    // Botón: Crear respaldo (JSON)
    document.getElementById('btnCrearRespaldo').addEventListener('click', crearRespaldo);

    // Modal de rango: cerrar
    document.getElementById('btnCerrarRango').addEventListener('click', () => {
        document.getElementById('modalRango').classList.add('oculto');
    });
    document.getElementById('btnCancelarRango').addEventListener('click', () => {
        document.getElementById('modalRango').classList.add('oculto');
    });

    // Modal de rango: confirmar
    document.getElementById('btnConfirmarRango').addEventListener('click', exportarParaAgente);
}
// ------------------------------------------
// 4. Exportar Statement of accounts (CSV)
// ------------------------------------------
async function exportarStatement() {
    try {
        const gastos = await obtenerGastos();

        if (gastos.length === 0) {
            alert('No hay gastos registrados para exportar.');
            return;
        }

        // Ordenar por fecha (más antigua primero)
        const ordenados = [...gastos].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

        // Encabezado
        let csv = 'Date,Description,Foreign Currency (FC),Foreign Currency Amount,Exchange Rate,Amount in EUR,Receipt number,Project\n';

        // Total acumulado
        let totalEUR = 0;

        // Filas
        ordenados.forEach(g => {
            const fecha = formatearFechaBriefing(g.fecha);
            const descripcion = (g.concepto || '').replace(/,/g, ' ');
            const moneda = g.moneda || '';
            const montoFC = (g.monto || 0).toFixed(2);
            const tasa = (g.tasa || 0).toFixed(8);
            const montoEUR = (g.equivalenteEUR || 0).toFixed(2);
            const receipt = g.receiptNumber || '';
            const proyecto = g.proyecto || '';

            totalEUR += g.equivalenteEUR || 0;

            csv += `${fecha},"${descripcion}",${moneda},"${montoFC}","${tasa}","${montoEUR}","${receipt}",${proyecto}\n`;
        });

        // Fila de Total
        csv += `\n,,,,,Total,"${totalEUR.toFixed(2)}",\n`;

        descargarArchivo(csv, `statement_of_accounts_${fechaHoy()}.csv`, 'text/csv;charset=utf-8;');
        console.log('✅ Statement of accounts exportado');

    } catch (error) {
        console.error('❌ Error al exportar Statement:', error);
        alert('Error al exportar el Statement of accounts.');
    }
}

// ==========================================
// FASE 5: CONFIGURACIÓN DEL CONTRATO
// ==========================================

const ALMACEN_CONTRATO = 'contrato';
let dbContrato = null;

// ------------------------------------------
// Inicializar almacén de contrato
// ------------------------------------------
function inicializarDBContrato() {
    return new Promise((resolve, reject) => {
        const solicitud = indexedDB.open('bitacoraCubaContrato', 1);

        solicitud.onupgradeneeded = (evento) => {
            const dbTemp = evento.target.result;
            if (!dbTemp.objectStoreNames.contains(ALMACEN_CONTRATO)) {
                dbTemp.createObjectStore(ALMACEN_CONTRATO, { keyPath: 'id' });
            }
        };

        solicitud.onsuccess = (evento) => {
            dbContrato = evento.target.result;
            console.log('✅ Base de datos de contrato lista');
            resolve(dbContrato);
        };

        solicitud.onerror = (evento) => {
            console.error('❌ Error al abrir IndexedDB contrato:', evento.target.error);
            reject(evento.target.error);
        };
    });
}

function guardarContrato(config) {
    return new Promise((resolve, reject) => {
        const transaccion = dbContrato.transaction([ALMACEN_CONTRATO], 'readwrite');
        const almacen = transaccion.objectStore(ALMACEN_CONTRATO);
        // Guardamos con id fijo = 1 (solo hay una configuración)
        config.id = 1;
        const solicitud = almacen.put(config);
        solicitud.onsuccess = () => resolve(solicitud.result);
        solicitud.onerror = () => reject(solicitud.error);
    });
}

function obtenerContrato() {
    return new Promise((resolve, reject) => {
        const transaccion = dbContrato.transaction([ALMACEN_CONTRATO], 'readonly');
        const almacen = transaccion.objectStore(ALMACEN_CONTRATO);
        const solicitud = almacen.get(1);
        solicitud.onsuccess = () => resolve(solicitud.result);
        solicitud.onerror = () => reject(solicitud.error);
    });
}

// ------------------------------------------
// Configurar el formulario de contrato
// ------------------------------------------
function configurarFormularioContrato() {
    // Listeners para cálculos automáticos
    document.getElementById('configTarifaDiaria').addEventListener('input', calcularPresupuesto);
    document.getElementById('configDiasTotales').addEventListener('input', calcularPresupuesto);
    document.getElementById('configPresupuestoViajes').addEventListener('input', calcularPresupuesto);

    // Botón Guardar
    document.getElementById('btnGuardarConfig').addEventListener('click', guardarConfiguracion);

    // Botones de agregar (por ahora solo alertas)
    document.getElementById('btnAgregarInforme').addEventListener('click', () => {
        alert('Función de agregar informe en desarrollo');
    });
    document.getElementById('btnAgregarTarea').addEventListener('click', () => {
        alert('Función de agregar tarea en desarrollo');
    });
    document.getElementById('btnAgregarViaje').addEventListener('click', () => {
        alert('Función de agregar viaje en desarrollo');
    });
}

// ------------------------------------------
// Calcular presupuesto automáticamente
// ------------------------------------------
function calcularPresupuesto() {
    const tarifa = parseFloat(document.getElementById('configTarifaDiaria').value) || 0;
    const dias = parseFloat(document.getElementById('configDiasTotales').value) || 0;
    const viajes = parseFloat(document.getElementById('configPresupuestoViajes').value) || 0;

    const honorarios = tarifa * dias;
    const total = honorarios + viajes;

    document.getElementById('configHonorariosCalculados').textContent =
        `${honorarios.toFixed(2)} EUR`;
    document.getElementById('configTotalCalculado').textContent = `${total.toFixed(2)} EUR`;
}

// ------------------------------------------
// Guardar la configuración
// ------------------------------------------
async function guardarConfiguracion() {
    try {
        const config = {
            consultora: document.getElementById('configConsultora').value,
            proyecto: document.getElementById('configProyecto').value,
            pais: document.getElementById('configPais').value,
            fechaInicio: document.getElementById('configFechaInicio').value,
            fechaFin: document.getElementById('configFechaFin').value,
            diasTotales: parseInt(document.getElementById('configDiasTotales').value) || 120,
            numViajes: parseInt(document.getElementById('configNumViajes').value) || 3,
            descripcion: document.getElementById('configDescripcion').value,
            tarifaDiaria: parseFloat(document.getElementById('configTarifaDiaria').value) || 0,
            presupuestoViajes: parseFloat(document.getElementById('configPresupuestoViajes').value) || 0
        };

        await guardarContrato(config);
        alert('✅ Configuración guardada');
        console.log('✅ Configuración de contrato guardada');
    } catch (error) {
        console.error('❌ Error al guardar contrato:', error);
        alert('Error al guardar la configuración.');
    }
}

// ------------------------------------------
// Cargar la configuración al entrar a la pestaña
// ------------------------------------------
async function cargarConfiguracion() {
    try {
        const config = await obtenerContrato();
        if (!config) return;

        document.getElementById('configConsultora').value = config.consultora || '';
        document.getElementById('configProyecto').value = config.proyecto || '';
        document.getElementById('configPais').value = config.pais || '';
        document.getElementById('configFechaInicio').value = config.fechaInicio || '';
        document.getElementById('configFechaFin').value = config.fechaFin || '';
        document.getElementById('configDiasTotales').value = config.diasTotales || 120;
        document.getElementById('configNumViajes').value = config.numViajes || 3;
        document.getElementById('configDescripcion').value = config.descripcion || '';
        document.getElementById('configTarifaDiaria').value = config.tarifaDiaria || '';
        document.getElementById('configPresupuestoViajes').value = config.presupuestoViajes || '';

        calcularPresupuesto();
        console.log('✅ Configuración cargada');
    } catch (error) {
        console.error('❌ Error al cargar contrato:', error);
    }
}

// ------------------------------------------
// Inicializar el módulo de contrato
// ------------------------------------------
async function inicializarModuloContrato() {
    try {
        await inicializarDBContrato();
        configurarFormularioContrato();
        console.log('✅ Módulo de contrato inicializado');
    } catch (error) {
        console.error('❌ Error al inicializar contrato:', error);
    }
}

// ------------------------------------------
// Ejecutar al cargar el DOM
// ------------------------------------------
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarModuloContrato);
} else {
    inicializarModuloContrato();
}
// ==========================================
// PANTALLA DE CONTRASEÑA
// ==========================================

// ⚠️ CAMBIA ESTO POR TU CONTRASEÑA REAL
const CONTRASEÑA_CORRECTA = 'Cuba220';

function inicializarLogin() {
    const pantalla = document.getElementById('pantallaLogin');
    const input = document.getElementById('inputPassword');
    const btn = document.getElementById('btnLogin');
    const error = document.getElementById('loginError');

    // Si ya se autenticó antes, ocultar la pantalla
    if (localStorage.getItem('autenticado') === 'si') {
        pantalla.classList.add('oculto');
        return;
    }

    // Verificar contraseña
    function verificar() {
        const ingresada = input.value.trim();
        if (ingresada === CONTRASEÑA_CORRECTA) {
            localStorage.setItem('autenticado', 'si');
            pantalla.classList.add('oculto');
            error.textContent = '';
        } else {
            error.textContent = '❌ Contraseña incorrecta';
            input.value = '';
            input.focus();
        }
    }

    // Click en botón
    btn.addEventListener('click', verificar);

    // Presionar Enter
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            verificar();
        }
    });

    // Enfocar el input al cargar
    input.focus();
}

// Ejecutar cuando cargue el DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarLogin);
} else {
    inicializarLogin();
}
// ==========================================
// IMPORTAR RESPALDO
// ==========================================

function inicializarImportacion() {
    const btnImportar = document.getElementById('btnImportarRespaldo');
    const inputArchivo = document.getElementById('inputImportar');

    // Botón: abrir el selector de archivos
    btnImportar.addEventListener('click', () => {
        inputArchivo.click();
    });

    // Cuando se selecciona un archivo
    inputArchivo.addEventListener('change', async (evento) => {
        const archivo = evento.target.files[0];
        if (!archivo) return;

        try {
            // Leer el archivo
            const texto = await archivo.text();
            const datos = JSON.parse(texto);

            // Validar que tenga la estructura correcta
            if (!datos.actividades && !datos.gastos) {
                alert('❌ El archivo no tiene el formato correcto.');
                inputArchivo.value = '';
                return;
            }

            // Contar elementos
            const numActividades = (datos.actividades || []).length;
            const numGastos = (datos.gastos || []).length;

            // Confirmar con el usuario
            const respuesta = confirm(
                `📦 Archivo válido detectado:\n\n` +
                `• ${numActividades} actividades\n` +
                `• ${numGastos} gastos\n\n` +
                `¿CÓMO QUIERES IMPORTAR?\n\n` +
                `• ACEPTAR → Agregar (sin borrar los datos actuales)\n` +
                `• CANCELAR → Reemplazar (borrar todo y poner solo esto)`
            );

            if (respuesta === true) {
                // ACEPTAR → Agregar
                await importarAgregar(datos);
                alert(`✅ Importados: ${numActividades} actividades y ${numGastos} gastos (modo AGREGAR).`);
            } else {
                // CANCELAR → Reemplazar
                const confirmar = confirm(
                    `⚠️ ATENCIÓN:\n\n` +
                    `Se van a BORRAR todos los datos actuales y reemplazarlos por los del archivo.\n\n` +
                    `¿Estás segura?`
                );
                if (confirmar) {
                    await importarReemplazar(datos);
                    alert(`✅ Importados: ${numActividades} actividades y ${numGastos} gastos (modo REEMPLAZAR).`);
                } else {
                    return; // Cancelar todo
                }
            }

            // Recargar la interfaz
            await cargarActividades();
            await cargarGastos();
            await cargarConfiguracion();

            // Limpiar el input
            inputArchivo.value = '';

            console.log('✅ Importación completada');

        } catch (error) {
            console.error('❌ Error al importar:', error);
            alert('❌ Hubo un error al leer el archivo. Verifica que sea un JSON válido.');
            inputArchivo.value = '';
        }
    });
}

// Modo AGREGAR: mantiene los datos actuales y añade los nuevos
async function importarAgregar(datos) {
    // Agregar actividades (sin el id, para que IndexedDB genere uno nuevo)
    if (datos.actividades) {
        for (const actividad of datos.actividades) {
            const copia = { ...actividad };
            delete copia.id; // Quitar el id para que se genere uno nuevo
            await guardarActividad(copia);
        }
    }

    // Agregar gastos
    if (datos.gastos) {
        for (const gasto of datos.gastos) {
            const copia = { ...gasto };
            delete copia.id;
            await guardarGasto(copia);
        }
    }
}

// Modo REEMPLAZAR: borra todo y pone solo los datos del archivo
async function importarReemplazar(datos) {
    // Borrar todas las actividades actuales
    const actividadesActuales = await obtenerActividades();
    for (const act of actividadesActuales) {
        await eliminarActividad(act.id);
    }

    // Borrar todos los gastos actuales
    const gastosActuales = await obtenerGastos();
    for (const g of gastosActuales) {
        await eliminarGasto(g.id);
    }

    // Agregar los nuevos
    await importarAgregar(datos);
}

// Ejecutar al cargar el DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarImportacion);
} else {
    inicializarImportacion();
}