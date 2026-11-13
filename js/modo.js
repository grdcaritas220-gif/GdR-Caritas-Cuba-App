/* modo.js — selector «Bienvenido/a» (voluntario/a o coordinador/a) y pantalla de inicio del voluntario.
   No es seguridad: solo decide qué botones se ven. Lo que protege la bitácora es su PIN.
   Guarda en localStorage una sola clave: gdr_modo = 'voluntario' | 'coordinador' (y sincroniza gdr_rol, que ya usa la app). */
(function () {
    'use strict';
    var K = 'gdr_modo';
    var IMG = 'gestion-del-riesgo/assets/';
    // Botones que el voluntario NO ve (para mostrarle uno, quítalo de esta lista):
    var OCULTOS = ['btn-riesgos', 'btn-dashboard', 'btn-roles', 'btn-bitacora', 'btn-asistente', 'btn-biblioteca', 'btn-privacidad'];
    // Frase corta bajo cada botón del voluntario:
    var FRASES = {
        'btn-formacion': 'Tu curso, paso a paso',
        'btn-consultas': 'Respuestas rápidas',
        'btn-guia': 'Cómo usar la app'
    };

    function leer() { try { var v = localStorage.getItem(K); return (v === 'voluntario' || v === 'coordinador') ? v : null; } catch (e) { return null; } }
    function guardar(m) {
        try {
            localStorage.setItem(K, m);
            localStorage.setItem('gdr_rol', m === 'coordinador' ? 'consultor' : 'analista');
        } catch (e) { /* sin almacenamiento: el modo vale solo en esta sesión */ }
    }
    function clase(m) {
        var b = document.body;
        b.classList.remove('modo-voluntario', 'modo-coordinador');
        if (m) b.classList.add('modo-' + m);
    }
    function el(tag, props, texto) {
        var n = document.createElement(tag);
        if (props) for (var k in props) { if (k === 'class') n.className = props[k]; else n.setAttribute(k, props[k]); }
        if (texto) n.textContent = texto;
        return n;
    }

    /* ---------- estilos ---------- */
    var V = 'body.modo-voluntario main .accesos-rapidos';
    var css = document.createElement('style');
    css.textContent =
        // inicio del voluntario: Magnolia a un lado, botones grandes en columna al otro
        '#inicio-vol{display:flex;gap:10px;align-items:flex-start;padding:8px 8px 0}' +
        '#inicio-vol figure{margin:0;flex:0 0 104px;position:sticky;top:8px;text-align:center}' +
        '#inicio-vol figure img{display:block;width:104px;height:auto;max-height:260px;object-fit:contain;background:#fff;border-radius:12px;border:1px solid #dde5ef}' +
        '#inicio-vol figcaption{background:#eef3f9;border-radius:10px;padding:6px 8px;font-size:16px;line-height:1.25;color:#1a3a5c;margin-top:6px}' +
        V + '{display:grid!important;grid-template-columns:1fr!important;gap:12px!important;flex:1;min-width:0}' +
        V + ' .btn-acceso{display:flex!important;flex-direction:row!important;align-items:center;justify-content:flex-start;gap:14px;min-height:76px;padding:10px 14px!important;text-align:left;width:100%}' +
        V + ' .btn-formacion{order:-1}' +   // Formación siempre primero
        V + ' .btn-acceso .ico{width:34px!important;height:34px!important;flex:none}' +
        V + ' .btn-acceso .txt span{display:block;font-size:20px!important;line-height:1.2}' +
        V + ' .btn-acceso .txt small{display:block;font-size:16px;font-weight:400;color:#456;margin-top:2px;line-height:1.25}' +
        // ocultos para el voluntario (van DESPUÉS de lo anterior para ganar)
        OCULTOS.map(function (c) { return V + ' .' + c; }).join(',') + ',' + V + ' #btn-coordinacion{display:none!important}' +
        // coordinador: un solo botón de bitácora
        '.modo-coordinador .btn-roles,.modo-coordinador .btn-bitacora{display:none!important}' +
        '.modo-coordinador #btn-coordinacion{display:block!important}' +
        // selector
        '#modo-capa{position:fixed;inset:0;z-index:99999;background:#f4f7fb;display:flex;align-items:center;justify-content:center;padding:16px;overflow:auto}' +
        '#modo-caja{background:#fff;max-width:680px;width:100%;border-radius:16px;padding:clamp(20px,4vw,36px);box-shadow:0 2px 12px rgba(0,0,0,.15);font-family:inherit}' +
        '#modo-caja h2{margin:0 0 8px;font-size:24px;color:#1a5490}' +
        '#modo-caja p{font-size:18px;line-height:1.45;margin:8px 0}' +
        '#modo-caja button{display:block;width:100%;min-height:clamp(64px,9vw,84px);padding:8px 12px;margin:14px 0 0;font-size:clamp(22px,3.2vw,28px);border-radius:10px;border:0;cursor:pointer;background:#1a5490;color:#fff}' +
        '#modo-caja button.sec{background:#e6edf5;color:#1a3a5c}' +
        '#modo-caja .nota{font-size:15px;color:#555}' +
        '#modo-clim{display:flex;align-items:center;gap:clamp(12px,2.5vw,24px);margin:0 0 10px}' +
        '#modo-clim img{width:clamp(96px,22vw,170px);height:clamp(110px,26vw,200px);object-fit:contain;flex:none}' +
        '#modo-clim .globo{background:#eef3f9;border-radius:14px;padding:14px 18px;font-size:clamp(22px,3.4vw,32px);line-height:1.3;color:#1a3a5c}' +
        '.modo-cambiar{background:none;border:0;color:#1a5490;text-decoration:underline;font-size:inherit;cursor:pointer;padding:0 0 0 8px}';
    document.head.appendChild(css);

    /* ---------- inicio del voluntario ---------- */
    function montarInicio() {
        var caja = document.querySelector('.accesos-rapidos');
        if (!caja || document.getElementById('inicio-vol')) return;
        var envoltura = el('div', { id: 'inicio-vol' });
        var fig = el('figure');
        var img = el('img', { src: IMG + 'magnolia_frontal.webp', alt: 'Magnolia', width: '104' });
        img.onerror = function () { fig.remove(); };            // sin imagen: solo los botones
        fig.appendChild(img);
        fig.appendChild(el('figcaption', null, 'Toca el botón que necesites.'));
        caja.parentNode.insertBefore(envoltura, caja);
        envoltura.appendChild(fig);
        envoltura.appendChild(caja);
        Object.keys(FRASES).forEach(function (c) {
            var b = caja.querySelector('.' + c); var s = b && b.querySelector('span');
            if (!s || b.querySelector('.txt')) return;
            var d = el('div', { class: 'txt' });
            s.parentNode.insertBefore(d, s); d.appendChild(s); d.appendChild(el('small', null, FRASES[c]));
        });
    }
    function desmontarInicio() {
        var e = document.getElementById('inicio-vol'); if (!e) return;
        var caja = e.querySelector('.accesos-rapidos'); if (caja) e.parentNode.insertBefore(caja, e);
        e.remove();
        document.querySelectorAll('.accesos-rapidos .txt').forEach(function (d) { var s = d.querySelector('span'); d.parentNode.insertBefore(s, d); d.remove(); });
    }

    /* ---------- selector ---------- */
    function celularTactil() {
        try { return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 700; } catch (e) { return false; }
    }
    function quitarCapa() { var c = document.getElementById('modo-capa'); if (c) c.remove(); }

    function elegir(m) {
        var primera = !leer();
        guardar(m); clase(m); quitarCapa();
        if (!primera) { location.reload(); return; } // Cambio de modo: recarga para volver a bloquear la bitácora

        enlaceCambiar();
        if (m === 'voluntario') {
            montarInicio();
        } else if (m === 'coordinador') {
            // Pedir el PIN antes de mostrar el menú
            document.querySelector('.accesos-rapidos').style.display = 'none';
            if (typeof window.abrirBitacora === 'function') {
                window.abrirBitacora();
            } else {
                alert('Error: No se pudo cargar la bitácora.');
            }
        }
    }

    function pantallaAviso() {
        var caja = document.getElementById('modo-caja'); caja.replaceChildren(
            el('h2', null, 'Antes de seguir'),
            el('p', null, 'La bitácora del coordinador guarda nombres. Es mejor usarla en una laptop y no en un teléfono, que se pierde o se presta con más facilidad.'),
            (function () { var b = el('button', null, 'Entiendo, continuar'); b.onclick = function () { elegir('coordinador'); }; return b; })(),
            (function () { var b = el('button', { class: 'sec' }, 'Volver'); b.onclick = pantallaEleccion; return b; })());
    }

    function pantallaEleccion() {
        var caja = document.getElementById('modo-caja');
        var bV = el('button', null, 'Soy Voluntario Cáritas');
        bV.onclick = function () { elegir('voluntario'); };
        var bC = el('button', { class: 'sec' }, 'Soy Coordinador GRD Cáritas');
        bC.onclick = function () { if (celularTactil()) pantallaAviso(); else elegir('coordinador'); };
        // Clímaco hace la pregunta. Si la imagen no carga (sin caché), queda solo el texto.
        var img = el('img', { src: IMG + 'climaco_frontal.webp', alt: '' });
        img.onerror = function () { img.remove(); };
        var clim = el('div', { id: 'modo-clim' });
        clim.appendChild(img);
        clim.appendChild(el('div', { class: 'globo' }, 'Hola, soy Clímaco, bienvenido/a. ¿Quién eres?'));
        caja.replaceChildren(clim, bV, bC);
        if (leer()) { var x = el('button', { class: 'sec' }, 'Cancelar'); x.onclick = quitarCapa; caja.appendChild(x); }
    }

    function mostrar() {
        quitarCapa();
        var capa = el('div', { id: 'modo-capa', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Elegir modo' });
        capa.appendChild(el('div', { id: 'modo-caja' }));
        document.body.appendChild(capa);
        pantallaEleccion();
        var primero = capa.querySelector('button'); if (primero) primero.focus();
    }

    function enlaceCambiar() {
        var p = document.querySelector('footer p'); if (!p) return;
        p.querySelectorAll('.modo-cambiar').forEach(function (x) { x.remove(); });
        var b = el('button', { class: 'modo-cambiar', type: 'button' }, 'Cambiar modo'); b.onclick = mostrar; p.appendChild(b);
    }

    function iniciar() {
        var m = leer();
        clase(m); enlaceCambiar();
        if (m === 'voluntario') montarInicio();
        if (!m) mostrar();
    }
    window.GDR_MODO = { leer: leer, cambiar: mostrar };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();