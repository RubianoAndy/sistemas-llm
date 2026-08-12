<div align="center">
    <img src="assets/img/logo-lasalle.png" width="250" alt="Logo Universidad de La Salle">
</div>

# Grandes Modelos de Lenguaje — Infografía Interactiva

## 📋 Información General

<div align="center">
    <img src="assets/img/autor.png" width="200" alt="Foto de Andrés Giovanny Rubiano Muñoz" style="border-radius: 10px;">
</div>

| Aspecto | Detalles |
|--------|----------|
| **Autor** | Andrés Giovanny Rubiano Muñoz "Andy Rubiano" |
| **Correo** | arubiano67@unisalle.edu.co |
| **Asignatura** | Sistemas de LLM Avanzados |
| **Actividad** | Actividad 1 — Unidad 1: Fundamentos de los LLM |
| **Programa** | Maestría en Inteligencia Artificial |
| **Facultad** | Ingeniería |
| **Universidad** | Universidad de La Salle |
| **Tema** | Conceptos, funcionamiento, modelos OpenSource y aplicaciones de los LLM |
| **Industria seleccionada** | Sector energético (distribución y comercialización de energía eléctrica) |
| **Año** | 2026 |
| **Estado** | Funcional |

---

## 🎯 Descripción del Proyecto

Infografía web e interactiva sobre **grandes modelos de lenguaje (LLM)**. Cubre los conceptos básicos, el funcionamiento interno, los tipos de modelo de código abierto disponibles y sus aplicaciones prácticas en una industria concreta.

La diferencia frente a una infografía estática es que **los mecanismos no se afirman: se ejecutan en el navegador del visitante**. Cuatro laboratorios y un asistente documental permiten comprobar cada concepto sobre texto propio:

- **Laboratorio de LLM (4 etapas)** — tokenización subpalabra con métricas de ventana de contexto, espacio de embeddings construido en vivo por co-ocurrencia, mapa de autoatención con máscara causal y generación autorregresiva con controles de temperatura y top-k.
- **Asistente documental con RAG** — recuperación real (TF-IDF + coseno) sobre diez fragmentos de documentación del sector energético, con los fragmentos recuperados, el prompt exacto que recibiría el modelo, la respuesta citada y el rechazo explícito cuando la pregunta no tiene base documental.
- **Autoevaluación** — seis preguntas de opción múltiple con retroalimentación inmediata y explicación del porqué.

### Objetivos Principales

- Comunicar los fundamentos de los LLM de forma verificable, para que cada concepto se compruebe en pantalla en lugar de leerse como afirmación.
- Presentar el panorama de modelos OpenSource con sus parámetros, contexto y licencia, y distinguir «pesos abiertos» de «datos y código abiertos».
- Contextualizar las aplicaciones en el sector energético colombiano, con flujos completos del dato de entrada a la decisión.
- Mantener la identidad visual institucional de la Universidad de La Salle.
- Funcionar sin dependencias, sin proceso de compilación y sin servidor.

### Cumplimiento de los criterios de la actividad

| Criterio de desempeño | Dónde se resuelve |
|---|---|
| Conceptos básicos de los LLM, su funcionamiento y modelos OpenSource, claros para una audiencia general | Secciones **01 Fundamentos** (13 tarjetas), **02 Cómo funciona** (4 laboratorios) y **03 Código abierto** (10 modelos) |
| Al menos **tres aplicaciones prácticas** en la industria seleccionada, explicando cómo aportan valor | Sección **04 Aplicaciones**: cuatro casos del sector energético, cada uno con seis pasos y sus beneficios |
| Pieza visualmente atractiva y bien organizada | Identidad institucional, iconografía SVG propia, barra de progreso, navegación por secciones y diseño adaptable |
| Elementos interactivos que permitan explorar con mayor profundidad, con enlaces a recursos adicionales | 4 laboratorios, asistente RAG, autoevaluación, filtros, pestañas, tarjetas desplegables y sección **06 Enlaces** (12 recursos externos) |

---

## 📚 Estructura del Repositorio

