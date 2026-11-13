/* ===== codigo-ui.js — código de participante en el curso (sin nombres) =====
   Cargar en gestion-del-riesgo/index.html DESPUÉS de curso.js y de codigo-grd.js:
     <script src="codigo-grd.js"></script>
     <script src="curso.js"></script>
     <script src="codigo-ui.js"></script>
   No depende de cómo esté escrita vistaMenu(): cuando aparece la lista de módulos,
   pone la cajita del código, el aviso y el botón "Generar mi avance". Si ya había una
   cajita #perfil-codigo, la sustituye por una que sí valida. */

function codigoGuardado() { return (store.get('climaco_perfil') || {}).codigo || ''; }
function campoCodigo(el) {
    const aviso = $('#perfil-aviso'); const t = el.value.trim();
    if (!t) { store.set('climaco_perfil', { codigo: '' }); if (aviso) aviso.textContent = ''; return; }
    const r = CodigoGRD.normalizarCodigo(t);
    if (r.ok) { store.set('climaco_perfil', { codigo: r.codigo }); el.value = r.codigo; if (aviso) aviso.textContent = 'Código guardado.'; }
    else if (aviso) aviso.textContent = r.error;
}
/* 0 sin empezar · 1 empezado · 2 cerrado · 3 cumplido (cerrado, 50 % o más de puntos y actividad de grupo si la tiene) */
function estadoDeModulo(mod) {
    const a = avance[mod.id];
    if (!a) return 0;
    if (!a.cerrado) return (a.paso > 0 || Object.keys(a.puntos || {}).length) ? 1 : 0;
    const mx = maxPts(mod);
    const got = Object.values(a.puntos || {}).reduce((s, v) => s + v, 0);
    const pc = (typeof a.pc === 'number') ? a.pc : (mx ? Math.round(100 * got / mx) : 100);
    const tieneGrupal = !!mod.pasos.find(x => x.t === 'grupal');
    return (pc >= 50 && (!tieneGrupal || a.grupal)) ? 3 : 2;
}
function estadosAvance() { const e = {}; MODULOS.forEach(m => { const s = estadoDeModulo(m); if (s) e[m.id] = s; }); return e; }
function lineaDeAvance() {
    const c = codigoGuardado(); if (!c) return null;
    return CodigoGRD.armarLinea(c, CodigoGRD.hoy(), estadosAvance());
}
function descargarConstancia(got, mx) { mostrarAvance(); }
function copiarLinea(ta, aviso) {
    const listo = () => { aviso.textContent = 'Copiado. Pégalo en el mensaje para tu coordinador.'; };
    const respaldo = () => {
        ta.focus(); ta.select();
        try { document.execCommand('copy') ? listo() : (aviso.textContent = 'Selecciona el texto y cópialo a mano.'); }
        catch (e) { aviso.textContent = 'Selecciona el texto y cópialo a mano.'; }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(ta.value).then(listo, respaldo); else respaldo();
}
function mostrarAvance() {
    introStop(); cur = null; closeAsk();
    const palabras = { 1: 'empezado', 2: 'cerrado', 3: 'cumplido' };
    const nodos = [h('h2', {}, 'Mi avance para mi coordinador')];
    const code = codigoGuardado();
    if (!code) {
        const aviso = h('p', { class: 'src', id: 'avance-aviso' }, '');
        const inp = h('input', { type: 'text', id: 'avance-codigo', maxlength: 14, placeholder: 'HAB-0007-K' });
        nodos.push(h('p', {}, 'Primero escribe el código que te dio tu coordinador (por ejemplo HAB-0007-K). No escribas tu nombre.'),
            h('p', {}, h('label', {}, 'Tu código: ', inp)), aviso,
            h('div', { class: 'row' }, h('button', {
                class: 'btn', onclick: () => {
                    const r = CodigoGRD.normalizarCodigo(inp.value);
                    if (r.ok) { store.set('climaco_perfil', { codigo: r.codigo }); mostrarAvance(); } else aviso.textContent = r.error;
                }
            }, 'Guardar código'), h('button', { class: 'btn ghost', onclick: vistaMenu }, 'Volver al menú')));
    } else {
        const estados = estadosAvance(), linea = lineaDeAvance();
        const filas = MODULOS.filter(m => estados[m.id]).map(m => h('li', {}, m.id + ' · ' + m.titulo + ' — ' + palabras[estados[m.id]]));
        const ta = h('textarea', { rows: 3, readonly: true, id: 'linea-avance', 'aria-label': 'Línea de avance', style: 'width:100%;font-family:monospace' }, linea);
        const aviso = h('p', { class: 'src', 'aria-live': 'polite' }, '');
        nodos.push(h('p', {}, 'Tu código: ', h('b', {}, code)),
            filas.length ? h('ul', {}, filas) : h('p', {}, 'Todavía no has empezado ningún módulo.'),
            h('p', { class: 'src' }, 'Cumplido = cerraste el módulo con 50 % o más de puntos y, si tiene actividad de grupo, la marcaste. El puntaje es de práctica: tu coordinador confirma tu formación.'),
            h('p', {}, 'Manda esta línea a tu coordinador (por mensaje, SMS, USB o dictándola). Lleva solo tu código y el estado de cada módulo; no lleva tu nombre ni lo que escribiste en las actividades.'),
            ta, aviso,
            h('div', { class: 'row' },
                h('button', { class: 'btn', onclick: () => copiarLinea(ta, aviso) }, 'Copiar la línea'),
                h('button', { class: 'btn ghost', onclick: () => descargar('avance_' + code, linea, 'txt') }, 'Descargar como archivo'),
                h('button', { class: 'btn ghost', onclick: () => { store.set('climaco_perfil', { codigo: '' }); mostrarAvance(); } }, 'Cambiar mi código'),
                h('button', { class: 'btn ghost', onclick: vistaMenu }, 'Volver al menú')));
    }
    $('#main').replaceChildren(h('div', { class: 'card' }, ...nodos));
}

/* ---- Conexión con la pantalla (no depende de la estructura de vistaMenu) ---- */
(function () {
    const RENOMBRAR = {
        'Descargar constancia para mi coordinador': 'Generar mi avance para mi coordinador',
        'Descargar mi avance (con mis textos)': 'Guardar mis respuestas (solo para mí, no lo envíes)'
    };
    function montar() {
        const main = document.getElementById('main'); if (!main) return;
        main.querySelectorAll('button').forEach(b => { const t = b.textContent.trim(); if (RENOMBRAR[t]) b.textContent = RENOMBRAR[t]; });
        const mods = main.querySelector('.mods'); if (!mods) return;
        const actual = document.getElementById('perfil-codigo');
        if (!actual || !actual.dataset.listo) {
            const viejo = document.getElementById('perfil-nombre');
            if (viejo) { const pv = viejo.closest('p'); if (pv) pv.remove(); }
            const inp = document.createElement('input');
            inp.type = 'text'; inp.id = 'perfil-codigo'; inp.maxLength = 14; inp.placeholder = 'HAB-0007-K';
            inp.setAttribute('autocomplete', 'off'); inp.setAttribute('autocapitalize', 'characters');
            inp.dataset.listo = '1'; inp.value = codigoGuardado();
            inp.addEventListener('change', () => campoCodigo(inp));
            if (actual) { const lab = actual.closest('label'); if (lab) { lab.firstChild && lab.firstChild.nodeType === 3 && (lab.firstChild.textContent = 'Tu código (te lo da tu coordinador; no escribas tu nombre): '); } actual.replaceWith(inp); }
            else {
                const p = document.createElement('p'), lab = document.createElement('label');
                lab.append('Tu código (te lo da tu coordinador; no escribas tu nombre): ', inp); p.append(lab); mods.before(p);
            }
        }
        if (!document.getElementById('perfil-aviso')) {
            const av = document.createElement('p'); av.id = 'perfil-aviso'; av.className = 'src';
            const pb = document.createElement('p'), b = document.createElement('button');
            b.className = 'btn'; b.textContent = 'Generar mi avance para mi coordinador'; b.addEventListener('click', mostrarAvance);
            pb.append(b); mods.before(av, pb);
        }
    }
    function iniciar() {
        const main = document.getElementById('main'); if (!main) return;
        new MutationObserver(montar).observe(main, { childList: true, subtree: true });
        montar();
        const p = store.get('climaco_perfil');
        if (p && p.nombre !== undefined) store.set('climaco_perfil', { codigo: p.codigo || '' });   // borra nombres guardados antes
        if (/[?&]avance=1(&|$)/.test(location.search)) mostrarAvance();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();