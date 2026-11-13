/* ============ DATOS ============ */
const MODULOS_JSON = [{ "modulo": "B1", "titulo": "Ambiente y desarrollo sostenible", "nivel": "basico", "version": "0.1", "fecha": "2026-10-24", "estado_global": "BORRADOR. No cargar en la IA hasta que Cáritas valide el contenido y se resuelvan los datos marcados 'verificar'.", "base": "Capítulo I y tema 2 del capítulo II del taller 'Articulación de respuestas humanitarias centrado en las personas', reescritos y corregidos.", "objetivo": "Al terminar, la persona podrá explicar con un ejemplo de su barrio cómo el deterioro ambiental y la pobreza aumentan la vulnerabilidad ante un fenómeno natural.", "duracion_estimada_min": 90, "fragmentos": [{ "id": "B1-01", "titulo": "Las personas dejamos huella", "texto": "El planeta ha cambiado durante millones de años por fuerzas de la naturaleza. Las personas también cambiamos el ambiente: cazamos, sembramos, construimos y consumimos. Cuando el cambio lo causa una acción humana se llama acción antrópica. Esa huella puede ser positiva o negativa, y en ambos casos tiene consecuencias. En Cuba, el Mural de la Prehistoria de Viñales (Leovigildo González Morillo, 1961) recrea esa historia de evolución y presencia humana.", "fuente": "Taller, cap. I, tema 1", "estado": "validado_pendiente_firma_caritas", "escena_climaco": "Clímaco: Magnolia, entonces cada cosa que hacemos deja huella. Magnolia: Así es, y la pregunta es qué huella queremos dejar." }, { "id": "B1-02", "titulo": "Datos de biodiversidad del taller original", "texto": "El taller original afirma que en Cuba hay unas 98 especies animales y 157 especies de árboles en peligro de extinción por causas como la destrucción de hábitats, la caza indiscriminada, la deforestación, las especies invasoras y la agricultura insostenible.", "fuente": "Taller, cap. I, tema 1 (sin cita de origen)", "estado": "verificar", "nota_verificacion": "El taller no cita la fuente de las cifras. Buscar en la Agencia de Medio Ambiente (CITMA) o en la lista oficial de especies amenazadas. No usar las cifras como hechos hasta confirmarlas." }, { "id": "B1-03", "titulo": "¿Qué es el medio ambiente?", "texto": "Mucha gente piensa en montañas, ríos y aves. Eso es el ambiente natural, formado por factores bióticos (seres vivos: plantas, animales, hongos, bacterias) y abióticos (elementos sin vida pero necesarios para la vida: agua, suelo, aire, luz solar, temperatura, minerales). Cuando sumamos a las personas, sus casas, calles, cultivos, basureros y fábricas, hablamos del ambiente construido o intervenido. El enfoque sistémico une todo: el ambiente es el conjunto de componentes físicos, químicos, biológicos y sociales que pueden afectar, ahora o más adelante, a los seres vivos y a las actividades humanas (definición de la Conferencia de Naciones Unidas sobre el Medio Ambiente, Estocolmo, 1972).", "fuente": "Taller, cap. I, tema 2; Conferencia de Estocolmo 1972", "estado": "validado_pendiente_firma_caritas", "escena_climaco": "Clímaco: Vi las fosas desbordadas y la basura en mi barrio. Magnolia: Eso no es solo un problema de basura: es un problema de decisiones, hábitos, dinero y educación, todo junto." }, { "id": "B1-04", "titulo": "Un problema ambiental tiene muchas causas", "texto": "La basura en una esquina no depende de una sola cosa. Influyen las decisiones políticas, el dinero disponible para recogerla, los hábitos de la gente y la educación ambiental. Y tiene consecuencias: arroyos tapados que inundan casas cuando llueve, playas contaminadas y niñas, niños y personas mayores enfermos. Por eso se interviene mejor entre vecinos, instituciones y autoridades, no solo mirando el problema.", "fuente": "Taller, cap. I, tema 2", "estado": "validado_pendiente_firma_caritas" }, { "id": "B1-05", "titulo": "Desarrollo y desarrollo sostenible", "texto": "El desarrollo económico busca generar riqueza para mejorar la vida de las personas. El desarrollo sostenible suma lo ambiental: integra lo económico, lo social y lo ambiental a largo plazo, para satisfacer las necesidades de hoy sin comprometer las oportunidades de las generaciones futuras. La diferencia clave es mirar solo el ahora o cuidar también el mañana.", "fuente": "Taller, cap. I, tema 3 (definición de desarrollo sostenible de uso internacional)", "estado": "validado_pendiente_firma_caritas" }, { "id": "B1-06", "titulo": "Dos terremotos en 2010: Haití y Chile", "texto": "Haití sufrió un terremoto de magnitud 7,0 el 12 de enero de 2010 y Chile uno de magnitud 8,8 el 27 de febrero de 2010. El de Chile fue más fuerte, y sin embargo murieron muchas menos personas: el taller cita más de 200 000 en Haití y 525 en Chile. Los expertos señalan que el nivel de preparación, las normas de construcción y el desarrollo de cada país pesaron mucho en la diferencia. La magnitud sola no explica la tragedia: la vulnerabilidad también cuenta.", "fuente": "Taller, cap. I, tema 3, corregido", "estado": "verificar", "nota_verificacion": "Las cifras de víctimas de Haití varían mucho según la fuente (el taller dice más de 200 000). Citar fuente y rango. Confirmar fecha y magnitudes con el servicio geológico de EE. UU. (USGS)." }, { "id": "B1-07", "titulo": "CORRECCIÓN: '64 veces más fuerte'", "texto": "El taller original dice que el sismo de Chile fue '64 veces superior' al de Haití. Una diferencia de 1,8 en la escala de magnitud implica unas 63 veces más amplitud de las ondas, pero cerca de 500 veces más energía liberada. Por eso conviene decir 'mucho más fuerte' y evitar afirmar que fue 64 veces más fuerte sin aclarar de qué se mide.", "fuente": "Cálculo con la definición estándar de la escala de magnitud", "estado": "verificar", "nota_verificacion": "Revisar con un sismólogo del Centro Nacional de Investigaciones Sismológicas o con USGS." }, { "id": "B1-08", "titulo": "Dos barrios pobres, dos resultados", "texto": "Imagina dos barrios con pocos recursos. En uno, las familias viven en una ladera de lomas sin árboles, con casas muy frágiles y arrojan basura al arroyo. En el otro, las familias se organizaron, construyeron con mejores materiales, eligieron un lugar más seguro, siembran árboles y cuidan el agua. Ante el mismo evento, el primer barrio tendrá más daño y recuperará con más dificultad. La pobreza y el deterioro ambiental se alimentan entre sí y aumentan la vulnerabilidad.", "fuente": "Taller, cap. I, tema 3 (ejemplo de Clímaco)", "estado": "validado_pendiente_firma_caritas", "escena_climaco": "Clímaco: Ahora lo veo: no es solo mala suerte, es lo que hicimos antes y cómo nos organizamos." }, { "id": "B1-09", "titulo": "Problemas ambientales que el taller identifica en Cuba", "texto": "El taller señala cinco problemas, todos con origen en causas humanas: degradación de los suelos, poca agua disponible por habitante, pérdida de biodiversidad, contaminación de las aguas y manejo inadecuado de la basura. Las causas incluyen la sobreexplotación de cuencas, la falta de alcantarillado, los vertimientos sin tratamiento, la deforestación y la escasez de equipos de recogida.", "fuente": "Taller, cap. I, tema 4", "estado": "validado_pendiente_firma_caritas" }, { "id": "B1-10", "titulo": "Cifras del taller que hay que verificar antes de usar", "texto": "El taller afirma que cerca del 65 % de los suelos del país tiene algún grado de afectación, que cerca del 30 % del territorio ha sido alcanzado por penetraciones del mar y que el 42 % está en alto peligro de sequía. También habla de 15 provincias, 168 municipios, 4195 cayos e islotes y 11,2 millones de habitantes. En la introducción dice que Cuba tiene 886 km², lo cual es un error: la superficie del país es de alrededor de 110 000 km².", "fuente": "Taller, introducción y cap. I, tema 4", "estado": "verificar", "nota_verificacion": "Confirmar con la Oficina Nacional de Estadística e Información (ONEI) y CITMA. La población pudo cambiar. El '886 km²' debe corregirse en el material original." }], "preguntas": [{ "id": "B1-P1", "enunciado": "Cuando una acción humana cambia la naturaleza se llama:", "opciones": ["Acción antrópica", "Acción humanoide", "Acción homínida"], "correcta": 0, "explicacion": "Antrópico significa causado por el ser humano.", "fragmento": "B1-01", "estado": "pendiente_validacion" }, { "id": "B1-P2", "enunciado": "¿Cuál de estos es un factor abiótico?", "opciones": ["Las bacterias", "El agua", "Un árbol", "Una abeja"], "correcta": 1, "explicacion": "Los factores abióticos no tienen vida pero son necesarios para la vida: agua, suelo, aire, luz, minerales.", "fragmento": "B1-03", "estado": "pendiente_validacion" }, { "id": "B1-P3", "enunciado": "Un basurero a cielo abierto en un solar de tu barrio es un ejemplo de:", "opciones": ["Ambiente natural", "Ambiente construido o intervenido", "Factor biótico", "Ninguno"], "correcta": 1, "explicacion": "Surge de la actividad humana, por eso forma parte del ambiente construido o intervenido.", "fragmento": "B1-03", "estado": "pendiente_validacion" }, { "id": "B1-P4", "enunciado": "¿Cuál es la diferencia principal del desarrollo sostenible frente al desarrollo económico?", "opciones": ["Genera más riqueza", "Integra lo ambiental y piensa en las generaciones futuras", "Cuesta menos", "Solo lo hacen los gobiernos"], "correcta": 1, "explicacion": "Integra lo económico, lo social y lo ambiental a largo plazo.", "fragmento": "B1-05", "estado": "pendiente_validacion" }, { "id": "B1-P5", "enunciado": "En el caso de Haití y Chile en 2010, ¿qué ayuda a explicar la gran diferencia de víctimas?", "opciones": ["Solo la magnitud del sismo", "El nivel de preparación y desarrollo de cada país", "La suerte", "La hora del día solamente"], "correcta": 1, "explicacion": "El sismo chileno fue más fuerte y hubo muchas menos víctimas: pesaron la preparación, la construcción y el desarrollo.", "fragmento": "B1-06", "estado": "pendiente_validacion" }, { "id": "B1-P6", "enunciado": "Dos barrios pobres reciben el mismo evento. El que se organizó, construyó mejor y cuidó su entorno probablemente tendrá:", "opciones": ["Más daño", "Igual daño", "Menos daño y mejor recuperación", "No se puede saber nada"], "correcta": 2, "explicacion": "Menor vulnerabilidad significa menores daños y recuperación más rápida.", "fragmento": "B1-08", "estado": "pendiente_validacion" }], "actividad": { "titulo": "Mi barrio, mi ambiente", "instruccion": "Dibuja o escribe tu idea de ambiente. Luego añade lo construido por las personas, sus problemas, causas y consecuencias. Compártelo con un vecino o compañero.", "producto": "Hoja o dibujo; sirve de insumo para el mapa de riesgo del módulo B10." }, "pendientes": ["Validación técnica y firma de Cáritas.", "Verificar todos los fragmentos marcados 'verificar'.", "Decidir si se conserva la jerga cubana de las escenas; revisar con facilitadores."] }];

const PREGUNTA_IA_RECHAZO = "Eso no está en el material del curso. Consúltalo con tu facilitador o con la Defensa Civil.";

/* ============ UTILIDADES ============ */
const $ = s => document.querySelector(s);
function h(tag, props, ...kids) {
  const e = document.createElement(tag);
  for (const k in (props || {})) {
    const v = props[k];
    if (k === 'class') e.className = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) e.setAttribute(k, v);
  }
  kids.flat(Infinity).forEach(c => { if (c == null || c === false) return; e.append(c.nodeType ? c : document.createTextNode(String(c))); });
  return e;
}
const store = {
  mem: {},
  get(k) { try { const v = localStorage.getItem(k); if (v) return JSON.parse(v); } catch (e) { } return this.mem[k] || null; },
  set(k, v) { this.mem[k] = v; try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }
};
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

/* ============ CLÍMACO ============ */
const CL_IMG = { "frontal": "assets/climaco_frontal.webp", "boca_a": "assets/climaco_boca_a.webp", "boca_o": "assets/climaco_boca_o.webp", "parpadeo": "assets/climaco_parpadeo.webp", "amable": "assets/climaco_amable.webp", "atento": "assets/climaco_atento.webp", "sorprendido": "assets/climaco_sorprendido.webp", "aplauso": "assets/climaco_aplauso.webp" };
const POSE = { neutro: 'frontal', hablar: 'frontal', senalar: 'frontal', saludar: 'amable', pensar: 'atento', feliz: 'aplauso', preocupado: 'sorprendido' };
const CL_NOANIM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const MG_IMG = { "amable": "assets/magnolia_amable.webp", "aplauso": "assets/magnolia_aplauso.webp", "atento": "assets/magnolia_atento.webp", "frontal": "assets/magnolia_frontal.webp", "sorprendida": "assets/magnolia_sorprendida.webp" };
let estTimer, hablaTimer, parpTimer, enHabla = false, poseAct = 'frontal', quienAct = 'C';
(function () { const c = $('#cl'); Object.keys(CL_IMG).forEach(k => { const im = h('img', { src: CL_IMG[k], alt: '', 'data-f': k, draggable: 'false' }); c.append(im); }); })();
(function () { const c = $('#mg'); Object.keys(MG_IMG).forEach(k => c.append(h('img', { src: MG_IMG[k], alt: '', 'data-f': k, draggable: 'false' }))); const f = c.querySelector('img[data-f="frontal"]'); if (f) f.classList.add('on'); })();
/* Dos personajes: solo se ve uno a la vez (corte instantaneo, sin fundido, para no titilar). Magnolia hoy tiene un solo cuadro;
   si se agregan mas en assets_magnolia (parpadeo, boca_a, boca_o...) hay que extender hablarM(). */
function personaje(q) {
  if (q === quienAct) return;
  quienAct = q; detenerHabla(); detenerHablaM(); clearTimeout(estTimer);
  $('#cl').hidden = q !== 'C'; $('#mg').hidden = q !== 'M'; $('#bubble').classList.toggle('m', q === 'M');
  if (q === 'C') { poseAct = 'frontal'; cuadro('frontal', true); }
}
/* Magnolia: usa los cuadros que existan en assets_magnolia. Obligatorio: frontal. Opcionales: boca_a, boca_o (hablar) y parpadeo.
   Sin boca_a/boca_o se queda con un balanceo suave. Cambio de cuadro instantaneo, igual que Clímaco. */
let hablaTimerM, parpTimerM, poseM = 'frontal';
const tieneM = k => !!MG_IMG[k];
function cuadroM(f) { const c = $('#mg'); const k = tieneM(f) ? f : 'frontal'; c.querySelectorAll('img').forEach(im => im.classList.toggle('on', im.dataset.f === k)); }
function ponerPoseM(p) { poseM = tieneM(p) ? p : 'frontal'; cuadroM(poseM); }
function detenerHablaM() { clearInterval(hablaTimerM); hablaTimerM = null; cuadroM(poseM); $('#mg').classList.remove('habla'); }
function hablarM(texto) {
  const c = $('#mg'); detenerHablaM(); if (CL_NOANIM) return;
  if (poseM === 'frontal' && tieneM('boca_a') && tieneM('boca_o')) {
    const fin = Date.now() + Math.min(3500, 45 * String(texto || '').length + 400); let ult = '';
    hablaTimerM = setInterval(() => {
      if (Date.now() > fin || quienAct !== 'M') { detenerHablaM(); return; }
      let f; do { f = pick(['boca_a', 'boca_o', 'frontal']); } while (f === ult); ult = f; cuadroM(f);
    }, 120);
  } else { void c.offsetWidth; c.classList.add('habla'); }
}
function parpadeoM() {
  clearTimeout(parpTimerM);
  parpTimerM = setTimeout(() => { if (quienAct === 'M' && !hablaTimerM && poseM === 'frontal' && tieneM('parpadeo')) { cuadroM('parpadeo'); setTimeout(() => { if (!hablaTimerM) cuadroM(poseM); }, 140); } parpadeoM(); }, 3000 + Math.random() * 3500);
}
function cuadro(f, rapido) { const c = $('#cl'); c.classList.toggle('rapido', !!rapido); c.querySelectorAll('img').forEach(im => im.classList.toggle('on', im.dataset.f === f)); }
function estado(e, ms) {
  const s = $('#cl'); s.dataset.estado = e; clearTimeout(estTimer);
  poseAct = POSE[e] || 'frontal'; if (poseAct !== 'frontal') detenerHabla(); if (!enHabla) cuadro(poseAct);
  if (e !== 'neutro') estTimer = setTimeout(() => { s.dataset.estado = 'neutro'; poseAct = 'frontal'; if (!enHabla) cuadro('frontal'); }, ms || 2000);
}
function detenerHabla() { clearInterval(hablaTimer); enHabla = false; }
function hablar(texto) {
  if (CL_NOANIM || poseAct !== 'frontal') return;
  detenerHabla(); enHabla = true; const fin = Date.now() + Math.min(3500, 45 * String(texto).length + 400); let ult = '';
  hablaTimer = setInterval(() => {
    if (Date.now() > fin || poseAct !== 'frontal') { detenerHabla(); cuadro(poseAct, true); return; }
    let f; do { f = pick(['boca_a', 'boca_o', 'frontal']); } while (f === ult); ult = f; cuadro(f, true);
  }, 120);
}
function parpadeo() {
  clearTimeout(parpTimer);
  parpTimer = setTimeout(() => { if (!enHabla && poseAct === 'frontal') { cuadro('parpadeo', true); setTimeout(() => { if (!enHabla && poseAct === 'frontal') cuadro('frontal', true); }, 140); } parpadeo(); }, 3000 + Math.random() * 3500);
}
function say(t, mood, q, pose) {
  if (q) personaje(q);
  $('#bubble').replaceChildren(h('span', { class: 'nom' }, quienAct === 'M' ? 'Profesora Magnolia' : 'Clímaco'), t);
  if (quienAct === 'M') { ponerPoseM(pose || 'frontal'); hablarM(t); return; }
  if (mood === 'hop') estado('feliz', 1800); else if (mood === 'shake') estado('preocupado', 1800); else hablar(t);
}
function avatarCabeza(q) { return h('img', { class: 'cabeza-av' + (q === 'M' ? ' m' : ''), src: (q === 'M' && MG_IMG.frontal) ? MG_IMG.frontal : CL_IMG.frontal, alt: '', draggable: 'false' }); }
cuadro('frontal'); if (!CL_NOANIM) { parpadeo(); parpadeoM(); }
const FRASES_OK = ["¡Eso mismo!", "¡Tremenda jugada!", "Ahí se ve que estás pensando.", "¡Así se hace!"];
const FRASES_MID = ["Vas por buen camino, pero se puede afinar.", "No está mal. Mira lo que falta."];
const FRASES_BAD = ["Mmm, piénsalo otra vez.", "No pasa nada, así se aprende. Mira por qué.", "Casi. Fíjate en la explicación."];
const pick = a => a[Math.floor(Math.random() * a.length)];

/* ============ PRESENTACION: CLÍMACO Y MAGNOLIA (voz del navegador, opcional) ============ */
const DUO_IMG = { "climaco_a": "assets/presentacion_climaco_a.webp", "climaco_o": "assets/presentacion_climaco_o.webp", "magnolia_a": "assets/presentacion_magnolia_a.webp", "magnolia_o": "assets/presentacion_magnolia_o.webp", "neutral": "assets/presentacion_neutral.webp" };
const INTRO_LINEAS = [{ q: 'C', x: 'Hola, somos Clímaco y Magnolia.' }, { q: 'M', x: 'Y los vamos a acompañar en este viaje por la Gestión del Riesgo.' }];
const DUO_BOCA = { C: ['climaco_a', 'neutral', 'climaco_o', 'neutral'], M: ['magnolia_a', 'neutral', 'magnolia_o', 'neutral'] };
let INTRO = null, introToken = 0, introBocaT = null;
const vocesEs = () => { try { return (speechSynthesis.getVoices() || []).filter(v => (v.lang || '').toLowerCase().startsWith('es')); } catch (e) { return []; } };
function elegirVoz(q) {
  const v = vocesEs(); const pistas = q === 'C' ? ['jorge', 'carlos', 'diego', 'pablo', 'raul', 'enrique', 'male'] : ['monica', 'paulina', 'helena', 'sabina', 'laura', 'female'];
  return v.find(x => pistas.some(p => x.name.toLowerCase().includes(p))) || v[0];
}
function duoCuadro(k) { if (!INTRO) return; INTRO.duo.querySelectorAll('img').forEach(im => im.classList.toggle('on', im.dataset.f === k)); }
function introFin() { clearInterval(introBocaT); introBocaT = null; if (!INTRO) return; duoCuadro('neutral'); INTRO.lin.forEach(l => l.classList.remove('on')); INTRO.btn.textContent = '▶ Ver y escuchar la presentación'; INTRO.playing = false; }
function introStop() { introToken++; try { speechSynthesis.cancel(); } catch (e) { } introFin(); }
function introLinea(q, i, token, conVoz) {
  return new Promise(res => {
    if (!INTRO || token !== introToken) return res();
    INTRO.lin.forEach((l, j) => l.classList.toggle('on', j === i));
    clearInterval(introBocaT); let k = 0; duoCuadro(DUO_BOCA[q][0]);
    if (!CL_NOANIM) introBocaT = setInterval(() => { k = (k + 1) % DUO_BOCA[q].length; duoCuadro(DUO_BOCA[q][k]); }, 145);
    const texto = INTRO_LINEAS[i].x; let hecho = false;
    const fin = () => { if (hecho) return; hecho = true; clearInterval(introBocaT); introBocaT = null; res(); };
    setTimeout(fin, Math.max(2600, texto.length * 110));   /* red de seguridad: algunos navegadores nunca avisan que terminó */
    if (conVoz) {
      try { const u = new SpeechSynthesisUtterance(texto); const v = elegirVoz(q); if (v) u.voice = v; u.lang = (v && v.lang) || 'es-ES'; u.rate = .9; u.pitch = q === 'C' ? .9 : 1.04; u.onend = fin; u.onerror = fin; speechSynthesis.speak(u); } catch (e) { /* sin voz: queda el temporizador */ }
    } else setTimeout(fin, Math.max(2200, texto.length * 62));
  });
}
async function introPlay() {
  if (!INTRO) return;
  if (INTRO.playing) { introStop(); return; }
  const token = ++introToken; INTRO.playing = true; INTRO.btn.textContent = '■ Detener';
  try { speechSynthesis.cancel(); } catch (e) { }
  const conVoz = vocesEs().length > 0;
  INTRO.hint.textContent = conVoz ? 'Clímaco habla primero y Magnolia continúa.' : 'Este equipo no tiene voz en español: lee el texto mientras se mueven.';
  for (let i = 0; i < INTRO_LINEAS.length; i++) { if (token !== introToken) return; await introLinea(INTRO_LINEAS[i].q, i, token, conVoz); }
  if (token === introToken) introFin();
}
function introCard() {
  const duo = h('div', { class: 'duo', role: 'img', 'aria-label': 'Clímaco, con sombrero de yarey, y Magnolia, de pelo rizado, sonríen de pie lado a lado' });
  Object.keys(DUO_IMG).forEach(k => duo.append(h('img', { src: DUO_IMG[k], alt: '', 'data-f': k, draggable: 'false' })));
  const lin = INTRO_LINEAS.map(l => h('div', { class: 'lin' }, h('b', {}, l.q === 'C' ? 'Clímaco' : 'Profesora Magnolia'), l.x));
  const btn = h('button', { class: 'btn', onclick: introPlay }, '▶ Ver y escuchar la presentación');
  const hint = h('p', { class: 'src' }, 'Si tu equipo tiene voz en español, también se escucha.');
  INTRO = { duo, lin, btn, hint, playing: false }; duoCuadro('neutral');
  return h('div', { class: 'card intro' }, duo, h('div', {}, h('p', { class: 'eyebrow' }, 'Presentación del curso'), h('h2', {}, 'Clímaco y Magnolia'), h('p', {}, 'Dos voces cubanas para acompañarte en este viaje por la Gestión del Riesgo.'), ...lin, btn, hint));
}
addEventListener('beforeunload', () => { try { speechSynthesis.cancel(); } catch (e) { } });

/* ============ MÓDULOS ============ */
function parseEscena(s) {
  const p = s.split(/(Clímaco|Magnolia):\s*/).slice(1), out = [];
  for (let i = 0; i < p.length; i += 2) out.push({ q: p[i] === 'Clímaco' ? 'C' : 'M', x: p[i + 1].trim() });
  return out;
}
function desdeJSON(m) {
  const pasos = [], verif = [];
  pasos.push({
    t: 'dialogo', lineas: [
      { q: 'C', x: "Oye, yo siempre pensé que el ambiente era el monte y los ríos, nada más." },
      { q: 'M', x: "Vamos a ver qué más es ambiente, y cómo se conecta con el riesgo en tu barrio." },
      { q: 'C', x: "Pues dale. Yo tengo la libreta lista." }
    ]
  });
  m.fragmentos.forEach(f => {
    if (f.estado === 'verificar') { verif.push(f.id); return; }
    pasos.push({ t: 'lectura', id: f.id, titulo: f.titulo, texto: f.texto, fuente: f.fuente });
    if (f.escena_climaco) pasos.push({ t: 'dialogo', lineas: parseEscena(f.escena_climaco) });
    if (f.id === 'B1-03') pasos.push({
      t: 'clasificar', titulo: 'Biótico o abiótico', instruccion: "Toca la categoría que le corresponde a cada elemento.",
      cats: ['Biótico (con vida)', 'Abiótico (sin vida)'],
      items: [
        { x: "Un árbol de mango", a: 0, why: "Es un ser vivo." },
        { x: "El agua de un arroyo", a: 1, why: "Sin vida, pero necesaria para la vida." },
        { x: "Las bacterias", a: 0, why: "Son seres vivos, aunque no se vean." },
        { x: "La luz del sol", a: 1, why: "Factor abiótico." },
        { x: "El perro del vecino", a: 0, why: "Es un animal." },
        { x: "El suelo", a: 1, why: "Sin vida propia, pero sostiene la vida." }
      ]
    });
    if (f.id === 'B1-04') pasos.push({
      t: 'decision', titulo: 'Escena: la esquina de la basura',
      situacion: "En la esquina de tu barrio se acumula la basura y el arroyo se tapa cada vez que llueve. Hoy por la tarde hay reunión de vecinos. ¿Qué propones?",
      opciones: [
        { x: "Organizar una jornada de limpieza este sábado con los vecinos, para resolver la basura de la esquina cuanto antes.", pts: 1, c: "Ayuda hoy, pero si no cambia lo que causa la basura (recogida, hábitos, falta de equipos), volverá." },
        { x: "Reunir a vecinos e instituciones para ver juntos las causas: quién recoge, cuándo, qué falta y qué hace cada quien.", pts: 2, c: "Eso une causas y consecuencias. Un problema ambiental tiene muchas causas y se interviene mejor entre todos." },
        { x: "Presentar una queja formal por la basura y esperar a que las instituciones respondan antes de mover a los vecinos.", pts: 0, c: "Reclamar es válido, pero esperar sin participar deja el problema igual." }
      ]
    });
  });
  const qs = (m.preguntas || []).filter(q => !verif.includes(q.fragmento));
  if (qs.length) pasos.push({
    t: 'quiz', titulo: 'Para comprobar lo aprendido',
    preguntas: qs.map(q => ({ q: q.enunciado, ops: q.opciones, ok: q.correcta, why: q.explicacion }))
  });
  if (m.actividad) pasos.push({ t: 'actividad', id: m.modulo + '_act', titulo: m.actividad.titulo, instruccion: m.actividad.instruccion, producto: m.actividad.producto });
  pasos.push({ t: 'cierre' });
  return {
    id: m.modulo, nivel: 'b', titulo: m.titulo, duracion: m.duracion_estimada_min, pasos, enRevision: verif.length,
    nota: "Borrador v" + m.version + ". " + verif.length + " ficha(s) con datos en verificación no se muestran."
  };
}

