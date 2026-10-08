// ============================================
// MOTOR DE REGLAS - GdR Cáritas Cuba
// ============================================

let motorReglas = null;
let todasLasPreguntas = [];

async function cargarMotorReglas() {
    try {
        const respuesta = await fetch('./datos/motor_reglas.json');
        motorReglas = await respuesta.json();

        todasLasPreguntas = [];
        motorReglas.bloques.forEach(bloque => {
            bloque.preguntas.forEach(pregunta => {
                pregunta.bloque_id = bloque.id;
                pregunta.bloque_nombre = bloque.nombre;
                todasLasPreguntas.push(pregunta);
            });
        });

        console.log('✅ Motor de reglas cargado:', todasLasPreguntas.length, 'preguntas');
        mostrarBloques();

    } catch (error) {
        console.error('❌ Error al cargar el motor de reglas:', error);
        document.getElementById('resultados').innerHTML =
            '<p class="mensaje-inicial">Error al cargar los datos. Verifica que el archivo motor_reglas.json exista.</p>';
    }
}

function mostrarBloques() {
    const contenedor = document.getElementById('lista-bloques');
    contenedor.innerHTML = '';

    motorReglas.bloques.forEach(bloque => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-bloque';
        tarjeta.innerHTML = `
      <h3>${bloque.nombre}</h3>
      <p>${bloque.preguntas.length} preguntas</p>
    `;
        tarjeta.addEventListener('click', () => mostrarBloque(bloque));
        contenedor.appendChild(tarjeta);
    });
}

function mostrarBloque(bloque) {
    const contenedor = document.getElementById('resultados');
    contenedor.innerHTML = `
    <button class="btn-volver" onclick="volverInicio()">← Volver</button>
    <h2 style="color:#1a5490; margin-bottom:16px;">${bloque.nombre}</h2>
  `;

    bloque.preguntas.forEach(pregunta => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-resultado';
        tarjeta.innerHTML = `
      <h3>${pregunta.pregunta}</h3>
      <p>${pregunta.respuesta_corta}</p>
    `;
        tarjeta.addEventListener('click', () => mostrarPregunta(pregunta));
        contenedor.appendChild(tarjeta);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buscar(consulta) {
    if (!consulta || consulta.trim().length < 2) {
        document.getElementById('resultados').innerHTML =
            '<p class="mensaje-inicial">Escribe al menos 2 letras para buscar</p>';
        return;
    }

    const texto = consulta.toLowerCase().trim();
    const palabras = texto.split(' ').filter(p => p.length > 2);

    const resultados = todasLasPreguntas.filter(pregunta => {
        const contenido = (
            pregunta.pregunta + ' ' +
            pregunta.respuesta_corta + ' ' +
            pregunta.respuesta_larga + ' ' +
            pregunta.palabras_clave.join(' ')
        ).toLowerCase();

        return palabras.every(palabra => contenido.includes(palabra));
    });

    const contenedor = document.getElementById('resultados');
    contenedor.innerHTML = '';

    if (resultados.length === 0) {
        contenedor.innerHTML = '<p class="mensaje-inicial">No se encontraron resultados. Intenta con otras palabras.</p>';
        return;
    }

    const titulo = document.createElement('h2');
    titulo.style.color = '#1a5490';
    titulo.style.marginBottom = '16px';
    titulo.textContent = `${resultados.length} resultado(s)`;
    contenedor.appendChild(titulo);

    resultados.forEach(pregunta => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-resultado';
        tarjeta.innerHTML = `
      <h3>${pregunta.pregunta}</h3>
      <p>${pregunta.respuesta_corta}</p>
    `;
        tarjeta.addEventListener('click', () => mostrarPregunta(pregunta));
        contenedor.appendChild(tarjeta);
    });
}

function mostrarPregunta(pregunta) {
    const contenedor = document.getElementById('resultados');
    contenedor.innerHTML = `
    <button class="btn-volver" onclick="volverInicio()">← Volver</button>
    <div class="detalle-pregunta">
      <h2>${pregunta.pregunta}</h2>
      
      <h3>Respuesta corta</h3>
      <p>${pregunta.respuesta_corta}</p>
      
      <h3>Explicación</h3>
      <p>${pregunta.respuesta_larga}</p>
      
      <h3>Pasos sugeridos</h3>
      <ul>
        ${pregunta.pasos.map(paso => `<li>${paso}</li>`).join('')}
      </ul>
      
      <h3>Documentos relacionados</h3>
      <ul>
        ${pregunta.documentos_relacionados.map(doc => `<li>${doc}</li>`).join('')}
      </ul>
      
      <h3>Normativa de referencia</h3>
      <ul>
        ${pregunta.normativa.map(norm => `<li>${norm}</li>`).join('')}
      </ul>
    </div>
  `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverInicio() {
    document.getElementById('resultados').innerHTML =
        '<p class="mensaje-inicial">Escribe una pregunta o explora las categorías</p>';
    document.getElementById('input-busqueda').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    cargarMotorReglas();

    document.getElementById('btn-buscar').addEventListener('click', () => {
        buscar(document.getElementById('input-busqueda').value);
    });

    document.getElementById('input-busqueda').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            buscar(document.getElementById('input-busqueda').value);
        }
    });

    document.getElementById('input-busqueda').addEventListener('input', (e) => {
        if (e.target.value.length >= 3) {
            buscar(e.target.value);
        }
    });
});