```
.
├── index.html                    # Estructura de la página (7 secciones + portada + pie)
├── README.md                     # Este archivo
└── assets/
    ├── css/
    │   └── styles.css            # Identidad visual completa (variables, componentes, responsive, impresión)
    ├── js/
    │   ├── datos.js              # CONTENIDO EDITABLE: conceptos, modelos, casos, documentos, quiz, enlaces, corpus
    │   ├── llm.js                # Motor: tokenizador, embeddings, atención, generación y recuperación (RAG)
    │   └── app.js                # Construcción del DOM y comportamiento de la interfaz
    └── img/
        ├── logo-lasalle.png      # Logotipo institucional
        └── autor.png             # Fotografía del autor
```

> ℹ️ **Nota:** el proyecto separa deliberadamente **contenido** (`datos.js`), **lógica de dominio** (`llm.js`) e **interfaz** (`app.js`). Modificar textos, modelos, casos, enlaces o bibliografía **no requiere tocar el HTML ni la interfaz**: basta con editar los arreglos de `datos.js`, que la capa de interfaz recorre para construir la página.

---

## 🧩 Contenido de la Infografía

| # | Sección | Contenido |
|---|---|---|
| 01 | **Fundamentos** | 13 conceptos en tarjetas desplegables (qué es un LLM, redes profundas, transformers, tokens, embeddings, entrenamiento, generación, fine-tuning, prompt engineering, contexto y RAG, tamaño y cuantización, multimodalidad, ética) + autoevaluación de 6 preguntas. |
| 02 | **Cómo funciona** | Laboratorio de 4 etapas: tokenización, embeddings, atención y generación, cada una sobre texto arbitrario del visitante. |
| 03 | **Código abierto** | 10 modelos abiertos filtrables por uso y licencia, con parámetros, ventana de contexto y enlace a Hugging Face; más 6 herramientas del ecosistema de ejecución. |
| 04 | **Aplicaciones** | 4 casos del sector energético en pestañas (atención de PQR, copiloto de mantenimiento, análisis regulatorio y analítica conversacional), con su flujo de 6 pasos. |
| 05 | **Demostración** | Asistente documental con RAG sobre 10 fragmentos indexados: recuperación, prompt ensamblado, respuesta citada y base documental consultable. |
| 06 | **Para explorar** | 12 enlaces externos filtrables por categoría: encontrar modelos, ejecutar, visualizar y aprender. |
| 07 | **Referencias** | Bibliografía de 14 fuentes en formato IEEE. |

Complementan la navegación una barra de progreso de lectura, el resaltado de la sección activa en el menú y un diseño adaptable a móvil.

---

## 🧪 Motor de LLM

Todo el procesamiento ocurre **en el navegador del visitante**, sin peticiones a ningún servidor y sin modelos descargados. [`llm.js`](assets/js/llm.js) implementa desde cero, a escala mínima, las piezas que en Python resolverían `transformers`, `sentence-transformers` o `langchain`.

### Componentes

| Componente | Implementación | Detalle |
|---|---|---|
| Tokenizador | Segmentación subpalabra por prefijos y sufijos del español | Marca continuaciones con `##`, distingue palabra, subpalabra, número y signo, y asigna un identificador estable por hash FNV-1a sobre un vocabulario simulado de 32 000 entradas. |
| Métricas de contexto | Caracteres, palabras, tokens y ratios | Calcula la ocupación de ventanas de 4K, 8K y 128K tokens. |
| Embeddings | Co-ocurrencia + PMI positivo + normalización L2 | Ventana deslizante de 4 términos sobre el corpus; 249 términos en el espacio resultante. Similitud por coseno sobre vectores dispersos. |
| Atención | Una cabeza con máscara causal | `softmax(coseno × escala)` sobre los tokens previos; la escala cumple el papel de `1/√d` de la fórmula original. |
| Generación | N-gramas con retroceso trigrama → bigrama → unigrama | 510 trigramas y 281 bigramas contados sobre el corpus; muestreo con `p ∝ conteo^(1/T)` y truncamiento top-k. |
| Recuperación | TF-IDF con similitud coseno | IDF suavizado `log(1 + N/(1 + DF))` sobre los 10 fragmentos, con recorte de sufijos para tolerar variantes morfológicas. |
| Respuesta anclada | Selección extractiva de oraciones | Puntúa cada oración por solapamiento ponderado con la pregunta y cita el fragmento de origen; por debajo del umbral de 0,10 declara el vacío en lugar de responder. |

