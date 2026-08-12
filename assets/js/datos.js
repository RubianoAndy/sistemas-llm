/* ============================================================
   datos.js — Todo el contenido editable de la infografía.
   Si quieres cambiar textos, modelos, casos o enlaces: es aquí.
   ============================================================ */

/* ---------- Iconos SVG (trazo, 24x24) ---------- */
const ICONOS = {
  cerebro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 3A2.5 2.5 0 0 0 7 5.5a2.5 2.5 0 0 0-1.5 4.5A2.5 2.5 0 0 0 5 14a2.5 2.5 0 0 0 2 4 2.5 2.5 0 0 0 5 .5V4.5A1.5 1.5 0 0 0 10.5 3z"/><path d="M14.5 3A2.5 2.5 0 0 1 17 5.5a2.5 2.5 0 0 1 1.5 4.5A2.5 2.5 0 0 1 19 14a2.5 2.5 0 0 1-2 4 2.5 2.5 0 0 1-5 .5"/></svg>',
  atencion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="12" cy="4" r="1.6"/><path d="M7 6.6 17 11.4M7 17.4 17 12.6M12 5.6v12.4"/></svg>',
  cortar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
  vector: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="19" r="2"/><circle cx="19" cy="5" r="2"/><path d="M6.4 17.6 17.6 6.4"/><circle cx="18" cy="17" r="2"/><circle cx="7" cy="7" r="2"/></svg>',
  libro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="16" rx="2"/><polyline points="7 9.5 10 12 7 14.5"/><line x1="12.5" y1="15" x2="17" y2="15"/></svg>',
  ajustes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><circle cx="9" cy="6" r="2.2"/><line x1="4" y1="12" x2="20" y2="12"/><circle cx="16" cy="12" r="2.2"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="11" cy="18" r="2.2"/></svg>',
  lupa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><line x1="15.5" y1="15.5" x2="21" y2="21"/></svg>',
  chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M9 1.8v1.7M15 1.8v1.7M9 20.5v1.7M15 20.5v1.7M1.8 9h1.7M1.8 15h1.7M20.5 9h1.7M20.5 15h1.7"/></svg>',
  imagen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m4 17 4.5-4.5 3.5 3.5 3-3L20 17"/></svg>',
  balanza: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7 2 14a3 3 0 0 0 6 0z"/><path d="m19 7 3 7a3 3 0 0 1-6 0z"/><path d="M8 21h8"/></svg>',
  rayo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 4 14 11 14 10 22 20 10 13 10 13 2"/></svg>',
  correo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="3"/><circle cx="8.5" cy="14" r="1.4"/><circle cx="15.5" cy="14" r="1.4"/><path d="M12 8V4"/><circle cx="12" cy="3" r="1.2"/></svg>',
  reporte: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>',
  datos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="8" ry="3.2"/><path d="M4 5.5v13c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-13"/><path d="M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2"/></svg>',
  candado: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10.5" width="16" height="11" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0"/></svg>',
  descarga: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><polyline points="7.5 10.5 12 15 16.5 10.5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
  radar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg>',
  capas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2.5 22 8 12 13.5 2 8 12 2.5"/><polyline points="2 13 12 18.5 22 13"/><polyline points="2 17.5 12 23 22 17.5"/></svg>',
  enlace: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
  alerta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  ok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="8 12.5 11 15.5 16 9.5"/></svg>',
  equis: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
  flecha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  cerrar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3.5 20 12 6 20.5 6 3.5"/></svg>',
  reiniciar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 4 3 10 9 10"/><path d="M3.5 14a9 9 0 1 0 2.2-9.3L3 7"/></svg>',
  pregunta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.2 9.2a2.9 2.9 0 0 1 5.6 1c0 1.9-2.8 2.4-2.8 4"/><line x1="12" y1="17.5" x2="12.01" y2="17.5"/></svg>'
};