const MOD_I2 = {
  id: 'I2', nivel: 'i', titulo: 'Primeras 72 horas: ¿qué pasó y qué hace falta?', duracion: 60,
  nota: "Módulo de demostración del nivel intermedio (diseño propio, borrador).",
  pasos: [
    {
      t: 'dialogo', lineas: [
        { q: 'C', x: "Mi socio, pasó el ciclón. Tengo una libreta, un lápiz y cuarenta minutos antes de que salga la guagua hacia la zona." },
        { q: 'M', x: "Antes de salir, piensa: una evaluación rápida no intenta saberlo todo. Intenta decidir bien lo que sigue." },
        { q: 'C', x: "O sea, que no es llenar la libreta entera, sino saber qué preguntar primero." },
        { q: 'M', x: "Exacto. Y eso cambia según pasan las horas. Mira." }]
    },
    {
      t: 'lectura', id: 'I2-01', titulo: 'Tres miradas, tres preguntas',
      texto: "Una evaluación de necesidades tiene momentos. En el primero (uno o dos días) se contesta: ¿qué tan grande es el daño y adónde conviene ir a mirar? En el segundo (la primera semana): ¿qué necesita la gente primero y quién lo necesita? En el tercero (hasta un mes): ¿cómo seguimos y por cuánto tiempo? Mezclar las preguntas hace que ninguna se conteste bien. Los plazos son orientativos y dependen del acceso y de la seguridad.",
      fuente: "Diseño propio. Lectura recomendada: notas de orientación de evaluación de necesidades del Kit de CI."
    },
    {
      t: 'lectura', id: 'I2-02', titulo: 'Hecho, rumor y suposición',
      texto: "Un hecho se vio, se contó o se midió, y sabemos quién lo dice y cuándo. Un rumor viene de alguien que lo oyó de otro. Una suposición es lo que damos por cierto sin haberlo comprobado. En el informe, cada cosa lleva su etiqueta. Si no sabemos algo, lo escribimos: no sabemos todavía.",
      fuente: "Diseño propio."
    },
    {
      t: 'decision', titulo: 'Escena 1: ¿por dónde empiezo?',
      situacion: "Son las 7:00 a.m. Desde la carretera ves un barrio con árboles caídos y techos dañados, justo al lado. Del otro lado del río hay dos barrios de los que no sabes si tienen acceso. Tienes 40 minutos. ¿Qué haces primero?",
      opciones: [
        { x: "Entro ya al barrio que tengo al lado, que es el que veo, para empezar a recoger datos de inmediato.", pts: 0, c: "Lo que ves primero no siempre es lo más afectado. Los barrios de difícil acceso suelen quedar fuera del primer informe y se atienden tarde." },
        { x: "Llamo a la delegación del Consejo Popular y a la Defensa Civil para saber qué zonas están aisladas y qué ya se atiende (confirma el canal real).", pts: 2, c: "Buena decisión. Coordinar evita duplicar esfuerzos y te dice dónde mirar primero. Las autoridades locales tienen información y responsabilidad en la respuesta." },
        { x: "Espero a tener el formulario completo y perfecto antes de salir, para no repetir visitas.", pts: 0, c: "Una evaluación rápida no espera a ser perfecta: se hace por pasos y se corrige. Mientras esperas, la información se enfría." },
        { x: "Reparto lo que traigo en el barrio de al lado y evalúo después, para que la ayuda llegue ya.", pts: 0, c: "Repartir sin saber qué falta puede dar a unos lo que otros necesitan más. Primero se mira, después se decide." }]
    },
    {
      t: 'decision', titulo: 'Escena 2: el rumor de las 300 familias',
      situacion: "Un vecino te dice: «hay 300 familias sin techo en el sector norte». Nadie más lo ha confirmado. ¿Cómo lo anotas?",
      opciones: [
        { x: "Anoto «300 familias sin techo» como dato, porque un vecino del sector lo dijo con seguridad y es mejor tener una cifra que ninguna para planificar.", pts: 0, c: "Se vuelve cifra oficial sin comprobación y alguien la usará para decidir cuánto repartir." },
        { x: "Lo anoto como «rumor, fuente: un vecino, por verificar» y busco dos fuentes más: otra persona del sector y alguien que lo haya visto.", pts: 2, c: "Así se hace. Cruzar dos o tres fuentes distintas ayuda a saber si la información es fiable." },
        { x: "Lo dejo fuera del informe, porque sin pruebas no sirve, y espero a tener algo más firme.", pts: 1, c: "Ignorarlo pierde una pista. Si era cierto, hay gente sin ayuda. Anótalo con su etiqueta y verifícalo." }]
    },
    {
      t: 'clasificar', titulo: '¿Hecho o rumor?', instruccion: "Toca la categoría correcta para cada frase.",
      cats: ['Hecho', 'Rumor o suposición'],
      items: [
        { x: "Vi el techo de la escuela en el piso. Lo vi hoy a las 9.", a: 0, why: "Lo vio quien informa, con hora." },
        { x: "Dicen que la presa soltó agua y que todo el barrio va a inundarse.", a: 1, why: "«Dicen» es una fuente indirecta, y «va a inundarse» es una predicción." },
        { x: "La delegada me dijo que hay 12 familias en el albergue. Ella lleva el registro.", a: 0, why: "Tiene fuente identificada y directa." },
        { x: "Seguro que los mayores no tienen comida.", a: 1, why: "Es una suposición. Hay que preguntarles." },
        { x: "El camino al sector norte está cortado por un árbol. Pasé por ahí hace una hora.", a: 0, why: "Lo vio la persona que informa, con hora." },
        { x: "Es obvio que la mayoría perdió todo.", a: 1, why: "«Obvio» y «la mayoría» sin datos: suposición." }]
    },
    {
      t: 'ordenar', titulo: 'Ordena la primera mirada (primeras 24 a 48 horas)', instruccion: "Pon los pasos en el orden más lógico con los botones ▲ ▼ y luego comprueba.",
      items: [
        "Avisar y coordinar con las autoridades locales y otras organizaciones",
        "Reunir lo que ya se sabe: llamadas, reportes, informes",
        "Hacer una visita rápida a una zona para confirmar lo que se oye",
        "Resumir en un informe corto: hechos, dudas y lo que falta",
        "Decidir dónde hacer la siguiente evaluación"]
    },
    {
      t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
        { q: "En la segunda mirada (primera semana), ¿qué pregunta intentamos contestar?", ops: ["¿Cuántas casas hay en total en el país?", "¿Qué necesita la gente primero y quiénes lo necesitan?", "¿Cuánto costó el desastre?", "¿Quién tuvo la culpa?"], ok: 1, why: "En esa etapa se identifican las necesidades prioritarias y a quién afectan." },
        { q: "Para saber si una cifra es fiable conviene:", ops: ["Preguntar solo a la persona más conocida", "Comparar al menos dos o tres fuentes distintas", "Usar la cifra más alta", "Esperar a que salga en el periódico"], ok: 1, why: "Cruzar fuentes distintas (triangulación) reduce el riesgo de error." },
        { q: "Quieres conocer las necesidades de mujeres y niñas del barrio. ¿Qué ayuda más?", ops: ["Un equipo de evaluación solo de hombres", "Un equipo con equilibrio de género, para que ellas hablen con confianza", "Preguntar solo al jefe de la comunidad", "Evitar el tema"], ok: 1, why: "Sin mujeres en el equipo, puede perderse información importante." }]
    },
    {
      t: 'actividad', id: 'I2_informe', titulo: 'Mi informe en cinco líneas',
      instruccion: "Imagina un caso (un barrio, un día, un evento). Escribe cinco líneas e identifica cada cosa con HECHO, RUMOR o NO SABEMOS TODAVÍA.",
      producto: "Un informe corto con etiquetas."
    },
    { t: 'cierre' }]
};

const MOD_B8 = {
  id: 'B8', nivel: 'b', titulo: 'Clima: lo que cambió y cómo nos afecta', duracion: 50,
  nota: "Módulo técnico (diseño propio, borrador). La reflexión personal se hace en el espacio con tu facilitador, no aquí.",
  pasos: [
    {
      t: 'dialogo', lineas: [
        { q: 'C', x: "Mi abuela Chela jura que antes las lluvias de mayo eran seguras, y que ahora llegan tarde o no llegan." },
        { q: 'M', x: "¿Y tú qué piensas?" },
        { q: 'C', x: "Que quizás ella se acuerda mejor de lo bueno, como pasa siempre con los recuerdos." },
        { q: 'M', x: "Buena duda. Vamos a aprender a separar un recuerdo de una tendencia." }]
    },
    {
      t: 'lectura', id: 'B8-01', titulo: 'Tiempo y clima no son lo mismo',
      texto: "El tiempo es lo que pasa hoy o esta semana: llueve, hace calor, sopla el viento. El clima es el patrón de muchos años, y suele medirse con periodos largos, de unos treinta años. Un año seco no prueba que el clima cambió. Una tendencia sostenida durante muchos años, registrada, sí puede mostrarlo. Por eso importan los registros y también la memoria de la gente, comparada con ellos.",
      fuente: "Diseño propio. Lectura recomendada: materiales de los servicios meteorológicos nacionales."
    },
    {
      t: 'clasificar', titulo: '¿Tiempo o clima?', instruccion: "Toca la categoría que corresponde a cada frase.",
      cats: ['Tiempo', 'Clima (tendencia de años)'],
      items: [
        { x: "Hoy llueve fuerte desde la madrugada.", a: 0, why: "Es lo que pasa hoy." },
        { x: "En esta zona las lluvias de mayo llegan cada vez más tarde desde hace veinte años.", a: 1, why: "Es un patrón de muchos años." },
        { x: "El ciclón pasó anoche por el sur de la provincia.", a: 0, why: "Es un evento concreto." },
        { x: "La temporada ciclónica va de junio a noviembre.", a: 1, why: "Es un patrón que se repite cada año." },
        { x: "Mañana habrá viento del norte.", a: 0, why: "Es un pronóstico de un día." },
        { x: "En los últimos treinta años, las sequías de esta zona son más largas.", a: 1, why: "Es una tendencia sostenida." }]
    },
    {
      t: 'lectura', id: 'B8-02', titulo: 'El clima que cambia se suma al riesgo',
      texto: "El cambio climático no crea todos los desastres, pero cambia las amenazas: más calor, lluvias más intensas, sequías más largas, mar más alto y, con océanos más cálidos, huracanes que pueden ser más intensos y traer más lluvia. Recuerda que el riesgo depende de la amenaza y de la vulnerabilidad. Si la amenaza cambia y nosotros no reducimos la vulnerabilidad, el riesgo sube.",
      fuente: "Diseño propio, a partir del enfoque amenaza-vulnerabilidad del taller."
    },
    {
      t: 'lectura', id: 'B8-03', titulo: 'Dos caminos: adaptarnos y reducir las causas',
      texto: "Adaptarse es ajustarnos a lo que ya está cambiando: cambiar el calendario de siembra, probar variedades que resistan la sequía, mejorar los drenajes, cuidar manglares y cuencas. Reducir las causas, o mitigar, es disminuir lo que calienta el planeta: gastar menos energía, cocinar con tecnologías más eficientes, proteger los bosques. Las comunidades con menos recursos suelen aportar poco al problema y sufrir mucho sus efectos. No se trata de culpar a nadie, sino de ver qué opciones tiene cada quien.",
      fuente: "Diseño propio. Lectura recomendada: Herramienta de gestión ambiental de Caritas Internationalis (2020)."
    },
    {
      t: 'decision', titulo: 'Escena: la siembra en Los Amates',
      situacion: "En el barrio ficticio de Los Amates, en Villa Infortunata, las lluvias de mayo no llegaron este año y la cooperativa debe decidir cómo sembrar. ¿Qué propones?",
      opciones: [
        { x: "Sembrar igual que siempre y esperar que llueva, porque el calendario de la zona nos ha funcionado por años.", pts: 0, c: "Si el patrón cambió, repetir lo mismo expone a perder la cosecha." },
        { x: "Reunir a quienes llevan años sembrando, ver qué cambió, probar dos variedades y ajustar el calendario poco a poco.", pts: 2, c: "Une la experiencia de la gente con la prueba de alternativas. Se adapta sin jugarse todo de golpe." },
        { x: "Esperar a que venga alguien de afuera con la solución, para no arriesgar la cosecha con ideas propias.", pts: 0, c: "Mientras esperas pasa la temporada. La gente de la zona tiene conocimiento valioso." },
        { x: "Cambiar toda la finca a un cultivo nuevo ya mismo, para adelantarnos al cambio de lluvias.", pts: 1, c: "Puede funcionar, pero es arriesgado. Conviene probar en pequeño antes de cambiar todo." }]
    },
    {
      t: 'ordenar', titulo: 'Revisar un proyecto con mirada climática', instruccion: "Ordena los pasos para revisar un proyecto. Usa ▲ ▼ y comprueba.",
      items: [
        "Describir qué hace el proyecto y dónde",
        "Preguntar qué recursos usa (agua, leña, suelo) y qué podría dañar",
        "Preguntar cómo podrían afectarlo las sequías, las lluvias fuertes o el calor",
        "Ajustar el diseño o añadir medidas de cuidado",
        "Anotar lo decidido y volver a revisarlo durante el seguimiento"]
    },
    {
      t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
        { q: "¿Qué muestra mejor que el clima de una zona cambió?", ops: ["Un año muy seco", "Una tendencia registrada durante muchos años", "Lo que opinan en las noticias", "Un huracán fuerte"], ok: 1, why: "El clima es un patrón de largo plazo. Un solo evento no lo prueba." },
        { q: "Cambiar el calendario de siembra porque las lluvias llegan tarde es un ejemplo de:", ops: ["Mitigación", "Adaptación", "Negación", "Exposición"], ok: 1, why: "Adaptarse es ajustarse a lo que ya cambia." },
        { q: "Cocinar con una tecnología que gasta menos combustible es sobre todo:", ops: ["Adaptación", "Mitigación", "Una amenaza", "Un fenómeno natural"], ok: 1, why: "Reduce lo que contribuye al calentamiento. Es una opción cuando hay alternativas disponibles." },
        { q: "Si la amenaza aumenta y la vulnerabilidad sigue igual, el riesgo:", ops: ["Baja", "Se mantiene", "Sube", "Desaparece"], ok: 2, why: "El riesgo depende de ambos factores." }]
    },
    {
      t: 'llevar', titulo: 'Tres preguntas para llevar a tu grupo',
      intro: "Estas preguntas no se responden aquí. Son para conversar con tu grupo de reflexión y tu facilitador.",
      preguntas: ["¿Qué cambió en mi barrio durante mi vida, y quién lo recuerda mejor?", "¿Qué parte de nuestro trabajo en Cáritas podría estar ayudando o empeorando eso?", "¿Qué voy a asumir yo, y con quién lo conversaré?"],
      aviso: "El curso no guarda tus respuestas. La conversación se hace en persona, con las reglas del espacio de reflexión."
    },
    { t: 'cierre' }]
};

const MODS_EXTRA = [];
/* Actividades en grupo (presenciales) del Básico: solo B4 y B10 (y B9, que trae la suya dentro del módulo). Reparto 70 % individual / 30 % grupo. Las demás están en grupales_opcionales.js. */
const GRUPALES = {
  "B4": {
    "titulo": "Casos difíciles: ¿qué principio está en juego?",
    "duracion": "60 minutos",
    "personas": "6 a 15",
    "materiales": [
      "Tres o cuatro casos ficticios impresos o dictados",
      "Papel y lápices"
    ],
    "pasos": [
      "Repasen los principios: humanidad, imparcialidad, neutralidad e independencia, y qué es no hacer daño (10 min).",
      "Lee un caso inventado. Ejemplo: llegan pocos kits y hay más familias que kits, y un líder pide que se den primero a su cuadra (5 min).",
      "En grupos pequeños, decidan qué principio está en juego y qué harían (15 min).",
      "Cada grupo cuenta su decisión y las razones. Se conversa sin buscar una sola respuesta (15 min).",
      "Repitan con otro caso. Cierren con una regla del grupo para cuando haya presión (15 min)."
    ],
    "producto": "Una regla del grupo para decidir bajo presión.",
    "registra": "Cantidad de participantes y la regla acordada. Los casos son inventados, no de personas reales.",
    "facilita": "No uses casos de tu comunidad con nombres. Si alguien cuenta uno real, agradécelo y devuélvelo a una situación general."
  },
  "B10": {
    "titulo": "Taller: el mapa de riesgo con la gente",
    "duracion": "90 a 120 minutos",
    "personas": "8 a 20",
    "materiales": [
      "Pliego grande para dibujar el barrio",
      "Marcadores de tres colores",
      "Tarjetas",
      "La ficha de mapa de riesgo del aplicativo, impresa o en pantalla"
    ],
    "pasos": [
      "Presenten el objetivo: dibujar entre todos dónde están los riesgos del barrio y qué hacer primero (10 min).",
      "Dibujen el barrio de forma sencilla: calles, ríos, escuelas, lugares de reunión. Sin nombres de familias (20 min).",
      "Marquen con un color las amenazas, con otro las zonas más expuestas y con otro los lugares seguros (25 min).",
      "Pregunten a quienes suelen callar: mujeres, mayores, jóvenes, personas con discapacidad: ¿qué falta en el mapa? (15 min).",
      "Prioricen con criterios que todos vean: cuántas personas afecta, cuán probable es, qué tan fácil de reducir (20 min).",
      "Una persona llena la ficha de mapa de riesgo del aplicativo con lo acordado, sin nombres ni direcciones exactas (15 min).",
      "Cierren con el acuerdo de cuándo vuelven a revisar el mapa (5 min)."
    ],
    "producto": "Un mapa del barrio con los riesgos priorizados y la ficha del aplicativo llena.",
    "registra": "Cantidad de participantes, los riesgos priorizados y la fecha de la próxima revisión. La ficha no lleva nombres ni direcciones.",
    "facilita": "Dedica el mayor esfuerzo a las voces que faltan. Si el mapa lo dibuja una sola persona, el grupo deja de apropiarse de él."
  }
};

/* B2 y B3: diseño propio, borrador. Nada de este texto proviene de Esfera ni de otras fuentes con permiso pendiente. */
MODS_EXTRA.push(
  {
    id: 'B2', nivel: 'b', titulo: 'Amenaza, exposición, vulnerabilidad y riesgo', duracion: 50,
    nota: "Borrador de diseño propio. Pendiente de validación de Cáritas.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, el mismo ciclón pasó por dos barrios. En uno casi no hubo daños y en el otro se perdió todo. ¿Cómo se explica?" },
          { q: 'M', x: "Con cuatro palabras que la gente mezcla todo el tiempo: amenaza, exposición, vulnerabilidad y capacidad." },
          { q: 'C', x: "Yo las uso como si fueran lo mismo." },
          { q: 'M', x: "Por eso hoy las separamos. Cuando están claras, se ve dónde se puede hacer algo." }]
      },
      {
        t: 'lectura', id: 'B2-01', titulo: 'La amenaza: lo que puede hacer daño',
        texto: "Una amenaza es un fenómeno que puede causar daño: un ciclón, una sequía, un sismo, una inundación, un derrame. Una amenaza por sí sola no es un desastre. El desastre ocurre cuando la amenaza se encuentra con personas, casas o cultivos que no estaban preparados. Hay amenazas naturales, otras causadas por la acción humana y otras mixtas, como una inundación que empeora porque el arroyo está tapado de basura.",
        fuente: "Diseño propio. Lectura recomendada: material de la Defensa Civil [confirmar cuál]."
      },
      {
        t: 'lectura', id: 'B2-02', titulo: 'Exposición, vulnerabilidad y capacidad',
        texto: "La exposición responde a quién o qué está en el camino de la amenaza: las casas junto al arroyo, el cultivo en la zona baja. La vulnerabilidad responde a qué tanto nos daña: una casa frágil, no recibir el aviso, tener pocos recursos, vivir solo siendo mayor, tener una discapacidad sin ayuda para evacuar. La capacidad es lo que ya tenemos para enfrentarlo: vecinos organizados, un pozo que funciona, promotores formados, una ruta de salida conocida. La vulnerabilidad no es una falla de las personas: casi siempre es el resultado de condiciones que no eligieron.",
        fuente: "Diseño propio."
      },
      {
        t: 'clasificar', titulo: '¿Amenaza, vulnerabilidad o capacidad?', instruccion: "Toca la categoría correcta para cada frase.",
        cats: ['Amenaza', 'Vulnerabilidad', 'Capacidad'],
        items: [
          { x: "Un ciclón que se acerca a la provincia", a: 0, why: "Es el fenómeno que puede hacer daño." },
          { x: "El techo de la casa está flojo y mal clavado", a: 1, why: "Hace que el daño sea mayor." },
          { x: "Un grupo de promotores que sabe dar el aviso casa por casa", a: 2, why: "Es un recurso que ya existe." },
          { x: "Una sequía que dura varios años", a: 0, why: "Es un fenómeno que puede hacer daño." },
          { x: "Varias personas mayores viven solas y nadie las visita", a: 1, why: "Les cuesta más recibir aviso y evacuar." },
          { x: "Un pozo comunitario que sigue funcionando después de las lluvias", a: 2, why: "Es un recurso con el que se cuenta." },
          { x: "No hay una ruta de evacuación que la gente conozca", a: 1, why: "Aumenta el daño posible." },
          { x: "El río crece y se desborda", a: 0, why: "Es el fenómeno." }]
      },
      {
        t: 'lectura', id: 'B2-03', titulo: 'El riesgo y dónde se puede actuar',
        texto: "El riesgo es la posibilidad de sufrir daño. Crece cuando la amenaza es fuerte, hay mucha gente o cosas expuestas y la vulnerabilidad es alta. Baja cuando aumentan las capacidades. Muchas veces no se puede evitar la amenaza: no se detiene un ciclón. Pero sí se puede cambiar dónde se vive, cómo se construye, cómo se avisa y cómo se organiza la gente. Por eso el trabajo comunitario se concentra en la exposición, la vulnerabilidad y la capacidad.",
        fuente: "Diseño propio. Esta relación se usa de forma general en la gestión de riesgo."
      },
      {
        t: 'decision', titulo: 'Escena: ¿dónde actuamos primero?',
        situacion: "En tu barrio hay 20 casas junto al arroyo. Cada año llegan lluvias fuertes. La comunidad tiene tiempo y algo de material para una sola acción antes de la temporada. ¿Cuál escoges?",
        opciones: [
          { x: "Pedir a las autoridades que hagan algo contra las lluvias fuertes, porque ahí está el origen del problema.", pts: 0, c: "La amenaza casi nunca está en nuestras manos. Es mejor concentrarse en lo que sí podemos cambiar." },
          { x: "Limpiar el arroyo, acordar dónde se refugian las 5 casas más bajas y practicar el aviso antes de la temporada.", pts: 2, c: "Reduce la vulnerabilidad (arroyo tapado), aumenta la capacidad (aviso practicado) y atiende primero a quienes están más expuestos." },
          { x: "Reparar los techos de las casas altas, que son más fáciles y rápidas de arreglar con los materiales que hay, y así avanzamos algo concreto antes de la temporada.", pts: 1, c: "Ayuda, pero no es lo que más riesgo reduce. Las casas junto al agua están más expuestas." },
          { x: "No hacer nada nuevo, porque cada año ha llovido igual y siempre hemos salido adelante.", pts: 0, c: "El riesgo conocido es el que se puede reducir. Esperar lo aumenta." }]
      },
      {
        t: 'ordenar', titulo: 'De la amenaza al desastre', instruccion: "Ordena cómo se va armando un desastre. Usa ▲ ▼ y comprueba.",
        items: [
          "Llegan lluvias intensas (amenaza)",
          "Hay casas construidas junto al arroyo (exposición)",
          "Las casas son frágiles y el arroyo está tapado (vulnerabilidad)",
          "No hay aviso ni ruta de salida conocida (poca capacidad)",
          "Familias pierden casa y pertenencias (desastre)"]
      },
      {
        t: 'lectura', id: 'B2-04', titulo: 'Los desastres no son naturales',
        texto: "Un huracán, una inundación o una sequía son amenazas: fenómenos que pueden causar daño. Un desastre ocurre cuando una amenaza golpea a una comunidad que no está preparada para resistirla. Por eso se dice que los desastres no son naturales: la lluvia es natural, pero que el agua entre en las casas depende de dónde y cómo están construidas, de si hay aviso y de si la gente sabe qué hacer. La gestión del riesgo trabaja sobre lo que sí se puede cambiar, que es la vulnerabilidad y la capacidad, no sobre la amenaza. Un mismo ciclón puede ser un susto en una comunidad con casas firmes, refugio cercano y vecinos organizados, y una tragedia en otra con techos ligeros, sin refugio y con personas mayores solas.",
        fuente: "Adaptado de la formación de la app Consultas GRD (contenido propio de Cáritas)."
      },
      {
        t: 'lectura', id: 'B2-05', titulo: 'Ejemplo resuelto: un barrio costero',
        texto: "Situación: un barrio costero se inunda por penetración del mar en casi cada temporada ciclónica. Amenaza: penetración del mar con ciclones, muy frecuente. Exposición y vulnerabilidad: 18 viviendas bajas a menos de 100 metros de la costa, 6 personas mayores que viven solas y una única vía de salida que se inunda. Capacidad: la delegada conoce a todas las familias, hay una escuela alta cercana que puede servir de refugio y hay 5 voluntarios formados. Lectura: el riesgo es alto por las viviendas y la única salida, aunque la capacidad lo reduce algo. Acciones posibles: lista de personas que necesitan apoyo para evacuar, ruta alternativa, coordinación con la Defensa Civil para el refugio y un simulacro antes de la temporada.",
        fuente: "Adaptado de la formación de la app Consultas GRD (contenido propio de Cáritas)."
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "«Los desastres no son naturales» quiere decir que:", ops: ["Los ciclones no existen", "La amenaza es natural, pero el desastre depende de la vulnerabilidad y la capacidad", "Nadie es responsable de nada", "Solo las personas causan huracanes"], ok: 1, why: "Lo que podemos cambiar es la vulnerabilidad y la capacidad." },
          { q: "Una amenaza es:", ops: ["Lo mismo que un desastre", "Un fenómeno que puede hacer daño", "Una persona que causa problemas", "Un fallo de la comunidad"], ok: 1, why: "La amenaza es el fenómeno. El desastre ocurre cuando se encuentra con exposición y vulnerabilidad." },
          { q: "«Las 12 casas están en el cauce del arroyo» describe sobre todo:", ops: ["Exposición", "Capacidad", "Amenaza", "Mitigación"], ok: 0, why: "Dice quién está en el camino de la amenaza." },
          { q: "¿Cuál NO es una vulnerabilidad?", ops: ["Casas muy frágiles", "No recibir el aviso", "Un grupo comunitario que sabe evacuar", "Vivir solo siendo mayor sin apoyo"], ok: 2, why: "El grupo que sabe evacuar es una capacidad." },
          { q: "El riesgo baja cuando:", ops: ["Ignoramos la amenaza", "Aumentan las capacidades y baja la vulnerabilidad", "Hay más personas expuestas", "No se habla del tema"], ok: 1, why: "Hay que actuar sobre lo que sí podemos cambiar." }]
      },
      {
        t: 'actividad', id: 'B2_act', titulo: 'Mi barrio en cuatro columnas',
        instruccion: "Elige una amenaza de tu zona. Haz cuatro columnas: qué está expuesto, qué nos hace vulnerables, qué capacidades tenemos y qué podríamos cambiar. No escribas nombres de personas.",
        producto: "Una tabla de cuatro columnas sobre una amenaza de tu zona."
      },
      { t: 'cierre' }]
  },

  {
    id: 'B3', nivel: 'b', titulo: 'Gestión del riesgo: conocer, reducir, manejar', duracion: 50,
    nota: "Borrador de diseño propio. El marco cubano está por confirmar con Defensa Civil.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Yo pensaba que gestionar el riesgo era cuando llega el ciclón y repartimos ayuda." },
          { q: 'M', x: "Eso es una parte, y llega tarde. Hay tres tareas, y la mayor parte del trabajo ocurre antes." },
          { q: 'C', x: "¿Antes? ¿Y qué hago antes?" },
          { q: 'M', x: "Eso vamos a ver." }]
      },
      {
        t: 'lectura', id: 'B3-01', titulo: 'Tres tareas: conocer, reducir y manejar',
        texto: "Gestionar el riesgo es una tarea continua con tres partes. Conocer: saber qué amenazas hay, quién está expuesto, dónde y por qué. Reducir: hacer que el riesgo baje, cambiando dónde y cómo vivimos, construimos y sembramos, y preparándonos. Manejar el desastre: responder cuando ocurre, atender las necesidades y recuperarnos. La parte más barata y más eficaz suele ser conocer y reducir, porque evita daños que luego cuestan mucho más.",
        fuente: "Diseño propio. Lectura recomendada: marco de gestión de riesgo de la Defensa Civil [confirmar documento]."
      },
      {
        t: 'clasificar', titulo: '¿Conocer, reducir o manejar?', instruccion: "Toca la tarea a la que pertenece cada acción.",
        cats: ['Conocer', 'Reducir', 'Manejar el desastre'],
        items: [
          { x: "Dibujar con los vecinos un mapa de dónde se inunda", a: 0, why: "Es entender el riesgo." },
          { x: "Limpiar el arroyo antes de la temporada de lluvias", a: 1, why: "Disminuye el riesgo." },
          { x: "Abrir un albergue después del ciclón", a: 2, why: "Es respuesta." },
          { x: "Preguntar a los mayores cuándo fue la peor crecida", a: 0, why: "Es conocer el pasado del lugar." },
          { x: "Acordar con las familias a dónde irán si hay alerta", a: 1, why: "Es preparación que reduce el daño." },
          { x: "Repartir agua y alimentos a las familias afectadas", a: 2, why: "Es atención a necesidades." },
          { x: "Reforzar con tablones la escuela que se usa de refugio", a: 1, why: "Reduce el daño posible." }]
      },
      {
        t: 'lectura', id: 'B3-02', titulo: 'Antes, durante y después',
        texto: "El tiempo también se divide en tres. Antes del evento se conoce, se reduce y se prepara. Durante, se actúa con lo preparado: alerta, evacuación, refugio, primeros auxilios y primera evaluación. Después, se atiende, se rehabilita y se reconstruye, y se aprende de lo ocurrido para que la próxima vez haya menos daño. Un buen aprendizaje cambia el plan para el siguiente ciclo.",
        fuente: "Diseño propio."
      },
      {
        t: 'lectura', id: 'B3-03', titulo: 'La comunidad no trabaja sola',
        texto: "En cada país hay un sistema nacional que organiza la alerta, la evacuación y la respuesta. En Cuba lo conduce la Defensa Civil [confirmar con la institución]. El trabajo de Cáritas complementa ese sistema: conoce el barrio, acompaña a quienes más lo necesitan y ayuda a que la información llegue a todos. Antes de actuar conviene saber qué hace cada quien, para sumar y no duplicar ni contradecir.",
        fuente: "Diseño propio. Pendiente de confirmar con la Defensa Civil y con la Cáritas nacional."
      },
      {
        t: 'decision', titulo: 'Escena: tres semanas antes de la temporada',
        situacion: "Faltan tres semanas para que empiece la temporada ciclónica. Tu grupo tiene tiempo para tres tardes de trabajo. ¿Cómo las usas?",
        opciones: [
          { x: "Recorrer el barrio para ver qué cambió, acordar qué hacer si hay alerta con las familias y la Defensa Civil [confirmar canal], y practicar el aviso.", pts: 2, c: "Une conocer, reducir y preparar. Cada tarde sirve para la siguiente." },
          { x: "Juntar donaciones durante las tres tardes, para tener bolsas listas de repartir apenas pase el ciclón y no improvisar.", pts: 0, c: "Puede ser útil después, pero nada de lo que haces baja el riesgo ni mejora el aviso." },
          { x: "Dedicar una tarde a limpiar el arroyo y usar las otras dos para descansar y llegar con fuerzas a la temporada.", pts: 1, c: "La limpieza ayuda, pero falta la preparación del aviso y de los lugares seguros." },
          { x: "Esperar la capacitación oficial para actuar con instrucciones claras, sin riesgo de hacer algo mal por cuenta propia.", pts: 0, c: "Pedir y recibir capacitación es bueno, pero mientras tanto hay cosas que se pueden hacer." }]
      },
      {
        t: 'ordenar', titulo: 'Un ciclo de aprendizaje', instruccion: "Ordena los pasos después de un evento para aprender de él.",
        items: [
          "Atender las necesidades urgentes de las familias",
          "Reunirnos con quienes participaron para ver qué funcionó y qué no",
          "Anotar las lecciones en pocas líneas, sin culpar a nadie",
          "Cambiar el plan según lo aprendido",
          "Avisar a la comunidad qué cambió y por qué"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "¿Cuál de estas tareas ocurre ANTES del desastre?", ops: ["Repartir alimentos", "Conocer y reducir el riesgo", "Abrir un albergue", "Evaluar los daños"], ok: 1, why: "Conocer y reducir son tareas previas y evitan daños." },
          { q: "Reforzar una escuela que sirve de refugio es sobre todo:", ops: ["Conocer", "Reducir", "Manejar el desastre", "Ninguna"], ok: 1, why: "Disminuye el daño que podría ocurrir." },
          { q: "¿Qué se hace con las lecciones aprendidas?", ops: ["Se guardan en una gaveta", "Se usan para cambiar el plan", "Se publican con nombres", "Se olvidan"], ok: 1, why: "El aprendizaje se usa para el siguiente ciclo." },
          { q: "El trabajo de Cáritas en gestión de riesgo:", ops: ["Reemplaza al sistema nacional", "Complementa al sistema nacional y conoce el barrio", "Compite con él", "No tiene relación con él"], ok: 1, why: "Se trabaja coordinado con el sistema nacional [confirmar canales]." }]
      },
      {
        t: 'actividad', id: 'B3_act', titulo: 'Mis tres tardes',
        instruccion: "Imagina tres tardes de trabajo antes de la temporada de tu zona. Escribe qué harías en cada una y a cuál de las tres tareas (conocer, reducir, manejar) corresponde.",
        producto: "Un plan de tres tardes con su tarea asociada."
      },
      { t: 'cierre' }]
  }
);