### Comportamiento del asistente sobre las preguntas de ejemplo

| Pregunta | Fragmento esperado | Recuperado | Similitud | Respuesta |
|---|---|---|---|---|
| Cable de media tensión caído | D1 | **D1** | 0,415 | anclada |
| Reconexión tras el pago | D2 | **D2** | 0,135 | anclada |
| Periodicidad del mantenimiento | D3 | **D3** | 0,207 | anclada |
| Qué mide el SAIDI | D4 | **D4** | 0,274 | anclada |
| Requisitos de autogeneración solar | D5 | **D5** | 0,188 | anclada |
| Uso de IA con datos de usuarios | D10 | **D10** | 0,329 | anclada |
| Tarifa del estrato tres | — | — | 0,000 | **rechazada** |

**Aciertos: 6/6 sobre las preguntas con respuesta en la base.** El séptimo caso es deliberado: no existe en el corpus, y el sistema responde declarando el vacío. Es la diferencia práctica entre un modelo que alucina y uno anclado a fuentes.

> ⚠️ **Nota metodológica:** el motor es **didáctico, no un LLM**. No hay pesos entrenados, red neuronal ni inferencia: hay conteos, coseno y softmax calculados en vivo sobre un corpus de 52 frases. Se eligió así para que cada paso sea auditable en pantalla. Un sistema real sustituye el n-grama por una red de miles de millones de parámetros, la co-ocurrencia por embeddings densos aprendidos y el tokenizador por un vocabulario BPE o SentencePiece; **el bucle conceptual —tokenizar, representar, atender, predecir— es el mismo**. Los fragmentos documentales del asistente son ilustrativos y no constituyen normativa oficial.

---

## ⚙️ Requisitos

**Ninguna dependencia, ningún proceso de compilación, ningún backend.** El proyecto es HTML, CSS y JavaScript estándar servidos tal cual.

| Elemento | Requisito |
|---|---|
| Navegador | Cualquiera moderno (Chrome, Edge, Firefox, Safari) |
| Servidor | Opcional — la página funciona desde el sistema de archivos |
| Conexión | Opcional — solo se usa para las tipografías de Google Fonts |

> ℹ️ **Funcionamiento sin conexión:** la única petición externa son las tipografías **Archivo**, **Inter** y **JetBrains Mono**. Sin internet la página se comporta igual y cae a las fuentes del sistema, sin romper ni el diseño ni la interactividad.

---

## 🚀 Ejecución Local

### Opción 1: apertura directa (recomendado)

Doble clic sobre [`index.html`](index.html). Funciona desde el disco porque no hay módulos ES ni peticiones `fetch`.

### Opción 2: servidor local

```bash
python -m http.server 8000
```

Luego abrir <http://localhost:8000>. Útil si más adelante se incorporan recursos que exijan protocolo HTTP.

### Exportar a PDF

Con `Ctrl + P` el navegador genera una versión imprimible: oculta la barra de navegación y los controles interactivos, y expande las cuatro etapas del laboratorio y los cuatro casos de uso para que aparezcan completos.

---

## 🌐 Despliegue

Al ser un sitio estático, cualquier servicio de hospedaje gratuito lo publica sin configuración.

| Servicio | Ventaja | Consideración |
|---|---|---|
| **GitHub Pages** | Permanente, versionado, URL predecible | Requiere repositorio público en cuentas gratuitas |
| **Netlify Drop** | Se arrastra la carpeta, sin cuenta | URL aleatoria, sin historial de versiones |
| **Cloudflare Pages / Vercel** | Buen CDN, despliegue automático | Otra cuenta que administrar |

### GitHub Pages

```bash
git init
git add .
git commit -m "feat: infografía interactiva de LLM"
git branch -M main
git remote add origin https://github.com/<usuario>/infografia-llm.git
git push -u origin main
```

Después, en GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**. En un par de minutos la página queda publicada en `https://<usuario>.github.io/infografia-llm/`.

> ℹ️ **Nombre del repositorio:** conviene evitar tildes y espacios (`infografia-llm`). Los archivos internos del proyecto no los usan, de modo que las rutas funcionan sin escapes.