/* ---------- 1. Conceptos básicos de los LLM ---------- */
const CONCEPTOS = [
  {
    id: 'que-es',
    icono: 'cerebro',
    titulo: 'Qué es un LLM',
    resumen: 'Modelo de lenguaje de gran escala entrenado para predecir el siguiente token de una secuencia de texto.',
    detalle: 'Un Large Language Model es una red neuronal con miles de millones de parámetros entrenada sobre corpus masivos de texto. Su único objetivo de entrenamiento es sorprendentemente simple: dada una secuencia, predecir qué viene después. De esa tarea emergen capacidades no programadas explícitamente —resumir, traducir, clasificar, razonar paso a paso— porque resolverlas bien ayuda a predecir mejor.',
    ejemplo: 'Objetivo de entrenamiento:\n  P(siguiente | "La subestación reportó una") = ?\n\n  falla ......... <b>0.41</b>\n  sobrecarga .... <b>0.22</b>\n  lectura ....... <b>0.14</b>\n  ...\n\nNada más. Todo lo demás emerge de escalar esa tarea.'
  },
  {
    id: 'redes',
    icono: 'capas',
    titulo: 'Redes neuronales profundas',
    resumen: 'Capas apiladas de neuronas artificiales que transforman el texto en representaciones cada vez más abstractas.',
    detalle: 'La profundidad es lo que permite la abstracción: las capas iniciales capturan morfología y sintaxis, las intermedias relaciones entre entidades y las finales intención y semántica del discurso. Cada capa aplica una transformación lineal seguida de una no linealidad, y los parámetros se ajustan por descenso del gradiente sobre el error de predicción.',
    ejemplo: 'Un modelo tipo Llama de 8B:\n\n  32 capas (bloques transformer)\n  4 096 dimensiones de estado oculto\n  32 cabezas de atención\n  ------------------------------------\n  ≈ <b>8 000 000 000</b> de parámetros ajustables'
  },
  {
    id: 'transformers',
    icono: 'atencion',
    titulo: 'Transformers y atención',
    resumen: 'La arquitectura que hizo posibles los LLM: cada token mira a todos los demás y decide a cuáles prestar atención.',
    detalle: 'Antes de 2017 el texto se procesaba de forma secuencial (RNN, LSTM), lo que impedía paralelizar y diluía las dependencias largas. La autoatención resuelve ambos problemas: calcula, para cada par de tokens, cuánto debe influir uno en la representación del otro, y lo hace para toda la secuencia a la vez.',
    ejemplo: 'Atención = softmax( Q·Kᵀ / √d ) · V\n\n  Q (query) ..... qué estoy buscando\n  K (key) ....... qué ofrezco a los demás\n  V (value) ..... qué información aporto\n\nEn "el transformador de la subestación falló",\n<b>"falló"</b> presta la mayor atención a <b>"transformador"</b>.'
  },
  {
    id: 'tokens',
    icono: 'cortar',
    titulo: 'Tokens y vocabulario',
    resumen: 'El modelo no ve palabras ni letras: ve identificadores de subpalabras de un vocabulario fijo.',
    detalle: 'Algoritmos como BPE o SentencePiece construyen un vocabulario de decenas de miles de fragmentos frecuentes. Las palabras comunes ocupan un token, las raras se descomponen en varios. Esto permite representar cualquier texto —incluidos errores de digitación y tecnicismos— sin quedarse nunca sin vocabulario, y explica por qué el español consume más tokens que el inglés en la mayoría de modelos.',
    ejemplo: '"subestación"  →  ["sub", "##esta", "##ción"]   3 tokens\n"energía"      →  ["energía"]                     1 token\n\nRegla práctica en español:\n  1 token ≈ <b>3 a 4 caracteres</b>\n  100 palabras ≈ <b>130 a 160 tokens</b>'
  },
  {
    id: 'embeddings',
    icono: 'vector',
    titulo: 'Embeddings',
    resumen: 'Cada token se convierte en un vector numérico; la cercanía entre vectores codifica la cercanía de significado.',
    detalle: 'El embedding es la puerta de entrada al modelo: convierte identificadores discretos en vectores continuos que la red puede operar. En el espacio resultante, la distancia tiene sentido semántico y las direcciones capturan relaciones. Los LLM añaden además embeddings contextuales: la misma palabra recibe vectores distintos según la frase en la que aparece.',
    ejemplo: 'similitud("apagón", "corte")      ≈ <b>0.81</b>\nsimilitud("apagón", "facturación") ≈ <b>0.12</b>\n\nvec("rey") − vec("hombre") + vec("mujer") ≈ vec(<b>"reina"</b>)\n\nEl mismo mecanismo sostiene la búsqueda semántica y el RAG.'
  },
  {
    id: 'entrenamiento',
    icono: 'libro',
    titulo: 'Entrenamiento masivo',
    resumen: 'Billones de tokens, miles de GPU y semanas de cómputo para el pre-entrenamiento de un modelo base.',
    detalle: 'El pre-entrenamiento es autosupervisado: no requiere etiquetas humanas, solo texto. El costo es el cuello de botella —energía, hardware y datos limpios— y por eso pocos actores entrenan modelos base desde cero. Las leyes de escalado relacionan parámetros, datos y cómputo, e indican que la mayoría de modelos previos estaban subentrenados en datos.',
    ejemplo: 'Escala típica de un modelo abierto reciente:\n\n  Datos ......... 15 000 000 000 000 de tokens\n  Hardware ...... miles de GPU durante semanas\n  Costo ......... millones de dólares\n\nPor eso la comunidad <b>reutiliza pesos abiertos</b> en lugar\nde entrenar desde cero.'
  },
  {
    id: 'generacion',
    icono: 'terminal',
    titulo: 'Generación autorregresiva',
    resumen: 'El texto se produce token a token: cada uno se muestrea de una distribución y se reinyecta como entrada.',
    detalle: 'La salida del modelo no es una frase sino una distribución de probabilidad sobre todo el vocabulario. La estrategia de muestreo decide qué se escribe: la temperatura aplana o agudiza esa distribución, top-k limita a los k candidatos más probables y top-p (nucleus) al conjunto mínimo que acumula una probabilidad p. Temperatura baja produce texto conservador y repetitivo; alta, creativo e inestable.',
    ejemplo: 'p_i = exp(logit_i / T) / Σ exp(logit_j / T)\n\n  T = 0.2  →  siempre el candidato más probable  (determinista)\n  T = 0.7  →  equilibrio habitual en producción\n  T = 1.5  →  creativo, con riesgo de incoherencia\n\nPruébalo en el laboratorio, etapa <b>4 · Generación</b>.'
  },
  {
    id: 'finetuning',
    icono: 'ajustes',
    titulo: 'Pre-entrenamiento y fine-tuning',
    resumen: 'Un modelo base aprende lenguaje; el ajuste fino lo especializa en una tarea, un dominio o un estilo de respuesta.',
    detalle: 'Sobre el modelo base se aplican dos ajustes sucesivos: instrucción supervisada (SFT), para que siga órdenes en lugar de continuar texto, y alineación con preferencias humanas (RLHF o DPO), para que responda de forma útil y segura. Técnicas de ajuste eficiente como LoRA o QLoRA entrenan solo unos pocos millones de parámetros adicionales, lo que pone la especialización al alcance de una sola GPU.',
    ejemplo: 'Base        →  continúa texto\nSFT         →  sigue instrucciones\nDPO / RLHF  →  responde de forma útil y segura\nLoRA        →  se especializa en tu dominio\n\nLoRA sobre un modelo de 7B:\n  parámetros entrenados ≈ <b>0.1 % a 1 %</b> del total'
  },
  {
    id: 'prompt',
    icono: 'pregunta',
    titulo: 'Prompt engineering',
    resumen: 'Diseñar la entrada para condicionar la salida: rol, contexto, ejemplos, formato y restricciones explícitas.',
    detalle: 'El prompt es el programa: sin tocar los pesos, cambia radicalmente el comportamiento del modelo. Las técnicas base son zero-shot (solo la instrucción), few-shot (con ejemplos resueltos) y cadena de pensamiento (pedir el razonamiento paso a paso antes de la respuesta). Un buen prompt define rol, tarea, contexto, formato de salida y qué hacer cuando falta información.',
    ejemplo: 'Prompt pobre:\n  "clasifica este correo"\n\nPrompt diseñado:\n  <b>Rol:</b> analista de servicio al cliente del sector eléctrico\n  <b>Tarea:</b> clasificar la urgencia en Alta, Media o Baja\n  <b>Criterios:</b> Alta = riesgo para personas o suministro\n  <b>Formato:</b> JSON {nivel, confianza, motivo}\n  <b>Si falta información:</b> responde nivel = "indeterminado"'
  },
  {
    id: 'contexto',
    icono: 'lupa',
    titulo: 'Ventana de contexto y RAG',
    resumen: 'El modelo solo ve lo que cabe en su ventana; el RAG le inyecta los documentos relevantes en el momento de responder.',
    detalle: 'La ventana de contexto es el límite de tokens que el modelo procesa de una vez (prompt más respuesta). Como los pesos congelan el conocimiento en la fecha de corte del entrenamiento, la Recuperación Aumentada por Generación busca fragmentos pertinentes en una base propia y los agrega al prompt. Así la respuesta queda anclada a fuentes verificables, se reduce la alucinación y se puede citar el origen.',
    ejemplo: 'Pregunta → búsqueda semántica → k fragmentos → prompt → respuesta\n\nSin RAG: el modelo responde de memoria (puede inventar).\nCon RAG: el modelo responde <b>citando el documento recuperado</b>.\n\nVe el mecanismo completo en la sección <b>05 · Asistente</b>.'
  },
  {
    id: 'tamano',
    icono: 'chip',
    titulo: 'Tamaño, cuantización y coste',
    resumen: 'Más parámetros suelen dar más capacidad, pero también más memoria, más latencia y más consumo energético.',
    detalle: 'El tamaño se mide en parámetros (B = miles de millones). En precisión de 16 bits cada parámetro ocupa 2 bytes, de modo que un modelo de 7B necesita unos 14 GB de VRAM. La cuantización reduce la precisión de los pesos a 8, 5 o 4 bits, con lo que un 7B corre en 4 o 5 GB y cabe en un portátil, a cambio de una pérdida de calidad pequeña. Los modelos de mezcla de expertos (MoE) activan solo una fracción de sus parámetros por token.',
    ejemplo: 'Memoria aproximada de un modelo de 7B:\n\n  FP16  (16 bits) .....  <b>14 GB</b>   servidor con GPU dedicada\n  Q8    ( 8 bits) .....   <b>7 GB</b>   GPU de gama media\n  Q4_K_M( 4 bits) .....  <b>4.5 GB</b>  portátil o equipo de escritorio\n\nRegla: GB ≈ parámetros (B) × bits / 8'
  },
  {
    id: 'multimodal',
    icono: 'imagen',
    titulo: 'Multimodalidad',
    resumen: 'Modelos que procesan texto junto con imágenes, audio o video dentro del mismo espacio de representación.',
    detalle: 'Un codificador de imagen o audio proyecta la entrada al mismo espacio vectorial de los tokens de texto, y el transformer opera sobre la secuencia mezclada. Esto habilita casos que el texto solo no cubre: leer un diagrama unifilar, interpretar la fotografía de un medidor, transcribir y resumir una llamada de la línea de atención o describir el daño visible en un poste.',
    ejemplo: 'Entrada:  [imagen del medidor] + "¿qué lectura registra?"\nSalida:   "El medidor marca 04821 kWh; el sello de\n           seguridad aparece roto en la esquina inferior."\n\nModelos abiertos con visión: <b>Gemma 3</b>, <b>Qwen2.5-VL</b>,\n<b>Llama 3.2 Vision</b>, <b>Pixtral</b>.'
  },
  {
    id: 'etica',
    icono: 'balanza',
    titulo: 'Sesgos, ética y privacidad',
    resumen: 'El modelo hereda los sesgos de sus datos, puede alucinar con total seguridad y no debe ver datos sensibles sin control.',
    detalle: 'Tres riesgos concretos y su mitigación. Sesgo: los datos de entrenamiento reflejan desigualdades del mundo, así que hay que auditar la salida por grupos. Alucinación: el modelo optimiza plausibilidad, no verdad, por lo que toda afirmación crítica debe anclarse a una fuente. Privacidad: enviar correos de clientes a una API externa puede violar la protección de datos, y ese es uno de los argumentos más fuertes a favor de los modelos abiertos ejecutados en infraestructura propia.',
    ejemplo: 'Riesgo         Mitigación práctica\n----------------------------------------------------------\nSesgo          auditoría por grupos + datos balanceados\nAlucinación    RAG con citas + verificación humana\nPrivacidad     <b>modelo abierto en infraestructura propia</b>\nTrazabilidad   registro de prompts, versiones y respuestas\nConsumo        modelo del menor tamaño que resuelva la tarea'
  }
];