/* B4 a B7: diseño propio, borrador. Sin texto de Esfera. */
MODS_EXTRA.push(
  {
    id: 'B4', nivel: 'b', titulo: 'Principios humanitarios y de protección', duracion: 55,
    nota: "Borrador de diseño propio. Pendiente de validación de Cáritas.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, una vecina me pidió que le guardara una bolsa de ayuda para su sobrino, que está en otra zona. ¿Se la guardo?" },
          { q: 'M', x: "Buena pregunta para empezar. Detrás de decisiones así hay principios, y conviene tenerlos claros antes de que llegue la presión." },
          { q: 'C', x: "Yo creía que ayudar era repartir y ya." },
          { q: 'M', x: "Repartir bien es parte del oficio. Vamos a ver cómo." }]
      },
      {
        t: 'lectura', id: 'B4-01', titulo: 'Cuatro ideas que guían la ayuda humanitaria',
        texto: "Humanidad: el sufrimiento de las personas importa donde sea que ocurra. Imparcialidad: se ayuda según la necesidad, sin preferir a conocidos, a quienes piensan igual ni a quienes creen igual. Neutralidad: no se toma partido en disputas políticas ni religiosas mientras se ayuda. Independencia: las decisiones sobre a quién y cómo ayudar se toman por la necesidad, no por intereses de quien da el dinero o de quien gobierna. Para una organización de la Iglesia, esto incluye no exigir que alguien comparta nuestra fe para recibir ayuda.",
        fuente: "Diseño propio. Lectura recomendada: Código de Conducta del Movimiento de la Cruz Roja y la Media Luna Roja y las ONG en el socorro en casos de desastre."
      },
      {
        t: 'clasificar', titulo: '¿Qué principio está en juego?', instruccion: "Toca el principio que protege cada situación.",
        cats: ['Imparcialidad', 'Neutralidad', 'Independencia'],
        items: [
          { x: "Dar primero a las familias con más necesidad aunque no seamos amigos de ellas", a: 0, why: "Se ayuda según la necesidad." },
          { x: "No usar el reparto para hablar a favor ni en contra de ninguna postura política", a: 1, why: "No se toma partido mientras se ayuda." },
          { x: "Escoger la zona de trabajo por lo que hace falta y no porque un financiador lo prefiere", a: 2, why: "La decisión se toma por necesidad." },
          { x: "Atender igual a quien participa en la parroquia y a quien no", a: 0, why: "La ayuda no depende de la creencia." },
          { x: "Rechazar una condición de entregar la ayuda solo a quienes aprueben a cierto grupo", a: 2, why: "Protege la independencia de la decisión." },
          { x: "No hacer comentarios sobre rivalidades locales en la cola del reparto", a: 1, why: "Evita tomar partido." }]
      },
      {
        t: 'decision', titulo: 'Escena: la bolsa del sobrino',
        situacion: "Quedan 10 bolsas de ayuda y 14 familias en la lista. Una vecina que te cae muy bien te pide una bolsa «para su sobrino», que no está en la lista y vive en otra zona. ¿Qué haces?",
        opciones: [
          { x: "Se la doy: es una vecina de confianza, el sobrino seguro la necesita y una bolsa más o menos no cambia mucho el reparto entre tantas familias.", pts: 0, c: "La confianza personal no es un criterio de necesidad, y otras familias de la lista quedarían sin ayuda." },
          { x: "Le explico los criterios, anoto el caso del sobrino para verificarlo y, si los cumple, se atiende en otra entrega.", pts: 2, c: "Respeta la necesidad como criterio y no cierra la puerta al caso." },
          { x: "Le explico que no puedo y sigo con la lista, para no abrir excepciones que compliquen el reparto.", pts: 1, c: "El criterio es correcto, pero explicar y ofrecer una vía de revisión mantiene la confianza." },
          { x: "Consulto con alguien de mi familia que conoce la zona del sobrino, para decidir con más información.", pts: 0, c: "Decidir por conversaciones personales va en contra de la imparcialidad. Hay que apoyarse en criterios del equipo." }]
      },
      {
        t: 'lectura', id: 'B4-02', titulo: 'No hacer daño: la protección',
        texto: "Proteger es evitar que nuestra ayuda cause daño y velar por la seguridad y la dignidad de las personas. Incluye cuatro ideas: no hacer daño con nuestras acciones, asegurar que la ayuda llegue a quienes más la necesitan sin discriminar, procurar que las personas participen y estén informadas, y rendir cuentas: explicar qué hacemos y escuchar quejas. También incluye cuidar la información: no pedir datos de más, no mostrar listas con nombres y no publicar fotos de personas sin su consentimiento.",
        fuente: "Diseño propio. Lectura recomendada: Norma Humanitaria Esencial (CHS), compromisos 4 y 5."
      },
      {
        t: 'decision', titulo: 'Escena: la foto de la campaña',
        situacion: "Una persona de la diócesis pide una foto de niños del barrio recibiendo ayuda «para la campaña de recaudación». Tienes una buena foto en el teléfono. ¿Qué haces?",
        opciones: [
          { x: "Se la envío: es una causa que ayuda a recaudar y la foto ya está tomada, sin costo adicional.", pts: 0, c: "Las fotos de niñas y niños se difunden solo con permiso de sus familias y para un uso claro. Una foto no se puede recoger de vuelta." },
          { x: "Pregunto para qué se usará y dónde se publicará. Pido permiso por escrito a las familias, y si no lo hay, no se envía.", pts: 2, c: "Aplica consentimiento informado y protege a la niñez. Una buena causa no sustituye el permiso." },
          { x: "La envío con la condición de que la use solo en un documento interno y la borre después.", pts: 0, c: "Una vez enviada no controlas qué pasa con ella." },
          { x: "La envío con los rostros tapados y sin nombres, para que no se pueda identificar a las familias.", pts: 1, c: "Reduce el riesgo, pero aun así conviene tener permiso de las familias y saber cómo se usará." }]
      },
      {
        t: 'ordenar', titulo: 'Antes de un reparto', instruccion: "Ordena los pasos para repartir con cuidado.",
        items: [
          "Acordar criterios de quién recibe y por qué",
          "Informar a la comunidad esos criterios y cuándo será el reparto",
          "Hacer una lista solo con los datos necesarios",
          "Repartir, con espacio para quejas y para quienes tienen movilidad reducida",
          "Revisar con el equipo qué falló y qué mejorar"]
      },
      {
        t: 'lectura', id: 'B4-03', titulo: 'Salvaguarda: cuidar a quien es más frágil',
        texto: "Las personas afectadas por un desastre deben estar protegidas de la violencia, el abuso y la explotación. Quien sirve en nombre de Cáritas tiene la obligación de proteger, en especial a niñas, niños, adolescentes y personas adultas en situación de vulnerabilidad. En la práctica: no quedarse a solas con un menor en un espacio cerrado, no pedir ni aceptar favores a cambio de ayuda, dar la ayuda con criterios claros y conocidos y no por preferencias personales. Si ves o sospechas un abuso, informa de inmediato a tu coordinador. No lo investigues por tu cuenta ni lo comentes con terceros.",
        fuente: "Adaptado de la formación de la app Consultas GRD (contenido propio de Cáritas). Por verificar con Cáritas."
      },
      {
        t: 'lectura', id: 'B4-04', titulo: 'Datos mínimos, consentimiento y archivos que circulan',
        texto: "Regla de oro: la mínima información necesaria. Registra solo lo que necesitas para actuar. Si basta con decir «6 personas mayores solas en la cuadra», no escribas sus nombres. Si necesitas nombres para acompañar a alguien, pide permiso y explica para qué. Antes de anotar datos personales: explica quién eres y para qué usarás la información, pregunta si la persona está de acuerdo y respeta un «no» sin condicionar la ayuda. Los archivos con datos que se envían al coordinador también son delicados: protege tu equipo con contraseña, envíalos solo por la vía acordada y nunca a grupos abiertos, no dejes copias en equipos compartidos, bórralas cuando el coordinador confirme que las recibió y avisa si pierdes el dispositivo. Un asistente de inteligencia artificial en línea envía las preguntas a un servicio externo: nunca escribas en él nombres ni datos que identifiquen a nadie. [Por verificar con Cáritas: referencia a la normativa cubana de protección de datos personales, Ley 149 de 2022.]",
        fuente: "Adaptado de la formación de la app Consultas GRD (contenido propio de Cáritas). Por verificar con Cáritas."
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Una familia acepta ayuda pero no quiere que su caso se registre con nombre. ¿Qué haces?", ops: ["Registro el nombre por si acaso", "Dejo de ayudar hasta que acepte", "Registro solo la información general sin identificarlos y sigo ayudando", "Pido permiso a un vecino"], ok: 2, why: "El consentimiento se respeta y la ayuda no se condiciona." },
          { q: "Quieres consultar a un asistente en línea sobre una señora de 82 años que vive sola en una dirección concreta. Lo correcto es:", ops: ["Escribir su nombre y dirección para que sea preciso", "Plantear la pregunta en general, sin datos que la identifiquen", "Escribir solo el nombre", "Pedirle que lo escriba ella"], ok: 1, why: "El servicio es externo: nunca se introducen datos que identifiquen a personas." },
          { q: "Imparcialidad significa:", ops: ["Ayudar a quienes conozco", "Ayudar según la necesidad", "Ayudar solo a quienes piensan igual", "Ayudar a quien paga"], ok: 1, why: "Se ayuda según la necesidad, sin preferencias." },
          { q: "Una organización de Iglesia que ayuda a personas de otras creencias:", ops: ["Les exige participar en la parroquia", "Las atiende igual, sin condicionar la ayuda a la fe", "Les da menos", "Les pide que se bauticen"], ok: 1, why: "La ayuda no depende de la creencia." },
          { q: "Una foto de una niña en un reparto, sin permiso de su familia:", ops: ["Se puede publicar si es bonita", "No se publica sin consentimiento", "Se publica si se tapa el nombre", "Se publica si es para recaudar"], ok: 1, why: "El permiso es la base. Y aun con permiso, hay que ser cuidadoso." },
          { q: "En una lista de reparto conviene anotar:", ops: ["Todo lo que se pueda saber de cada persona", "Solo los datos necesarios para repartir", "La opinión política de cada familia", "Fotos de cada casa"], ok: 1, why: "Mínimo necesario, siempre." }]
      },
      {
        t: 'actividad', id: 'B4_act', titulo: 'Mis tres criterios',
        instruccion: "Escribe tres criterios con los que tu grupo decidiría a quién entregar primero una ayuda limitada. Después revisa si alguno favorece a conocidos o excluye a alguien sin motivo.",
        producto: "Tres criterios escritos y revisados."
      },
      { t: 'cierre' }]
  },

  {
    id: 'B6', nivel: 'b', titulo: 'Participación y el rol del actor social', duracion: 50,
    nota: "Borrador de diseño propio.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, hice el plan yo solo, rápido y bien. Pero la gente no lo siguió." },
          { q: 'M', x: "Un buen plan que nadie siente suyo se cae cuando llega el problema." },
          { q: 'C', x: "¿Entonces tengo que consultar a todo el mundo para todo?" },
          { q: 'M', x: "No para todo. Pero sí saber cuánto participa la gente en cada decisión. Mira." }]
      },
      {
        t: 'lectura', id: 'B6-01', titulo: 'Cuatro niveles de participación',
        texto: "La gente puede participar de formas muy distintas. Informada: se le avisa qué se hará. Consultada: se le pregunta antes de decidir, aunque la decisión sea de otros. Decide con nosotros: se decide juntos y todos los acuerdos se anotan. Lidera: la comunidad decide y nosotros apoyamos. Ningún nivel es siempre el correcto. En una emergencia urgente se informa más. En un plan de largo plazo conviene decidir juntos. Lo que no vale es decir que se consultó cuando solo se informó.",
        fuente: "Diseño propio, inspirado en la idea general de las escaleras de participación. Lectura recomendada: Manual de participación de las bases, Cáritas Europa (2019)."
      },
      {
        t: 'clasificar', titulo: '¿Qué nivel de participación es?', instruccion: "Toca el nivel que describe cada situación.",
        cats: ['Informar', 'Consultar', 'Decidir juntos', 'La comunidad lidera'],
        items: [
          { x: "Se coloca un cartel con la hora del simulacro", a: 0, why: "Solo se avisa." },
          { x: "Se pregunta a los vecinos cuál es la ruta más segura y luego el equipo decide", a: 1, why: "Se escucha, pero decide el equipo." },
          { x: "En una reunión se acuerda entre todos dónde estará el punto de reunión", a: 2, why: "Se decide juntos." },
          { x: "Los vecinos organizan solos su brigada de limpieza y piden materiales", a: 3, why: "La comunidad decide y dirige." },
          { x: "Se lee en voz alta el plan ya aprobado", a: 0, why: "Se informa de algo ya decidido." },
          { x: "Se hace una encuesta y luego se redacta el plan", a: 1, why: "Se consulta." }]
      },
      {
        t: 'lectura', id: 'B6-02', titulo: 'Las voces que suelen faltar',
        texto: "En muchas reuniones hablan los mismos: quienes tienen cargos, quienes tienen tiempo y quienes se sienten cómodos hablando en público. Suelen faltar las mujeres con tareas de cuidado, las personas mayores, la juventud, las personas con discapacidad, quienes trabajan de día o viven lejos. No basta con invitarlos: hay que elegir hora, lugar y forma de conversar que les permitan venir y hablar. Sin sus voces, el análisis del riesgo queda incompleto.",
        fuente: "Diseño propio."
      },
      {
        t: 'decision', titulo: 'Escena: la reunión de las seis de la tarde',
        situacion: "Convocas una reunión para analizar riesgos del barrio a las seis de la tarde, en el local de la parroquia. Después de la primera reunión, asistieron casi solo hombres adultos del barrio. ¿Qué haces?",
        opciones: [
          { x: "Sigo igual: la convocatoria fue abierta, quien no vino tuvo su oportunidad y no puedo forzar a nadie ni cambiar el horario para cada persona.", pts: 0, c: "No venir no significa no tener interés. Puede haber obstáculos de hora, lugar o cuidado de niños." },
          { x: "Pregunto a mujeres, mayores y jóvenes qué hora y lugar les sirve, y organizo conversaciones por grupos en horarios distintos.", pts: 2, c: "Abre la participación y suma información que faltaba." },
          { x: "Pido a los asistentes que traigan a sus esposas y a sus hijos para completar el grupo la próxima vez.", pts: 0, c: "Es una forma de cubrir la cuota sin escuchar de verdad. Mejor preguntar directamente." },
          { x: "Repito la reunión a la misma hora y lugar, pero con más aviso y carteles para que se enteren todos.", pts: 1, c: "Más aviso ayuda, pero si la hora o el lugar son el problema, los mismos faltarán." }]
      },
      {
        t: 'lectura', id: 'B6-03', titulo: 'El rol del actor social: facilitar, no dirigir',
        texto: "Quien acompaña a una comunidad ayuda a que la gente converse, decida y actúe. Facilitar significa preguntar más de lo que se afirma, dar la palabra a quien no la tiene, devolver a la comunidad lo que se aprendió de ella y reconocer lo que no sabemos. No significa decidir por ella ni imponer nuestras ideas. También significa ser honestos con lo que podemos y no podemos prometer.",
        fuente: "Diseño propio."
      },
      {
        t: 'ordenar', titulo: 'Preparar una conversación comunitaria', instruccion: "Ordena los pasos.",
        items: [
          "Preguntar a diferentes personas qué hora y lugar les conviene",
          "Invitar a grupos distintos, no solo a líderes",
          "Explicar al comenzar para qué es la reunión y qué no se promete",
          "Dar la palabra con turnos y espacios pequeños",
          "Devolver a todos lo que se anotó y qué se hará con eso"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Si solo se avisa lo que ya se decidió, el nivel es:", ops: ["Informar", "Consultar", "Decidir juntos", "Liderar"], ok: 0, why: "Informar es avisar. No se debe presentar como consulta." },
          { q: "¿Quién suele faltar en las reuniones comunitarias?", ops: ["Solo quien no tiene interés", "Quienes no pueden venir en esa hora o lugar, o no se sienten escuchados", "Quienes tienen cargos", "Nadie"], ok: 1, why: "Casi siempre hay obstáculos concretos." },
          { q: "Facilitar es:", ops: ["Dar órdenes claras", "Preguntar, dar la palabra y devolver lo aprendido", "Decidir por la comunidad", "Hablar más que los demás"], ok: 1, why: "El facilitador ayuda a que la gente decida." },
          { q: "¿Cuándo conviene más informar que decidir juntos?", ops: ["Siempre", "En una emergencia urgente que no da tiempo", "Nunca", "En un plan a cinco años"], ok: 1, why: "Depende de la urgencia. Lo importante es ser honestos con el nivel." }]
      },
      {
        t: 'actividad', id: 'B6_act', titulo: '¿A quién falta invitar?',
        instruccion: "Piensa en una reunión comunitaria reciente o próxima. Escribe quién estuvo, quién faltó y dos cambios (hora, lugar, forma) para que vengan.",
        producto: "Una lista de ausentes y dos cambios concretos."
      },
      { t: 'cierre' }]
  },

  {
    id: 'B11', nivel: 'b', titulo: 'Medidas correctivas y prospectivas: del mapa a la acción', duracion: 55,
    nota: "Borrador de diseño propio.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, ya entiendo los riesgos de mi barrio. Pero cuando pienso en qué hacer, me abruma todo." },
          { q: 'M', x: "Eso pasa. Se ordena separando el riesgo que ya existe del riesgo que podríamos crear sin darnos cuenta." },
          { q: 'C', x: "¿Podemos crear riesgo?" },
          { q: 'M', x: "Con muy buenas intenciones, sí. Mira." }]
      },
      {
        t: 'lectura', id: 'B11-01', titulo: 'Tres tipos de medidas',
        texto: "Las medidas correctivas reducen el riesgo que ya existe: reforzar un techo, desazolvar un arroyo, reubicar una casa en zona de derrumbe. Las medidas prospectivas evitan crear riesgo nuevo: no construir en la zona baja, revisar cada obra antes de empezar, sembrar donde no se inunda. Las medidas de preparación mejoran la respuesta cuando el evento llega: alerta, rutas, refugios, botiquín, brigadas. Un plan sano combina las tres.",
        fuente: "Diseño propio. Lectura recomendada: guías de gestión de riesgo de la Defensa Civil y del PNUD [confirmar cuáles]."
      },
      {
        t: 'clasificar', titulo: '¿Correctiva, prospectiva o preparación?', instruccion: "Toca el tipo de medida.",
        cats: ['Correctiva', 'Prospectiva', 'Preparación'],
        items: [
          { x: "Limpiar y profundizar el arroyo que ya se desborda", a: 0, why: "Reduce un riesgo existente." },
          { x: "Acordar que ninguna vivienda nueva se haga en el cauce", a: 1, why: "Evita crear un riesgo nuevo." },
          { x: "Practicar un simulacro de evacuación", a: 2, why: "Mejora la respuesta." },
          { x: "Reforzar el techo de la escuela que sirve de refugio", a: 0, why: "Corrige una fragilidad existente." },
          { x: "Revisar cada obra comunitaria nueva con una lista de preguntas de riesgo", a: 1, why: "Evita nuevo riesgo." },
          { x: "Tener un botiquín y una lista de teléfonos actualizada", a: 2, why: "Prepara la respuesta." }]
      },
      {
        t: 'decision', titulo: 'Escena: la ampliación de viviendas',
        situacion: "Una cooperativa quiere ampliar viviendas hacia la zona baja, la más barata y cercana al agua. Hace tres años una crecida llegó hasta allí. Te piden opinión. ¿Qué dices?",
        opciones: [
          { x: "Les digo que adelante: la necesidad de vivienda es urgente y el riesgo se puede ver más adelante.", pts: 0, c: "Si se crea el riesgo ahora, después cuesta mucho más corregirlo." },
          { x: "Les muestro con los mayores hasta dónde llegó la crecida, busco otras ubicaciones y planteo el tema en la instancia que corresponda [confirmar cuál].", pts: 2, c: "Es una medida prospectiva: se evita nuevo riesgo con información y alternativas." },
          { x: "Les digo que no se puede construir ahí porque está prohibido, y me retiro para no meterme en problemas.", pts: 1, c: "Puede ser cierto, pero sin diálogo ni alternativas la necesidad sigue ahí." },
          { x: "Les sugiero un muro de contención pequeño en el borde de la zona baja, que sea rápido y barato.", pts: 0, c: "Un muro improvisado puede dar falsa seguridad. Hay que mirar el problema completo." }]
      },
      {
        t: 'lectura', id: 'B11-02', titulo: 'El mapa de riesgo: una herramienta sencilla',
        texto: "Un mapa de riesgo comunitario es un dibujo hecho con la gente. Muestra dónde están las casas, los caminos, el arroyo, los refugios, las zonas de inundación o derrumbe, los lugares de reunión y quiénes necesitan más ayuda para evacuar. No tiene que ser perfecto. Debe ser útil: sirve para decidir qué medidas tomar primero y dónde. Se actualiza después de cada evento. No lleva nombres de personas, sino símbolos: «familia con una persona mayor sola», «niñez pequeña».",
        fuente: "Diseño propio."
      },
      {
        t: 'ordenar', titulo: 'Hacer un mapa de riesgo con la gente', instruccion: "Ordena los pasos.",
        items: [
          "Reunir a vecinos de edades y ocupaciones distintas",
          "Dibujar el barrio: casas, caminos, arroyo, escuela",
          "Marcar dónde ocurren inundaciones, derrumbes o vientos fuertes",
          "Marcar refugios, rutas de salida y quiénes necesitan ayuda para salir (con símbolos, sin nombres)",
          "Acordar tres medidas que se hacen primero"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "No construir más viviendas en el cauce es una medida:", ops: ["Correctiva", "Prospectiva", "De respuesta", "Inútil"], ok: 1, why: "Evita crear riesgo nuevo." },
          { q: "Reforzar el techo de una casa frágil es:", ops: ["Correctiva", "Prospectiva", "Preparación", "Ninguna"], ok: 0, why: "Reduce un riesgo ya existente." },
          { q: "El mapa de riesgo comunitario debe:", ops: ["Tener nombres de todas las personas", "Ser útil y hecho con la gente", "Ser perfecto antes de usarse", "Hacerse solo por técnicos"], ok: 1, why: "Su valor está en que ayuda a decidir y refleja lo que sabe la gente." },
          { q: "¿Por qué conviene revisar cada obra nueva con preguntas de riesgo?", ops: ["Para retrasarla", "Para no crear riesgo nuevo sin darnos cuenta", "Para cumplir un trámite", "Para cambiar el presupuesto"], ok: 1, why: "Es la medida prospectiva más sencilla." }]
      },
      {
        t: 'actividad', id: 'B11_act', titulo: 'Mi mapa de riesgo',
        instruccion: "Dibuja en una hoja el mapa de una zona pequeña de tu barrio. Marca una amenaza, un lugar seguro y una ruta. Escribe tres medidas, una de cada tipo (correctiva, prospectiva, preparación). Sin nombres de personas.",
        producto: "Un mapa de riesgo y tres medidas."
      },
      { t: 'cierre' }]
  },

  {
    id: 'B7', nivel: 'b', titulo: 'Quién es quién: de la parroquia a la Confederación', duracion: 45,
    nota: "Borrador de diseño propio. La estructura cubana está por confirmar con la Cáritas nacional y la Defensa Civil.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, me llegó información sobre una familia en peligro en otra zona. ¿A quién se lo cuento? ¿A Caritas Internationalis?" },
          { q: 'M', x: "Casi nunca se llega directo. Cada nivel tiene su papel." },
          { q: 'C', x: "Yo no sé ni cuántos niveles hay." },
          { q: 'M', x: "Vamos a ponerles nombre." }]
      },
      {
        t: 'lectura', id: 'B7-01', titulo: 'Los niveles de Cáritas',
        texto: "Una Cáritas parroquial acompaña a su comunidad: conoce a las familias, detecta necesidades y avisa. Una Cáritas diocesana coordina las parroquias, reúne la información y apoya donde hace falta. La Cáritas nacional (en Cuba, Cáritas Cubana) representa al país, coordina entre diócesis, se relaciona con las instituciones del Estado y con la red internacional [confirmar roles con Cáritas Cubana]. Caritas Internationalis es la confederación de las Cáritas nacionales. Una Cáritas parroquial o diocesana normalmente no habla directo con ella: lo hace la nacional.",
        fuente: "Diseño propio. Lectura recomendada: manual del Kit de Herramientas de Caritas Internationalis, secciones sobre mecanismos de apoyo (pp. 7 a 9) [versión por confirmar]."
      },
      {
        t: 'lectura', id: 'B7-02', titulo: 'Otros actores en el territorio',
        texto: "Además de Cáritas hay otros actores: el Consejo Popular y las autoridades locales, la Defensa Civil, los servicios de salud y de agua, la Cruz Roja y otras organizaciones, y agencias de la ONU y ONG internacionales cuando hay apoyo externo [confirmar cuáles aplican en cada provincia]. Saber a quién le toca qué evita duplicar esfuerzos y que alguien quede sin atención. Antes de actuar en una emergencia, conviene preguntar: ¿quién ya está haciendo esto?",
        fuente: "Diseño propio. Pendiente de confirmar con la Defensa Civil y la Cáritas nacional."
      },
      {
        t: 'clasificar', titulo: '¿A quién le toca primero?', instruccion: "Toca el nivel que normalmente actúa en cada caso.",
        cats: ['Parroquia', 'Diócesis', 'Nacional'],
        items: [
          { x: "Visitar a una familia que tiene la casa dañada", a: 0, why: "Es quien conoce a las familias." },
          { x: "Reunir los informes de varias parroquias en uno solo", a: 1, why: "La diócesis coordina las parroquias." },
          { x: "Hablar con la red internacional para pedir apoyo", a: 2, why: "Es la Cáritas nacional quien se relaciona con la confederación." },
          { x: "Avisar a los vecinos de una crecida", a: 0, why: "Es información local." },
          { x: "Decidir cómo repartir recursos entre dos parroquias afectadas", a: 1, why: "Es coordinación diocesana." },
          { x: "Acordar con el Estado cómo canalizar ayuda de fuera", a: 2, why: "Es una gestión del nivel nacional [confirmar]." }]
      },
      {
        t: 'decision', titulo: 'Escena: la información que no sabes a quién dar',
        situacion: "Eres de una Cáritas parroquial. Te enteras de que una zona cercana, de otra parroquia, quedó aislada y hay personas mayores sin medicinas. ¿Qué haces?",
        opciones: [
          { x: "Escribo directamente a Caritas Internationalis, porque es la manera más rápida de que la ayuda llegue a la zona.", pts: 0, c: "No es el canal normal, y la información llegaría sin verificar ni filtrar." },
          { x: "Se lo comunico a mi diocesana y a la parroquia de esa zona, con datos y fuente, y pregunto si ya lo conocen. Ofrezco apoyo.", pts: 2, c: "Respeta los niveles, evita duplicar y la información sube con fuente y fecha." },
          { x: "Voy yo mismo con medicinas a la zona, porque ahí hay gente mayor que no puede esperar a que se coordine todo entre las instituciones.", pts: 1, c: "La intención es buena, pero puedes duplicar esfuerzos, llegar a un lugar peligroso o dejar a tu comunidad sin cobertura." },
          { x: "Espero unas horas a ver si otra persona lo informa, para no duplicar y no dar una alarma sin comprobar.", pts: 0, c: "Si todos esperan, nadie actúa." }]
      },
      {
        t: 'ordenar', titulo: 'El camino de la información', instruccion: "Ordena cómo sube una información de una emergencia.",
        items: [
          "La parroquia recoge los datos con fuente y fecha",
          "La diócesis revisa y reúne los datos de varias parroquias",
          "La diócesis informa a la Cáritas nacional y a las autoridades locales que corresponda",
          "La Cáritas nacional decide si hace falta apoyo externo y lo gestiona",
          "El apoyo, si llega, baja por el mismo camino hasta las familias"]
      },
      {
        t: 'lectura', id: 'B7-03', titulo: 'Quién dirige y qué fases hay [por verificar]',
        texto: "En Cuba la protección de la población se organiza a través del Sistema de la Defensa Civil, que integra todos los niveles del Estado, y en cada territorio los Consejos de Defensa dirigen las medidas de protección [por verificar nombres y funciones con la Defensa Civil]. Ante un ciclón se habla de fases: informativa, de alerta, de alarma y recuperativa, y cada una indica qué debe hacer la población [por verificar definiciones con la Defensa Civil]. Antes de la temporada, pregunta a tu delegado o a la Defensa Civil de tu territorio cómo se aplican en tu comunidad. Para un voluntario hay una regla simple: se difunde la información oficial, sin añadirle ni anticiparle nada.",
        fuente: "Adaptado de la formación de la app Consultas GRD (contenido propio de Cáritas). Por verificar con Cáritas."
      },
      {
        t: 'lectura', id: 'B7-04', titulo: 'Qué le toca a Cáritas: complementar, no sustituir',
        texto: "Cáritas aporta algo que los sistemas oficiales a veces no alcanzan: conocer de cerca a las personas más vulnerables. Le toca mantener actualizada la lista de personas mayores solas, con discapacidad, embarazadas y familias frágiles, acompañarlas en la preparación y, si procede, en la evacuación, difundir las orientaciones oficiales con lenguaje sencillo y apoyar la recuperación de las familias. No le toca emitir alertas propias, ordenar evacuaciones ni contradecir indicaciones oficiales; si dudas de una indicación, plantéalo a tu coordinador y al enlace con la Defensa Civil y sigue lo oficial mientras tanto. Antes de actuar pregúntate: ¿quién dirige en mi territorio y cómo lo contacto?, ¿hay una alerta oficial activa y en qué fase?, ¿lo que voy a hacer complementa lo oficial o lo contradice? Cada Cáritas local debe tener anotado, antes de la temporada, el nombre y contacto de su enlace de coordinación.",
        fuente: "Adaptado de la formación de la app Consultas GRD (contenido propio de Cáritas). Por verificar con Cáritas."
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Llega un aviso oficial de ciclón. ¿Qué haces con la información?", ops: ["La difundo tal como la emitió la fuente oficial", "Le agrego mis predicciones para que se entienda mejor", "Espero a que la confirmen en redes sociales", "Organizo una evacuación por mi cuenta"], ok: 0, why: "Añadir predicciones propias puede generar confusión o pánico." },
          { q: "¿Cuál es el principal aporte de Cáritas ante una emergencia?", ops: ["Dirigir la evacuación", "Emitir alertas", "Conocer de cerca a las personas más vulnerables y acompañarlas", "Sustituir al Consejo de Defensa"], ok: 2, why: "Cáritas complementa lo oficial con su cercanía." },
          { q: "Crees que un punto de evacuación indicado está mal. Lo más adecuado es:", ops: ["Decirle a la gente que no vaya", "Plantearlo a tu coordinador y al enlace con la Defensa Civil y seguir lo oficial mientras tanto", "Publicarlo en un grupo de mensajería", "Ignorar la indicación"], ok: 1, why: "Las dudas van por la vía institucional; contradecir en público pone en riesgo a las personas." },
          { q: "Una Cáritas parroquial normalmente:", ops: ["Habla directo con Caritas Internationalis", "Se relaciona a través de su diócesis y de la nacional", "No tiene relación con nadie", "Reemplaza a la Defensa Civil"], ok: 1, why: "Cada nivel tiene su papel." },
          { q: "Antes de actuar en una emergencia conviene preguntar:", ops: ["¿Quién me va a aplaudir?", "¿Quién ya está haciendo esto?", "¿Cuánto cuesta?", "¿Quién tiene la culpa?"], ok: 1, why: "Evita duplicar y deja ver dónde hay brechas." },
          { q: "Una información que sube debe llevar:", ops: ["Solo la opinión de quien la dio", "Fuente y fecha", "Nombres de las personas afectadas", "Rumores sin comprobar"], ok: 1, why: "Fuente y fecha permiten comprobarla." },
          { q: "La estructura exacta de roles en Cuba:", ops: ["Ya está validada por este curso", "Se debe confirmar con Cáritas Cubana y la Defensa Civil", "No importa", "Es igual a la de cualquier país"], ok: 1, why: "Este módulo marca lo que hay que confirmar." }]
      },
      {
        t: 'actividad', id: 'B7_act', titulo: 'Mi mapa de contactos',
        instruccion: "Haz una lista de cinco actores de tu zona a quienes recurrirías en una emergencia (parroquia, diocesana, Consejo Popular, salud, Defensa Civil [confirmar cómo]). Escribe a cada uno qué le tocaría y cómo se comunicaría contigo. Sin números de teléfono personales en este curso.",
        producto: "Una lista de cinco actores con su rol y canal."
      },
      { t: 'cierre' }]
  }
);