---

## 🎨 Configuración del Proyecto

### Paleta institucional

Definida como variables CSS al inicio de [`assets/css/styles.css`](assets/css/styles.css) y reutilizada en toda la interfaz.

| Variable | HEX | Uso |
|---|---|---|
| `--azul` | `#002D57` | Color principal de la Universidad; fondo del encabezado |
| `--azul-900` | `#001B34` | Fondo del pie de página y del bloque de prompt |
| `--azul-700` | `#013F78` | Estado activo de botones y celdas del mapa de atención |
| `--azul-500` | `#0A5DA8` | Enlaces, acentos e iconos |
| `--azul-300` | `#6EA8DD` | Bordes en estado *hover* |
| `--dorado` | `#FFCD00` | Color secundario; sección activa del menú y marcos |
| `--dorado-600` | `#D9A800` | Numeración de secciones y referencias |
| `--dorado-100` | `#FFF4CC` | Fondos de realce (subpalabras, semilla de generación) |

Los colores semánticos (`--alta`, `--media`, `--baja`) siguen la convención de semáforo y marcan el orden del n-grama, la validez de las respuestas del quiz, el anclaje de la respuesta del asistente y el carácter permisivo de la licencia de cada modelo.

### Mapa de edición

Todo el contenido vive en [`assets/js/datos.js`](assets/js/datos.js), en arreglos con nombres explícitos.

| Para cambiar… | Editar el arreglo |
|---|---|
| Los conceptos y sus ejemplos | `CONCEPTOS` |
| El catálogo de modelos abiertos | `MODELOS` |
| Los filtros del catálogo | `FILTROS_MODELOS` |
| Las herramientas de ejecución | `HERRAMIENTAS` |
| Las aplicaciones y sus pasos | `CASOS` |
| Los fragmentos indexados del asistente | `DOCUMENTOS` |
| Las preguntas de ejemplo del asistente | `PREGUNTAS_EJEMPLO` |
| La autoevaluación | `QUIZ` |
| Los enlaces de interés y sus categorías | `ENLACES`, `FILTROS_ENLACES` |
| La bibliografía | `BIBLIOGRAFIA` |
| El corpus de los laboratorios | `CORPUS_LLM` |
| Los ejemplos de cada laboratorio | `TEXTOS_TOKENIZADOR`, `PALABRAS_EMBEDDING`, `FRASES_ATENCION`, `SEMILLAS_GENERACION` |
| Los iconos de la interfaz | `ICONOS` (SVG de trazo, 24×24) |

Para ajustar el comportamiento del motor, los parámetros están en [`assets/js/llm.js`](assets/js/llm.js): `VOCAB_TAM` y las listas de afijos del tokenizador, la ventana de co-ocurrencia en `construirVectores`, la `escala` de `atencion` y el `UMBRAL_RAG` del asistente.

### Decisiones de diseño

| Aspecto | Valor |
|---|---|
| Esquinas | Rectas en toda la pieza (`--r-sm`, `--r-md`, `--r-lg` en `0`) |
| Encabezado | Azul institucional con logotipo en blanco sólido |
| Sección activa | Únicamente cambio de color a dorado, sin fondo |
| Fotografía del autor | Marco cuadrado con borde dorado, sin recorte ni ampliación |
| Tema | Claro, sin alternancia |

---

## 📋 Estado del Proyecto

### ✅ Completado

#### Contenido
- ✅ **13 conceptos de LLM** — con detalle ampliado y ejemplo formateado por concepto
- ✅ **10 modelos de código abierto** — con parámetros, contexto, licencia, usos y enlace a Hugging Face
- ✅ **6 herramientas de ejecución** — de `llama.cpp` en un portátil a vLLM en producción
- ✅ **4 aplicaciones del sector energético** — con sus 6 pasos, beneficios y referencias bibliográficas
- ✅ **10 fragmentos documentales** — base indexada del asistente, consultable desde la propia página
- ✅ **12 enlaces de interés** — verificados, categorizados y abiertos en pestaña nueva
- ✅ **Bibliografía IEEE** — 14 referencias, incluidas las lecturas complementarias de la unidad