/* ---------- 2. Modelos de código abierto ---------- */
const MODELOS = [
  {
    nombre: 'Llama 3.1 / 3.3',
    sigla: 'La',
    org: 'Meta',
    color: '#013f78',
    params: '8B · 70B · 405B',
    contexto: '128K tokens',
    licencia: 'Llama Community License',
    permisiva: false,
    descripcion: 'La familia que popularizó los pesos abiertos. Modelos generalistas multilingües con un ecosistema enorme de ajustes finos, cuantizaciones y herramientas de la comunidad. La versión 4 introdujo variantes de mezcla de expertos.',
    tags: ['generalista', 'edge'],
    usos: ['Asistentes', 'Fine-tuning', 'Uso general', 'Multilingüe'],
    url: 'https://huggingface.co/meta-llama'
  },
  {
    nombre: 'Mistral / Mixtral',
    sigla: 'Mi',
    org: 'Mistral AI',
    color: '#c2352b',
    params: '7B · 8x7B (MoE) · 24B',
    contexto: '32K a 128K tokens',
    licencia: 'Apache 2.0',
    permisiva: true,
    descripcion: 'Referencia de eficiencia: mucha calidad por parámetro. Mixtral introdujo la mezcla de expertos abierta, que activa solo una parte de la red por token, y Mistral Small ofrece licencia plenamente permisiva para uso comercial.',
    tags: ['generalista', 'edge', 'permisiva'],
    usos: ['Producción', 'MoE', 'Uso comercial', 'Baja latencia'],
    url: 'https://huggingface.co/mistralai'
  },
  {
    nombre: 'Qwen 2.5 / Qwen3',
    sigla: 'Qw',
    org: 'Alibaba Cloud',
    color: '#7a3fb8',
    params: '0.5B a 72B · MoE',
    contexto: '128K tokens',
    licencia: 'Apache 2.0 (la mayoría)',
    permisiva: true,
    descripcion: 'Familia muy amplia, desde modelos de bolsillo hasta MoE grandes, con variantes especializadas en código, matemáticas y visión. Buen desempeño multilingüe y modos de razonamiento explícito en la generación 3.',
    tags: ['generalista', 'razonamiento', 'multimodal', 'edge', 'permisiva'],
    usos: ['Código', 'Razonamiento', 'Visión', 'Multilingüe'],
    url: 'https://huggingface.co/Qwen'
  },
  {
    nombre: 'DeepSeek-V3 / R1',
    sigla: 'DS',
    org: 'DeepSeek',
    color: '#0a5da8',
    params: '671B MoE (≈37B activos)',
    contexto: '128K tokens',
    licencia: 'MIT (pesos)',
    permisiva: true,
    descripcion: 'Demostró que el razonamiento paso a paso se puede entrenar con aprendizaje por refuerzo y publicarse con pesos abiertos. Sus destilados sobre Qwen y Llama llevan buena parte de esa capacidad a tamaños de 7B a 32B.',
    tags: ['razonamiento', 'permisiva'],
    usos: ['Razonamiento', 'Matemáticas', 'Código', 'Destilación'],
    url: 'https://huggingface.co/deepseek-ai'
  },
  {
    nombre: 'Gemma 2 / 3',
    sigla: 'Gm',
    org: 'Google DeepMind',
    color: '#1e7a56',
    params: '1B · 4B · 12B · 27B',
    contexto: '8K a 128K tokens',
    licencia: 'Gemma Terms of Use',
    permisiva: false,
    descripcion: 'Modelos ligeros derivados de la investigación de Gemini, pensados para correr en una sola GPU o incluso en el equipo del usuario. La tercera generación incorpora entrada de imagen y contexto largo.',
    tags: ['edge', 'multimodal'],
    usos: ['Dispositivo local', 'Visión', 'Prototipos', 'Bajo costo'],
    url: 'https://huggingface.co/google'
  },
  {
    nombre: 'Phi-4',
    sigla: 'Ph',
    org: 'Microsoft Research',
    color: '#005a9e',
    params: '3.8B · 14B',
    contexto: '16K tokens',
    licencia: 'MIT',
    permisiva: true,
    descripcion: 'Modelo pequeño entrenado con datos sintéticos cuidadosamente curados. Su tesis es que la calidad de los datos vale más que el tamaño: compite con modelos varias veces mayores en razonamiento y matemáticas.',
    tags: ['edge', 'razonamiento', 'permisiva'],
    usos: ['SLM', 'Edge', 'Razonamiento', 'Uso comercial'],
    url: 'https://huggingface.co/microsoft'
  },
  {
    nombre: 'Falcon 3',
    sigla: 'Fa',
    org: 'TII (Abu Dabi)',
    color: '#7a5c00',
    params: '1B · 3B · 7B · 10B',
    contexto: '32K tokens',
    licencia: 'TII Falcon License',
    permisiva: false,
    descripcion: 'Familia orientada a eficiencia y despliegue en infraestructura propia, con variantes híbridas que combinan atención y modelos de espacio de estados para reducir el costo del contexto largo.',
    tags: ['edge', 'generalista'],
    usos: ['On-premise', 'Contexto largo', 'Eficiencia'],
    url: 'https://huggingface.co/tiiuae'
  },
  {
    nombre: 'OLMo 2',
    sigla: 'Ol',
    org: 'Allen Institute for AI',
    color: '#b8451f',
    params: '7B · 13B · 32B',
    contexto: '4K a 32K tokens',
    licencia: 'Apache 2.0',
    permisiva: true,
    descripcion: 'Abierto de verdad: además de los pesos publica los datos de entrenamiento, el código, los puntos de control intermedios y los registros. Es la referencia para investigación reproducible y auditoría de sesgos.',
    tags: ['abierto-total', 'permisiva', 'generalista'],
    usos: ['Investigación', 'Reproducibilidad', 'Auditoría', 'Docencia'],
    url: 'https://huggingface.co/allenai'
  },
  {
    nombre: 'Salamandra (ALIA)',
    sigla: 'Sa',
    org: 'Barcelona Supercomputing Center',
    color: '#c78100',
    params: '2B · 7B · 40B',
    contexto: '8K tokens',
    licencia: 'Apache 2.0',
    permisiva: true,
    descripcion: 'Modelo entrenado desde cero con foco en español y lenguas cooficiales de España, dentro de una iniciativa pública de soberanía tecnológica. Alternativa relevante cuando el caso de uso exige datos y gobernanza en español.',
    tags: ['espanol', 'abierto-total', 'permisiva'],
    usos: ['Español', 'Sector público', 'Soberanía de datos'],
    url: 'https://huggingface.co/BSC-LT'
  },
  {
    nombre: 'BLOOM',
    sigla: 'Bl',
    org: 'BigScience',
    color: '#8a1f5e',
    params: '176B',
    contexto: '2K tokens',
    licencia: 'RAIL (uso responsable)',
    permisiva: false,
    descripcion: 'Hito histórico: el primer modelo de gran escala entrenado de forma abierta y colaborativa por más de mil investigadores, con 46 idiomas y 13 lenguajes de programación. Hoy es más referencia académica que opción de producción.',
    tags: ['espanol', 'generalista'],
    usos: ['Investigación', 'Multilingüe', 'Referencia histórica'],
    url: 'https://huggingface.co/bigscience/bloom'
  }
];