/* B9: versión corta de ambiente para voluntarios. Diseño propio, borrador. El E8 técnico (herramienta ambiental de CI) queda en Experto. */
MODS_EXTRA.push(
  {
    id: 'B9', nivel: 'b', titulo: 'El ambiente de mi comunidad y el riesgo', duracion: 40,
    modo: 'Estudio + recorrido corto con tu grupo en la Cáritas o en el barrio',
    nota: "Borrador de diseño propio. Observación comunitaria, sin herramientas técnicas.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, cada vez que llueve fuerte se nos inunda la calle de abajo. Dicen que es culpa de la lluvia." },
          { q: 'M', x: "La lluvia es la amenaza. ¿Y el desagüe de esa calle cómo está?" },
          { q: 'C', x: "Tapado de basura y de monte. Hace años que nadie lo limpia." },
          { q: 'M', x: "Entonces parte del problema no cae del cielo. Veamos cómo el ambiente que cuidamos o descuidamos cambia el riesgo." }]
      },
      {
        t: 'lectura', id: 'B9-01', titulo: 'El ambiente puede aumentar o reducir el riesgo',
        texto: "El ambiente de una comunidad son sus ríos, el agua que usa, el suelo, los árboles, las costas, la basura y los desagües. Cuando está sano, protege: los árboles sujetan el suelo en una ladera, los manglares y la vegetación de la costa frenan las olas, y un desagüe limpio deja correr el agua. Cuando se deteriora, aumenta la vulnerabilidad: una ladera sin árboles se desliza con la lluvia, una costa sin vegetación recibe más fuerza del mar y un desagüe tapado inunda la calle. El mismo ciclón o la misma lluvia pueden hacer más o menos daño según el estado del ambiente.",
        fuente: "Diseño propio, a partir de la idea general de que la degradación ambiental aumenta la vulnerabilidad."
      },
      {
        t: 'clasificar', titulo: '¿Protege o aumenta el riesgo?', instruccion: "Toca si cada situación del ambiente protege o aumenta el riesgo.",
        cats: ['Protege', 'Aumenta el riesgo'],
        items: [
          { x: "Árboles y vegetación que sujetan el suelo de una pendiente", a: 0, why: "Las raíces sujetan el suelo y frenan el agua." },
          { x: "Un desagüe de la calle lleno de basura y monte", a: 1, why: "No deja pasar el agua y la calle se inunda." },
          { x: "Manglar y vegetación de la costa en buen estado", a: 0, why: "Frenan la fuerza de las olas." },
          { x: "Cortar todos los árboles de una ladera para sembrar", a: 1, why: "El suelo suelto se desliza con la lluvia." },
          { x: "Basura acumulada junto a un río o arroyo", a: 1, why: "Tapa el cauce y contamina el agua." },
          { x: "Una cisterna o tanque limpio con tapa para guardar agua", a: 0, why: "Asegura agua en una sequía o después de un evento." }]
      },
      {
        t: 'lectura', id: 'B9-02', titulo: 'Cuatro cosas que mirar en el barrio',
        texto: "Para leer el ambiente sin herramientas técnicas basta caminar y mirar cuatro cosas. El agua: de dónde viene, cómo se guarda y si se contamina después de las lluvias. Los desagües y cauces: si están limpios o tapados. El suelo y los árboles: dónde hay laderas peladas, tierra suelta o zonas donde se corta o se quema. La basura: dónde se acumula y a dónde va cuando llueve. Anota lo que ves, no lo que supones, y pregunta a las personas mayores cómo era antes cada lugar. Ellas guardan la memoria de cuánto ha cambiado.",
        fuente: "Diseño propio, técnica general de observación comunitaria."
      },
      {
        t: 'decision', titulo: 'Escena: el cauce de la calle de abajo',
        situacion: "Vas con un grupo de vecinos por el barrio y notan que el cauce junto al camino está lleno de ramas y basura. Dos vecinos dicen que eso lo debe limpiar el gobierno, otro dice que lo limpian ellos mismos ese fin de semana. ¿Qué propones?",
        opciones: [
          { x: "Acordar una limpieza entre vecinos y avisar a la delegación del Consejo Popular para que sepan y apoyen, sin esperar a que lo hagan por nosotros.", pts: 2, c: "Se actúa con lo que se puede y se informa a quien tiene responsabilidad. Suma sin sustituir." },
          { x: "Esperar a que la autoridad lo limpie, porque no nos corresponde y podríamos meternos en un problema por tocar el cauce.", pts: 0, c: "Esperar con el riesgo a la vista no lo reduce. Se puede avisar y también actuar con lo que está a nuestro alcance." },
          { x: "Limpiarlo con el grupo ese mismo día sin avisar a nadie, para no perder tiempo en trámites.", pts: 1, c: "Limpiar ayuda, pero sin avisar se pierde apoyo y se corre el riesgo de que mueva basura a otro punto o de hacerlo sin precaución." },
          { x: "Hacer una foto y publicarla en un grupo para presionar a las autoridades hasta que lo resuelvan.", pts: 0, c: "Una foto puede ayudar a informar, pero por sí sola no baja el riesgo ni construye acuerdos con los vecinos." }]
      },
      {
        t: 'ordenar', titulo: 'Un recorrido para mirar el ambiente', instruccion: "Ordena los pasos.",
        items: [
          "Acordar con el grupo qué cuatro cosas se van a mirar",
          "Caminar el barrio y anotar lo que se ve, sin suponer",
          "Preguntar a una persona mayor cómo era ese lugar antes",
          "Marcar en un dibujo del barrio los puntos que aumentan el riesgo",
          "Elegir una acción pequeña que el grupo pueda hacer y a quién avisar"]
      },
      {
        t: 'lectura', id: 'B9-03', titulo: 'Acciones pequeñas que sí cuentan',
        texto: "No hace falta un gran proyecto para mejorar el ambiente y bajar el riesgo. Limpiar un desagüe antes de la temporada de lluvias, sembrar árboles o plantas que sujeten el suelo, guardar agua limpia y tapada, separar y llevar la basura a donde corresponde, y no quemar monte cerca de las casas son acciones que el grupo puede hacer. Lo importante es elegir una, hacerla bien y volver a mirar después si cambió algo. Lo que supera las fuerzas del grupo, como una obra grande en un río, se informa y se coordina con quien corresponda.",
        fuente: "Diseño propio."
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Un desagüe tapado de basura:", ops: ["Es una amenaza natural", "Aumenta la vulnerabilidad de la calle ante la lluvia", "No tiene relación con el riesgo", "Solo importa en verano"], ok: 1, why: "La lluvia es la amenaza; el desagüe tapado hace que cause más daño." },
          { q: "Para leer el ambiente de un barrio sin herramientas técnicas conviene:", ops: ["Esperar un estudio técnico", "Caminar, mirar, anotar lo que se ve y preguntar a personas mayores", "Copiar los datos de otra comunidad", "Decidir por intuición"], ok: 1, why: "La observación y la memoria de los mayores dan información útil." },
          { q: "¿Cuál de estas es una acción pequeña que el grupo puede hacer?", ops: ["Cambiar el curso de un río", "Limpiar un desagüe antes de las lluvias", "Construir un dique grande", "Reubicar el barrio"], ok: 1, why: "Lo pequeño y posible se hace; lo grande se informa y se coordina." },
          { q: "Cuando algo supera las fuerzas del grupo, lo correcto es:", ops: ["Ignorarlo", "Informar y coordinar con quien corresponde", "Hacerlo igual aunque sea peligroso", "Esperar sin decir nada"], ok: 1, why: "Informar es parte de la acción, además de hacer lo que se puede." }]
      },
      {
        t: 'actividad', id: 'B9_act', titulo: 'Los cuatro puntos de mi barrio',
        instruccion: "Piensa en tu barrio y escribe, para cada una de las cuatro cosas (agua, desagües y cauces, suelo y árboles, basura), un lugar donde el ambiente aumenta el riesgo y una acción pequeña que podría hacer el grupo. No escribas nombres de personas ni direcciones exactas.",
        producto: "Una lista de cuatro lugares y cuatro acciones pequeñas."
      },
      { t: 'cierre' }],
    grupal: {
      titulo: 'Recorrido de observación del barrio',
      duracion: '60 a 90 minutos', personas: '6 a 15',
      materiales: ['Hojas y lápices', 'Un pliego de papel o cartulina para el dibujo del barrio', 'Marcadores de dos colores'],
      pasos: [
        'Reúnanse y repasen en conjunto las cuatro cosas que se miran: agua, desagües y cauces, suelo y árboles, basura (10 min).',
        'Formen grupos de tres o cuatro. Cada grupo recorre una zona cercana y anota lo que ve, no lo que supone (30 min).',
        'Si hay una persona mayor, pregúntenle cómo era ese lugar antes y anoten lo que cuenta (10 min).',
        'Vuelvan y dibujen entre todos un mapa sencillo del barrio. Marquen con un color los puntos que aumentan el riesgo (20 min).',
        'Elijan una acción pequeña que el grupo pueda hacer pronto y decidan a quién avisar. Anótenla con una fecha (15 min).'],
      producto: 'Un dibujo del barrio con los puntos marcados y una acción pequeña con fecha.',
      registra: 'Cantidad de participantes y la acción elegida. No se anotan nombres ni direcciones exactas.',
      facilita: 'Pregunta más de lo que afirmas. Si alguien dice que un lugar es peligroso, pídele que cuente qué vio. Que hablen también quienes menos hablan.'
    }
  }
);
/* B5: Casa común y doctrina social. BORRADOR. Sin citas literales: pendiente de verificar con los textos oficiales. Obligatorio en el Básico (decisión pendiente de confirmar). */
MODS_EXTRA.push(
  {
    id: 'B5', nivel: 'b', titulo: 'Casa común y doctrina social: por qué servimos así', duracion: 40,
    nota: "BORRADOR. Es la motivación de quien sirve, no un requisito para quien recibe ayuda. Pendiente: citas literales con número de párrafo (Laudato si' y Compendio) y revisión doctrinal.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, ya vimos cómo se ve un desastre y qué principios guían la ayuda. Pero a veces me pregunto por qué lo hacemos así y no de otra manera." },
          { q: 'M', x: "Buena pregunta. Para quienes servimos desde la Iglesia, la respuesta tiene raíces en la doctrina social y en la mirada de Laudato si' sobre la casa común." },
          { q: 'C', x: "Eso suena a cosa de curas, no de voluntarios." },
          { q: 'M', x: "Es más práctico de lo que parece. Cada idea se puede ver en el trabajo de tu barrio. Vamos con calma." }]
      },
      {
        t: 'lectura', id: 'B5-01', titulo: 'Todo está conectado: la casa común',
        texto: "Laudato si' propone mirar el ambiente y a las personas como una sola realidad: cuidar la casa común incluye cuidar a quienes viven en ella, sobre todo a los más frágiles. Esto explica algo que ya vimos: un barrio sin desagüe limpio y sin recursos sufre más con la lluvia. El daño al ambiente y el daño a la gente se alimentan entre sí. Por eso en la gestión del riesgo no basta con mirar el fenómeno; hay que mirar cómo vive la gente y cómo cuidamos el lugar. [Por verificar: citas literales y numeración de párrafos de Laudato si'.]",
        fuente: "Diseño propio. Lectura recomendada: Papa Francisco, encíclica Laudato si' (2015), sobre el cuidado de la casa común [párrafos por verificar]."
      },
      {
        t: 'lectura', id: 'B5-02', titulo: 'Cinco ideas de la doctrina social en el trabajo diario',
        texto: "La doctrina social de la Iglesia ofrece criterios para actuar. Cinco de ellos se ven claro en nuestro trabajo. Dignidad de la persona: cada persona vale por sí misma; por eso pedimos permiso y cuidamos sus datos. Opción por los pobres: empezamos por quienes tienen menos protección, como las personas mayores que viven solas. Bien común: lo que ayuda a toda la comunidad, como preparar un plan de evacuación, es tarea de todos. Subsidiariedad: lo que se puede resolver cerca de la gente se resuelve cerca, y cada nivel apoya sin sustituir al otro. Solidaridad: nos sentimos responsables unos de otros, no solo cuando hay un desastre. [Esta lectura es una aplicación del curso, no un texto de la Iglesia. Pendiente de revisión doctrinal.]",
        fuente: "Diseño propio. Lectura recomendada: Compendio de la Doctrina Social de la Iglesia [capítulos y párrafos por verificar]."
      },
      {
        t: 'lectura', id: 'B5-03', titulo: 'Cuidar hoy para los que vienen',
        texto: "Laudato si' pregunta qué mundo queremos dejar a quienes nos sucedan. En la gestión del riesgo, esa pregunta se vuelve concreta: no construir hoy el riesgo de mañana. Una casa en un lugar peligroso, un río sin cuidar o un árbol que se talla sin reponer son decisiones de hoy que aumentan el riesgo de los hijos y los nietos. Por eso las medidas de prevención son también un acto de cuidado y de justicia con las generaciones futuras. Esta motivación es de quien sirve: la ayuda se da a todas las personas por su necesidad, sin pedir que compartan nuestra fe. [Por verificar: cita literal y párrafo.]",
        fuente: "Diseño propio. Lectura recomendada: Laudato si' (2015), sobre la justicia con las generaciones futuras [párrafos por verificar]."
      },
      {
        t: 'clasificar', titulo: '¿Qué idea está presente?', instruccion: "Toca la idea que mejor explica cada situación.",
        cats: ['Dignidad', 'Opción por los pobres', 'Bien común', 'Subsidiariedad'],
        items: [
          { x: "Pedir permiso antes de anotar los datos de una familia", a: 0, why: "Cada persona vale por sí misma y merece respeto." },
          { x: "Visitar primero a las personas mayores que viven solas antes de una crecida", a: 1, why: "Se empieza por quienes tienen menos protección." },
          { x: "Organizar entre todos la limpieza del desagüe de la calle", a: 2, why: "Lo que beneficia a toda la comunidad es tarea de todos." },
          { x: "Que la parroquia resuelva lo que le toca y pida apoyo a la diócesis solo para lo que no alcanza", a: 3, why: "Se resuelve cerca de la gente y cada nivel apoya sin sustituir." },
          { x: "Rechazar fotos de niños sin permiso de sus familias", a: 0, why: "Protege la dignidad de la persona." },
          { x: "Repartir primero a quienes más lo necesitan, no a los conocidos", a: 1, why: "La necesidad decide, y empieza por los más frágiles." }]
      },
      {
        t: 'decision', titulo: 'Escena: el desagüe y el vecino',
        situacion: "El desagüe de tu calle está tapado y cada lluvia fuerte inunda tres casas. Un vecino dice: «Eso le toca al gobierno, no a nosotros». ¿Qué haces?",
        opciones: [
          { x: "Estoy de acuerdo: no nos toca y limpiar sin autorización podría causar problemas, así que lo mejor es esperar a que lo hagan.", pts: 0, c: "Esperar sin hacer nada deja a las familias expuestas. Hay cosas que se pueden hacer cerca de la gente." },
          { x: "Propongo a los vecinos limpiar lo que está a nuestro alcance, aviso a quien corresponde para lo que no podemos hacer y anoto la acción.", pts: 2, c: "Une lo local con lo institucional: actuamos donde podemos y pedimos apoyo donde hace falta." },
          { x: "Limpio yo solo el desagüe un domingo, sin avisar, para evitar discusiones.", pts: 1, c: "Ayuda, pero sin avisar ni sumar a otros, la solución depende de una sola persona y puede haber riesgos." },
          { x: "Escribo una queja fuerte en un grupo de mensajería para presionar a las autoridades.", pts: 0, c: "Puede generar conflicto y no resuelve el problema. Conviene canalizar por la vía institucional." }]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Según Laudato si', el ambiente y las personas:", ops: ["No tienen relación", "Se ven como una realidad conectada", "Son temas de dos ministerios distintos", "Solo importan en los desastres"], ok: 1, why: "Cuidar la casa común incluye cuidar a quienes viven en ella." },
          { q: "«Subsidiariedad» aplicada a nuestro trabajo significa:", ops: ["Que la nacional decida todo", "Resolver cerca de la gente y apoyar sin sustituir", "Que cada parroquia trabaje sola", "Esperar siempre a que otros resuelvan"], ok: 1, why: "Cada nivel tiene su papel y apoya al otro." },
          { q: "La ayuda que damos se basa en:", ops: ["La fe de quien la recibe", "La necesidad de la persona", "La cercanía con la parroquia", "Quién lo pide más fuerte"], ok: 1, why: "La motivación es de quien sirve; la ayuda se da por necesidad." },
          { q: "Una medida de prevención hoy ayuda a:", ops: ["Solo a quienes viven ahora", "A los de ahora y a quienes vienen después", "Solo al gobierno", "A nadie"], ok: 1, why: "Es cuidado y justicia con las generaciones futuras." }]
      },
      {
        t: 'actividad', id: 'B5_act', titulo: 'Mi motivo para servir',
        instruccion: "En unas pocas líneas, escribe qué te mueve a servir en tu comunidad y cuál de las ideas de este módulo se ve más en tu trabajo. Si prefieres, comparte con alguien de tu equipo. No escribas nombres de personas atendidas.",
        producto: "Un texto breve de reflexión personal."
      },
      { t: 'cierre' }]
  }
);

