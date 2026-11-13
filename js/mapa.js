/* mapa.js — Ficha del Mapa Parroquial (v2) para el coordinador. */
(function () {
    'use strict';

    const CLAVE = 'gdr_fichas_mapa';

    function leerFichas() {
        try { return JSON.parse(localStorage.getItem(CLAVE) || '[]'); } catch (e) { return []; }
    }
    function guardarFichas(fichas) {
        try { localStorage.setItem(CLAVE, JSON.stringify(fichas)); } catch (e) { alert('No se pudo guardar.'); }
    }

    function el(tag, props, texto) {
        var n = document.createElement(tag);
        if (props) for (var k in props) { if (k === 'class') n.className = props[k]; else n.setAttribute(k, props[k]); }
        if (texto) n.textContent = texto;
        return n;
    }

    // --- Función principal que abre el Mapa ---
    window.abrirMapa = function () {
        const contenedor = document.getElementById('resultados');
        if (!contenedor) return;

        contenedor.innerHTML = `
            <button class="btn-volver" onclick="volverInicio()">← Volver</button>
            <div class="formacion-contenedor" style="padding: 20px; text-align: center;">
                <h2 style="color: #0b3b60;">Mapa Parroquial</h2>
                <p>Ficha v2 para registrar los riesgos de la comunidad.</p>
                <div id="mapa-formulario" style="margin-top: 20px; text-align: left;"></div>
                <div id="mapa-lista" style="margin-top: 30px; text-align: left;"></div>
            </div>
        `;

        pintarFormulario();
        pintarLista();
    };

    function pintarFormulario() {
        const caja = document.getElementById('mapa-formulario');
        if (!caja) return;

        const fecha = new Date().toISOString().split('T')[0];

        caja.innerHTML = `
            <h3>Nueva ficha</h3>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <label>Fecha: <input type="date" id="mapa-fecha" value="${fecha}" style="width:100%; padding:8px;"></label>
                <label>Código de participante: <input type="text" id="mapa-codigo" placeholder="HAB-0007-K" style="width:100%; padding:8px;"></label>
                <label>Zona (sin dirección exacta): <input type="text" id="mapa-zona" placeholder="Ej. Barrio costero" style="width:100%; padding:8px;"></label>
                <label>Amenaza: <select id="mapa-amenaza" style="width:100%; padding:8px;">
                    <option value="">Selecciona...</option>
                    <option>Ciclón</option><option>Inundación</option><option>Penetración del mar</option>
                    <option>Sequía</option><option>Derrumbe</option><option>Incendio</option><option>Otra</option>
                </select></label>
                <label>Expuesto (cantidades, sin nombres): <input type="text" id="mapa-expuesto" placeholder="Ej. 12 casas, 5 mayores" style="width:100%; padding:8px;"></label>
                <label>Fragilidad (qué hace el daño mayor): <input type="text" id="mapa-fragilidad" style="width:100%; padding:8px;"></label>
                <label>Con qué contamos: <input type="text" id="mapa-capacidad" style="width:100%; padding:8px;"></label>
                <label>Prioridad: 
                    <select id="mapa-prioridad" style="width:100%; padding:8px;">
                        <option value="ALTA">ALTA</option>
                        <option value="MEDIA">MEDIA</option>
                        <option value="BAJA">BAJA</option>
                    </select>
                </label>
                <label>Medida propuesta: <input type="text" id="mapa-medida" style="width:100%; padding:8px;"></label>
                <button onclick="guardarFichaMapa()" style="background: #1a5490; color: white; padding: 12px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; margin-top: 10px;">Guardar ficha</button>
            </div>
        `;
    }

    window.guardarFichaMapa = function () {
        const ficha = {
            fecha: document.getElementById('mapa-fecha').value,
            codigo: document.getElementById('mapa-codigo').value,
            zona: document.getElementById('mapa-zona').value,
            amenaza: document.getElementById('mapa-amenaza').value,
            expuesto: document.getElementById('mapa-expuesto').value,
            fragilidad: document.getElementById('mapa-fragilidad').value,
            capacidad: document.getElementById('mapa-capacidad').value,
            prioridad: document.getElementById('mapa-prioridad').value,
            medida: document.getElementById('mapa-medida').value
        };

        if (!ficha.zona || !ficha.amenaza) {
            alert('La zona y la amenaza son obligatorias.');
            return;
        }

        const fichas = leerFichas();
        fichas.push(ficha);
        guardarFichas(fichas);
        alert('Ficha guardada.');

        // Limpiar formulario
        document.getElementById('mapa-fecha').value = new Date().toISOString().split('T')[0];
        document.getElementById('mapa-codigo').value = '';
        document.getElementById('mapa-zona').value = '';
        document.getElementById('mapa-amenaza').value = '';
        document.getElementById('mapa-expuesto').value = '';
        document.getElementById('mapa-fragilidad').value = '';
        document.getElementById('mapa-capacidad').value = '';
        document.getElementById('mapa-medida').value = '';

        pintarLista();
    };

    function pintarLista() {
        const caja = document.getElementById('mapa-lista');
        if (!caja) return;

        const fichas = leerFichas();
        if (fichas.length === 0) {
            caja.innerHTML = '<p>No hay fichas guardadas.</p>';
            return;
        }

        let html = '<h3>Fichas guardadas</h3><ul style="list-style: none; padding: 0;">';
        fichas.forEach((f, i) => {
            html += `<li style="background: #f4f6f8; padding: 10px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #1a5490;">
                <strong>${f.zona}</strong> - ${f.amenaza} (${f.prioridad})<br>
                <small>${f.fecha} | Código: ${f.codigo || 'N/A'}</small><br>
                <button onclick="borrarFichaMapa(${i})" style="background: #d9534f; color: white; border: none; padding: 4px 8px; border-radius: 4px; margin-top: 5px; cursor: pointer;">Borrar</button>
            </li>`;
        });
        html += '</ul>';
        caja.innerHTML = html;
    }

    window.borrarFichaMapa = function (indice) {
        if (!confirm('¿Borrar esta ficha?')) return;
        const fichas = leerFichas();
        fichas.splice(indice, 1);
        guardarFichas(fichas);
        pintarLista();
    };

    // --- Mostrar el botón en modo coordinador ---
    document.addEventListener('DOMContentLoaded', () => {
        const esLaptop = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname === '';
        if (esLaptop) {
            const btn = document.getElementById('btn-mapa');
            if (btn) btn.style.display = 'block';
        }
    });
})();