const FILTROS_MODELOS = [
  { id: 'todos', etiqueta: 'Todos' },
  { id: 'generalista', etiqueta: 'Generalistas' },
  { id: 'razonamiento', etiqueta: 'Razonamiento' },
  { id: 'edge', etiqueta: 'Ligeros / locales' },
  { id: 'multimodal', etiqueta: 'Multimodales' },
  { id: 'espanol', etiqueta: 'Español' },
  { id: 'permisiva', etiqueta: 'Licencia permisiva' },
  { id: 'abierto-total', etiqueta: 'Datos abiertos' }
];

/* ---------- 3. Ecosistema para ejecutar modelos abiertos ---------- */
const HERRAMIENTAS = [
  { nombre: 'Ollama', descripcion: 'Descarga y ejecuta modelos con un solo comando; expone una API local compatible.', comando: 'ollama run llama3.1', url: 'https://ollama.com', icono: 'terminal' },
  { nombre: 'llama.cpp', descripcion: 'Motor en C/C++ que corre modelos cuantizados en CPU o GPU modestas, incluso sin tarjeta dedicada.', comando: 'formato GGUF · Q4_K_M', url: 'https://github.com/ggml-org/llama.cpp', icono: 'chip' },
  { nombre: 'LM Studio', descripcion: 'Aplicación de escritorio para probar modelos abiertos con interfaz gráfica, sin escribir código.', comando: 'interfaz gráfica', url: 'https://lmstudio.ai', icono: 'imagen' },
  { nombre: 'vLLM', descripcion: 'Servidor de inferencia de alto rendimiento para producción, con procesamiento por lotes continuo.', comando: 'vllm serve <modelo>', url: 'https://github.com/vllm-project/vllm', icono: 'rayo' },
  { nombre: 'Transformers', descripcion: 'La librería de referencia de Hugging Face para cargar, ajustar y evaluar modelos abiertos en Python.', comando: 'pip install transformers', url: 'https://huggingface.co/docs/transformers', icono: 'libro' },
  { nombre: 'LangChain / LlamaIndex', descripcion: 'Orquestación de RAG y agentes: fragmentación, índices vectoriales, herramientas y memoria.', comando: 'pip install langchain', url: 'https://python.langchain.com', icono: 'capas' }
];