/* E1 a E4: nivel experto, diseño propio, borrador. Clímaco ya no guía: pregunta y pide justificar. */
MODS_EXTRA.push(
  {
    id: 'E1', nivel: 'e', titulo: '¿Respondemos o no? Decidir con criterios', duracion: 70,
    nota: "Borrador de diseño propio. Los montos y plazos de los mecanismos de CI no se enseñan aquí: consultar la versión vigente.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'M', x: "En este nivel Clímaco ya no te acompaña de la mano. Va a preguntarte por qué." },
          { q: 'C', x: "Colega, llegó un aviso de una inundación en un municipio de tu diócesis. ¿Respondemos?" },
          { q: 'M', x: "Responde con argumentos, no con ganas." },
          { q: 'C', x: "Una decisión de responder es también una decisión de dejar de hacer otra cosa. ¿Lo pensaste?" }]
      },
      {
        t: 'lectura', id: 'E1-01', titulo: 'Cinco preguntas antes de movilizar una respuesta',
        texto: "Antes de decidir si una Cáritas responde por su cuenta, conviene contestar cinco preguntas. Primera: ¿la escala del problema supera lo que la comunidad y las autoridades locales pueden atender? Segunda: ¿hay brechas que nadie está cubriendo? Tercera: ¿tenemos capacidad real, con personas, recursos, acceso y experiencia? Cuarta: ¿somos la mejor opción o hay otro actor más adecuado? Quinta: ¿qué recursos movilizaríamos y qué dejaríamos de hacer para ello? Cuatro «sí» no bastan si la quinta respuesta no está clara.",
        fuente: "Diseño propio. Lectura recomendada: manual del Kit de Herramientas de Caritas Internationalis, capítulo sobre llamamientos (pp. 21 a 24; versión y permiso por confirmar)."
      },
      {
        t: 'lectura', id: 'E1-02', titulo: 'Responder no siempre es pedir ayuda de fuera',
        texto: "Hay respuestas que la propia Cáritas puede sostener con sus recursos y coordinación local. Otras necesitan apoyo adicional de la Cáritas nacional o de la red internacional. Entre estas hay mecanismos pensados para emergencias rápidas, para emergencias de mayor escala y para crisis que se alargan, cada uno con sus condiciones. Los montos y plazos cambian con el tiempo: confirma siempre la versión vigente con la Cáritas nacional antes de comprometer una cifra.",
        fuente: "Diseño propio. Cifras y plazos: confirmar con la Cáritas nacional."
      },
      {
        t: 'decision', titulo: 'Caso 1: ciclón en un barrio',
        situacion: "Un ciclón dañó 80 viviendas en un barrio de tu diócesis. Las autoridades locales ya empezaron a atender. Tu Cáritas tiene un equipo pequeño y poco combustible. Decide.",
        opciones: [
          { x: "Movilizo a todo el equipo y todos los recursos de la diócesis hacia ese barrio, para dar una respuesta contundente.", pts: 0, c: "Si no verificas las brechas, puedes duplicar lo que ya se hace y dejar sin cobertura otras zonas." },
          { x: "Coordino con las autoridades locales para ver qué brechas hay (personas mayores solas, medicinas) y respondo solo a esas. Informo a la nacional.", pts: 2, c: "Responde a la brecha real, con capacidad real, y mantiene informado al nivel que corresponde." },
          { x: "No intervengo, porque las autoridades ya están atendiendo y nuestros recursos son pocos para otras necesidades.", pts: 1, c: "Puede haber brechas que nadie ve. Preguntar antes de descartar es mejor." },
          { x: "Lanzo un llamamiento público de donaciones, para tener recursos listos cuando haga falta cualquier cosa.", pts: 0, c: "Pides sin saber qué hace falta. Eso genera desorden y entregas que no sirven." }]
      },
      {
        t: 'decision', titulo: 'Caso 2: una sequía lenta',
        situacion: "Hay una sequía de varios meses que afecta cosechas en dos municipios. No hay un momento claro de «emergencia». Las familias empiezan a vender animales para comer. ¿Respondes?",
        opciones: [
          { x: "Espero a que la situación sea visible y evidente para todos, así nadie duda de que hace falta responder y se justifica el gasto.", pts: 0, c: "En las crisis lentas se pierde el momento en que la ayuda es más eficaz y barata." },
          { x: "Evalúo con familias y autoridades, defino señales de alerta (venta de animales, comidas al día) y respondo por fases, protegiendo primero los medios de vida.", pts: 2, c: "Actúa antes de la crisis visible y con criterios claros de cuándo escalar." },
          { x: "Reparto alimentos a todas las familias de los dos municipios ya mismo, para que nadie tenga que vender sus animales ni pasar hambre mientras se organizan las evaluaciones.", pts: 1, c: "Puede aliviar, pero no aborda la causa ni distingue quién lo necesita más." },
          { x: "Pido a la diócesis que decida qué hacer, sin enviarle aún datos concretos, para no preocuparla sin necesidad.", pts: 0, c: "Sin evidencia no hay decisión." }]
      },
      {
        t: 'decision', titulo: 'Caso 3: inundación en una zona ya atendida',
        situacion: "Una zona inundada ya recibe ayuda de varios actores y tu Cáritas no tiene presencia allí. La diócesis presiona para «estar presente» por visibilidad. ¿Qué argumento das?",
        opciones: [
          { x: "Digo que vayamos igual: estamos para ayudar y si hay otros actores, mejor, así se cubre a más gente.", pts: 0, c: "La presencia por visibilidad no es un criterio de necesidad." },
          { x: "Pregunto primero qué cubren los demás y dónde hay brechas. Si no las hay, destinamos recursos a otra zona o a prepararnos, y lo explico.", pts: 2, c: "Decide por necesidad y es honesta sobre la motivación." },
          { x: "Vamos y repartimos algo simbólico, para que la comunidad y la diócesis vean que estamos presentes y que no nos quedamos de brazos cruzados.", pts: 0, c: "Una entrega simbólica quita recursos a quienes los necesitan más." },
          { x: "Participo en las reuniones de coordinación de esa zona y dejo que otros decidan qué hacemos nosotros.", pts: 1, c: "Participas, pero sin decidir con criterio." }]
      },
      {
        t: 'ordenar', titulo: 'Pasos para decidir si respondes', instruccion: "Ordena los pasos.",
        items: [
          "Reunir información de fuentes distintas sobre el alcance",
          "Preguntar a las autoridades y a otros actores qué cubren y qué falta",
          "Evaluar nuestra capacidad real: personas, recursos, acceso",
          "Decidir qué hacemos, qué no y qué dejamos de hacer",
          "Comunicar la decisión y revisarla en pocos días"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Cuatro respuestas «sí» a las cinco preguntas:", ops: ["Bastan siempre", "No bastan si no hay claridad sobre recursos y lo que se deja de hacer", "Son innecesarias", "Se ignoran"], ok: 1, why: "La quinta pregunta es la que más se olvida." },
          { q: "En una crisis lenta como la sequía conviene:", ops: ["Esperar imágenes impactantes", "Definir señales de alerta y actuar por fases", "No hacer nada", "Repartir todo ya"], ok: 1, why: "Actuar antes protege más y cuesta menos." },
          { q: "Estar presente por visibilidad:", ops: ["Es un buen criterio", "No es un criterio de necesidad", "Es obligatorio", "Mejora la respuesta"], ok: 1, why: "La respuesta se decide por necesidad." },
          { q: "Los montos y plazos de los mecanismos de CI:", ops: ["Nunca cambian", "Se confirman con la Cáritas nacional en la versión vigente", "Los decide cada diócesis", "Se inventan"], ok: 1, why: "Cambian con el tiempo." }]
      },
      {
        t: 'actividad', id: 'E1_act', titulo: 'Mi decisión argumentada',
        instruccion: "Escoge un caso (real, sin datos de personas, o ficticio). Responde las cinco preguntas con una frase cada una y escribe tu decisión y qué dejarías de hacer.",
        producto: "Un caso decidido con argumentos."
      },
      { t: 'cierre' }]
  },

  {
    id: 'E2', nivel: 'e', titulo: 'Diseñar la respuesta: marco lógico, cronograma y presupuesto', duracion: 75,
    nota: "Borrador de diseño propio. Las plantillas del Kit de CI están en Baobab; no se incluyen en este curso.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Colega, te traigo un marco lógico que me pasaron. Tiene un fallo escondido." },
          { q: 'M', x: "No te lo digo yo: encuéntralo tú." },
          { q: 'C', x: "Antes, ¿qué es un buen marco lógico para ti?" }]
      },
      {
        t: 'lectura', id: 'E2-01', titulo: 'La cadena SI-ENTONCES',
        texto: "Un diseño de respuesta es una cadena de causas y efectos. Si hacemos estas actividades, entonces obtendremos estos resultados; si logramos estos resultados, entonces se cumplirá el objetivo. Cada resultado tiene indicadores que se pueden medir y una fuente donde se verifica. Los supuestos son condiciones que no controlamos y que, si fallan, rompen la cadena: acceso a la zona, que no haya otro desastre, que lleguen los materiales. Un supuesto no es una actividad: si depende de nosotros, es una tarea.",
        fuente: "Diseño propio. Lectura recomendada: plantillas de marco lógico, cronograma y presupuesto del Kit de CI (con autorización)."
      },
      {
        t: 'clasificar', titulo: '¿Actividad, resultado, indicador o supuesto?', instruccion: "Toca el elemento que corresponde.",
        cats: ['Actividad', 'Resultado', 'Indicador', 'Supuesto'],
        items: [
          { x: "Entregar 200 kits de higiene en cuatro comunidades", a: 0, why: "Es algo que hacemos." },
          { x: "Las familias usan agua segura para beber", a: 1, why: "Es un cambio que esperamos." },
          { x: "Porcentaje de familias que dicen beber agua tratada, en la visita de seguimiento", a: 2, why: "Se puede medir y tiene fuente." },
          { x: "Las carreteras de acceso siguen abiertas durante el proyecto", a: 3, why: "No lo controlamos." },
          { x: "Contratar a un técnico de agua y saneamiento", a: 0, why: "Es una tarea nuestra." },
          { x: "Hay combustible disponible para el transporte", a: 3, why: "Si no depende de nosotros, es un supuesto que hay que vigilar." }]
      },
      {
        t: 'decision', titulo: 'Escena: el fallo escondido',
        situacion: "Revisas este marco lógico: Objetivo: mejorar la salud de 300 familias. Resultado: las familias tienen agua limpia. Indicador: «las familias están más contentas». Supuesto: «el equipo contrata a un técnico de agua». ¿Cuál es el problema principal?",
        opciones: [
          { x: "El objetivo de mejorar la salud de 300 familias es demasiado ambicioso para el tiempo y los recursos.", pts: 0, c: "Puede serlo, pero hay fallos más claros." },
          { x: "El indicador «más contentas» no se puede medir ni verificar, y el supuesto de contratar un técnico en realidad es una actividad.", pts: 2, c: "Hay dos fallos de diseño: indicador no medible y supuesto que es una tarea." },
          { x: "No hay un fallo evidente: el marco tiene objetivo, resultado, indicador y supuesto, y se ve completo.", pts: 0, c: "Lo parecía, pero un indicador sin fuente y una tarea disfrazada de supuesto dañan el diseño." },
          { x: "Faltan más actividades, porque con una sola no se puede lograr un resultado de agua limpia.", pts: 1, c: "Puede que sí, pero el fallo de fondo es otro." }]
      },
      {
        t: 'lectura', id: 'E2-02', titulo: 'Cronograma y presupuesto que se pueden defender',
        texto: "El cronograma pone las actividades en el tiempo y muestra qué depende de qué. Un plazo sin responsable ni recurso es un deseo. El presupuesto traduce las actividades a costos: cada línea debe responder a una actividad, y si una línea no se explica con una actividad, sobra. Conviene separar los costos de la respuesta directa de los costos de gestión, y prever una reserva para imprevistos. Las cifras de precios y topes dependen del mecanismo de financiación y de la versión vigente [confirmar].",
        fuente: "Diseño propio."
      },
      {
        t: 'ordenar', titulo: 'Construir un diseño de respuesta', instruccion: "Ordena los pasos.",
        items: [
          "Definir el objetivo en una frase que pueda cumplirse",
          "Definir los resultados que lo hacen posible",
          "Escribir indicadores medibles y su fuente de verificación",
          "Listar actividades, responsables y plazos",
          "Calcular el presupuesto línea por línea según cada actividad"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Un indicador útil es:", ops: ["Una opinión general", "Algo que se puede medir y verificar", "Una actividad", "Un deseo"], ok: 1, why: "Debe tener una fuente de verificación." },
          { q: "Un supuesto es:", ops: ["Una tarea del equipo", "Una condición externa que podría fallar", "Un resultado", "Un gasto"], ok: 1, why: "Si depende de nosotros, es actividad." },
          { q: "Una línea del presupuesto que no responde a ninguna actividad:", ops: ["Está bien", "Sobra o falta explicarla", "Es obligatoria", "Es un resultado"], ok: 1, why: "Cada costo debe responder a una actividad." },
          { q: "Un plazo sin responsable ni recurso es:", ops: ["Un compromiso firme", "Un deseo", "Un resultado", "Un indicador"], ok: 1, why: "Debe tener quién y con qué." }]
      },
      {
        t: 'actividad', id: 'E2_act', titulo: 'Mi marco lógico',
        instruccion: "Para un caso (real sin datos de personas, o ficticio), escribe un objetivo, dos resultados, un indicador por resultado con fuente, tres actividades con responsable y plazo, y dos supuestos.",
        producto: "Un marco lógico de un caso."
      },
      { t: 'cierre' }]
  },

  {
    id: 'E3', nivel: 'e', titulo: 'Monitoreo, línea base y aprendizaje', duracion: 70,
    nota: "Borrador de diseño propio.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Colega, un coordinador me pidió un sistema con cuarenta indicadores. Yo lo veo imposible. ¿Tú qué harías?" },
          { q: 'M', x: "Pregunta primero para qué sirve cada uno." },
          { q: 'C', x: "Ahí te quería llevar." }]
      },
      {
        t: 'lectura', id: 'E3-01', titulo: 'Monitorear es responder preguntas de decisión',
        texto: "Monitorear no es acumular datos: es poder contestar las preguntas que ayudan a decidir. ¿Estamos haciendo lo planeado? ¿Está llegando la ayuda a quien más la necesita? ¿La gente está satisfecha y puede quejarse? ¿Estamos logrando el cambio esperado? Para cada dato hay que preguntar quién lo usará y para decidir qué. Si nadie lo usa, no se recoge. Los números dicen cuánto. Las conversaciones y las historias dicen cómo y por qué. Un buen sistema combina ambos.",
        fuente: "Diseño propio. Lecturas recomendadas: herramientas rápidas NGO-IDEAs (2012; permiso pendiente); manual del Kit de CI, secciones de seguimiento y evaluación (pp. 26, 35, 38 y 40)."
      },
      {
        t: 'lectura', id: 'E3-02', titulo: 'La línea base: de dónde partimos',
        texto: "Una línea base es una foto del punto de partida: cómo estaban las cosas antes de empezar. Sin ella no se puede decir que algo cambió. No tiene que ser grande: algunos datos clave, recogidos de forma sencilla, bastan. Es mejor una línea base pequeña y bien hecha que una enorme y abandonada. Y no se recogen datos personales que no se vayan a usar.",
        fuente: "Diseño propio."
      },
      {
        t: 'clasificar', titulo: '¿Qué pregunta responde cada dato?', instruccion: "Toca la pregunta de monitoreo que responde.",
        cats: ['¿Hacemos lo planeado?', '¿Llega a quien más lo necesita?', '¿La gente está satisfecha?', '¿Hay cambio?'],
        items: [
          { x: "Cantidad de kits entregados por semana", a: 0, why: "Mide actividad." },
          { x: "Proporción de hogares con personas mayores solas que recibieron ayuda", a: 1, why: "Mide llegada a quienes más necesitan." },
          { x: "Cuántas personas dicen que se les trató con respeto en el reparto", a: 2, why: "Mide satisfacción y trato." },
          { x: "Cambio en las comidas diarias por familia respecto a la línea base", a: 3, why: "Mide el efecto." },
          { x: "Cantidad de quejas recibidas y respondidas en una semana", a: 2, why: "Dice si la gente puede decir lo que piensa." },
          { x: "Reuniones realizadas frente a las planeadas", a: 0, why: "Mide actividad." }]
      },
      {
        t: 'decision', titulo: 'Escena: de cuarenta a ocho',
        situacion: "Un coordinador te pide un sistema de monitoreo con 40 indicadores para un proyecto de seis meses. Tu equipo es pequeño. ¿Qué haces?",
        opciones: [
          { x: "Acepto los 40: más datos siempre dan una imagen más completa y evitan que luego nos pidan algo que no tenemos, y el coordinador queda tranquilo.", pts: 0, c: "Con un equipo pequeño, muchos indicadores se abandonan o se llenan mal." },
          { x: "Propongo unos ocho indicadores, cada uno con su pregunta de decisión, quién lo usa, cada cuánto y con qué fuente, y explico qué se elimina.", pts: 2, c: "Se reduce a lo útil y se justifica la poda." },
          { x: "Acepto los 40 y, cuando falte un dato, pongo una estimación razonable para que las tablas queden completas.", pts: 0, c: "Un dato inventado es peor que no tener dato." },
          { x: "Explico que con un equipo pequeño no hay tiempo para monitoreo y propongo evaluar solo al final del proyecto.", pts: 0, c: "Sin monitoreo no se aprende ni se corrige." }]
      },
      {
        t: 'ordenar', titulo: 'Armar un sistema sencillo de monitoreo', instruccion: "Ordena los pasos.",
        items: [
          "Anotar las decisiones que habrá que tomar durante el proyecto",
          "Elegir pocos indicadores que ayuden a esas decisiones",
          "Recoger una línea base pequeña al inicio",
          "Definir quién recoge cada dato, cada cuánto y dónde se guarda",
          "Reunirse periódicamente a leer los datos y decidir cambios"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Un dato que nadie usará:", ops: ["Se recoge igual", "No se recoge", "Se inventa", "Se compra"], ok: 1, why: "Cada dato debe servir para decidir." },
          { q: "Los números y las historias:", ops: ["Compiten", "Se complementan", "Son lo mismo", "No sirven"], ok: 1, why: "Números dicen cuánto, historias dicen cómo y por qué." },
          { q: "Una línea base sirve para:", ops: ["Decorar el informe", "Saber de dónde partimos y ver si algo cambió", "Cobrar más", "Tener más datos"], ok: 1, why: "Sin punto de partida no se mide cambio." },
          { q: "Con un equipo pequeño conviene:", ops: ["Muchos indicadores", "Pocos indicadores bien elegidos", "Ninguno", "Solo opiniones"], ok: 1, why: "Lo simple se mantiene." }]
      },
      {
        t: 'actividad', id: 'E3_act', titulo: 'Mi sistema de ocho',
        instruccion: "Para un proyecto (real sin datos de personas, o ficticio), escribe ocho indicadores. Para cada uno, su pregunta de decisión, quién lo usa, cada cuánto y su fuente.",
        producto: "Una tabla de ocho indicadores."
      },
      { t: 'cierre' }]
  },

  {
    id: 'E4', nivel: 'e', titulo: 'Datos, imagen y protección', duracion: 70,
    nota: "Borrador de diseño propio. Consultar con asesoría jurídica el alcance de la Ley 149/2022 antes de aplicarlo.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Colega, una agencia pide «historias con foto y nombre» para mañana. Yo tengo diez fotos en el teléfono." },
          { q: 'M', x: "¿Qué sabes de cada persona de esas fotos?" },
          { q: 'C', x: "Pues... que aceptaron que las tomara. No sé si entendieron para qué." },
          { q: 'M', x: "Ahí está el centro de este módulo." }]
      },
      {
        t: 'lectura', id: 'E4-01', titulo: 'Cada dato personal es una responsabilidad',
        texto: "Un dato personal es cualquier información que identifica a alguien: nombre, dirección, foto, enfermedad, situación familiar. Cada dato recogido es una responsabilidad. Se recoge lo mínimo necesario, solo para un uso claro, con acceso limitado a quienes lo necesitan, con consentimiento informado y con derecho de la persona a pedir que se corrija o se retire. Una foto o un nombre difundido no se puede recoger de vuelta. Por eso este curso, en su USB, nunca contiene datos de personas atendidas.",
        fuente: "Diseño propio. Marco nacional: Ley 149/2022 de Protección de Datos Personales de Cuba [confirmar alcance y obligaciones con asesoría jurídica]."
      },
      {
        t: 'lectura', id: 'E4-02', titulo: 'Consentimiento informado: qué lo hace válido',
        texto: "El consentimiento es válido cuando la persona entiende para qué se usará su dato o imagen, en qué medios, por cuánto tiempo y qué puede pasar; puede decir que no sin perder la ayuda; puede retirarlo después; y no está bajo presión (no se pide en medio de una entrega, cuando la persona siente que debe aceptar para recibir). Con niñas y niños se pide a su familia o tutor y se escucha a la niña o el niño. Un papel firmado sin explicación no es consentimiento.",
        fuente: "Diseño propio."
      },
      {
        t: 'lectura', id: 'E4-03', titulo: 'Cuestionar una pauta común',
        texto: "Algunas guías de comunicación de emergencias recomiendan que las fotos, audios y videos lleven fecha, lugar y nombres de las personas, y que se recojan estudios de caso para los medios. En ciertos contextos, esa exposición puede afectar a la persona: perder privacidad, ser identificada por quien no debía, sufrir presión social o institucional. Este curso enseña a aplicar esas guías con criterio: pedir consentimiento informado, proponer alternativas (historias sin nombre, fotos sin rostro) y decir no cuando no se puede proteger a la persona.",
        fuente: "Diseño propio. Se refiere en general a pautas de comunicación del manual del Kit de CI (pp. 14 y 31) como ejemplo de práctica que debe adaptarse a cada contexto."
      },
      {
        t: 'clasificar', titulo: '¿Dato necesario o dato de más?', instruccion: "Para un reparto de bolsas de alimentos, toca si el dato hace falta.",
        cats: ['Necesario', 'De más'],
        items: [
          { x: "Número de personas en el hogar", a: 0, why: "Define cuánta ayuda se entrega." },
          { x: "Religión de cada miembro del hogar", a: 1, why: "No define la entrega y puede discriminar." },
          { x: "Si hay personas mayores o con discapacidad que necesitan ayuda extra", a: 0, why: "Permite apoyar mejor." },
          { x: "Opinión política de la familia", a: 1, why: "Nunca hace falta y puede dañar." },
          { x: "Barrio o sector de vivienda", a: 0, why: "Organiza la entrega." },
          { x: "Foto del rostro de cada familia", a: 1, why: "No hace falta para repartir. Si se toma, es con consentimiento." }]
      },
      {
        t: 'decision', titulo: 'Escena: la agencia pide historias con foto y nombre',
        situacion: "Una agencia asociada pide para mañana «tres historias con foto y nombre» de familias atendidas. Tu equipo tiene fotos de reparto, pero no tienes permisos explicados. ¿Qué respondes?",
        opciones: [
          { x: "Envío las diez fotos con los nombres que tengo, para cumplir con la agencia y mantener la relación de confianza que hemos construido por años.", pts: 0, c: "Sin consentimiento informado, la exposición puede dañar a esas familias." },
          { x: "Pido más tiempo para obtener consentimiento informado y ofrezco historias sin nombre ni rostro, explicando el motivo y un plazo.", pts: 2, c: "Protege a las personas y ofrece una alternativa útil." },
          { x: "Respondo que no podemos dar fotos con nombres y cierro el tema, para evitar riesgos con las familias.", pts: 1, c: "El criterio es correcto, pero sin explicación ni alternativa pierdes la relación." },
          { x: "Pido a las familias que firmen un permiso esta noche, para entregar mañana lo que pide la agencia.", pts: 0, c: "Un permiso con prisa y sin explicación no es consentimiento." }]
      },
      {
        t: 'ordenar', titulo: 'Pedir consentimiento con cuidado', instruccion: "Ordena los pasos.",
        items: [
          "Decidir con el equipo si realmente hace falta una imagen o historia",
          "Explicar a la persona, con calma, para qué sería, dónde y por cuánto tiempo",
          "Dar tiempo y decir con claridad que puede decir que no sin perder la ayuda",
          "Registrar el permiso de forma sencilla, sin guardar más datos de los necesarios",
          "Ofrecer la posibilidad de retirar el permiso después y respetarla"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "El consentimiento informado exige que la persona:", ops: ["Firme rápido", "Entienda para qué, pueda decir no y pueda retirarlo", "Esté presionada", "Sea líder"], ok: 1, why: "Entender, elegir y poder retirar." },
          { q: "Una foto difundida:", ops: ["Se puede recoger de vuelta", "No se puede recoger de vuelta", "Siempre es inofensiva", "Es del equipo"], ok: 1, why: "Por eso se piensa antes." },
          { q: "Cuando una guía de comunicación pide fotos con nombres:", ops: ["Se aplica siempre sin pensar", "Se aplica con criterio, pidiendo consentimiento y alternativas", "Se ignora sin explicar", "Se publica más"], ok: 1, why: "El contexto importa." },
          { q: "En esta USB del curso:", ops: ["Se guardan listas de beneficiarios", "Nunca hay datos de personas atendidas", "Se guardan fotos", "Se guardan teléfonos"], ok: 1, why: "Es una regla firme del curso." }]
      },
      {
        t: 'actividad', id: 'E4_act', titulo: 'Auditar una hoja de registro',
        instruccion: "Inventa una hoja de registro de un reparto con ocho campos. Marca cuáles son necesarios y cuáles sobran, y escribe quién puede ver la hoja y cuándo se destruye.",
        producto: "Una hoja de registro auditada."
      },
      { t: 'cierre' }]
  }
);