#### Interactividad
- ✅ **Laboratorio de tokenización** — tokens con identificador, métricas y ocupación de ventana de contexto
- ✅ **Laboratorio de embeddings** — vecinos por coseno, dimensiones activas del vector y caso fuera de vocabulario
- ✅ **Mapa de atención** — matriz con máscara causal, lectura automática de la fila final y aviso de tokens sin vector
- ✅ **Generación autorregresiva** — temperatura, top-k, avance token a token, insignia del orden de n-grama usado
- ✅ **Asistente RAG** — fragmentos recuperados con similitud, prompt ensamblado con su costo en tokens y rechazo explícito sin base documental
- ✅ **Autoevaluación** — 6 preguntas con retroalimentación y marcador
- ✅ **Filtros y pestañas** — modelos por uso y licencia, enlaces por categoría, casos y etapas del laboratorio

#### Infraestructura
- ✅ Separación de contenido, motor e interfaz en tres archivos
- ✅ Identidad institucional parametrizada mediante variables CSS
- ✅ Diseño adaptable verificado en escritorio (1440 px) y móvil (390 px), sin desbordamiento horizontal
- ✅ Estilos de impresión para exportación a PDF
- ✅ Sin errores ni advertencias en consola

### ⏳ Pendiente

- ⏳ **Menú de navegación en móvil** — por debajo de 640 px los enlaces se ocultan y la navegación es por desplazamiento; queda pendiente un menú desplegable
- ⏳ **Códigos QR de los enlaces** — solo aportarían si la infografía se proyecta en pantalla, ya que en la versión web los enlaces son accionables
- ⏳ **Despliegue público** — el sitio está listo para publicarse; falta ejecutar el proceso

---

## 📖 Guía de Estilo

| Aspecto | Valor |
|---|---|
| Idioma | Español |
| Tipografía de títulos | Archivo (600–900) |
| Tipografía de texto | Inter (400–700) |
| Tipografía monoespaciada | JetBrains Mono (400–500) |
| Ancho máximo de contenido | 1200 px |
| Puntos de quiebre | 900 px y 640 px |
| Bibliografía | IEEE |

---

## 🔑 Palabras Clave

`Atención` · `Cuantización` · `Embeddings` · `Fine-tuning` · `Generación Autorregresiva` · `Infografía Interactiva` · `Large Language Models` · `Modelos de Código Abierto` · `Prompt Engineering` · `RAG` · `Sector Energético` · `Tokenización` · `Transformers` · `Ventana de Contexto`

---

## 🔗 Recursos

**Encontrar modelos**
- [Hugging Face Hub](https://huggingface.co/models) · [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) · [LM Arena](https://lmarena.ai)

**Ejecutar**
- [Ollama](https://ollama.com) · [LM Studio](https://lmstudio.ai) · [llama.cpp](https://github.com/ggml-org/llama.cpp) · [vLLM](https://github.com/vllm-project/vllm) · [Google Colab](https://colab.research.google.com)

**Visualizar**
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) · [Tiktokenizer](https://tiktokenizer.vercel.app) · [Embedding Projector](https://projector.tensorflow.org/)

**Aprender**
- [Hugging Face LLM Course](https://huggingface.co/learn/llm-course) · [Attention Is All You Need](https://arxiv.org/abs/1706.03762) · [3Blue1Brown — ¿Qué es un GPT?](https://www.youtube.com/watch?v=wjZofJX0v4M)

---

## 📧 Contacto

**Andrés Giovanny Rubiano Muñoz**
Maestría en Inteligencia Artificial · Universidad de La Salle
arubiano67@unisalle.edu.co

---

## 📄 Derechos Reservados

© 2026 Andrés Giovanny Rubiano Muñoz (Andy Rubiano). Todos los derechos reservados.

Este material académico y su contenido —diseño, código, textos y metodologías— son propiedad intelectual conjunta de:

- **Andrés Giovanny Rubiano Muñoz** (Andy Rubiano) — Autor
- **Universidad de La Salle** — Institución académica

El uso, reproducción o distribución requiere autorización previa escrita de los titulares de derechos.

---

<div align="center">
  Universidad de La Salle | Bogotá D. C., Colombia
</div>