/* ---------- 4. Aplicaciones prácticas en el sector energético ---------- */
const CASOS = [
  {
    id: 'correos',
    icono: 'correo',
    tab: 'Atención de PQR',
    titulo: 'Clasificación y respuesta asistida de PQR y correos',
    intro: 'Las comercializadoras reciben miles de peticiones, quejas y reclamos en texto libre. Un LLM <strong>clasifica la urgencia, extrae los datos clave y redacta un borrador de respuesta</strong>, de modo que los casos críticos —cortes, riesgo eléctrico— se enrutan primero y el agente humano solo valida y envía.',
    refs: '[2], [9]',
    beneficios: ['Menor tiempo de primera respuesta', 'Trazabilidad de la decisión', 'El agente valida, no redacta'],
    pasos: [
      { t: 'Ingesta y normalización', d: 'El correo se limpia de firmas, cadenas de respuesta y adjuntos irrelevantes, y se recorta a lo que cabe en la ventana de contexto.' },
      { t: 'Clasificación con instrucciones', d: 'Un prompt con rol, criterios y ejemplos resueltos pide el nivel de urgencia en formato JSON, lo que hace la salida verificable por software.' },
      { t: 'Extracción de datos clave', d: 'El mismo modelo devuelve cuenta, dirección, tipo de servicio afectado y equipo mencionado, sustituyendo reglas frágiles de expresiones regulares.' },
      { t: 'Enrutamiento automático', d: 'Los casos de urgencia alta se envían a la cuadrilla de emergencia; el resto entra a la cola ordinaria con su prioridad calculada.' },
      { t: 'Borrador de respuesta', d: 'Con las plantillas y la normativa recuperadas por RAG, el modelo redacta una respuesta citando los plazos aplicables al tipo de trámite.' },
      { t: 'Validación y aprendizaje', d: 'El agente aprueba o corrige; las correcciones se acumulan como conjunto de evaluación y alimentan el siguiente ajuste fino del modelo.' }
    ]
  },
  {
    id: 'mantenimiento',
    icono: 'reporte',
    tab: 'Copiloto de mantenimiento',
    titulo: 'Copiloto documental para operación y mantenimiento',
    intro: 'Manuales de equipos, procedimientos, bitácoras y normas suman decenas de miles de páginas. Con RAG sobre esa base, el técnico <strong>pregunta en lenguaje natural desde el terreno y recibe la respuesta con la cita del documento</strong>, en lugar de buscar en carpetas compartidas.',
    refs: '[5], [10]',
    beneficios: ['Conocimiento accesible en campo', 'Respuestas con fuente citada', 'Menos dependencia del experto'],
    pasos: [
      { t: 'Fragmentación del corpus', d: 'Los documentos se dividen en fragmentos con solapamiento, conservando título, versión y sección como metadatos de trazabilidad.' },
      { t: 'Indexación vectorial', d: 'Cada fragmento se convierte en embedding con un modelo abierto y se almacena en una base vectorial junto con su texto original.' },
      { t: 'Recuperación híbrida', d: 'La consulta del técnico se busca por similitud semántica y por palabra clave, combinando ambos rankings para no perder códigos ni referencias exactas.' },
      { t: 'Generación anclada', d: 'El prompt entrega solo los fragmentos recuperados y exige responder únicamente con ellos, declarando el vacío cuando la información no está.' },
      { t: 'Citación verificable', d: 'Cada afirmación de la respuesta enlaza al fragmento y a la página de origen, de modo que el técnico puede auditarla en segundos.' },
      { t: 'Registro y mejora', d: 'Las preguntas sin respuesta señalan los vacíos documentales reales y priorizan qué procedimiento hace falta escribir o actualizar.' }
    ]
  },
  {
    id: 'regulatorio',
    icono: 'balanza',
    tab: 'Análisis regulatorio',
    titulo: 'Vigilancia regulatoria y generación de informes',
    intro: 'El marco normativo del sector cambia de forma continua. Un LLM <strong>resume las resoluciones publicadas, detecta qué procesos internos se ven afectados y redacta el borrador del informe de impacto</strong>, dejando al equipo jurídico la verificación y la decisión.',
    refs: '[3], [11]',
    beneficios: ['Vigilancia continua sin lectura manual', 'Impacto identificado por proceso', 'Borradores en minutos'],
    pasos: [
      { t: 'Monitoreo de fuentes', d: 'Se recolectan de forma programada las publicaciones del regulador y del operador del mercado, con su fecha y número de acto.' },
      { t: 'Resumen estructurado', d: 'El modelo produce un resumen con campos fijos: alcance, entrada en vigor, obligaciones nuevas y artículos derogados.' },
      { t: 'Comparación de versiones', d: 'Se contrastan el texto anterior y el vigente para aislar exactamente qué cambió, evitando releer la norma completa.' },
      { t: 'Mapeo de impacto', d: 'Las obligaciones se cruzan con el inventario de procesos internos para señalar cuáles deben actualizarse y quién es responsable.' },
      { t: 'Redacción del informe', d: 'Con esos insumos se genera el borrador del informe de impacto en el formato institucional, con citas a los artículos correspondientes.' },
      { t: 'Revisión humana obligatoria', d: 'Ninguna interpretación normativa se publica sin validación jurídica: el modelo acelera la lectura, no asume la responsabilidad.' }
    ]
  },
  {
    id: 'analitica',
    icono: 'datos',
    tab: 'Analítica conversacional',
    titulo: 'Consulta de datos operativos en lenguaje natural',
    intro: 'Los indicadores de consumo, pérdidas y calidad del servicio viven en bases de datos que solo el equipo técnico consulta. Un LLM <strong>traduce la pregunta del negocio a SQL, la ejecuta contra un esquema autorizado y explica el resultado</strong> con su gráfica.',
    refs: '[6], [12]',
    beneficios: ['Datos al alcance del área de negocio', 'Consulta SQL siempre visible', 'Permisos de solo lectura'],
    pasos: [
      { t: 'Descripción del esquema', d: 'Se entrega al modelo el diccionario de tablas, columnas y relaciones autorizadas, no la base completa, para acotar lo que puede consultar.' },
      { t: 'Traducción a SQL', d: 'La pregunta en español se convierte en una consulta parametrizada; el modelo devuelve además el supuesto que aplicó al interpretarla.' },
      { t: 'Validación de la consulta', d: 'Un verificador rechaza operaciones de escritura, limita el rango de fechas y estima el costo antes de ejecutar nada.' },
      { t: 'Ejecución controlada', d: 'La consulta corre con un usuario de solo lectura sobre la réplica analítica, nunca sobre la base transaccional en producción.' },
      { t: 'Explicación del resultado', d: 'El modelo redacta la lectura del resultado —tendencia, valores atípicos, comparación con el periodo anterior— y propone la gráfica adecuada.' },
      { t: 'SQL siempre a la vista', d: 'La consulta generada se muestra junto a la respuesta para que el analista pueda auditarla, corregirla o guardarla como reporte.' }
    ]
  }
];

/* ---------- 5. Base documental del asistente RAG ----------
   Fragmentos ilustrativos redactados para la demostración.
   No son normativa oficial: sirven para mostrar el mecanismo. */