/* E5 a E9: nivel experto, diseño propio, borrador. */
MODS_EXTRA.push(
  {
    id: 'E5', nivel: 'e', titulo: 'Coordinar en el marco cubano', duracion: 65,
    nota: "Borrador de diseño propio. El marco cubano está por confirmar con la Defensa Civil y la Cáritas nacional.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Colega, una ONG ofrece ayuda. El gobierno local pide canalizarla por otra vía. Y mi diocesana quiere actuar ya. ¿Cómo lo ves?" },
          { q: 'M', x: "Dime tú. ¿Quién puede perder si esto sale mal?" },
          { q: 'C', x: "Las familias. Y la confianza entre todos." }]
      },
      {
        t: 'lectura', id: 'E5-01', titulo: 'Dos modelos de coordinación',
        texto: "En la ayuda humanitaria internacional se usa un modelo de coordinación por áreas temáticas (agua, refugio, salud, protección) y una matriz que muestra quién hace qué y dónde. En cada país hay además un sistema nacional con sus propias reglas. En Cuba, el sistema nacional conduce la preparación y la respuesta [confirmar con la Defensa Civil y con la Cáritas nacional cómo opera con organizaciones como Cáritas]. Un coordinador debe conocer ambos modelos y ubicar en qué lugar actúa. No se asume que el modelo internacional rige: se pregunta.",
        fuente: "Diseño propio. Lectura recomendada: manual del Kit de CI, coordinación y matriz de actores (pp. 7 a 9 y 35 a 37; versión y permiso por confirmar)."
      },
      {
        t: 'lectura', id: 'E5-02', titulo: 'Coordinar es también un acto de respeto',
        texto: "Cuando varias organizaciones quieren ayudar, el riesgo mayor es duplicar, saltarse pasos o contradecirse. Coordinar significa preguntar qué hace cada actor, qué canales ya existen y qué necesita de nosotros. También significa reconocer las responsabilidades de las autoridades locales y nacionales, y encontrar formas de sumar sin competir. Cuando hay desacuerdo sobre cómo canalizar una ayuda, se busca un acuerdo escrito simple: qué se entrega, a quién, por qué vía y quién informa de qué.",
        fuente: "Diseño propio."
      },
      {
        t: 'decision', titulo: 'Escena: tres voces que no coinciden',
        situacion: "Una ONG ofrece 50 kits de higiene. La autoridad local pide que se canalicen por el mecanismo que ya tiene. Tu Cáritas diocesana quiere entregarlos directamente para ir más rápido. Tú debes proponer un camino.",
        opciones: [
          { x: "Acepto la propuesta de la diocesana de entregar directamente, porque es más rápido y llega a las familias antes.", pts: 0, c: "Puede generar fricción con la autoridad local y confundir a las familias. La rapidez no es el único criterio." },
          { x: "Me reúno con la autoridad local y la ONG, propongo un acuerdo escrito simple de entrega y ofrezco nuestra red para llegar a quienes queden fuera.", pts: 2, c: "Suma capacidades, reduce fricción y deja claro quién hace qué." },
          { x: "Rechazo la ayuda de la ONG, para evitar un conflicto con la autoridad local y con la diocesana.", pts: 0, c: "Se pierde ayuda que las familias necesitan." },
          { x: "Entrego por la vía que pide la autoridad local y me desentiendo del resto, para no tener fricciones.", pts: 1, c: "Se respeta la vía, pero se pierde la posibilidad de llegar a quienes la vía no alcanza." }]
      },
      {
        t: 'clasificar', titulo: '¿Se coordina antes, se informa después o decide la Cáritas?', instruccion: "Toca la forma de actuar que corresponde a cada acción.",
        cats: ['Se coordina antes', 'Se informa después', 'Decide la Cáritas'],
        items: [
          { x: "Entrar a una zona nueva a trabajar", a: 0, why: "Hay que saber quién está y qué cubre." },
          { x: "Informar el resultado de un reparto a las autoridades locales", a: 1, why: "Es rendición de cuentas." },
          { x: "A qué parroquias asigna la diócesis a sus voluntarios", a: 2, why: "Es un asunto interno." },
          { x: "Aceptar donaciones de una organización externa", a: 0, why: "Hay que acordar cómo canalizar [confirmar con la Cáritas nacional]." },
          { x: "Resumen mensual de actividades", a: 1, why: "Se informa." },
          { x: "Criterios de selección de familias atendidas por Cáritas", a: 2, why: "Son criterios propios, aunque se explican con transparencia." }]
      },
      {
        t: 'ordenar', titulo: 'Acordar cómo canalizar una ayuda externa', instruccion: "Ordena los pasos.",
        items: [
          "Saber qué ofrece el actor externo y con qué condiciones",
          "Conocer qué canales ya existen y quién los lleva",
          "Reunirse con quienes corresponde para acordar cómo entregar",
          "Escribir el acuerdo: qué, a quién, por qué vía y quién informa",
          "Entregar, informar y revisar cómo fue"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Antes de actuar en una zona nueva conviene:", ops: ["Entrar rápido", "Saber quién está ya y qué cubre", "Esperar a que alguien nos llame", "Hacer una campaña"], ok: 1, why: "Evita duplicar." },
          { q: "El modelo internacional de coordinación:", ops: ["Rige en todos los países igual", "Es un modelo que se compara con el sistema nacional", "No sirve", "Es obligatorio"], ok: 1, why: "Se pregunta cómo opera en cada país." },
          { q: "Un acuerdo escrito simple dice:", ops: ["Quién tiene la culpa", "Qué se entrega, a quién, por qué vía y quién informa", "Cuánto cuesta", "Quién gana"], ok: 1, why: "Hace visible quién hace qué." },
          { q: "Informar el resultado de un reparto es:", ops: ["Una pérdida de tiempo", "Rendición de cuentas", "Opcional", "Un secreto"], ok: 1, why: "Mantiene confianza." }]
      },
      {
        t: 'actividad', id: 'E5_act', titulo: 'Mi mapa de actores',
        instruccion: "Haz una tabla de cinco actores de una emergencia en tu territorio (autoridad local, Defensa Civil [confirmar], salud, otra organización, tu Cáritas). Para cada uno: qué hace, qué necesita de ti y por qué vía se comunican.",
        producto: "Un mapa de actores con rol y canal."
      },
      { t: 'cierre' }]
  },

  {
    id: 'E6', nivel: 'e', titulo: 'Equipos y salvaguardia', duracion: 65,
    modo: 'Estudio individual + reflexión en el encuentro nacional (casos ficticios)',
    nota: "Borrador de diseño propio. La instancia responsable de recibir casos graves debe definirse en cada Cáritas.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Colega, tengo un caso difícil. Un voluntario que todos quieren. Y una queja sobre su conducta." },
          { q: 'M', x: "¿Qué pesa más: lo que sabes de él o lo que dice quien se quejó?" },
          { q: 'C', x: "No lo sé. Por eso necesito un proceso." }]
      },
      {
        t: 'lectura', id: 'E6-01', titulo: 'Salvaguardia: prevenir el daño que podría causar nuestro propio equipo',
        texto: "Salvaguardia es todo lo que hacemos para que nuestro personal y voluntariado no cause daño a las personas que atendemos: maltrato, acoso, explotación, abuso de poder. Incluye un código de conducta conocido por todos, selección cuidadosa de quienes trabajan con personas en situación vulnerable, formación, canales seguros para reportar y una forma clara de responder. También incluye cuidar al equipo: el cansancio, la presión y el miedo afectan la calidad y la conducta de quienes responden.",
        fuente: "Diseño propio. Lecturas recomendadas: manual del Kit de CI, normas de gestión de personal (pp. 33 y 34); IASC (2007), apoyo psicosocial (permisos y licencias por confirmar)."
      },
      {
        t: 'clasificar', titulo: '¿Conducta aceptable, inaceptable o a consultar?', instruccion: "Toca la categoría de cada situación.",
        cats: ['Aceptable', 'Inaceptable', 'Consultar al responsable'],
        items: [
          { x: "Saludar a las familias con cariño y respeto", a: 0, why: "Es parte del trato digno." },
          { x: "Pedir un favor personal a cambio de incluir a alguien en un reparto", a: 1, why: "Es abuso de poder." },
          { x: "Recibir un regalo pequeño de agradecimiento de una familia", a: 2, why: "Depende de la política de la Cáritas. Se consulta." },
          { x: "Hacer comentarios sexuales a una joven beneficiaria", a: 1, why: "Es acoso." },
          { x: "Quedarse a solas con un niño sin conocimiento de otros adultos", a: 1, why: "Es un riesgo de protección: se evita." },
          { x: "Acompañar a una familia a un trámite en horario de trabajo", a: 2, why: "Se consulta con el equipo." }]
      },
      {
        t: 'decision', titulo: 'Escena: el voluntario querido',
        situacion: "Una joven le cuenta a una compañera que un voluntario muy querido por la comunidad la ha hecho sentir incómoda con comentarios y gestos. La compañera te lo cuenta a ti, coordinador. ¿Qué haces?",
        opciones: [
          { x: "Hablo con el voluntario, le pido que se aleje de la joven y mantengo el tema entre nosotros para no dañar su reputación ni la del programa ante la comunidad.", pts: 0, c: "No sigues el proceso, no proteges bien a la joven y puedes poner en riesgo a otras personas." },
          { x: "Escucho a la compañera, explico que se reportará en confidencia a la instancia responsable, anoto lo mínimo y protejo a la joven mientras se revisa.", pts: 2, c: "Protege a la joven, respeta la confidencialidad y deja la revisión a quien corresponde." },
          { x: "Pido a la joven que aporte pruebas o testigos antes de actuar, para no acusar injustamente a alguien querido.", pts: 0, c: "No es su tarea probar. Pedirle pruebas puede dañarla de nuevo." },
          { x: "Lo llevo a la próxima reunión del equipo, para conocer opiniones y decidir entre todos cómo manejarlo.", pts: 0, c: "Se expone a la joven y se rompe la confidencialidad." }]
      },
      {
        t: 'lectura', id: 'E6-02', titulo: 'Qué se hace y qué no cuando llega un caso',
        texto: "Cuando llega un caso grave: se escucha con respeto sin juzgar ni interrogar, se explica con honestidad que se reportará, se anota lo mínimo, se informa a la instancia designada y se protege a la persona. Quien recibe el caso no investiga por su cuenta ni confronta a la persona señalada. La persona señalada tiene derecho a ser escuchada en el proceso, pero no a conocer quién se quejó si eso pone en riesgo a la persona. Toda Cáritas debe tener definida quién es la instancia responsable [confirmar con la Cáritas nacional].",
        fuente: "Diseño propio."
      },
      {
        t: 'ordenar', titulo: 'Cuando llega un caso grave', instruccion: "Ordena los pasos.",
        items: [
          "Escuchar con respeto, sin interrogar ni juzgar",
          "Explicar con honestidad qué pasará con lo que contó",
          "Anotar lo mínimo y reportar a la instancia responsable",
          "Proteger a la persona y a otras posibles afectadas mientras se revisa",
          "Informar a la persona (si corresponde) cómo sigue el proceso"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Salvaguardia es:", ops: ["Proteger los bienes de la Cáritas", "Prevenir el daño que podría causar nuestro propio equipo", "Evitar quejas", "Cuidar la imagen"], ok: 1, why: "Se enfoca en el riesgo que viene de dentro." },
          { q: "Quien recibe un caso grave:", ops: ["Investiga por su cuenta", "Reporta a la instancia designada y protege", "Confronta a la persona señalada", "Ignora el caso"], ok: 1, why: "No es tarea de quien recibe investigar." },
          { q: "Un voluntario querido por la comunidad:", ops: ["No puede ser cuestionado", "Puede ser objeto de un reporte como cualquier otra persona", "Es intocable", "No tiene normas"], ok: 1, why: "El cariño no sustituye el proceso." },
          { q: "Cuidar al equipo es parte de la salvaguardia porque:", ops: ["Es un lujo", "El cansancio y el miedo afectan la conducta y la calidad", "Es obligatorio por ley", "No importa"], ok: 1, why: "Un equipo agotado comete más errores." }]
      },
      {
        t: 'actividad', id: 'E6_act', titulo: 'Mi ruta para casos graves',
        instruccion: "Diseña una ruta en cinco pasos para tu Cáritas: a quién llega un caso grave, quién lo recibe, qué se anota, a quién se reporta y cómo se protege. No uses nombres reales. Llévala a la reflexión del encuentro nacional, donde se conversa con casos ficticios. Un caso real nunca se conversa en grupo: se reporta por la ruta confidencial.",
        producto: "Una ruta de cinco pasos para conversar con otras Cáritas."
      },
      { t: 'cierre' }]
  },

  {
    id: 'E7', nivel: 'e', titulo: 'Plan institucional de preparación y respuesta', duracion: 80,
    nota: "Borrador de diseño propio. Producto final del nivel experto.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Colega, son las tres de la mañana. Suena el teléfono: un ciclón cambió de rumbo hacia tu diócesis. ¿Qué haces primero?" },
          { q: 'M', x: "Depende de lo que tu plan diga. ¿Lo tienes?" },
          { q: 'C', x: "Ese es el punto: hoy lo vamos a escribir." }]
      },
      {
        t: 'lectura', id: 'E7-01', titulo: 'Siete partes de un plan institucional',
        texto: "Un plan institucional de preparación y respuesta puede organizarse en siete partes. A: a qué riesgos nos preparamos. B: quién decide en lo estratégico y quién ejecuta en lo técnico. C: cómo se activa el plan y con qué señales. D: qué recursos tenemos y dónde están. E: qué haremos en 24 horas, 7 días y 30 días. F: cómo nos comunicamos, internamente y con otros actores. G: cómo aprendemos y cómo se actualiza el plan. Un plan sin responsables ni fechas de revisión se envejece rápido.",
        fuente: "Diseño propio. Lectura recomendada: plan institucional de respuesta de Cáritas Chile (2014), como ejemplo de otra Cáritas nacional (permiso pendiente; no se copia su estructura)."
      },
      {
        t: 'clasificar', titulo: '¿Qué horizonte?', instruccion: "Toca el momento en que hay que hacerlo.",
        cats: ['Primeras 24 horas', 'Primeros 7 días', 'Primeros 30 días'],
        items: [
          { x: "Activar la cadena de contacto y confirmar quién está disponible", a: 0, why: "Es lo primero." },
          { x: "Hacer una evaluación de necesidades más detallada con equipos de visita", a: 1, why: "Requiere tiempo y organización." },
          { x: "Diseñar el plan de recuperación de medios de vida", a: 2, why: "Es una acción de más largo plazo." },
          { x: "Abrir el almacén y revisar existencias", a: 0, why: "Hay que saber qué se tiene." },
          { x: "Enviar el primer informe de situación a la Cáritas nacional", a: 0, why: "La información sube rápido." },
          { x: "Organizar una reunión de aprendizaje con el equipo", a: 2, why: "Ocurre cuando baja la presión." }]
      },
      {
        t: 'decision', titulo: 'Escena: la llave del almacén',
        situacion: "En el simulacro de las tres de la mañana, Clímaco pregunta: «¿quién tiene la llave del almacén?». Tu plan dice «el responsable de logística», pero esa persona está de viaje. No hay copia ni reserva. ¿Qué haces?",
        opciones: [
          { x: "Digo que no importa mucho: el responsable volverá pronto y mientras tanto no hay ninguna emergencia real.", pts: 0, c: "Un plan que depende de una sola persona se rompe el día menos pensado." },
          { x: "Registro el fallo del plan, designo una persona de reserva, defino dónde queda una copia de la llave y fijo una fecha de revisión.", pts: 2, c: "Convierte el fallo en mejora concreta." },
          { x: "Anoto que el responsable de logística debió avisar que viajaba, y le pido más cuidado a partir de ahora.", pts: 0, c: "El fallo es del plan, no de la persona." },
          { x: "Busco a alguien que fuerce la cerradura del almacén y sigo con el simulacro, que lo importante es la rapidez.", pts: 0, c: "Soluciona hoy pero no mejora el plan y puede generar otros problemas." }]
      },
      {
        t: 'ordenar', titulo: 'Escribir el plan', instruccion: "Ordena cómo avanzar en la escritura.",
        items: [
          "Identificar los riesgos a los que nos preparamos (con base en el mapa)",
          "Definir quién decide y quién ejecuta, con suplentes",
          "Escribir qué se hace en 24 horas, 7 días y 30 días",
          "Listar recursos y canales de comunicación",
          "Probar el plan con un simulacro y fijar la fecha de revisión"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Un plan institucional debe tener:", ops: ["Solo una lista de teléfonos", "Riesgos, responsables, activación, recursos, horizontes, comunicación y aprendizaje", "Solo un organigrama", "Solo un presupuesto"], ok: 1, why: "Son las siete partes." },
          { q: "Un plan con una sola persona clave:", ops: ["Es sólido", "Es frágil: necesita suplente", "Es rápido", "Es mejor"], ok: 1, why: "Todos los cargos clave necesitan reserva." },
          { q: "¿Cuándo se actualiza el plan?", ops: ["Nunca", "Después de cada ejercicio o evento y con fecha de revisión", "Cada diez años", "Cuando alguien se queja"], ok: 1, why: "Debe aprender." },
          { q: "¿Qué es lo primero en las primeras 24 horas?", ops: ["Diseñar la reconstrucción", "Activar la cadena de contacto y confirmar disponibilidad", "Escribir el informe final", "Hacer una campaña"], ok: 1, why: "Se organiza al equipo primero." }]
      },
      {
        t: 'actividad', id: 'E7_act', titulo: 'Mi plan en siete partes',
        instruccion: "Escribe un borrador del plan institucional de tu Cáritas con las siete partes (A a G), una o dos líneas por parte. Marca dos partes que necesitas completar con otras personas.",
        producto: "Un borrador de plan institucional."
      },
      { t: 'cierre' }]
  },

  {
    id: 'E8', nivel: 'e', titulo: 'Clima, ambiente y desarrollo', duracion: 70,
    nota: "Borrador de diseño propio. Módulo técnico: la reflexión se hace en el espacio de reflexión externo. El documento nacional vigente debe confirmarse.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Colega, quieren montar un proyecto de cría de animales junto a un arroyo, con apoyo de una ONG. A mí algo me incomoda." },
          { q: 'M', x: "Pon en palabras qué es lo que te incomoda." },
          { q: 'C', x: "Que no sé qué le puede hacer el proyecto al ambiente. Ni qué le puede hacer el clima al proyecto." },
          { q: 'M', x: "Esas son las dos preguntas del módulo." }]
      },
      {
        t: 'lectura', id: 'E8-01', titulo: 'Dos miradas a cada proyecto',
        texto: "Cada proyecto de desarrollo se revisa en dos direcciones. Primera: ¿qué le hace el proyecto al ambiente? Usa agua, leña, suelo o energía; produce residuos; cambia la vegetación; puede contaminar o proteger. Segunda: ¿qué le puede hacer el clima al proyecto? Una sequía, una lluvia intensa o un calor extremo pueden dañarlo o hacerlo inviable. Un proyecto que ignora una de las dos miradas puede fracasar o causar daño.",
        fuente: "Diseño propio. Lectura recomendada: Herramienta de gestión ambiental (Environmental Stewardship Tool) de Caritas Internationalis (2020; permiso pendiente)."
      },
      {
        t: 'lectura', id: 'E8-02', titulo: 'El marco nacional',
        texto: "En Cuba, el plan de Estado para el enfrentamiento al cambio climático, conocido como Tarea Vida, es el marco nacional de referencia [confirmar el documento vigente, sus tareas y quién lo coordina]. Un proyecto de Cáritas no sustituye esas políticas: se alinea con ellas. Revisar con la autoridad ambiental local y con los servicios técnicos (meteorología, recursos hídricos) ayuda a saber qué zonas son sensibles y qué acciones ya existen.",
        fuente: "Diseño propio. Datos cubanos sin verificar. Fuentes por conseguir: Tarea Vida, INSMET, guía del PNUD Cuba 2023."
      },
      {
        t: 'clasificar', titulo: '¿Impacto sobre el ambiente o del clima sobre el proyecto?', instruccion: "Toca la dirección de cada efecto.",
        cats: ['El proyecto afecta al ambiente', 'El clima afecta al proyecto'],
        items: [
          { x: "Los desechos de los animales llegan al arroyo", a: 0, why: "El proyecto contamina." },
          { x: "Una sequía larga deja sin agua a los animales", a: 1, why: "El clima dañaría el proyecto." },
          { x: "Se corta leña de la zona para construir los corrales", a: 0, why: "El proyecto usa recursos naturales." },
          { x: "Una lluvia intensa inunda los corrales", a: 1, why: "El clima afecta el proyecto." },
          { x: "La cría consume mucha agua del pozo comunitario", a: 0, why: "El proyecto compite por el agua." },
          { x: "El calor extremo reduce la producción de los animales", a: 1, why: "El clima afecta la producción." }]
      },
      {
        t: 'decision', titulo: 'Escena: la cría junto al arroyo',
        situacion: "El proyecto propone criar cerdos a 30 metros del arroyo, con apoyo financiero que depende de iniciar ya. Cada una de tus dos miradas encuentra problemas. ¿Qué haces?",
        opciones: [
          { x: "Apruebo el proyecto tal cual: el financiamiento es una oportunidad que quizás no se repita y hay que aprovecharla antes de que se cierre la convocatoria.", pts: 0, c: "Una mala ubicación se paga después. El dinero no sustituye la revisión." },
          { x: "Propongo cambiar la ubicación (más lejos del arroyo y fuera de zona inundable), revisar los residuos y pedir ajustar el plazo al financiador.", pts: 2, c: "Corrige el diseño antes de gastar y negocia con claridad." },
          { x: "Rechazo el proyecto por el riesgo ambiental y le pido al grupo que busque otra idea más segura.", pts: 1, c: "Se protege el ambiente, pero se pierde la oportunidad de mejorar el proyecto." },
          { x: "Apruebo y reviso los efectos sobre la marcha, porque corregir en el camino es más rápido que planificar de más.", pts: 0, c: "Corregir después cuesta más y puede causar daños." }]
      },
      {
        t: 'ordenar', titulo: 'Revisar un proyecto con mirada climática', instruccion: "Ordena los pasos.",
        items: [
          "Describir qué hace el proyecto y dónde",
          "Preguntar qué recursos usa y qué podría dañar",
          "Preguntar cómo lo afectarían sequías, lluvias fuertes o calor",
          "Ajustar el diseño y las medidas de cuidado",
          "Anotar lo decidido y volver a revisar durante el seguimiento"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Revisar un proyecto con mirada climática incluye:", ops: ["Solo ver el presupuesto", "Ver qué le hace al ambiente y qué le hace el clima a él", "Solo ver al financiador", "Ninguna de las dos"], ok: 1, why: "Son dos direcciones." },
          { q: "Si un financiador presiona por iniciar rápido y el diseño tiene un riesgo:", ops: ["Se inicia igual", "Se explica el riesgo y se negocia el plazo o el diseño", "Se oculta", "Se cancela sin hablar"], ok: 1, why: "Es mejor ajustar y comunicar con claridad." },
          { q: "El marco nacional de cambio climático:", ops: ["No existe", "Se alinea con los proyectos [confirmar documento vigente]", "Reemplaza el trabajo comunitario", "Es opcional"], ok: 1, why: "Se alinea, no se sustituye." },
          { q: "Una sequía larga puede afectar un proyecto de cría porque:", ops: ["No lo afecta", "Reduce agua y alimento", "Mejora la producción", "Aumenta el precio de venta"], ok: 1, why: "Es un riesgo climático." }]
      },
      {
        t: 'actividad', id: 'E8_act', titulo: 'Revisión de un proyecto',
        instruccion: "Escoge un proyecto (real sin datos de personas, o ficticio). Escribe tres efectos posibles del proyecto sobre el ambiente y tres posibles efectos del clima sobre el proyecto, y una medida para cada uno.",
        producto: "Una revisión climática de un proyecto."
      },
      { t: 'cierre' }]
  },

  {
    id: 'E9', nivel: 'e', titulo: 'Formar formadores', duracion: 65,
    modo: 'Estudio individual + sesión virtual con asesor',
    nota: "Borrador de diseño propio.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Colega, di una sesión y a los diez minutos la mitad miraba el teléfono. ¿Qué hice mal?" },
          { q: 'M', x: "Quizás nada de lo que sabías. Quizás todo en cómo lo contaste." },
          { q: 'C', x: "Y yo que preparé tantas diapositivas..." },
          { q: 'M', x: "Vamos a ver qué hace falta en una sesión." }]
      },
      {
        t: 'lectura', id: 'E9-01', titulo: 'Una sesión tiene cuatro piezas',
        texto: "Una buena sesión formativa tiene un objetivo claro (qué podrá hacer la gente al terminar), una actividad central donde la gente hace algo en vez de solo escuchar, un cierre donde se junta lo aprendido y una forma de saber si se aprendió. Todo lo que no ayude a uno de estos cuatro puntos se puede quitar. Se aprende haciendo, equivocándose en un espacio seguro y repitiendo.",
        fuente: "Diseño propio. Lectura recomendada: guía del facilitador de la Herramienta de gestión ambiental de CI (2020), como ejemplo de diseño de sesión (permiso pendiente)."
      },
      {
        t: 'clasificar', titulo: '¿Qué pieza de la sesión es?', instruccion: "Toca la pieza que corresponde.",
        cats: ['Objetivo', 'Actividad central', 'Cierre', 'Comprobar aprendizaje'],
        items: [
          { x: "Al terminar, las personas sabrán hacer un mapa sencillo de riesgo", a: 0, why: "Dice qué se logrará." },
          { x: "En grupos pequeños dibujan el mapa de su barrio", a: 1, why: "La gente hace algo." },
          { x: "Cada persona dice una cosa que se lleva y una duda", a: 2, why: "Cierra la sesión." },
          { x: "Cada grupo explica a otro cómo usó el mapa para decidir una medida", a: 3, why: "Permite ver si se aprendió." },
          { x: "Se plantea qué problema ayudará a resolver el taller", a: 0, why: "Es objetivo." },
          { x: "Se hace un juego de roles de un aviso de alerta", a: 1, why: "Es práctica." }]
      },
      {
        t: 'decision', titulo: 'Escena: la sesión aburrida',
        situacion: "Tienes que dar una sesión de 30 minutos sobre «medidas correctivas y prospectivas». Tu primer borrador es una presentación de 40 diapositivas. ¿Qué haces?",
        opciones: [
          { x: "Mantengo las 40 diapositivas y hablo con ritmo ágil, porque así cubro todo el contenido en los 30 minutos.", pts: 0, c: "Más contenido no es más aprendizaje." },
          { x: "Defino el objetivo, preparo una actividad central de 15 minutos con ejemplos del barrio, un cierre de 5 y una pregunta final. Dejo tres diapositivas.", pts: 2, c: "Sacrifica contenido para dar tiempo a hacer." },
          { x: "Pongo un video de 30 minutos de alguien con experiencia, porque lo explicará mejor que yo.", pts: 0, c: "La gente mira, no hace." },
          { x: "Reduzco a 20 diapositivas y agrego una pregunta al final, para que haya algo de participación.", pts: 1, c: "Mejora, pero sigue centrada en escuchar." }]
      },
      {
        t: 'lectura', id: 'E9-02', titulo: 'Facilitar conversaciones delicadas',
        texto: "Algunos temas, como qué asumimos frente al cambio climático o qué pensamos de nuestras instituciones, no se trabajan como una clase. Requieren un espacio presencial, voluntario y confidencial, sin grabar ni anotar quién dijo qué, con reglas leídas en voz alta y un facilitador que escucha más de lo que habla. Quien forma formadores debe enseñar a distinguir cuándo una conversación es de aprendizaje técnico y cuándo es de reflexión. Para lo segundo se usa una guía aparte.",
        fuente: "Diseño propio. Ver la guía de espacios de reflexión sobre cambio climático (documento aparte, sin validar)."
      },
      {
        t: 'ordenar', titulo: 'Diseñar una sesión en 30 minutos', instruccion: "Ordena los pasos de preparación.",
        items: [
          "Escribir el objetivo en una frase: qué podrán hacer al terminar",
          "Elegir una actividad central donde la gente haga algo",
          "Preparar un cierre corto donde cada persona diga qué se lleva",
          "Pensar una pregunta o ejercicio que permita ver si se aprendió",
          "Quitar todo lo que no ayude a esas cuatro piezas"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "¿Qué debe tener una sesión formativa?", ops: ["Solo muchas diapositivas", "Objetivo, actividad central, cierre y forma de comprobar", "Solo un video", "Solo preguntas"], ok: 1, why: "Esas cuatro piezas la hacen funcionar." },
          { q: "Se aprende mejor:", ops: ["Escuchando mucho", "Haciendo, equivocándose y repitiendo", "Memorizando", "Leyendo en silencio"], ok: 1, why: "La práctica fija lo aprendido." },
          { q: "Una conversación sobre qué asumimos frente al clima:", ops: ["Es una clase más", "Es un espacio de reflexión voluntario y confidencial, distinto de una clase", "Se graba para el archivo", "Es obligatoria"], ok: 1, why: "Se trabaja con otras reglas." },
          { q: "Para saber si se aprendió conviene:", ops: ["Preguntar si les gustó", "Pedir que hagan o expliquen algo con lo aprendido", "No hacer nada", "Dar un diploma"], ok: 1, why: "Se comprueba en la práctica." }]
      },
      {
        t: 'actividad', id: 'E9_act', titulo: 'Mi sesión de 45 minutos',
        instruccion: "Diseña una sesión de 45 minutos sobre un módulo básico (por ejemplo B2). Escribe el objetivo, la actividad central, el cierre y cómo comprobarás que se aprendió. Envía tu diseño al asesor antes de la sesión virtual para que lo comente contigo.",
        producto: "Una sesión diseñada con sus cuatro piezas, para revisar con el asesor."
      },
      { t: 'cierre' }]
  }
);

