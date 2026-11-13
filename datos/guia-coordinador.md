# Guía de uso para el Coordinador
## App «Consultas GRD – Cáritas Cuba»
**Con Clímaco y Magnolia**

---

### 1. ¿Qué pasó antes y qué pasa ahora?

**Clímaco:** ¡Hola! Soy Clímaco. Antes, la app era solo para el voluntario. Tenía el curso, las 40 preguntas y un formulario de Riesgos que confundía a la gente. Además, cualquiera podía entrar como coordinador y ver los datos sin permiso.

**Profesora Magnolia:** Así es. Pero hoy hemos cambiado eso. Ahora la app te pregunta **quién eres** (Voluntario o Coordinador). Si eres coordinador, te pide un **PIN** para proteger la bitácora. Y además, ahora la app tiene un **Mapa Parroquial** para que registres los riesgos de tu comunidad, y un **Asistente IA** que responde usando la biblioteca de Cáritas.

**Clímaco:** ¡Y no inventa respuestas! Si no encuentra la información en los documentos, te lo dice.

---

### 2. Primeros pasos: Abrir la app y entrar como Coordinador

**Clímaco:** Cuando abras la app, te preguntaré: *«¿Quién eres?»*.

**Magnolia:** Debes elegir la opción **«Soy Coordinador GRD Cáritas»**.

**Clímaco:** ¡Ojo! La primera vez te pedirá crear un **PIN** (de 4 a 6 números). Ese PIN es tu llave para proteger los nombres de los voluntarios.

**Magnolia:** Guárdalo en un lugar seguro. Si lo olvidas, no hay forma de recuperarlo (solo con un respaldo).

---

### 3. El menú del Coordinador

Una vez que pongas el PIN, verás estos botones:

| Botón | ¿Para qué sirve? |
| :--- | :--- |
| **Riesgos** | (Oculto para el voluntario). Registro institucional de riesgos. |
| **40 Preguntas Básicas** | Consultas rápidas sobre GRD. |
| **Biblioteca** | Documentos de consulta (guía de Cáritas, glosario, etc.). |
| **Formación** | El Curso de Clímaco y Magnolia. |
| **Guía de uso** | Esta guía. |
| **Privacidad** | Política de privacidad. |
| **Dashboard** | Gráficos de los riesgos registrados. |
| **Asistente IA** | Preguntas a la IA local (Ollama + Phi-3). |
| **Coordinación** | La Bitácora (donde gestionas a los voluntarios). |
| **Mapa parroquial** | La ficha del mapa de riesgo. |

---

### 4. El proceso de formación con el voluntario

**Clímaco:** Este es el corazón de la app. Sigue estos pasos:

#### Paso 1: Dar de alta al voluntario
1.  Entra a **Coordinación** → pestaña **Personas**.
2.  Escribe el **nombre** y la **parroquia** del voluntario.
3.  Si es **menor de 18 años**, marca la casilla y asegúrate de tener el **consentimiento en papel** firmado por su madre, padre o tutor.
4.  Haz clic en **«Registrar y generar código»**.
5.  La app te dará un **código único** (ej. `HAB-0001-K`). **Anótalo y dáselo al voluntario**.

#### Paso 2: Explicarle al voluntario qué hacer
**Magnolia:** Dile al voluntario:
*   «Escribe este código en la app cuando entres a Formación».
*   «Haz los módulos del curso».
*   «Al terminar, genera tu línea de avance y envíamela por WhatsApp o dictamela».

#### Paso 3: Recibir el avance
1.  Cuando el voluntario te envíe la línea (ej. `GRD1|HAB-0001-K|...`), entra a **Coordinación** → pestaña **Recibir avances**.
2.  Pega la línea en la caja de texto.
3.  Haz clic en **«Procesar avances»**.
4.  La app marcará al voluntario como **«En formación»** o **«Completado»**.

#### Paso 4: Ver el progreso
1.  Ve a la pestaña **Resumen** para ver los conteos (registrados, en formación, completaron el Básico).
2.  Ve a la pestaña **Personas** para ver el detalle de cada voluntario.

---

### 5. La Bitácora: respaldo y seguridad

**Clímaco:** La Bitácora contiene nombres y parroquias. Es importante que la protejas.

#### Hacer un respaldo
1.  Entra a **Coordinación** → pestaña **Respaldo**.
2.  Haz clic en **«Guardar respaldo»**.
3.  Se descargará un archivo JSON. **Guárdalo en tu USB personal**. No lo envíes por WhatsApp (contiene nombres).

#### Cambiar el PIN
1.  En la pestaña **Respaldo**, busca la sección **«Cambiar PIN»**.
2.  Escribe tu PIN actual, el nuevo PIN y repítelo.
3.  Haz clic en **«Cambiar PIN»**.

#### Restaurar un respaldo
1.  En la pestaña **Respaldo**, haz clic en **«Restaurar respaldo»**.
2.  Selecciona el archivo JSON que guardaste.
3.  La app restaurará los datos.

---

### 6. El Mapa Parroquial

**Magnolia:** El mapa es la herramienta para identificar los riesgos de la comunidad.

#### Llenar la ficha
1.  Entra a **Mapa parroquial**.
2.  Llena los campos:
    *   **Fecha:** (se pone automáticamente).
    *   **Código de participante:** (el del voluntario).
    *   **Zona:** (sin dirección exacta, ej. «Barrio costero»).
    *   **Amenaza:** (selecciona de la lista).
    *   **Expuesto:** (solo cantidades, ej. «12 casas, 5 mayores»).
    *   **Fragilidad:** (qué hace el daño mayor).
    *   **Con qué contamos:** (capacidades).
    *   **Prioridad:** (Alta, Media, Baja).
    *   **Medida propuesta:** (acción concreta).
3.  Haz clic en **«Guardar ficha»**.

#### Ver las fichas guardadas
*   Debajo del formulario, verás una lista con todas las fichas guardadas.
*   Puedes **borrar** una ficha si es necesario.

---

### 7. El Asistente IA

**Clímaco:** La IA te ayuda a consultar la biblioteca de Cáritas.

#### Hacer una pregunta
1.  Entra a **Asistente IA**.
2.  Escribe tu pregunta (ej. «¿Quién aprueba la lista final de hogares?»).
3.  Presiona **Enter**.
4.  La IA responderá citando la fuente (ej. «Fuente: caritas-guia.md»).

#### ¿Qué hacer si la IA no responde?
*   Si dice **«No encontré esto en la biblioteca...»**, significa que la respuesta no está en los documentos. Prueba con otras palabras.
*   Si dice **«No se pudo conectar con la IA»**, verifica que Ollama esté corriendo en tu laptop.

---

### 8. Preguntas frecuentes

**¿Qué hago si olvido el PIN?**
No hay forma de recuperarlo. Si tienes un respaldo, puedes restaurarlo. Si no, tendrás que borrar la bitácora y empezar de nuevo.

**¿Cómo sé si la IA está funcionando?**
Haz una pregunta cuya respuesta esté en la biblioteca. Si te responde citando la fuente, está funcionando.

**¿Qué hago si no tengo internet?**
La app funciona sin internet. Solo necesitas internet para instalar la app la primera vez y para actualizarla.

**¿Puedo usar la app en mi teléfono?**
Sí, pero el modo Coordinador (con la Bitácora) está pensado para la laptop. El teléfono es para el voluntario.

---

**Fin de la guía.**