const DOCUMENTOS = [
  {
    id: 'D1',
    titulo: 'Protocolo de atención de riesgo eléctrico en vía pública',
    fuente: 'Manual de operación de emergencias · v4.2',
    texto: 'Ante la presencia de un cable de media tensión caído sobre la vía pública, el operador debe declarar emergencia de nivel uno y despachar la cuadrilla más cercana en un plazo máximo de treinta minutos. Está prohibido acercarse a menos de diez metros del conductor caído. El centro de control debe abrir el circuito afectado antes de autorizar la intervención en sitio y confirmar la ausencia de tensión con equipo certificado.'
  },
  {
    id: 'D2',
    titulo: 'Reconexión del servicio tras el pago de la deuda',
    fuente: 'Procedimiento comercial · PC-018',
    texto: 'Una vez el usuario acredita el pago total de la obligación pendiente, la reconexión del servicio debe ejecutarse dentro de las veinticuatro horas siguientes en zona urbana y de cuarenta y ocho horas en zona rural. El cobro por reconexión solo procede cuando la suspensión fue imputable al usuario y debe estar aprobado en el pliego tarifario vigente.'
  },
  {
    id: 'D3',
    titulo: 'Mantenimiento preventivo de transformadores de distribución',
    fuente: 'Plan de mantenimiento de activos · PM-07',
    texto: 'Los transformadores de distribución se inspeccionan visualmente cada seis meses y reciben mantenimiento preventivo completo cada veinticuatro meses. La rutina incluye análisis fisicoquímico del aceite dieléctrico, medición de la resistencia de aislamiento, revisión de conexiones y verificación del sistema de puesta a tierra. Un contenido de humedad en el aceite superior a treinta partes por millón obliga a programar el tratamiento del fluido.'
  },
  {
    id: 'D4',
    titulo: 'Indicadores de calidad del servicio SAIDI y SAIFI',
    fuente: 'Guía de indicadores regulatorios · GI-03',
    texto: 'El SAIDI mide la duración promedio de las interrupciones que percibe un usuario en un periodo, expresada en horas por usuario. El SAIFI mide la frecuencia promedio de esas interrupciones, expresada en número de eventos por usuario. Ambos indicadores se calculan por grupo de calidad y se reportan de forma trimestral al regulador; su incumplimiento genera compensaciones automáticas en la factura del usuario afectado.'
  },
  {
    id: 'D5',
    titulo: 'Requisitos para autogeneración solar en pequeña escala',
    fuente: 'Guía de conexión de autogeneradores · GC-11',
    texto: 'La conexión de un sistema solar fotovoltaico de pequeña escala requiere presentar el diseño eléctrico firmado por un ingeniero con matrícula vigente, el certificado de conformidad del inversor, el certificado de plena competencia de la instalación y la solicitud de disponibilidad ante el operador de red. Para autogeneradores de menos de cien kilovatios el trámite es simplificado y el operador dispone de quince días hábiles para responder.'
  },
  {
    id: 'D6',
    titulo: 'Sustitución de medidores por falla o inconsistencia de lectura',
    fuente: 'Procedimiento comercial · PC-034',
    texto: 'Cuando el usuario reclama por una lectura inconsistente, se programa la revisión del medidor dentro de los diez días hábiles siguientes a la radicación. Si la prueba de laboratorio confirma un error superior al margen permitido, se sustituye el equipo sin costo para el usuario y se recalcula el consumo de los últimos seis periodos facturados usando el promedio histórico del predio.'
  },
  {
    id: 'D7',
    titulo: 'Distancias mínimas de seguridad en redes de distribución',
    fuente: 'Manual técnico de construcción de redes · MT-02',
    texto: 'Las redes aéreas de media tensión deben conservar una distancia mínima de cinco metros sobre las vías vehiculares y de cuatro metros sobre andenes peatonales. La distancia horizontal a balcones, ventanas y fachadas no puede ser inferior a dos metros con treinta centímetros. Toda poda de arbolado cercano a la red requiere autorización ambiental previa y se ejecuta con la línea desenergizada.'
  },
  {
    id: 'D8',
    titulo: 'Ciberseguridad en redes de tecnología operativa',
    fuente: 'Política de seguridad de la información · PSI-09',
    texto: 'La red de tecnología operativa que controla las subestaciones debe permanecer segmentada de la red corporativa mediante zonas desmilitarizadas y cortafuegos industriales. El acceso remoto exige doble factor de autenticación y queda registrado en su totalidad. Ningún dato de operación en tiempo real puede enviarse a servicios de terceros sin aprobación del comité de seguridad, lo que incluye de forma expresa los servicios de inteligencia artificial en la nube.'
  },
  {
    id: 'D9',
    titulo: 'Atención de reclamos por facturación estimada',
    fuente: 'Procedimiento comercial · PC-022',
    texto: 'La facturación estimada solo procede cuando no fue posible tomar la lectura del medidor por causa ajena al usuario, y no puede aplicarse en más de dos periodos consecutivos. El reclamo por facturación estimada se resuelve en un plazo máximo de quince días hábiles contados desde la radicación, y mientras se decide el usuario solo está obligado a pagar el valor promedio de los últimos seis periodos.'
  },
  {
    id: 'D10',
    titulo: 'Uso responsable de asistentes de inteligencia artificial',
    fuente: 'Lineamiento interno de datos · LI-05',
    texto: 'Los asistentes basados en modelos de lenguaje solo pueden emplearse sobre información clasificada como pública o interna. Está prohibido cargar datos personales de usuarios, credenciales o información de operación en tiempo real en servicios de inteligencia artificial alojados por terceros. Los casos que requieran datos sensibles deben resolverse con modelos de pesos abiertos ejecutados en la infraestructura propia de la empresa, y toda respuesta que sustente una decisión debe conservar la cita de su fuente.'
  }
];

const PREGUNTAS_EJEMPLO = [
  { etiqueta: 'Cable caído', texto: '¿Qué se debe hacer si hay un cable de media tensión caído en la vía?' },
  { etiqueta: 'Reconexión', texto: '¿En cuánto tiempo se reconecta el servicio después de pagar la deuda?' },
  { etiqueta: 'Mantenimiento', texto: '¿Cada cuánto se hace mantenimiento a un transformador de distribución?' },
  { etiqueta: 'Indicadores', texto: '¿Qué mide el SAIDI y cada cuánto se reporta?' },
  { etiqueta: 'Autogeneración solar', texto: '¿Qué requisitos hay para conectar paneles solares?' },
  { etiqueta: 'Uso de IA', texto: '¿Puedo cargar datos personales de usuarios en un asistente de inteligencia artificial?' },
  { etiqueta: 'Sin respuesta en la base', texto: '¿Cuál es la tarifa del estrato tres en Bogotá?', sinRespuesta: true }
];

/* ---------- 6. Autoevaluación ---------- */
const QUIZ = [
  {
    pregunta: 'El objetivo con el que se entrena un modelo de lenguaje base es...',
    opciones: ['Clasificar textos en categorías predefinidas', 'Predecir el siguiente token de una secuencia', 'Memorizar respuestas correctas a preguntas frecuentes'],
    correcta: 1,
    razon: 'Todo el pre-entrenamiento es autosupervisado sobre esa única tarea; las demás capacidades emergen de escalarla.'
  },
  {
    pregunta: '¿Qué aporta el mecanismo de atención frente a una red recurrente?',
    opciones: ['Relaciona todos los tokens entre sí y permite paralelizar', 'Reduce el número de parámetros del modelo', 'Elimina la necesidad de tokenizar el texto'],
    correcta: 0,
    razon: 'La autoatención calcula la relación de cada par de tokens de una sola vez, lo que resuelve las dependencias largas y habilita el entrenamiento paralelo.'
  },
  {
    pregunta: 'Si subes la temperatura al generar texto, la salida se vuelve...',
    opciones: ['Más determinista y repetitiva', 'Más diversa, con mayor riesgo de incoherencia', 'Más corta, porque se agota antes el contexto'],
    correcta: 1,
    razon: 'La temperatura aplana la distribución de probabilidad: más candidatos improbables entran en juego.'
  },
  {
    pregunta: 'La forma más adecuada de que un modelo responda sobre los manuales internos de la empresa es...',
    opciones: ['Reentrenar el modelo base desde cero', 'Escribir un prompt más largo y detallado', 'Recuperar los fragmentos relevantes e inyectarlos en el prompt (RAG)'],
    correcta: 2,
    razon: 'El RAG mantiene el conocimiento fuera de los pesos, actualizable, auditable y con cita a la fuente.'
  },
  {
    pregunta: '¿Qué significa cuantizar un modelo a 4 bits?',
    opciones: ['Reducir la precisión de los pesos para que ocupe menos memoria', 'Recortar el modelo a la cuarta parte de sus capas', 'Limitar la respuesta a cuatro mil tokens'],
    correcta: 0,
    razon: 'Un modelo de 7B pasa de unos 14 GB en FP16 a poco más de 4 GB en Q4, lo que permite ejecutarlo en un equipo personal.'
  },
  {
    pregunta: 'El principal argumento técnico para usar un modelo de pesos abiertos con datos de clientes es...',
    opciones: ['Siempre supera en calidad a los modelos cerrados', 'Puede ejecutarse en infraestructura propia sin enviar los datos a terceros', 'No requiere validación humana de las respuestas'],
    correcta: 1,
    razon: 'La soberanía del dato es la ventaja decisiva; la calidad depende del caso y la validación humana sigue siendo obligatoria.'
  }
];