/* B10 (antes I1, movido a Básico), I3, I4: diseño propio, borrador. */
MODS_EXTRA.push(
  {
    id: 'B10', nivel: 'b', titulo: 'Leer el territorio con la gente', duracion: 65,
    modo: 'Estudio + taller de tu Cáritas + ficha de mapa de riesgo del aplicativo',
    nota: "Borrador de diseño propio. Técnicas generales de trabajo comunitario.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, el presidente del Consejo Popular me dijo: «una reunión de una hora y sacamos el mapa de riesgos del barrio»." },
          { q: 'M', x: "¿Y tú crees que una hora alcanza?" },
          { q: 'C', x: "Me da la impresión de que se nos van a quedar cosas importantes fuera." },
          { q: 'M', x: "Tu impresión es buena. Veamos qué se necesita." }]
      },
      {
        t: 'lectura', id: 'B10-01', titulo: 'Cuatro conversaciones para entender el riesgo',
        texto: "Una encuesta rápida rara vez muestra el riesgo de un barrio. Funciona mejor con cuatro conversaciones. Primera: ¿cuándo nos pasa lo que nos pasa? Se responde con un calendario del año. Segunda: ¿qué nos ha pasado y con qué efectos? Se responde con una línea del tiempo de los eventos. Tercera: ¿dónde? Se responde con un mapa de peligros, casas, recursos y rutas. Cuarta: ¿qué atendemos primero? Se responde con una priorización con criterios que todos vean.",
        fuente: "Diseño propio con técnicas generales de trabajo comunitario. Lectura recomendada: guías participativas de análisis de riesgo, por ejemplo CRS/CAFOD/Cáritas Australia (2017), etapa 2 (permiso pendiente), y NGO-IDEAs (2012)."
      },
      {
        t: 'clasificar', titulo: '¿Qué herramienta responde cada pregunta?', instruccion: "Toca la herramienta que responde mejor.",
        cats: ['Calendario del año', 'Línea del tiempo', 'Mapa', 'Priorización'],
        items: [
          { x: "¿En qué meses llegan las lluvias fuertes y cuándo hay más enfermedades?", a: 0, why: "Muestra el año en el que pasan las cosas." },
          { x: "¿Qué ciclones y sequías recordamos de los últimos treinta años?", a: 1, why: "Ordena los eventos en el pasado." },
          { x: "¿Dónde se inunda y cuáles son las rutas de salida?", a: 2, why: "Ubica en el espacio." },
          { x: "De los cinco problemas, ¿cuál atendemos primero y por qué?", a: 3, why: "Compara con criterios." },
          { x: "¿Las lluvias de mayo llegan hoy más tarde que antes?", a: 0, why: "El calendario permite comparar el año de antes con el de ahora." },
          { x: "¿Qué casas hay junto al arroyo y dónde está el refugio?", a: 2, why: "Es información espacial." }]
      },
      {
        t: 'decision', titulo: 'Escena: la reunión de una hora',
        situacion: "El presidente del Consejo Popular propone resolver el mapa de riesgos en una reunión de una hora el jueves, con los líderes del barrio. ¿Cómo respondes?",
        opciones: [
          { x: "Acepto la propuesta: una sola reunión con los líderes ahorra tiempo y aprovecha que el presidente quiere resolverlo.", pts: 0, c: "Una hora y solo con líderes deja fuera información de mujeres, mayores, jóvenes y personas con discapacidad." },
          { x: "Agradezco y propongo tres sesiones cortas con grupos distintos y una final para comparar mapas. Ofrezco ayudar a convocar.", pts: 2, c: "Respeta la iniciativa y mejora la calidad y la participación sin confrontar." },
          { x: "Digo que una hora no alcanza para hacerlo bien y prefiero esperar a que haya condiciones adecuadas.", pts: 0, c: "Perdemos la puerta de entrada. Es mejor proponer una alternativa." },
          { x: "Hago la reunión de una hora con los líderes y completo el mapa después por mi cuenta, con lo que recuerde y lo que me cuenten por teléfono.", pts: 1, c: "Rescata algo, pero decide una persona sin la gente. Pierde su valor principal." }]
      },
      {
        t: 'lectura', id: 'B10-02', titulo: 'Criterios de priorización que todos puedan ver',
        texto: "Para decidir qué problema atender primero, conviene acordar criterios y escribirlos a la vista. Cuatro criterios útiles: qué tanto daño hace, a cuántas personas afecta y si afecta más a quienes menos pueden defenderse, qué tan urgente es y qué tanto podemos hacer nosotros con lo que tenemos. Se puntúa cada problema por criterio y se conversa el resultado. El número no decide solo: la conversación importa más que la suma.",
        fuente: "Diseño propio."
      },
      {
        t: 'lectura', id: 'B10-03', titulo: 'El calendario del año y el clima que cambia',
        texto: "El calendario del año es una buena puerta para hablar del clima sin teorías. Se dibuja el año con meses y se marca cuándo llueve, cuándo hay sequía, cuándo se siembra, cuándo hay más enfermedades y cuándo suben los precios. Si hay personas mayores, se pregunta si esos momentos eran los mismos hace veinte años. Si cambiaron, se anota. Esas notas son una pista, no una prueba, y se comparan después con los registros del servicio meteorológico.",
        fuente: "Diseño propio. Se conecta con el módulo B8 del curso."
      },
      {
        t: 'ordenar', titulo: 'Priorizar con criterios visibles', instruccion: "Ordena los pasos.",
        items: [
          "Hacer una lista de los problemas que salieron en las conversaciones",
          "Acordar entre todos cuatro criterios y escribirlos",
          "Puntuar cada problema por cada criterio, en grupos pequeños",
          "Comparar los resultados y conversar las diferencias",
          "Anotar las tres prioridades y quién propuso cada una (como grupo, no por nombre)"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Para saber en qué meses llegan las lluvias conviene usar:", ops: ["Un mapa", "Un calendario del año", "Una lista de líderes", "Un cuestionario cerrado"], ok: 1, why: "El calendario muestra el año." },
          { q: "¿Por qué conviene hacer varias sesiones con grupos distintos?", ops: ["Para que dure más", "Para que cada grupo pueda hablar con confianza y se recojan voces distintas", "Para cansar a la gente", "No conviene"], ok: 1, why: "Hay quien no habla delante de todos." },
          { q: "Un buen criterio de priorización es:", ops: ["La opinión del que más habla", "Cuántas personas afecta y si afecta más a quienes menos pueden defenderse", "Lo que cuesta menos", "Lo más fácil de dibujar"], ok: 1, why: "Mira el daño, el número y la desigualdad." },
          { q: "Si los mayores dicen que las lluvias cambiaron, eso es:", ops: ["Una prueba definitiva", "Una pista que se compara con registros", "Un error seguro", "No sirve"], ok: 1, why: "La memoria da pistas, los registros las confirman." }]
      },
      {
        t: 'actividad', id: 'B10_act', titulo: 'Mi calendario del año',
        instruccion: "Dibuja los doce meses. Marca lluvias, sequía, siembra, enfermedades frecuentes y fiestas. Pregunta a una persona mayor qué cambió. Anota solo lo que dijo, sin su nombre. Cuando tu Cáritas haga el taller con la comunidad, el resultado se registra en la ficha de mapa de riesgo del aplicativo, sin nombres de personas.",
        producto: "Un calendario del año con notas de cambios, listo para llevar al taller."
      },
      { t: 'cierre' }]
  },

  {
    id: 'I3', nivel: 'i', titulo: 'Informar bien: del terreno a la diócesis', duracion: 55,
    nota: "Borrador de diseño propio. Más adelante, en E4 (Experto), se profundiza en datos, imagen y protección.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, escribí un informe de tres páginas con todo lo que vi. Me dijeron que no lo leyeron." },
          { q: 'M', x: "Un informe largo y vago casi no se usa. Uno corto, concreto y verificable sí." },
          { q: 'C', x: "¿Y cómo se sabe qué poner y qué quitar?" },
          { q: 'M', x: "Con tres preguntas." }]
      },
      {
        t: 'lectura', id: 'I3-01', titulo: 'Tres preguntas para cada informe',
        texto: "Un informe útil responde tres preguntas: qué sabemos, qué no sabemos todavía y qué hace falta decidir. Va en puntos cortos. Cada punto tiene fecha, fuente (quién lo dice y cómo lo supo) y, si hay una tarea, un responsable. Lo que se vio con los propios ojos se escribe como hecho. Lo que se oyó se escribe como dicho por alguien. Lo que se supone se marca como suposición. Nadie decide bien con un informe que mezcla todo.",
        fuente: "Diseño propio. Lectura recomendada: modelos de informe de situación del Kit de Herramientas de Caritas Internationalis (pp. 12 a 15 del manual, plantillas en Baobab; versión y permiso por confirmar)."
      },
      {
        t: 'clasificar', titulo: '¿Qué sabemos, qué no, qué hay que decidir?', instruccion: "Toca dónde va cada frase en el informe.",
        cats: ['Sabemos', 'No sabemos todavía', 'Hay que decidir'],
        items: [
          { x: "El puente del sector sur está cortado desde el martes. Lo vi el miércoles a las 10.", a: 0, why: "Hecho visto, con fecha y fuente." },
          { x: "No sabemos cuántas familias del sector norte están sin agua potable.", a: 1, why: "Es algo que falta averiguar." },
          { x: "Hay que decidir si se manda una brigada al sector norte antes del jueves.", a: 2, why: "Es una decisión pendiente." },
          { x: "La delegada informó que hay 14 familias en el albergue. Ella lleva el registro.", a: 0, why: "Hecho con fuente identificada." },
          { x: "No hemos podido hablar con las familias de la parte alta.", a: 1, why: "Falta información." },
          { x: "Hay que decidir si pedimos apoyo adicional a la diócesis.", a: 2, why: "Es una decisión que requiere a alguien." }]
      },
      {
        t: 'decision', titulo: 'Escena: dos versiones del mismo informe',
        situacion: "Tienes dos borradores. Versión A: tres páginas con descripción general del ciclón, opiniones y una cifra de «aprox. 500 familias» sin fuente. Versión B: una página con seis puntos fechados, con fuente, y una sección de «no sabemos» y «hay que decidir». Tienes que enviar uno hoy. ¿Qué haces?",
        opciones: [
          { x: "Envío la versión A: es más completa, da más contexto y muestra que hicimos un trabajo a fondo.", pts: 0, c: "Más largo no es más útil. La cifra sin fuente puede dar un número falso." },
          { x: "Envío la B y pregunto de dónde salió «500 familias» antes de aceptar esa cifra en cualquier informe.", pts: 2, c: "Es breve, verificable y deja claro lo que falta." },
          { x: "Junto las dos versiones en un solo documento, para que quien lea tenga el resumen y el detalle.", pts: 0, c: "Mezclar vuelve a confundir hecho y suposición." },
          { x: "Envío la B, pero dejo «500 familias» como dato, para no omitir información que podría ser útil.", pts: 1, c: "La estructura es buena, pero la cifra debe llevar etiqueta de «sin verificar»." }]
      },
      {
        t: 'decision', titulo: 'Escena: fotos con nombre para la campaña',
        situacion: "Tras enviar el informe, una persona de la diócesis te pide «fotos y nombres de familias afectadas para una campaña» en 24 horas. ¿Qué respondes?",
        opciones: [
          { x: "Envío lo que tengo en el teléfono ahora mismo, para cumplir con el plazo de 24 horas y no retrasar la campaña que depende de esas imágenes.", pts: 0, c: "Una foto con nombre puede exponer a esa familia. No se recoge de vuelta." },
          { x: "Explico que solo se usan fotos con permiso escrito y explicado, propongo historias sin nombre ni rostro y pregunto el uso exacto.", pts: 2, c: "Cuida a las personas y mantiene la relación de trabajo." },
          { x: "Respondo que no, sin dar mayores explicaciones, porque es una regla del equipo y no quiero discutirla.", pts: 1, c: "El criterio es correcto, pero una explicación y una alternativa ayudan a que se entienda." },
          { x: "Pido a las familias que firmen un papel de autorización rápido, para tener respaldo si luego preguntan.", pts: 0, c: "Un permiso sin explicación no es consentimiento." }]
      },
      {
        t: 'ordenar', titulo: 'Estructura de un informe corto', instruccion: "Ordena las partes de un informe de situación.",
        items: [
          "Encabezado: fecha, zona y quién informa",
          "Qué sabemos (puntos con fecha y fuente)",
          "Qué no sabemos todavía",
          "Qué hace falta decidir y quién",
          "Próximo informe: cuándo y qué incluirá"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Un buen informe de situación responde:", ops: ["Quién tuvo la culpa", "Qué sabemos, qué no sabemos y qué hay que decidir", "Todo lo que ocurrió desde el principio", "Solo los números"], ok: 1, why: "Esas tres preguntas guían la decisión." },
          { q: "Una cifra que alguien dijo pero nadie confirmó se escribe:", ops: ["Como dato", "Como dicho por alguien, por verificar", "No se escribe nunca", "Más grande, por si acaso"], ok: 1, why: "Se etiqueta como no verificada." },
          { q: "Una foto de una familia afectada puede usarse en una campaña si:", ops: ["Es bonita", "Hay permiso explicado y para un uso claro", "Se tapa el apellido", "Se pide después"], ok: 1, why: "El permiso previo y explicado es la base." },
          { q: "Un informe de situación debe ser:", ops: ["Lo más largo posible", "Breve, con puntos, fechas y fuentes", "Sin fechas", "Solo en prosa"], ok: 1, why: "Se usa mejor un informe breve y verificable." }]
      },
      {
        t: 'actividad', id: 'I3_act', titulo: 'Mi informe en diez líneas',
        instruccion: "Elige un caso simulado (no uno real con personas identificables). Escribe un informe de diez líneas con: qué sabemos (con fecha y fuente), qué no sabemos y qué hay que decidir.",
        producto: "Un informe de diez líneas."
      },
      { t: 'cierre' }]
  },

  {
    id: 'I4', nivel: 'i', titulo: 'Que nadie quede atrás', duracion: 55,
    nota: "Borrador de diseño propio.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, preparé un simulacro en la escuela. Todo bien, pero se me quedó una duda: la vecina de la silla de ruedas, ¿cómo sale?" },
          { q: 'M', x: "Esa pregunta antes del simulacro es la diferencia entre una actividad para todos y una para algunos." },
          { q: 'C', x: "Yo no lo había pensado." },
          { q: 'M', x: "Casi nadie lo piensa a tiempo. Hay tres preguntas que ayudan." }]
      },
      {
        t: 'lectura', id: 'I4-01', titulo: 'Tres preguntas para cada actividad',
        texto: "Antes de cualquier actividad (simulacro, reparto, reunión, aviso) conviene preguntarse tres cosas. ¿Puede llegar? Incluye caminos, escaleras, distancia, horarios y transporte. ¿Puede entender? Incluye el idioma, la forma de dar el aviso (voz, letrero, señas), el nivel de lectura y las palabras que se usan. ¿Puede participar sin riesgo? Incluye seguridad, privacidad y que nadie quede expuesto o humillado. Preguntar a las propias personas es más fiable que adivinar por ellas.",
        fuente: "Diseño propio. Lectura recomendada: Normas Mínimas de Inclusión de Personas con Discapacidad y Personas Mayores en la Acción Humanitaria, ASB (2017; uso educativo no comercial, con atribución)."
      },
      {
        t: 'clasificar', titulo: '¿Qué barrera es?', instruccion: "Toca la pregunta que corresponde a cada obstáculo.",
        cats: ['¿Puede llegar?', '¿Puede entender?', '¿Puede participar sin riesgo?'],
        items: [
          { x: "La puerta del local tiene tres escalones", a: 0, why: "Impide llegar." },
          { x: "El aviso del simulacro se da solo por altavoz", a: 1, why: "Una persona sorda no lo entiende." },
          { x: "Las niñas pequeñas quedan separadas de su familia durante el ejercicio", a: 2, why: "Hay un riesgo para ellas." },
          { x: "La reunión es a las 9 de la noche en un camino sin luz", a: 0, why: "Dificulta llegar con seguridad." },
          { x: "El material está escrito con palabras técnicas", a: 1, why: "Dificulta entender." },
          { x: "Se pide a cada persona con discapacidad que se presente delante de todos con su nombre", a: 2, why: "Puede exponerla sin necesidad." }]
      },
      {
        t: 'decision', titulo: 'Escena: el simulacro en la escuela',
        situacion: "Haces un simulacro en una escuela. Asisten una vecina que usa silla de ruedas, un señor sordo, un grupo de preescolares y varias personas mayores. El plan original solo contempla una salida por escalera y avisos por altavoz. ¿Qué haces primero?",
        opciones: [
          { x: "Mantengo el plan original y les pido a quienes tengan dificultades que hagan lo que puedan, a su ritmo.", pts: 0, c: "Se les deja fuera. Un simulacro que no funciona para todos no prepara a todos." },
          { x: "Hablo con la vecina, el señor y las maestras sobre lo que necesitan, y ajusto ruta, aviso y acompañamiento antes del ejercicio.", pts: 2, c: "Pregunta a las propias personas y adapta el plan antes, no después." },
          { x: "Dejo fuera del simulacro a quienes tienen dificultades, para no ponerlos en riesgo, y los atiendo aparte.", pts: 0, c: "Excluir no es proteger. Las personas más expuestas son las que más necesitan practicar." },
          { x: "Cambio solo el aviso, añadiendo una señal visual para el señor sordo, y dejo lo demás como estaba.", pts: 1, c: "Ayuda, pero falta la ruta para la silla de ruedas y el acompañamiento de los más pequeños." }]
      },
      {
        t: 'ordenar', titulo: 'Adaptar el simulacro', instruccion: "Ordena los pasos antes del ejercicio.",
        items: [
          "Preguntar a las personas qué necesitan para participar",
          "Revisar el lugar: rutas, puertas, escaleras, luz",
          "Cambiar el aviso: voz, señal visual, personas que acompañan",
          "Asignar un acompañante de apoyo a quien lo pida, sin forzar",
          "Después del ejercicio, preguntar qué funcionó y qué no"]
      },
      {
        t: 'lectura', id: 'I4-02', titulo: 'Niñez, mujeres y mayores: lo que cambia',
        texto: "La niñez necesita adultos conocidos cerca, información sencilla y saber qué va a pasar. Las mujeres y las niñas necesitan espacios donde se sientan seguras para hablar y moverse, y que las tareas de cuidado no las dejen fuera. Las personas mayores pueden necesitar más tiempo, apoyo para moverse y medicinas a mano. Ninguna etiqueta describe a una persona completa: dentro de cada grupo hay personas distintas, y cada una sabe lo que necesita.",
        fuente: "Diseño propio. Lecturas recomendadas: ASB (2017); Beristain, atención a la niñez afectada; IASC (2007), apoyo psicosocial (revisar licencias)."
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Antes de organizar una actividad conviene preguntar a:", ops: ["Solo a los líderes", "A las propias personas que podrían quedar fuera", "A nadie, se adivina", "A quien tiene más tiempo"], ok: 1, why: "Preguntar es más fiable que adivinar." },
          { q: "Un aviso solo por altavoz deja fuera a:", ops: ["Nadie", "Personas sordas o con dificultad para oír", "Los niños", "Los mayores"], ok: 1, why: "Se agrega una señal visual." },
          { q: "Excluir a alguien de un simulacro «por su seguridad» es:", ops: ["Correcto siempre", "Un error: excluir no es proteger", "Obligatorio", "Una buena práctica"], ok: 1, why: "Quienes están más expuestos necesitan practicar también." },
          { q: "Una adaptación se hace:", ops: ["Después del evento", "Antes de la actividad", "Nunca", "Solo si alguien se queja"], ok: 1, why: "La inclusión se prepara antes." }]
      },
      {
        t: 'actividad', id: 'I4_act', titulo: 'Tres ajustes por grupo',
        instruccion: "Elige una actividad de tu trabajo (simulacro, reparto, reunión). Para cada grupo (movilidad reducida, personas sordas o ciegas, niñez, mayores, mujeres con tareas de cuidado) escribe un ajuste concreto. Sin nombres.",
        producto: "Una lista de ajustes por grupo."
      },
      { t: 'cierre' }]
  }
);

/* I5, I6, I7: diseño propio, borrador. */
MODS_EXTRA.push(
  {
    id: 'I5', nivel: 'i', titulo: 'Escuchar y responder: quejas y sugerencias', duracion: 50,
    nota: "Borrador de diseño propio. Este canal recibe quejas y sugerencias sobre el trabajo de nuestra Cáritas.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, puse un buzón en la parroquia hace un mes. No llegó ninguna queja. ¡Todo va perfecto!" },
          { q: 'M', x: "¿Seguro? Un buzón vacío puede decir cosas muy distintas." },
          { q: 'C', x: "¿Como cuáles?" },
          { q: 'M', x: "Vamos a analizarlo." }]
      },
      {
        t: 'lectura', id: 'I5-01', titulo: 'Un canal se mide por lo que pasa con él',
        texto: "Un buzón que nadie abre es peor que no tener buzón, porque da una falsa sensación de escucha. Un canal de quejas y sugerencias se mide por tres cosas: cuántos mensajes llegan, cuántos se responden y en cuánto tiempo. Un canal sano ofrece más de una vía (buzón, persona de confianza, teléfono, conversación), es conocido por todos y no obliga a dar el nombre. Se revisa a menudo y se cuenta a la comunidad qué cambió gracias a lo que dijeron.",
        fuente: "Diseño propio. Lectura recomendada: Norma Humanitaria Esencial (CHS), compromiso 5, y manual de participación de Cáritas Europa (2019)."
      },
      {
        t: 'decision', titulo: 'Escena: el buzón vacío',
        situacion: "Pasó un mes y el buzón está vacío. Hay tres explicaciones posibles: que todo esté bien, que la gente no sepa que existe o que no confíe en que se le responda. ¿Qué haces?",
        opciones: [
          { x: "Concluyo que no hay quejas porque el servicio va bien, y lo informo así en el reporte del mes.", pts: 0, c: "Es una posibilidad, pero no la comprobaste. Podrías estar ignorando problemas." },
          { x: "Pregunto de forma anónima en grupos si conocen el buzón, si lo usarían y qué lo haría más fácil, y decido cambios con eso.", pts: 2, c: "Comprueba las tres explicaciones antes de sacar conclusiones." },
          { x: "Pongo otro buzón en un lugar más visible de la parroquia, para que más gente lo vea y lo use sin tener que preguntar a nadie ni dar su nombre.", pts: 1, c: "Puede ayudar si el problema es de acceso, pero no sabes si lo es." },
          { x: "Quito el buzón, porque nadie lo usa y ocupa un espacio que puede servir a otra actividad del programa.", pts: 0, c: "Perdemos una vía de escucha sin saber por qué no funciona." }]
      },
      {
        t: 'clasificar', titulo: '¿Queja ordinaria o caso grave?', instruccion: "Toca la ruta que corresponde.",
        cats: ['Queja ordinaria (equipo del programa)', 'Caso grave (ruta aparte, confidencial)'],
        items: [
          { x: "El reparto empezó dos horas tarde", a: 0, why: "Es un problema de organización." },
          { x: "Un voluntario pidió dinero a cambio de apuntar a una familia en la lista", a: 1, why: "Hay posible abuso y se reporta aparte." },
          { x: "Las bolsas llegaron con productos casi vencidos", a: 0, why: "Es de calidad del servicio." },
          { x: "Una joven cuenta que un miembro del equipo la acosa", a: 1, why: "Es un caso de abuso. Ruta confidencial." },
          { x: "No entendimos cuándo era la segunda entrega", a: 0, why: "Es un problema de información." },
          { x: "Alguien amenaza a una familia por reclamar", a: 1, why: "Es un caso de protección." }]
      },
      {
        t: 'lectura', id: 'I5-02', titulo: 'Los casos graves van por otra ruta',
        texto: "Si alguien cuenta que fue maltratado, acosado o explotado por una persona del equipo, no se resuelve en el buzón común ni delante de otros. Se escucha con respeto, se explica que se reportará a la persona responsable designada, se anota solo lo necesario y se protege a quien contó. Nadie del equipo investiga por su cuenta ni confronta a la persona señalada. La confidencialidad no es silencio: es contar a quien debe actuar y a nadie más.",
        fuente: "Diseño propio. La persona o instancia responsable debe definirse en cada Cáritas [confirmar con la Cáritas nacional]."
      },
      {
        t: 'ordenar', titulo: 'El camino de una queja', instruccion: "Ordena los pasos.",
        items: [
          "La queja llega por cualquier vía y se anota sin juzgar",
          "Se acusa recibo y se dice cuándo habrá respuesta",
          "Se revisa con quien corresponde y se decide qué se cambia",
          "Se responde a la persona que la hizo, si se identificó",
          "Se cuenta a la comunidad qué cambió y se registra para aprender"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Un buzón vacío significa:", ops: ["Que todo va bien", "Que hay que averiguar por qué", "Que hay que quitarlo", "Que la gente es feliz"], ok: 1, why: "Puede haber otras razones." },
          { q: "Un canal sano:", ops: ["Tiene una sola vía", "Ofrece varias vías y no obliga a dar el nombre", "Solo existe en papel", "Es secreto"], ok: 1, why: "Cuantas más vías, más gente podrá usarlo." },
          { q: "Si alguien cuenta que fue acosado por un miembro del equipo:", ops: ["Se resuelve en reunión general", "Se reporta por la ruta confidencial y se protege a la persona", "Se investiga por cuenta propia", "Se ignora"], ok: 1, why: "Se reporta a quien debe actuar y se protege." },
          { q: "¿Cómo se mide un canal de quejas?", ops: ["Por lo bonito del buzón", "Por cuántas llegan, cuántas se responden y en cuánto tiempo", "Por su tamaño", "No se mide"], ok: 1, why: "Se mide por lo que pasa con él." }]
      },
      {
        t: 'actividad', id: 'I5_act', titulo: 'Diseño de mi canal',
        instruccion: "Diseña un canal de quejas y sugerencias para tu programa: dos vías, quién lo atiende, en cuánto tiempo se responde y cómo se cuenta a la comunidad lo que cambió. Define aparte quién recibe los casos graves.",
        producto: "Un diseño de canal con vías, responsable y plazo."
      },
      { t: 'cierre' }]
  },

  {
    id: 'I6', nivel: 'i', titulo: 'Del mapa al plan: contingencia y simulacro', duracion: 70,
    modo: 'Estudio individual + simulacro de escritorio en el encuentro nacional',
    nota: "Borrador de diseño propio. Las fases y el canal con la Defensa Civil están por confirmar.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, ya tenemos el mapa y las prioridades. ¿Y ahora?" },
          { q: 'M', x: "Ahora lo difícil: convertir el mapa en un plan que alguien pueda seguir a las tres de la mañana." },
          { q: 'C', x: "¿A las tres de la mañana?" },
          { q: 'M', x: "Los planes se prueban cuando nadie está lúcido. Vamos a verlo." }]
      },
      {
        t: 'lectura', id: 'I6-01', titulo: 'Un plan responde cinco preguntas',
        texto: "Un plan sirve si responde cinco preguntas: ¿quién hace qué?, ¿con qué recursos?, ¿cuándo y a partir de qué señal?, ¿con quién se coordina? y ¿cómo sabemos que funcionó? Se divide en lo que la comunidad puede hacer sola y lo que necesita apoyo de fuera. Cada tarea tiene una persona responsable y otra de reserva. Un plan con nombres que nadie conoce no es un plan.",
        fuente: "Diseño propio. Lecturas recomendadas: CRS/CAFOD/Cáritas Australia (2017), etapa 3 (permiso pendiente); manual del Kit de CI (simulacro de escritorio, pp. 10 y 11)."
      },
      {
        t: 'lectura', id: 'I6-02', titulo: 'El plan comunitario y el sistema nacional',
        texto: "En Cuba la preparación ante ciclones sigue fases establecidas por la Defensa Civil, que se activan por avisos oficiales [confirmar fases y canales: informativa, alerta, alarma y recuperativa]. El plan comunitario no sustituye ese sistema: lo complementa. Define quién avisa a quién en la comunidad, dónde se reúne la gente, cómo se ayuda a quienes necesitan apoyo y cómo se comunica el grupo con las autoridades locales. Cada fase del sistema nacional debe tener su equivalente comunitario.",
        fuente: "Diseño propio. Datos cubanos sin verificar: confirmar con la Defensa Civil y con la Cáritas nacional antes de usar."
      },
      {
        t: 'lectura', id: 'I6-03', titulo: 'Una mirada climática al plan',
        texto: "El plan debe revisarse cada año con una pregunta más: ¿qué cambió en nuestras amenazas? Si las lluvias llegan más tarde, el calendario de preparación se mueve. Si hay sequías más largas, la reserva de agua entra en el plan. Si hay lluvias más intensas, las rutas que antes eran seguras pueden dejar de serlo. Se revisa con los registros del servicio meteorológico y con lo que cuentan los mayores.",
        fuente: "Diseño propio. Se conecta con el módulo B8."
      },
      {
        t: 'clasificar', titulo: '¿La comunidad sola o con apoyo externo?', instruccion: "Toca quién puede hacerlo.",
        cats: ['La comunidad sola', 'Necesita apoyo externo'],
        items: [
          { x: "Avisar casa por casa que hay alerta", a: 0, why: "Lo puede hacer la comunidad organizada." },
          { x: "Reforzar el puente que cruza el río", a: 1, why: "Requiere técnicos y materiales." },
          { x: "Acordar el punto de reunión y la ruta", a: 0, why: "Es un acuerdo comunitario." },
          { x: "Tener medicinas para enfermos crónicos por varias semanas", a: 1, why: "Depende del suministro externo." },
          { x: "Hacer una lista de personas que necesitan ayuda para salir", a: 0, why: "La comunidad las conoce (sin nombres en papeles públicos)." },
          { x: "Reubicar a una familia fuera de la zona de derrumbe", a: 1, why: "Requiere decisiones y recursos fuera de la comunidad." }]
      },
      {
        t: 'decision', titulo: 'Escena: simulacro de escritorio, eslabón roto',
        situacion: "Haces un simulacro de escritorio. Llega un aviso de alerta y debes activar la cadena de aviso: tú llamas a la persona A, que llama a B y C. De pronto, la persona A dice que no tiene teléfono ni crédito. ¿Qué haces?",
        opciones: [
          { x: "No hago nada: es un simulacro, no una emergencia real, y lo importante es terminar el ejercicio.", pts: 0, c: "Un simulacro sirve para encontrar justo estos fallos." },
          { x: "Anoto el fallo del plan, pensamos tres alternativas (otra persona de reserva, aviso en persona, punto fijo) y actualizamos el plan.", pts: 2, c: "Se aprovecha el simulacro para mejorar el plan." },
          { x: "Le digo a la persona A que debió prepararse mejor, y paso al siguiente punto del ejercicio.", pts: 0, c: "El fallo es del plan, no de la persona. Culpar solo hace que la gente deje de decir lo que falla." },
          { x: "Resuelvo yo mismo llamando a B y C directamente, para que el ejercicio siga y no pierda el ritmo.", pts: 1, c: "Funciona hoy, pero el plan sigue frágil y dependes de ti." }]
      },
      {
        t: 'ordenar', titulo: 'Un simulacro de escritorio', instruccion: "Ordena los pasos.",
        items: [
          "Acordar un escenario y los papeles de cada persona",
          "Leer el aviso y activar el plan, sin ayuda externa",
          "Anotar en voz alta cada decisión y lo que falta",
          "Conversar al final qué falló, sin culpar",
          "Actualizar el plan y fijar una fecha para el siguiente ejercicio"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Un plan útil responde:", ops: ["Solo quién es el jefe", "Quién hace qué, con qué, cuándo, con quién y cómo sabemos que funcionó", "Solo los recursos", "Solo a quién avisar"], ok: 1, why: "Cinco preguntas simples." },
          { q: "El plan comunitario frente al sistema nacional de la Defensa Civil:", ops: ["Lo reemplaza", "Lo complementa", "Lo ignora", "Lo contradice"], ok: 1, why: "Se articula con él [confirmar canales]." },
          { q: "Si un eslabón falla en el simulacro:", ops: ["Se culpa a la persona", "Se aprende y se cambia el plan", "No se cuenta", "Se repite igual"], ok: 1, why: "El simulacro sirve para eso." },
          { q: "¿Qué pregunta añade la mirada climática al plan?", ops: ["¿Quién gobierna?", "¿Qué cambió en nuestras amenazas?", "¿Cuánto cuesta?", "¿Cuántos somos?"], ok: 1, why: "El plan se revisa cada año con esa pregunta." }]
      },
      {
        t: 'actividad', id: 'I6_act', titulo: 'Mi plan en una página',
        instruccion: "Escribe el plan comunitario de una amenaza, con: señal, quién avisa a quién, punto de reunión, quiénes necesitan apoyo (en símbolos, sin nombres), qué hace cada responsable y su reserva. Llévalo al simulacro de escritorio del encuentro nacional para probarlo con otras Cáritas.",
        producto: "Un plan de una página para llevar al simulacro."
      },
      { t: 'cierre' }]
  },

  {
    id: 'I7', nivel: 'i', titulo: 'Después del golpe: recuperar medios de vida', duracion: 55,
    nota: "Borrador de diseño propio. Las modalidades posibles en Cuba (por ejemplo dinero en efectivo) están por confirmar.",
    pasos: [
      {
        t: 'dialogo', lineas: [
          { q: 'C', x: "Magnolia, llegaron herramientas donadas. Hay una familia de carpinteros que perdió todo y quiero dárselas." },
          { q: 'M', x: "Muy buena intención. ¿Qué hacía el carpintero del barrio antes del ciclón?" },
          { q: 'C', x: "Vendía herramientas también. Ahora que lo dices..." },
          { q: 'M', x: "Exacto. Antes de dar, hay que mirar el mercado." }]
      },
      {
        t: 'lectura', id: 'I7-01', titulo: 'Antes de dar, entender el mercado',
        texto: "Después de un desastre, las familias necesitan volver a ganarse la vida. Antes de repartir conviene preguntar: ¿qué se vendía y quién lo vendía?, ¿quién compra hoy?, ¿qué sigue funcionando? Si regalamos lo que el mercado local ya ofrece, podemos arruinar al vendedor del barrio. No hacer daño es la primera regla también aquí. A veces la mejor ayuda es comprar localmente, otras es dar materiales, otras es dar capacitación y a veces es una combinación.",
        fuente: "Diseño propio. Lectura recomendada: Normas Mínimas para la Recuperación Económica (SEEP, 2010; uso permitido sin fines de lucro, con atribución)."
      },
      {
        t: 'lectura', id: 'I7-02', titulo: 'Tres formas de apoyar',
        texto: "En especie: se entregan bienes (herramientas, semillas, animales). Compra local: se compra en comercios del lugar y se reparte lo comprado. Efectivo o vales: la persona decide qué comprar. Cada una tiene ventajas y riesgos. La especie es rápida pero puede competir con vendedores locales. La compra local apoya a los comercios pero necesita que haya existencias. El efectivo da dignidad y libertad, pero depende de que haya productos para comprar. Qué modalidades son posibles en Cuba debe confirmarse con la Cáritas nacional [confirmar].",
        fuente: "Diseño propio. Pendiente de confirmar con la Cáritas nacional."
      },
      {
        t: 'decision', titulo: 'Escena: las herramientas donadas',
        situacion: "Llegaron cien juegos de herramientas donadas. Un carpintero local ya vendía herramientas y perdió parte de su inventario con el ciclón. Familias de carpinteros perdieron las suyas. ¿Qué haces?",
        opciones: [
          { x: "Reparto las herramientas ya a todas las familias que perdieron las suyas, para que vuelvan a trabajar cuanto antes y recuperen algo de ingreso esta misma semana.", pts: 1, c: "Resuelve rápido, pero puede dejar sin mercado al carpintero local que también perdió." },
          { x: "Hablo con el carpintero local y las familias, y evalúo repartir una parte, comprar otra localmente y capacitar en reposición de inventario.", pts: 2, c: "Mira el mercado antes de decidir y busca que la recuperación sea del barrio completo." },
          { x: "Guardo las herramientas hasta tener todo perfecto y un plan completo de distribución, para no equivocarme.", pts: 0, c: "Las familias sin herramientas pierden semanas de ingreso." },
          { x: "Vendo las herramientas y reparto el dinero entre las familias, para que cada una compre lo que necesita.", pts: 0, c: "No es lo que pidió quien donó y se pierde la confianza." }]
      },
      {
        t: 'clasificar', titulo: '¿Qué modalidad conviene?', instruccion: "Toca la modalidad que mejor encaja en cada situación.",
        cats: ['En especie', 'Compra local', 'Efectivo o vales'],
        items: [
          { x: "No hay nada que comprar en la zona y hace falta semilla ya", a: 0, why: "Si el mercado no ofrece, hay que traer." },
          { x: "Hay un comercio que sigue vendiendo materiales de construcción", a: 1, why: "Se apoya al comercio local y a la gente." },
          { x: "Las familias saben qué necesitan y hay muchos productos en venta", a: 2, why: "Se respeta su decisión y se apoya el mercado." },
          { x: "Los precios subieron mucho y hay pocas existencias", a: 0, why: "El efectivo no alcanzaría." },
          { x: "Un grupo de tejedoras necesita comprar hilo a sus proveedores de siempre", a: 1, why: "Se mantiene la cadena local." },
          { x: "Las familias deben decidir entre medicinas y comida cada semana", a: 2, why: "Cada una sabe qué es más urgente." }]
      },
      {
        t: 'ordenar', titulo: 'Mirar el mercado en pocos pasos', instruccion: "Ordena los pasos.",
        items: [
          "Preguntar qué se vendía y quién lo vendía antes del desastre",
          "Preguntar qué sigue funcionando y qué precios hay",
          "Hablar con comerciantes y con las familias afectadas",
          "Comparar tres formas de apoyar y sus riesgos",
          "Escoger una combinación y revisarla después de unas semanas"]
      },
      {
        t: 'quiz', titulo: 'Para comprobar lo aprendido', preguntas: [
          { q: "Antes de repartir bienes conviene:", ops: ["Repartir rápido", "Mirar qué ofrece el mercado local", "Esperar un año", "Consultar solo a la dirección"], ok: 1, why: "Evita hacer daño al vendedor local." },
          { q: "Comprar localmente tiene la ventaja de:", ops: ["Ser más barato siempre", "Apoyar al comercio del barrio", "No requerir existencias", "Ser más lento"], ok: 1, why: "Mantiene la economía local." },
          { q: "El efectivo o los vales dependen de:", ops: ["Nada", "Que haya productos para comprar y que la modalidad sea posible", "El clima", "La edad de la persona"], ok: 1, why: "Y en Cuba hay que confirmar la modalidad." },
          { q: "La primera regla de recuperación es:", ops: ["Dar mucho", "No hacer daño", "Ser rápidos siempre", "Comprar lo más barato"], ok: 1, why: "Antes de ayudar, no empeorar." }]
      },
      {
        t: 'actividad', id: 'I7_act', titulo: 'Tres alternativas',
        instruccion: "Imagina un caso: una familia perdió su fuente de ingreso. Escribe tres formas de apoyarla y, para cada una, un beneficio y un riesgo para el mercado local. Escoge una y explica por qué.",
        producto: "Tres alternativas comparadas y una elegida."
      },
      { t: 'cierre' }]
  }
);