/* ---------- 7. Enlaces de interés ---------- */
const ENLACES = [
  {
    nombre: 'Hugging Face Hub',
    descripcion: 'El repositorio de referencia de modelos abiertos: pesos, tarjetas de modelo, licencias y conjuntos de datos.',
    url: 'https://huggingface.co/models',
    icono: 'descarga',
    cat: 'modelos'
  },
  {
    nombre: 'Open LLM Leaderboard',
    descripcion: 'Comparativa reproducible de modelos abiertos sobre pruebas estandarizadas de razonamiento y conocimiento.',
    url: 'https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard',
    icono: 'radar',
    cat: 'modelos'
  },
  {
    nombre: 'LM Arena',
    descripcion: 'Comparación a ciegas entre dos modelos con voto humano; la clasificación surge de millones de duelos reales.',
    url: 'https://lmarena.ai',
    icono: 'balanza',
    cat: 'modelos'
  },
  {
    nombre: 'Ollama',
    descripcion: 'Ejecuta modelos abiertos en tu propio equipo con un solo comando y una API local compatible.',
    url: 'https://ollama.com',
    icono: 'terminal',
    cat: 'ejecutar'
  },
  {
    nombre: 'LM Studio',
    descripcion: 'Aplicación de escritorio para descargar, probar y servir modelos abiertos sin escribir una línea de código.',
    url: 'https://lmstudio.ai',
    icono: 'chip',
    cat: 'ejecutar'
  },
  {
    nombre: 'Google Colab',
    descripcion: 'Cuadernos con GPU gratuita para cargar un modelo abierto y probar ajuste fino con LoRA sin instalar nada.',
    url: 'https://colab.research.google.com',
    icono: 'libro',
    cat: 'ejecutar'
  },
  {
    nombre: 'Transformer Explainer',
    descripcion: 'Visualización interactiva de un GPT-2 real: mira cómo fluyen la atención y las probabilidades token a token.',
    url: 'https://poloclub.github.io/transformer-explainer/',
    icono: 'atencion',
    cat: 'visualizar'
  },
  {
    nombre: 'Tiktokenizer',
    descripcion: 'Tokeniza cualquier texto con el vocabulario real de distintos modelos y compara cuántos tokens consume.',
    url: 'https://tiktokenizer.vercel.app',
    icono: 'cortar',
    cat: 'visualizar'
  },
  {
    nombre: 'Embedding Projector',
    descripcion: 'Exploración tridimensional de espacios de embeddings: vecinos semánticos, proyecciones PCA y t-SNE.',
    url: 'https://projector.tensorflow.org/',
    icono: 'vector',
    cat: 'visualizar'
  },
  {
    nombre: 'Hugging Face LLM Course',
    descripcion: 'Curso gratuito y práctico que va del tokenizador al ajuste fino y al despliegue de modelos abiertos.',
    url: 'https://huggingface.co/learn/llm-course',
    icono: 'libro',
    cat: 'aprender'
  },
  {
    nombre: 'Attention Is All You Need',
    descripcion: 'El artículo de 2017 que introdujo la arquitectura transformer, base de todos los LLM actuales.',
    url: 'https://arxiv.org/abs/1706.03762',
    icono: 'reporte',
    cat: 'aprender'
  },
  {
    nombre: '3Blue1Brown — ¿Qué es un GPT?',
    descripcion: 'Explicación visual del funcionamiento interno de un transformer, del embedding a la predicción final.',
    url: 'https://www.youtube.com/watch?v=wjZofJX0v4M',
    icono: 'play',
    cat: 'aprender'
  }
];

const FILTROS_ENLACES = [
  { id: 'todos', etiqueta: 'Todos' },
  { id: 'modelos', etiqueta: 'Encontrar modelos' },
  { id: 'ejecutar', etiqueta: 'Ejecutar' },
  { id: 'visualizar', etiqueta: 'Visualizar' },
  { id: 'aprender', etiqueta: 'Aprender' }
];

/* ---------- 8. Bibliografía (IEEE) ---------- */
const BIBLIOGRAFIA = [
  'A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, L. Kaiser, and I. Polosukhin, "Attention is all you need," in <em>Proc. 31st Int. Conf. Neural Information Processing Systems (NeurIPS)</em>, Long Beach, CA, USA, 2017, pp. 5998–6008.',
  'T. B. Brown <em>et al.</em>, "Language models are few-shot learners," in <em>Proc. 34th Int. Conf. Neural Information Processing Systems (NeurIPS)</em>, 2020, pp. 1877–1901.',
  'H. Touvron <em>et al.</em>, "Llama 2: Open foundation and fine-tuned chat models," <em>arXiv preprint</em> arXiv:2307.09288, 2023.',
  'L. Ouyang <em>et al.</em>, "Training language models to follow instructions with human feedback," in <em>Proc. 36th Int. Conf. Neural Information Processing Systems (NeurIPS)</em>, 2022, pp. 27730–27744.',
  'P. Lewis <em>et al.</em>, "Retrieval-augmented generation for knowledge-intensive NLP tasks," in <em>Proc. 34th Int. Conf. Neural Information Processing Systems (NeurIPS)</em>, 2020, pp. 9459–9474.',
  'J. Wei <em>et al.</em>, "Chain-of-thought prompting elicits reasoning in large language models," in <em>Proc. 36th Int. Conf. Neural Information Processing Systems (NeurIPS)</em>, 2022, pp. 24824–24837.',
  'E. J. Hu <em>et al.</em>, "LoRA: Low-rank adaptation of large language models," in <em>Proc. Int. Conf. Learning Representations (ICLR)</em>, 2022.',
  'W. X. Zhao <em>et al.</em>, "A survey of large language models," <em>arXiv preprint</em> arXiv:2303.18223, 2023.',
  'A. G. Rubiano Muñoz, "Sistema de clasificación automática de correos electrónicos por nivel de urgencia en el sector de la energía usando aprendizaje profundo," Tesis de maestría, Maestría en Inteligencia Artificial, Universidad de La Salle, Bogotá, Colombia, 2026.',
  'R. Jayakody and G. Dias, "Performance of recent large language models for a low-resourced language," in <em>Proc. 2024 Int. Conf. Asian Language Processing (IALP)</em>, Hohhot, China, 2024, pp. 162–167.',
  'Y.-C. Lo, J.-L. Wu, and C. Sung-Ting, "Research article style transfer and summarization using large language model," in <em>Proc. 2024 IEEE Int. Conf. Consumer Electronics (ICCE-Taiwan)</em>, Taichung, Taiwan, 2024, pp. 69–70.',
  'J. J. Norheim and E. Rebentisch, "Structuring natural language requirements with large language models," in <em>Proc. 2024 IEEE 32nd Int. Requirements Engineering Conf. Workshops (REW)</em>, Reykjavik, Iceland, 2024, pp. 68–71.',
  'I. Trummer, "Large language models: Principles and practice," in <em>Proc. 2024 IEEE 40th Int. Conf. Data Engineering (ICDE)</em>, Utrecht, Netherlands, 2024, pp. 5354–5357.',
  'Universidad de La Salle, <em>Guía de contenido — Unidad 1: Fundamentos de los LLM</em>, Sistemas de LLM Avanzados, Maestría en Inteligencia Artificial, Bogotá, Colombia, 2026.'
];

/* ---------- 9. Corpus del laboratorio ----------
   Alimenta los embeddings por co-ocurrencia, el mapa de atención y el
   modelo n-grama de la etapa de generación. Es deliberadamente pequeño
   y del dominio energético: así los resultados son interpretables. */
const CORPUS_LLM = [
  'el transformador de la subestación norte reportó una falla en el devanado primario',
  'el transformador de distribución requiere mantenimiento preventivo cada veinticuatro meses',
  'la subestación norte quedó fuera de servicio por una falla en el interruptor principal',
  'la cuadrilla de mantenimiento atendió la falla del circuito en menos de una hora',
  'la cuadrilla de emergencia fue despachada al sitio del cable caído',
  'el usuario reporta un corte del servicio de energía en el barrio desde la madrugada',
  'el usuario reclama por el cobro de la factura del mes anterior',
  'el corte de energía afectó a miles de usuarios del sector durante seis horas',
  'el operador del centro de control abrió el circuito antes de autorizar la intervención',
  'el centro de control monitorea la carga de las subestaciones en tiempo real',
  'la falla del transformador provocó la interrupción del suministro en el circuito',
  'el mantenimiento preventivo del transformador incluye el análisis del aceite dieléctrico',
  'la medición del consumo del medidor presenta una inconsistencia en la lectura',
  'el medidor será sustituido sin costo cuando la prueba confirme el error de medición',
  'la factura del usuario se recalcula con el promedio del consumo histórico del predio',
  'el reclamo del usuario debe resolverse en un plazo máximo de quince días hábiles',
  'el modelo de lenguaje clasifica el correo del usuario por su nivel de urgencia',
  'el modelo de lenguaje genera un borrador de respuesta para el agente de servicio',
  'el modelo de lenguaje predice el siguiente token a partir del contexto anterior',
  'el modelo abierto se ejecuta en la infraestructura propia de la empresa',
  'el modelo cuantizado se ejecuta en un equipo de escritorio sin tarjeta dedicada',
  'la ventana de contexto limita la cantidad de tokens que el modelo procesa',
  'el prompt define el rol la tarea el contexto y el formato de la respuesta',
  'el prompt incluye los fragmentos recuperados de la base documental de la empresa',
  'la recuperación de fragmentos ancla la respuesta del modelo a una fuente verificable',
  'el sistema de recuperación busca los fragmentos más similares a la pregunta del usuario',
  'la respuesta del modelo cita el documento del que proviene cada afirmación',
  'el embedding convierte cada token en un vector de números continuos',
  'el vector del token captura el significado del término en el espacio semántico',
  'la atención relaciona cada token de la secuencia con todos los demás tokens',
  'el mecanismo de atención permite procesar la secuencia completa en paralelo',
  'la arquitectura transformer apila varias capas de atención y redes de propagación',
  'el entrenamiento del modelo base consume billones de tokens de texto',
  'el ajuste fino especializa el modelo base en el dominio de la empresa',
  'el ajuste fino con lora entrena solo una fracción de los parámetros del modelo',
  'la temperatura controla la diversidad de la generación del siguiente token',
  'la generación autorregresiva produce el texto token a token',
  'el token generado se reinyecta como entrada para predecir el siguiente token',
  'la alucinación del modelo se mitiga con recuperación de documentos y validación humana',
  'el sesgo del modelo proviene de los datos con los que fue entrenado',
  'los datos personales del usuario no deben enviarse a servicios de terceros',
  'la privacidad de los datos justifica el uso de modelos abiertos en infraestructura propia',
  'el técnico consulta el procedimiento de mantenimiento desde el terreno con el asistente',
  'el asistente responde la pregunta del técnico citando el manual de operación',
  'el indicador saidi mide la duración promedio de las interrupciones del servicio',
  'el indicador saifi mide la frecuencia promedio de las interrupciones por usuario',
  'la energía solar de autogeneración requiere el certificado de conformidad del inversor',
  'la conexión del sistema solar requiere el diseño eléctrico firmado por un ingeniero',
  'el riesgo eléctrico del cable caído obliga a declarar la emergencia de nivel uno',
  'la distancia mínima de seguridad de la red de media tensión es de cinco metros',
  'el agente de servicio valida la respuesta generada antes de enviarla al usuario',
  'la clasificación de la urgencia del correo prioriza los casos críticos del servicio'
];

/* ---------- 10. Semillas y ejemplos de los laboratorios ---------- */
const TEXTOS_TOKENIZADOR = [
  { etiqueta: 'Correo de un usuario', texto: 'URGENTE: se presentó un apagón total en el barrio Las Ferias desde las 3:40 a.m. La subestación Usaquén reporta falla en el transformador T-402.' },
  { etiqueta: 'Fragmento técnico', texto: 'El mantenimiento preventivo del transformador de distribución incluye el análisis fisicoquímico del aceite dieléctrico y la medición de la resistencia de aislamiento.' },
  { etiqueta: 'Prompt de sistema', texto: 'Eres un analista del sector eléctrico. Clasifica la urgencia del correo en Alta, Media o Baja y responde únicamente en formato JSON.' },
  { etiqueta: 'Comparación es / en', texto: 'La subestación experimentó una interrupción. The substation experienced an outage.' }
];

const PALABRAS_EMBEDDING = ['transformador', 'usuario', 'modelo', 'falla', 'token', 'atención', 'factura', 'mantenimiento'];

const FRASES_ATENCION = [
  'el transformador de la subestación reportó una falla',
  'el modelo de lenguaje predice el siguiente token',
  'el usuario reclama por la factura del consumo',
  'la cuadrilla de emergencia atendió el cable caído'
];

const SEMILLAS_GENERACION = [
  'el modelo de lenguaje',
  'el transformador de',
  'el usuario reporta',
  'la cuadrilla de'
];