const MODULOS = [...MODULOS_JSON.map(desdeJSON), MOD_B8, MOD_I2, ...MODS_EXTRA];
(function () {
  const mez = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
  MODULOS.forEach(m => m.pasos.forEach(p => {
    if (p.t === 'decision') p.opciones = mez(p.opciones);
    if (p.t === 'quiz') p.preguntas = p.preguntas.map(q => { const idx = mez(q.ops.map((_, i) => i)); return { ...q, ops: idx.map(i => q.ops[i]), ok: idx.indexOf(q.ok) }; });
  }));
  /* inserta el paso 'grupal' antes del cierre. GRUPALES viene de grupales.js (por id); un modulo puede traer el suyo en m.grupal */
  MODULOS.forEach(m => { const g = m.grupal || (typeof GRUPALES !== 'undefined' && GRUPALES[m.id]); if (g && !m.pasos.find(p => p.t === 'grupal')) { const i = m.pasos.length - 1; m.pasos.splice(i, 0, { t: 'grupal', id: m.id + '_grupal', ...g }); } });
  const ord = { b: 0, i: 1, e: 2 };
  /* Orden pedagogico del Basico = orden numerico B1..B11 (revision 28-oct-2026) */
  const ORDEN_B = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11'];
  const pos = m => m.nivel === 'b' ? (ORDEN_B.indexOf(m.id) < 0 ? 99 : ORDEN_B.indexOf(m.id)) : parseInt(m.id.slice(1));
  MODULOS.sort((a, b) => ord[a.nivel] - ord[b.nivel] || pos(a) - pos(b));
})();
const PROXIMOS = [];

/* ============ ESTADO ============ */
let avance = store.get('climaco_avance_v1') || {};
let cur = null, paso = 0, puntos = {};
const NV = { b: 'Básico', i: 'Intermedio', e: 'Experto' };
function guardar() { avance[cur.id] = { ...(avance[cur.id] || {}), paso, puntos, textos: avance[cur.id]?.textos || {}, ts: Date.now() }; store.set('climaco_avance_v1', avance); }
function maxPts(mod) {
  let s = 0;
  mod.pasos.forEach(p => {
    if (p.t === 'decision') s += Math.max(...p.opciones.map(o => o.pts));
    else if (p.t === 'ordenar' || p.t === 'clasificar') s += 2;
    else if (p.t === 'quiz') s += p.preguntas.length;
  });
  return s;
}

/* ============ VISTAS ============ */
function vistaMenu() {
  cur = null; closeAsk(); introStop();
  say("Escoge un módulo y arrancamos.", null, "C"); estado("saludar", 2600);
  const m = $('#main'); m.replaceChildren(
    introCard(),
    h('div', { class: 'card' },
      h('h2', {}, 'Módulos'),
      h('p', {}, 'Cada módulo tiene lecturas cortas, escenas donde decides, ejercicios y preguntas. Tu avance se guarda en este navegador; al final puedes descargarlo.'),
      h('p', { class: 'src' }, 'Autoría del curso: Carmen Márquez, consultora de Caritas Alemana Internacional. Borrador en revisión: aún no validado por Cáritas Cubana ni por la Defensa Civil.'),
      h('p', {}, h('label', {}, 'Código de participante (te lo da tu coordinador): ',
        h('input', { type: 'text', id: 'perfil-codigo', maxlength: 14, placeholder: 'PPP-NNNN-C', value: (store.get('climaco_perfil') || {}).codigo || '', oninput: e => store.set('climaco_perfil', { codigo: e.target.value.trim() }) }))),
      h('div', { class: 'mods' },
        MODULOS.map(mod => {
          const a = avance[mod.id]; const pct = a ? Math.round(100 * (a.paso) / Math.max(1, mod.pasos.length - 1)) : 0;
          return h('button', { class: 'mod', onclick: () => abrir(mod.id) },
            h('div', { class: 'nv ' + mod.nivel }, NV[mod.nivel]),
            h('h3', {}, mod.id + ' · ' + mod.titulo),
            h('div', { class: 'src' }, '≈ ' + mod.duracion + ' min · ' + (pct ? pct + '% hecho' : 'sin empezar')),
            mod.modo ? h('div', { class: 'src' }, '🎓 ' + mod.modo) : null,
            h('div', { class: 'progress' }, h('i', { style: 'width:' + pct + '%' })));
        })),
      PROXIMOS.map(p => h('div', { class: 'mod dis' }, h('div', { class: 'nv ' + p.n }, NV[p.n]), h('h3', {}, p.id + ' · ' + p.t), h('div', { class: 'src' }, 'En diseño')))
    )
  );
}
function abrir(id) {
  introStop();
  cur = MODULOS.find(x => x.id === id);
  const a = avance[id]; paso = a && a.paso < cur.pasos.length - 1 ? a.paso : 0; puntos = a ? (a.puntos || {}) : {};
  if (a && paso > 0) say("Seguimos donde lo dejaste.");
  mostrar();
}
/* Quién acompaña cada paso: Magnolia explica (lecturas, práctica, grupo); Clímaco decide, juega y reacciona. En el diálogo habla cada quien en su línea. */
const PJ_PASO = { lectura: 'M', actividad: 'M', grupal: 'M', llevar: 'M', decision: 'C', quiz: 'C', ordenar: 'C', clasificar: 'C', cierre: 'C' };
const FR_PASO = {
  lectura: ["Lee con calma. Si algo te suena a tu barrio, párate ahí.", "Fíjate en cómo esto se conecta con lo que ya conoces.", "Léelo despacio y piensa en tu comunidad."],
  actividad: ["Ahora te toca a ti. Escríbelo con tus palabras.", "Aquí no hay una sola respuesta. Piensa en tu barrio."],
  grupal: ["Esto se aprende mejor en grupo. Llévalo a tu Cáritas.", "La actividad en grupo es la parte que más enseña. No te la saltes."],
  llevar: ["Esto es para llevártelo a tu comunidad."],
  decision: ["A ver, ¿tú qué harías?", "Piénsalo antes de tocar."],
  quiz: ["A ver qué recuerdas.", "Sin miedo, esto es práctica."],
  ordenar: ["Ordénalo como lo harías tú."],
  clasificar: ["Vamos a poner cada cosa en su lugar."]
};
/* Poses de Magnolia segun el paso (los cuadros que no existan caen en 'frontal'). */
const POSE_M_PASO = { actividad: 'amable', grupal: 'aplauso', llevar: 'amable' };
const POSES_LECT_M = ['frontal', 'atento', 'sorprendida'];
function acompana(p) {
  if (p.t === 'dialogo') return;
  const q = PJ_PASO[p.t] || 'C';
  if (p.t === 'cierre') { personaje('C'); return; }
  say(pick(FR_PASO[p.t] || ["Sigamos."]), null, q, p.t === 'lectura' ? POSES_LECT_M[paso % POSES_LECT_M.length] : POSE_M_PASO[p.t]);
  if (q === 'C') estado('pensar', 1600);
}
function mostrar() {
  const p = cur.pasos[paso];
  acompana(p);
  const pct = Math.round(100 * paso / Math.max(1, cur.pasos.length - 1));
  const head = h('div', {},
    h('span', { class: 'badge' }, NV[cur.nivel]), h('span', { class: 'badge' }, cur.id),
    cur.nota ? h('span', { class: 'badge rev' }, cur.nota) : null,
    cur.modo ? h('span', { class: 'badge' }, '🧭 ' + cur.modo) : null,
    h('div', { class: 'progress', role: 'progressbar', 'aria-valuenow': pct, 'aria-valuemin': 0, 'aria-valuemax': 100 }, h('i', { style: 'width:' + pct + '%' })));
  const body = R[p.t](p);
  const nav = h('div', { class: 'nav' },
    h('button', { class: 'btn ghost', onclick: () => { if (paso > 0) { paso--; guardar(); mostrar(); } else vistaMenu(); } }, paso > 0 ? '◀ Atrás' : '◀ Menú'),
    p.t === 'cierre' ? null : h('button', { class: 'btn', id: 'next', onclick: () => { paso++; guardar(); mostrar(); }, disabled: needAction(p) }, 'Siguiente ▶'));
  $('#main').replaceChildren(head, body, nav);
  scrollTo({ top: 0 });
}
function needAction(p) { return ['decision', 'ordenar', 'clasificar', 'quiz'].includes(p.t) && puntos[paso] === undefined; }
function unlock() { const n = $('#next'); if (n) n.disabled = false; }
function setPts(v, max) {
  puntos[paso] = v; guardar(); unlock();
  const r = v / max;
  if (r >= 0.99) say(pick(FRASES_OK), 'hop'); else if (r >= 0.5) say(pick(FRASES_MID), 'hop'); else say(pick(FRASES_BAD), 'shake');
}

/* ============ RENDERIZADORES ============ */
const R = {
  dialogo(p) {
    const box = h('div', { class: 'card' }); let i = 0;
    const btn = h('button', { class: 'btn ghost', onclick: more }, 'Continuar la charla ▸');
    function add() {
      const l = p.lineas[i++];
      box.insertBefore(h('div', { class: 'chat ' + l.q },
        h('div', { class: 'av' }, avatarCabeza(l.q)),
        h('div', { class: 'txt' }, h('span', { class: 'who' }, l.q === 'C' ? 'Clímaco' : 'Profesora Magnolia'), l.x)), btn);
      say(l.x.length > 90 ? l.x.slice(0, 88) + '…' : l.x, null, l.q); if (l.q === 'C') estado('hablar', Math.min(4000, 500 + l.x.length * 45));
    }
    function more() { add(); if (i >= p.lineas.length) btn.remove(); }
    box.append(btn); add(); if (i >= p.lineas.length) btn.remove();
    return box;
  },
  lectura(p) {
    return h('div', { class: 'card' }, h('h2', {}, p.titulo), h('p', {}, p.texto), h('div', { class: 'src' }, 'Fuente: ' + p.fuente));
  },
  decision(p) {
    const out = h('div'); const opts = h('div', { class: 'opts' }); let done = false;
    const mx = Math.max(...p.opciones.map(o => o.pts));
    p.opciones.forEach((o, idx) => {
      const b = h('button', {
        class: 'opt', onclick: () => {
          if (done) return; done = true;
          [...opts.children].forEach((bb, j) => { const oo = p.opciones[j]; bb.disabled = true; bb.classList.add(oo.pts === mx ? 'ok' : (oo.pts > 0 ? 'mid' : 'bad')); });
          out.append(h('div', { class: 'fb ' + (o.pts === mx ? 'ok' : 'bad') }, h('b', {}, 'Lo que pasa si eliges esto: '), o.c));
          const otras = p.opciones.filter(x => x !== o);
          out.append(h('details', {}, h('summary', {}, 'Ver qué pasaría con las otras opciones'), otras.map(x => h('p', {}, h('b', {}, '«' + x.x.slice(0, 60) + (x.x.length > 60 ? '…' : '') + '» → '), x.c))));
          setPts(o.pts, mx);
        }
      }, o.x);
      opts.append(b);
    });
    out.append(opts);
    return h('div', { class: 'card' }, h('h2', {}, p.titulo), h('p', {}, p.situacion), out);
  },
  ordenar(p) {
    let arr = shuffle(p.items); const list = h('ol'); let checked = false;
    function draw(res) {
      list.replaceChildren(...arr.map((x, i) => h('li', {
        class: res ? (p.items[i] === x ? 'good' : 'wrong') : '', draggable: 'true', 'data-i': i,
        ondragstart: e => e.dataTransfer.setData('text/plain', String(i)),
        ondragover: e => e.preventDefault(),
        ondrop: e => { e.preventDefault(); if (checked) return; const from = +e.dataTransfer.getData('text/plain'); const to = i; const [m] = arr.splice(from, 1); arr.splice(to, 0, m); draw(); }
      },
        h('span', { class: 'mv' },
          h('button', { 'aria-label': 'Subir', onclick: () => { if (checked || i === 0) return;[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; draw(); } }, '▲'),
          h('button', { 'aria-label': 'Bajar', onclick: () => { if (checked || i === arr.length - 1) return;[arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]; draw(); } }, '▼')),
        h('span', {}, (i + 1) + '. ' + x))));
    }
    draw();
    const fb = h('div');
    const btn = h('button', {
      class: 'btn', onclick: () => {
        if (checked) return; checked = true; draw(true); btn.disabled = true;
        const good = arr.filter((x, i) => p.items[i] === x).length;
        fb.append(h('div', { class: 'fb ' + (good === arr.length ? 'ok' : 'bad') }, good === arr.length ? 'Orden correcto.' : 'Acertaste ' + good + ' de ' + arr.length + '. El orden correcto es: ' + p.items.map((x, i) => (i + 1) + ') ' + x).join(' · ')));
        setPts(Math.round(2 * good / arr.length), 2);
      }
    }, 'Comprobar orden');
    return h('div', { class: 'card ord' }, h('h2', {}, p.titulo), h('p', {}, p.instruccion), list, h('div', { class: 'row' }, btn), fb);
  },
  clasificar(p) {
    const rows = h('div'); let hechos = 0, resp = 0; const n = p.items.length;
    const fb = h('div');
    p.items.forEach(it => {
      const row = h('div', { class: 'cls' }, h('div', { class: 't' }, it.x));
      const bs = p.cats.map((c, k) => h('button', {
        class: 'btn ghost', onclick: () => {
          if (row.dataset.done) return; row.dataset.done = '1'; resp++;
          const ok = (k === it.a); if (ok) hechos++;
          row.classList.add(ok ? 'ok' : 'bad'); bs.forEach(b => b.disabled = true);
          row.append(h('div', { class: 'src', style: 'flex-basis:100%' }, (ok ? '✔ ' : '✘ ') + (ok ? '' : 'Era «' + p.cats[it.a] + '». ') + it.why));
          if (resp === n) { fb.append(h('div', { class: 'fb ' + (hechos === n ? 'ok' : 'bad') }, 'Acertaste ' + hechos + ' de ' + n + '.')); setPts(Math.round(2 * hechos / n), 2); }
        }
      }, c));
      bs.forEach(b => row.append(b)); rows.append(row);
    });
    return h('div', { class: 'card' }, h('h2', {}, p.titulo), h('p', {}, p.instruccion), rows, fb);
  },
  quiz(p) {
    let qi = 0, ok = 0; const box = h('div', { class: 'card' });
    function show() {
      const q = p.preguntas[qi]; let done = false;
      const opts = h('div', { class: 'opts' }); const fb = h('div');
      q.ops.forEach((o, k) => opts.append(h('button', {
        class: 'opt', onclick: () => {
          if (done) return; done = true;
          [...opts.children].forEach((b, j) => { b.disabled = true; if (j === q.ok) b.classList.add('ok'); else if (j === k) b.classList.add('bad'); });
          const good = k === q.ok; if (good) ok++;
          fb.append(h('div', { class: 'fb ' + (good ? 'ok' : 'bad') }, h('b', {}, good ? 'Correcto. ' : 'No es esa. '), q.why));
          say(good ? pick(FRASES_OK) : pick(FRASES_BAD), good ? 'hop' : 'shake');
          const last = qi === p.preguntas.length - 1;
          fb.append(h('div', { class: 'row' }, h('button', { class: 'btn', onclick: () => { if (last) { setPts(ok, p.preguntas.length); box.replaceChildren(h('h2', {}, p.titulo), h('p', { class: 'score' }, ok + ' de ' + p.preguntas.length)); } else { qi++; show(); } } }, last ? 'Ver resultado' : 'Siguiente pregunta')));
        }
      }, o)));
      box.replaceChildren(h('h2', {}, p.titulo), h('div', { class: 'src' }, 'Pregunta ' + (qi + 1) + ' de ' + p.preguntas.length), h('p', {}, h('b', {}, q.q)), opts, fb);
    }
    show(); return box;
  },
  actividad(p) {
    const a = avance[cur.id] = avance[cur.id] || { textos: {} }; a.textos = a.textos || {};
    const ta = h('textarea', { rows: 7, 'aria-label': p.titulo, oninput: () => { a.textos[p.id] = ta.value; store.set('climaco_avance_v1', avance); } });
    ta.value = a.textos[p.id] || '';
    return h('div', { class: 'card' }, h('h2', {}, 'Práctica: ' + p.titulo), h('p', {}, p.instruccion),
      h('div', { class: 'warn' }, 'No escribas nombres, direcciones ni datos de personas reales. Usa casos imaginarios o simulados.'),
      h('p', { class: 'src' }, 'Producto: ' + (p.producto || '')), ta,
      h('div', { class: 'row' }, h('button', { class: 'btn ghost', onclick: () => descargar(p.id, ta.value) }, 'Descargar mi texto (.txt)')));
  },
  grupal(p) {
    const a = avance[cur.id] = avance[cur.id] || { textos: {} };
    const chk = h('input', { type: 'checkbox', id: 'chk-grupal', onchange: () => { a.grupal = chk.checked; store.set('climaco_avance_v1', avance); } });
    chk.checked = !!a.grupal;
    return h('div', { class: 'card' }, h('h2', {}, 'En grupo: ' + p.titulo),
      h('p', { class: 'src' }, 'Módulo ' + cur.id + ' · ' + p.duracion + ' · ' + p.personas + ' personas'),
      h('div', { class: 'warn' }, 'Esta actividad se hace en persona con tu grupo, en la Cáritas o en el barrio. No se hace en la pantalla. Tu coordinador la registra.'),
      h('h3', {}, 'Materiales'), h('ul', {}, p.materiales.map(x => h('li', {}, x))),
      h('h3', {}, 'Pasos'), h('ol', {}, p.pasos.map(x => h('li', {}, x))),
      h('p', {}, h('b', {}, 'Producto: '), p.producto),
      h('p', {}, h('b', {}, 'Qué se registra: '), p.registra),
      h('p', {}, h('b', {}, 'Para quien conduce: '), p.facilita),
      h('div', { class: 'warn' }, 'No se anotan nombres ni direcciones de personas, ni opiniones sobre instituciones.'),
      h('p', { class: 'nonprint' }, h('label', {}, chk, ' Ya hicimos esta actividad con mi grupo')),
      h('div', { class: 'row nonprint' }, h('button', { class: 'btn ghost', onclick: () => window.print() }, 'Imprimir la guía')));
  },
  cierre() {
    const mx = maxPts(cur), got = Object.values(puntos).reduce((s, v) => s + v, 0), pc = mx ? Math.round(100 * got / mx) : 0;
    const msg = pc >= 80 ? "¡Tremendo! Dominas este módulo." : pc >= 50 ? "Vas bien. Repasa las escenas donde fallaste." : "Vuelve a recorrer el módulo, con calma. Se aprende repitiendo.";
    say(msg, pc >= 50 ? 'hop' : 'shake');
    (avance[cur.id] = avance[cur.id] || { textos: {} }).cerrado = true; guardar();
    const tiene = !!cur.pasos.find(x => x.t === 'grupal');
    return h('div', { class: 'card' }, h('h2', {}, 'Cierre del módulo ' + cur.id), h('p', { class: 'score' }, got + ' de ' + mx + ' puntos (' + pc + '%)'), h('p', {}, msg),
      h('div', { class: 'warn' }, 'Este puntaje es de práctica. No sustituye la evaluación de tu facilitador.'),
      tiene ? h('p', {}, 'Este módulo tiene una actividad en grupo. Hazla con tu coordinador y luego entrégale tu constancia.') : null,
      h('div', { class: 'row' }, h('button', { class: 'btn', onclick: () => descargarConstancia(got, mx) }, 'Descargar constancia para mi coordinador'),
        h('button', { class: 'btn ghost', onclick: () => descargar('avance_' + cur.id, JSON.stringify(avance[cur.id] || {}, null, 2), 'json') }, 'Descargar mi avance (con mis textos)'),
        h('button', { class: 'btn ghost', onclick: () => { paso = 0; puntos = {}; guardar(); mostrar(); } }, 'Repetir módulo'),
        h('button', { class: 'btn ghost', onclick: vistaMenu }, 'Volver al menú')));
  }
};
R.llevar = function (p) {
  return h('div', { class: 'card' }, h('h2', {}, p.titulo), h('p', {}, p.intro), h('ol', {}, p.preguntas.map(q => h('li', {}, q))), h('div', { class: 'warn' }, p.aviso));
};
function descargarConstancia(got, mx) {
  const a = avance[cur.id] || {}, t = a.textos || {};
  const c = {
    tipo: 'constancia_climaco', version: 1, voluntario: (store.get('climaco_perfil') || {}).nombre || '', modulo: cur.id, titulo: cur.titulo, nivel: cur.nivel,
    fecha: new Date().toISOString().slice(0, 10), puntos: got, max: mx, cerrado: true,
    actividad_individual: Object.values(t).some(v => String(v).trim().length > 0),
    tiene_grupal: !!cur.pasos.find(x => x.t === 'grupal'), grupal_marcada: !!a.grupal
  };
  descargar('constancia_' + cur.id + (c.voluntario ? '_' + c.voluntario.replace(/[^A-Za-z0-9]+/g, '_') : ''), JSON.stringify(c, null, 2), 'json');
}
function descargar(nombre, texto, ext) {
  const b = new Blob([texto], { type: ext === 'json' ? 'application/json' : 'text/plain' });
  const a = h('a', { href: URL.createObjectURL(b), download: nombre + '.' + (ext || 'txt') }); document.body.append(a); a.click(); a.remove();
}

/* ============ BUSCADOR + IA LOCAL OPCIONAL ============ */
const STOP = new Set("de la el en y a los las un una que es por con para se del al lo su sus como mas o pero si no ya le les e u este esta esto son ser hay muy".split(' '));
const stem = w => w.length > 4 ? w.replace(/(es|s)$/, '') : w;
const tok = s => norm(s).replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(w => w.length > 2 && !STOP.has(w)).map(stem);
function frags() { return cur ? cur.pasos.filter(p => p.t === 'lectura') : []; }
function buscar(q) {
  const F = frags(), tq = tok(q); if (!tq.length || !F.length) return [];
  const docs = F.map(f => ({ f, t: tok(f.titulo + ' ' + f.texto) })); const N = docs.length;
  const df = {}; docs.forEach(d => new Set(d.t).forEach(w => df[w] = (df[w] || 0) + 1));
  return docs.map(d => { let s = 0; tq.forEach(w => { const tf = d.t.filter(x => x === w).length; if (tf) s += (tf / (tf + 1.2)) * Math.log(1 + N / (df[w] || 1)); }); return { f: d.f, s }; })
    .filter(x => x.s > 0.2).sort((a, b) => b.s - a.s).slice(0, 3);
}
let iaOk = false;
async function probarIA() {
  try {
    const c = new AbortController(); const t = setTimeout(() => c.abort(), 2000);
    const r = await fetch('http://localhost:11434/api/tags', { signal: c.signal }); clearTimeout(t);
    const j = await r.json(); iaOk = !!(j.models || []).some(m => /^climaco/.test(m.name));
    $('#ia-status').textContent = iaOk ? 'IA local: conectada' : 'IA local: sin modelo "climaco" (modo búsqueda)';
  } catch (e) { iaOk = false; $('#ia-status').textContent = 'Modo sin IA (el curso funciona completo)'; }
}
async function responder(q) {
  const out = $('#ask-out'); out.replaceChildren();
  if (!cur) { out.append(h('p', {}, 'Abre un módulo primero y te respondo con lo que dice.')); return; }
  const res = buscar(q);
  if (!res.length) { out.append(h('p', {}, PREGUNTA_IA_RECHAZO)); say("Eso no lo tengo en este módulo.", 'shake', 'C'); return; }
  const refs = res.map(r => r.f.id).join(', ');
  if (iaOk) {
    out.append(h('p', { class: 'src' }, 'Pensando…'));
    try {
      const ctx = res.map(r => '[' + r.f.id + '] ' + r.f.titulo + ': ' + r.f.texto).join('\n\n');
      const c = new AbortController(); const t = setTimeout(() => c.abort(), 90000);
      const r = await fetch('http://localhost:11434/api/chat', {
        method: 'POST', signal: c.signal, headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'climaco', stream: false, options: { temperature: 0.2, num_ctx: 4096 },
          messages: [{ role: 'user', content: 'NIVEL: ' + NV[cur.nivel].toLowerCase() + '\nCONTEXTO:\n' + ctx + '\n\nPREGUNTA: ' + q }]
        })
      });
      clearTimeout(t); const j = await r.json();
      out.replaceChildren(h('p', {}, j.message.content), h('p', { class: 'src' }, 'Fuentes del curso: ' + refs));
      say("Eso te respondí con lo que dice el módulo.", 'hop', 'C'); return;
    } catch (e) { out.replaceChildren(h('p', { class: 'src' }, 'La IA no respondió. Te muestro lo que dice el curso.')); }
  }
  out.append(h('p', { class: 'src' }, 'Esto dice el curso:'), ...res.slice(0, 2).map(r => h('div', { class: 'fb' }, h('b', {}, r.f.titulo + '. '), r.f.texto, h('div', { class: 'src' }, r.f.fuente))));
  say("Mira lo que dice la ficha.", 'hop', 'C');
}
function closeAsk() { $('#panel').hidden = true; }
const medirCabecera = () => document.documentElement.style.setProperty('--hh', document.querySelector('header').offsetHeight + 'px'); addEventListener('resize', medirCabecera); medirCabecera();
$('#btn-ask').onclick = () => { medirCabecera(); $('#panel').hidden = !$('#panel').hidden; if (!$('#panel').hidden) $('#ask-q').focus(); };
$('#ask-close').onclick = closeAsk;
$('#ask-go').onclick = () => { const q = $('#ask-q').value.trim(); if (q) responder(q); };
$('#ask-q').addEventListener('keydown', e => { if (e.key === 'Enter') $('#ask-go').click(); });
$('#btn-menu').onclick = vistaMenu;
(function () {
  const T = [100, 125, 150, 175, 200]; let i = T.indexOf((store.get('climaco_fs') || {}).pct); if (i < 0) i = 0;
  const ap = () => { document.documentElement.style.fontSize = T[i] + '%'; store.set('climaco_fs', { pct: T[i] }); };
  $('#btn-amas').onclick = () => { if (i < T.length - 1) { i++; ap(); } }; $('#btn-amenos').onclick = () => { if (i > 0) { i--; ap(); } }; ap();
})();

vistaMenu(); probarIA();
