/* ============================================================
   app.js — Construcción y comportamiento de la interfaz.
   Depende de datos.js (contenido) y llm.js (motor).
   ============================================================ */

(() => {
  'use strict';

  const $ = sel => document.querySelector(sel);
  const $$ = sel => [...document.querySelectorAll(sel)];
  const crear = (tag, clase, html) => {
    const el = document.createElement(tag);
    if (clase) el.className = clase;
    if (html !== undefined) el.innerHTML = html;
    return el;
  };
  const escapar = txt => String(txt).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pct = v => (v * 100).toFixed(v >= 0.995 ? 0 : 1) + ' %';
  const miles = n => n.toLocaleString('es-CO');

  /* ========================================================
     Portada — cifras de la pieza
     ======================================================== */
  function montarPortada(estado) {
    $('#ctaFlecha').innerHTML = ICONOS.flecha;
    const datos = [
      { n: CONCEPTOS.length, t: 'conceptos' },
      { n: MODELOS.length, t: 'modelos abiertos' },
      { n: CASOS.length, t: 'aplicaciones' },
      { n: estado.emb.terminos, t: 'términos en el corpus' }
    ];
    $('#portadaDatos').innerHTML = datos.map(d =>
      `<div class="dato"><b>${d.n}</b><span>${d.t}</span></div>`).join('');
  }

  /* ========================================================
     Sección 1 — Conceptos
     ======================================================== */
  function montarConceptos() {
    const cont = $('#conceptosLista');
    const panel = $('#detalleConcepto');

    CONCEPTOS.forEach(c => {
      const card = crear('button', 'tecnica', `
        <div class="tecnica__icono">${ICONOS[c.icono]}</div>
        <h3>${c.titulo}</h3>
        <p>${c.resumen}</p>
        <span class="tecnica__mas">Ver detalle ${ICONOS.flecha}</span>
      `);
      card.type = 'button';
      card.setAttribute('aria-expanded', 'false');
      card.addEventListener('click', () => abrir(c, card));
      cont.appendChild(card);
    });

    function cerrar() {
      panel.classList.remove('visible');
      $$('#conceptosLista .tecnica').forEach(c => { c.classList.remove('activo'); c.setAttribute('aria-expanded', 'false'); });
    }

    function abrir(c, card) {
      if (card.classList.contains('activo')) { cerrar(); return; }
      cerrar();
      card.classList.add('activo');
      card.setAttribute('aria-expanded', 'true');
      panel.innerHTML = `
        <div class="detalle__head">
          ${ICONOS[c.icono]}
          <h3>${c.titulo}</h3>
          <button class="detalle__cerrar" aria-label="Cerrar">${ICONOS.cerrar}</button>
        </div>
        <div class="detalle__body">
          <p>${c.detalle}</p>
          <div class="ejemplo">${c.ejemplo}</div>
        </div>`;
      panel.querySelector('.detalle__cerrar').addEventListener('click', cerrar);
      panel.classList.add('visible');
      cont.parentNode.insertBefore(panel, cont.nextSibling);
    }
  }

  /* ========================================================
     Autoevaluación
     ======================================================== */
  function montarQuiz() {
    $('#tituloQuiz').insertAdjacentHTML('afterbegin', ICONOS.pregunta);
    const cuerpo = $('#quizCuerpo');
    const respondidas = new Map();

    QUIZ.forEach((q, i) => {
      const bloque = crear('article', 'quiz__item', `
        <h4><span>${i + 1}</span>${q.pregunta}</h4>
        <div class="quiz__opciones"></div>
        <div class="quiz__razon"></div>
      `);
      const opciones = bloque.querySelector('.quiz__opciones');

      q.opciones.forEach((texto, j) => {
        const b = crear('button', 'quiz__opcion', escapar(texto));
        b.type = 'button';
        b.addEventListener('click', () => {
          if (respondidas.has(i)) return;
          const acierto = j === q.correcta;
          respondidas.set(i, acierto);
          b.classList.add(acierto ? 'correcta' : 'incorrecta');
          b.insertAdjacentHTML('beforeend', acierto ? ICONOS.ok : ICONOS.equis);
          if (!acierto) {
            const buena = opciones.children[q.correcta];
            buena.classList.add('correcta');
            buena.insertAdjacentHTML('beforeend', ICONOS.ok);
          }
          [...opciones.children].forEach(x => x.disabled = true);
          bloque.querySelector('.quiz__razon').innerHTML = q.razon;
          bloque.querySelector('.quiz__razon').classList.add('visible');
          actualizarMarcador();
        });
        opciones.appendChild(b);
      });

      cuerpo.appendChild(bloque);
    });

    function actualizarMarcador() {
      const aciertos = [...respondidas.values()].filter(Boolean).length;
      $('#quizMarcador').textContent = `${aciertos} / ${QUIZ.length}`;
      $('#quizMarcador').dataset.completo = String(respondidas.size === QUIZ.length);
    }
  }

  /* ========================================================
     Sección 2 — Laboratorio (cuatro etapas)
     ======================================================== */
  const ETAPAS = [
    { id: 'tokens', icono: 'cortar', titulo: '1 · Tokenización' },
    { id: 'embeddings', icono: 'vector', titulo: '2 · Embeddings' },
    { id: 'atencion', icono: 'atencion', titulo: '3 · Atención' },
    { id: 'generacion', icono: 'terminal', titulo: '4 · Generación' }
  ];

  function montarTabsLaboratorio() {
    const tabs = $('#tabsLab');
    ETAPAS.forEach((e, i) => {
      const b = crear('button', 'tab' + (i === 0 ? ' activo' : ''), `${ICONOS[e.icono]}${e.titulo}`);
      b.type = 'button';
      b.addEventListener('click', () => {
        $$('#tabsLab .tab').forEach(x => x.classList.remove('activo'));
        $$('.etapa').forEach(x => x.classList.remove('visible'));
        b.classList.add('activo');
        $('#etapa-' + e.id).classList.add('visible');
      });
      tabs.appendChild(b);
    });
  }

  /* ---------- Etapa 1 · Tokenización ---------- */
  function montarTokenizador() {
    $('#tituloTokenEntrada').insertAdjacentHTML('afterbegin', ICONOS.cortar);
    $('#tituloTokenSalida').insertAdjacentHTML('afterbegin', ICONOS.radar);
    $('#avisoTokens').innerHTML =
      '<b>Nota:</b> este tokenizador es una versión didáctica que separa prefijos y sufijos frecuentes ' +
      'del español. Un modelo real usa un vocabulario BPE o SentencePiece aprendido de los datos, con ' +
      'decenas de miles de fragmentos. El identificador que se muestra es un hash estable, no el del ' +
      'vocabulario de ningún modelo concreto.';

    const ejemplos = $('#ejemplosTokens');
    TEXTOS_TOKENIZADOR.forEach((t, i) => {
      const b = crear('button', 'chip-btn' + (i === 0 ? ' activo' : ''), t.etiqueta);
      b.type = 'button';
      b.addEventListener('click', () => {
        $$('#ejemplosTokens .chip-btn').forEach(x => x.classList.remove('activo'));
        b.classList.add('activo');
        $('#entradaTokens').value = t.texto;
        renderTokens();
      });
      ejemplos.appendChild(b);
    });

    $('#entradaTokens').value = TEXTOS_TOKENIZADOR[0].texto;
    $('#entradaTokens').addEventListener('input', renderTokens);
    renderTokens();
  }

  function bloque(titulo, conteo, cuerpo) {
    return `<div class="salida__bloque">
      <div class="salida__head"><span>${titulo}</span>${conteo !== null ? `<span class="salida__conteo">${conteo}</span>` : ''}</div>
      <div class="salida__body">${cuerpo}</div>
    </div>`;
  }

  function renderTokens() {
    const texto = $('#entradaTokens').value;
    const salida = $('#salidaTokens');

    if (!texto.trim()) {
      salida.innerHTML = '<p class="vacio">Escribe algo para ver cómo se parte en tokens.</p>';
      return;
    }

    const tokens = LLM.tokenizar(texto);
    const m = LLM.metricasTokens(texto, tokens);

    const chips = tokens.map((tk, i) => `
      <span class="token token--${tk.tipo}" style="animation-delay:${Math.min(i * 10, 400)}ms" title="identificador ${tk.id}">
        ${tk.tipo === 'sub' ? '<i>##</i>' : ''}${escapar(tk.t)}<sup>${tk.id}</sup>
      </span>`).join('');

    const metricas = `
      <div class="metricas">
        <div class="metrica"><b>${miles(m.tokens)}</b><span>tokens</span></div>
        <div class="metrica"><b>${miles(m.caracteres)}</b><span>caracteres</span></div>
        <div class="metrica"><b>${m.ratio.toFixed(2)}</b><span>caracteres / token</span></div>
        <div class="metrica"><b>${m.porPalabra.toFixed(2)}</b><span>tokens / palabra</span></div>
      </div>`;

    const ventanas = m.ventanas.map(v => `
      <div class="barra-fila">
        <code>${v.nombre}</code>
        <div class="barra"><i style="width:${Math.max(v.uso * 100, 0.4)}%"></i></div>
        <b>${v.uso < 0.001 ? '&lt; 0.1' : (v.uso * 100).toFixed(1)} %</b>
      </div>`).join('');

    salida.innerHTML =
      bloque('Tokens', `${tokens.length} tokens`, chips) +
      bloque('Métricas del texto', null, `<div style="width:100%">${metricas}</div>`) +
      bloque('Ocupación de la ventana de contexto', 'prompt + respuesta', `<div style="width:100%">${ventanas}</div>`);
  }

  /* ---------- Etapa 2 · Embeddings ---------- */
  function montarEmbeddings() {
    $('#tituloEmbEntrada').insertAdjacentHTML('afterbegin', ICONOS.vector);
    $('#tituloEmbSalida').insertAdjacentHTML('afterbegin', ICONOS.radar);
    $('#avisoEmb').innerHTML =
      '<b>Nota:</b> estos vectores se construyen en vivo por co-ocurrencia (PMI positivo) sobre el ' +
      'corpus de ' + CORPUS_LLM.length + ' frases del sector energético que acompaña la infografía. ' +
      'Un modelo real aprende embeddings densos sobre billones de tokens, pero el principio es el ' +
      'mismo: <b>lo que aparece en contextos parecidos termina cerca en el espacio vectorial</b>.';

    const ejemplos = $('#ejemplosEmb');
    PALABRAS_EMBEDDING.forEach((p, i) => {
      const b = crear('button', 'chip-btn' + (i === 0 ? ' activo' : ''), p);
      b.type = 'button';
      b.addEventListener('click', () => {
        $$('#ejemplosEmb .chip-btn').forEach(x => x.classList.remove('activo'));
        b.classList.add('activo');
        $('#entradaEmb').value = p;
        renderEmbeddings();
      });
      ejemplos.appendChild(b);
    });

    $('#entradaEmb').value = PALABRAS_EMBEDDING[0];
    $('#entradaEmb').addEventListener('input', renderEmbeddings);
    renderEmbeddings();
  }

  function renderEmbeddings() {
    const palabra = $('#entradaEmb').value.trim();
    const salida = $('#salidaEmb');

    if (!palabra) {
      salida.innerHTML = '<p class="vacio">Escribe un término del dominio energético o de los LLM.</p>';
      return;
    }

    const vec = LLM.vector(palabra);
    if (!vec) {
      const muestra = LLM.vocabulario.slice(0, 400).filter((_, i) => i % 17 === 0).slice(0, 8);
      salida.innerHTML = bloque('Fuera de vocabulario', 'sin vector',
        `<div style="width:100%">
           <p class="vacio" style="text-align:left;padding:.2rem 0 .8rem">
             El término <b>${escapar(palabra)}</b> no aparece en el corpus, así que no tiene vector.
             Es exactamente el problema que resuelven los tokenizadores subpalabra y FastText:
             componer la representación de una palabra desconocida a partir de sus fragmentos.
           </p>
           <div class="ejemplos">${muestra.map(t => `<span class="chip-btn">${escapar(t)}</span>`).join('')}</div>
         </div>`);
      return;
    }

    const cercanos = LLM.vecinos(palabra, 8) || [];
    const max = cercanos.length ? cercanos[0].sim : 1;

    const filas = cercanos.map(v => `
      <div class="barra-fila" title="coseno ${v.sim.toFixed(3)}">
        <code>${escapar(v.termino)}</code>
        <div class="barra"><i style="width:${(v.sim / max) * 100}%"></i></div>
        <b>${v.sim.toFixed(3)}</b>
      </div>`).join('');

    const dims = [...vec.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
    const dimensiones = dims.map(([ctx, peso]) => `
      <span class="token token--dim" title="peso PMI ${peso.toFixed(3)}">${escapar(ctx)}<sup>${peso.toFixed(2)}</sup></span>`).join('');

    salida.innerHTML =
      bloque('Vecinos más cercanos', `coseno sobre ${LLM.vocabulario.length} términos`,
        `<div style="width:100%">${filas || '<p class="vacio">Sin vecinos por encima del umbral.</p>'}</div>`) +
      bloque('Dimensiones activas del vector', `${vec.size} dimensiones`,
        dimensiones || '<span class="vacio">vector vacío</span>');
  }

  /* ---------- Etapa 3 · Atención ---------- */
  function montarAtencion() {
    $('#tituloAtnEntrada').insertAdjacentHTML('afterbegin', ICONOS.atencion);
    $('#tituloAtnSalida').insertAdjacentHTML('afterbegin', ICONOS.radar);
    $('#avisoAtn').innerHTML =
      '<b>Cómo se lee:</b> cada <b>fila</b> es un token que consulta y cada <b>columna</b> un token ' +
      'consultado. La intensidad indica cuánta atención recibe. El triángulo superior está en blanco ' +
      'por la <b>máscara causal</b>: al generar, un token solo puede mirar hacia atrás. ' +
      'Aquí la puntuación es el coseno entre vectores del corpus por una escala fija, en lugar de ' +
      'las proyecciones Q y K aprendidas de un modelo real.';

    const ejemplos = $('#ejemplosAtn');
    FRASES_ATENCION.forEach((f, i) => {
      const b = crear('button', 'chip-btn' + (i === 0 ? ' activo' : ''), f.split(' ').slice(0, 4).join(' ') + '…');
      b.type = 'button';
      b.title = f;
      b.addEventListener('click', () => {
        $$('#ejemplosAtn .chip-btn').forEach(x => x.classList.remove('activo'));
        b.classList.add('activo');
        $('#entradaAtn').value = f;
        renderAtencion();
      });
      ejemplos.appendChild(b);
    });

    $('#entradaAtn').value = FRASES_ATENCION[0];
    $('#entradaAtn').addEventListener('input', renderAtencion);
    renderAtencion();
  }

  function renderAtencion() {
    const frase = $('#entradaAtn').value.trim();
    const salida = $('#salidaAtn');

    if (!frase) {
      salida.innerHTML = '<p class="vacio">Escribe una frase para calcular su mapa de atención.</p>';
      return;
    }

    const r = LLM.atencion(frase);
    if (r.tokens.length < 2) {
      salida.innerHTML = '<p class="vacio">Se necesitan al menos dos tokens.</p>';
      return;
    }

    const n = r.tokens.length;
    const cabecera = ['<div class="mapa__esquina"></div>']
      .concat(r.tokens.map(t => `<div class="mapa__col">${escapar(t)}</div>`)).join('');

    const filas = r.matriz.map((fila, i) => {
      const celdas = fila.map((v, j) => {
        if (v === null) return '<div class="mapa__celda mapa__celda--mascara" title="máscara causal"></div>';
        const alfa = Math.min(1, Math.pow(v, 0.7));
        const fuerte = alfa > 0.55;
        return `<div class="mapa__celda${fuerte ? ' es-fuerte' : ''}" style="background:rgba(1,63,120,${alfa.toFixed(3)})"
                     title="${escapar(r.tokens[i])} → ${escapar(r.tokens[j])} · ${pct(v)}">${v >= 0.09 ? Math.round(v * 100) : ''}</div>`;
      }).join('');
      return `<div class="mapa__fila">${escapar(r.tokens[i])}</div>${celdas}`;
    }).join('');

    // Lectura automática: a qué presta más atención el último token
    const ultima = r.matriz[n - 1];
    const orden = ultima.map((v, j) => ({ v, j })).filter(x => x.v !== null && x.j !== n - 1)
      .sort((a, b) => b.v - a.v).slice(0, 3);

    const lectura = orden.length
      ? `El token <b>«${escapar(r.tokens[n - 1])}»</b> reparte su atención sobre ` +
        orden.map(x => `<b>«${escapar(r.tokens[x.j])}»</b> (${pct(x.v)})`).join(', ') + '.'
      : 'El primer token solo puede atenderse a sí mismo.';

    const nota = r.sinVector.length
      ? `<p class="mapa__nota">Sin vector en el corpus (atención repartida por igual): ${r.sinVector.map(t => `<code>${escapar(t)}</code>`).join(' ')}</p>`
      : '';

    salida.innerHTML = bloque('Matriz de atención', `${n} × ${n} tokens`,
      `<div style="width:100%">
         <div class="mapa" style="grid-template-columns: minmax(70px, auto) repeat(${n}, minmax(26px, 38px))">
           ${cabecera}${filas}
         </div>
         <p class="mapa__lectura">${lectura}</p>
         ${nota}
       </div>`);
  }

  /* ---------- Etapa 4 · Generación ---------- */
  const estadoGen = { texto: '', semilla: '' };

  function montarGeneracion() {
    $('#tituloGenEntrada').insertAdjacentHTML('afterbegin', ICONOS.terminal);
    $('#tituloGenSalida').insertAdjacentHTML('afterbegin', ICONOS.radar);
    $('#avisoGen').innerHTML =
      '<b>Nota:</b> el modelo que predice aquí es un <b>n-grama con retroceso</b> entrenado sobre las ' +
      CORPUS_LLM.length + ' frases del corpus: mira los dos tokens anteriores y, si no los conoce, ' +
      'retrocede a uno o al recuento global. Un LLM sustituye ese recuento por una red de miles de ' +
      'millones de parámetros, pero el <b>bucle es idéntico</b>: predecir, muestrear, reinyectar.';

    const ejemplos = $('#ejemplosGen');
    SEMILLAS_GENERACION.forEach((s, i) => {
      const b = crear('button', 'chip-btn' + (i === 0 ? ' activo' : ''), s);
      b.type = 'button';
      b.addEventListener('click', () => {
        $$('#ejemplosGen .chip-btn').forEach(x => x.classList.remove('activo'));
        b.classList.add('activo');
        estadoGen.semilla = s;
        estadoGen.texto = s;
        $('#entradaGen').value = s;
        renderGeneracion();
      });
      ejemplos.appendChild(b);
    });

    estadoGen.semilla = SEMILLAS_GENERACION[0];
    estadoGen.texto = SEMILLAS_GENERACION[0];
    $('#entradaGen').value = estadoGen.texto;

    $('#entradaGen').addEventListener('input', () => {
      estadoGen.texto = $('#entradaGen').value;
      renderGeneracion();
    });

    const sincroniza = (input, salida, formato) => {
      const el = $(input);
      const marca = $(salida);
      const actualiza = () => { marca.textContent = formato(el.value); renderGeneracion(); };
      el.addEventListener('input', actualiza);
      marca.textContent = formato(el.value);
    };
    sincroniza('#temperatura', '#valorTemperatura', v => Number(v).toFixed(2));
    sincroniza('#topk', '#valorTopk', v => String(v));

    $('#btnUno').addEventListener('click', () => avanzar(1));
    $('#btnVarios').addEventListener('click', () => avanzar(15));
    $('#btnReiniciar').addEventListener('click', () => {
      estadoGen.texto = estadoGen.semilla;
      $('#entradaGen').value = estadoGen.texto;
      renderGeneracion();
    });

    renderGeneracion();
  }

  function opcionesMuestreo() {
    return {
      temperatura: Number($('#temperatura').value),
      topK: Number($('#topk').value)
    };
  }

  function avanzar(n) {
    const r = LLM.generar(estadoGen.texto, n, opcionesMuestreo());
    estadoGen.texto = r.texto;
    $('#entradaGen').value = r.texto;
    renderGeneracion(r.pasos.length ? r.pasos[r.pasos.length - 1] : null);
  }

  function renderGeneracion(ultimo) {
    const salida = $('#salidaGen');
    const texto = estadoGen.texto.trim();

    if (!texto) {
      salida.innerHTML = '<p class="vacio">Escribe o elige un texto inicial para predecir el siguiente token.</p>';
      return;
    }

    const opc = opcionesMuestreo();
    const dist = LLM.candidatos(texto, opc);
    const max = dist.lista.length ? Math.max(...dist.lista.map(c => c.prob)) : 1;

    const filas = dist.lista.map(c => `
      <div class="barra-fila barra-fila--tfidf" title="visto ${c.conteo} ${c.conteo === 1 ? 'vez' : 'veces'} en el corpus">
        <code>${c.token === LLM.FIN ? '⟨fin⟩' : escapar(c.token)}</code>
        <div class="barra"><i style="width:${(c.prob / max) * 100}%"></i></div>
        <em class="df">×${c.conteo}</em>
        <b>${pct(c.prob)}</b>
      </div>`).join('');

    const generado = estadoGen.texto.startsWith(estadoGen.semilla)
      ? `<span class="gen__semilla">${escapar(estadoGen.semilla)}</span>${escapar(estadoGen.texto.slice(estadoGen.semilla.length))}`
      : escapar(estadoGen.texto);

    const insignia = `<span class="insignia insignia--${dist.orden}">${dist.orden}</span>`;
    const descartados = dist.descartados
      ? `<span class="salida__conteo">top-k descartó ${dist.descartados}</span>` : '';

    salida.innerHTML =
      bloque('Texto generado', `${LLM.palabras(estadoGen.texto).length} tokens`,
        `<div style="width:100%"><div class="gen">${generado}<span class="gen__cursor"></span></div></div>`) +
      bloque(`Contexto: «${escapar(dist.contexto)}» ${insignia}`, `T = ${opc.temperatura.toFixed(2)} · k = ${opc.topK}`,
        `<div style="width:100%">${filas || '<p class="vacio">sin candidatos</p>'} ${descartados}</div>`) +
      (ultimo ? bloque('Último token muestreado', ultimo.orden,
        `<span class="token token--raiz">${ultimo.token === LLM.FIN ? '⟨fin⟩' : escapar(ultimo.token)}<sup>${pct(ultimo.prob)}</sup></span>`) : '');
  }

  /* ========================================================
     Sección 3 — Modelos abiertos y ecosistema
     ======================================================== */
  function montarModelos() {
    const cont = $('#listaModelos');
    MODELOS.forEach(m => {
      const el = crear('article', 'libreria', `
        <div class="libreria__top">
          <div class="libreria__logo" style="background:${m.color}">${m.sigla}</div>
          <div>
            <h3>${m.nombre}</h3>
            <span class="libreria__pip">${m.org}</span>
          </div>
        </div>
        <div class="ficha">
          <div class="ficha__fila"><span>Parámetros</span><b>${m.params}</b></div>
          <div class="ficha__fila"><span>Contexto</span><b>${m.contexto}</b></div>
          <div class="ficha__fila"><span>Licencia</span><b class="licencia${m.permisiva ? ' licencia--ok' : ''}">${m.licencia}</b></div>
        </div>
        <p>${m.descripcion}</p>
        <div class="libreria__tags">${m.usos.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <a class="libreria__enlace" href="${m.url}" target="_blank" rel="noopener noreferrer">${ICONOS.enlace}Ver en Hugging Face</a>
      `);
      el.dataset.tags = m.tags.join(' ');
      cont.appendChild(el);
    });

    const filtros = $('#filtrosModelos');
    FILTROS_MODELOS.forEach((f, i) => {
      const b = crear('button', 'chip-btn' + (i === 0 ? ' activo' : ''), f.etiqueta);
      b.type = 'button';
      b.addEventListener('click', () => {
        $$('#filtrosModelos .chip-btn').forEach(x => x.classList.remove('activo'));
        b.classList.add('activo');
        $$('#listaModelos .libreria').forEach(card => {
          const visible = f.id === 'todos' || card.dataset.tags.split(' ').includes(f.id);
          card.classList.toggle('oculto', !visible);
        });
      });
      filtros.appendChild(b);
    });
  }

  function montarHerramientas() {
    const cont = $('#listaHerramientas');
    HERRAMIENTAS.forEach(h => {
      const a = crear('a', 'herramienta', `
        <div class="herramienta__icono">${ICONOS[h.icono]}</div>
        <div>
          <h4>${h.nombre}</h4>
          <p>${h.descripcion}</p>
          <code>${escapar(h.comando)}</code>
        </div>
      `);
      a.href = h.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      cont.appendChild(a);
    });
  }

  /* ========================================================
     Sección 4 — Aplicaciones
     ======================================================== */
  function montarCasos() {
    const tabs = $('#tabsCasos');
    const cont = $('#contenidoCasos');

    CASOS.forEach((c, i) => {
      const tab = crear('button', 'tab' + (i === 0 ? ' activo' : ''), `${ICONOS[c.icono]}${c.tab}`);
      tab.type = 'button';
      tab.addEventListener('click', () => {
        $$('#tabsCasos .tab').forEach(x => x.classList.remove('activo'));
        $$('#contenidoCasos .caso').forEach(x => x.classList.remove('visible'));
        tab.classList.add('activo');
        $('#caso-' + c.id).classList.add('visible');
      });
      tabs.appendChild(tab);

      const panel = crear('div', 'caso' + (i === 0 ? ' visible' : ''), `
        <div class="caso__intro">
          <h3>${c.titulo}<span class="ref">${c.refs}</span></h3>
          ${c.intro}
          <div class="caso__beneficios">${c.beneficios.map(b => `<span>${ICONOS.ok}${b}</span>`).join('')}</div>
        </div>
        <div class="flujo">
          ${c.pasos.map(p => `
            <article class="flujo__item">
              <h4>${p.t}</h4>
              <p>${p.d}</p>
            </article>`).join('')}
        </div>
      `);
      panel.id = 'caso-' + c.id;
      cont.appendChild(panel);
    });
  }

  /* ========================================================
     Sección 5 — Asistente RAG
     ======================================================== */
  function montarAsistente() {
    $('#tituloRagEntrada').insertAdjacentHTML('afterbegin', ICONOS.lupa);
    $('#tituloRagSalida').insertAdjacentHTML('afterbegin', ICONOS.bot);
    $('#avisoRag').innerHTML =
      '<b>Nota metodológica:</b> la recuperación es real (TF-IDF con similitud coseno sobre los diez ' +
      'fragmentos indexados), pero <b>no hay un LLM ejecutándose en el navegador</b>: la respuesta se ' +
      'compone de forma extractiva con las oraciones de mayor solapamiento. Lo que sí es fiel es el ' +
      'mecanismo: qué se recupera, qué prompt se arma y por qué el sistema debe declarar el vacío ' +
      'cuando la respuesta no está en la base. Los fragmentos son ilustrativos, no normativa oficial.';

    const ejemplos = $('#ejemplosRag');
    PREGUNTAS_EJEMPLO.forEach((p, i) => {
      const b = crear('button', 'chip-btn' + (i === 0 ? ' activo' : '') + (p.sinRespuesta ? ' chip-btn--trampa' : ''), p.etiqueta);
      b.type = 'button';
      b.title = p.texto;
      b.addEventListener('click', () => {
        $$('#ejemplosRag .chip-btn').forEach(x => x.classList.remove('activo'));
        b.classList.add('activo');
        $('#entradaRag').value = p.texto;
        renderRag();
      });
      ejemplos.appendChild(b);
    });

    $('#entradaRag').value = PREGUNTAS_EJEMPLO[0].texto;
    $('#entradaRag').addEventListener('input', renderRag);

    $('#baseConteo').textContent = `${DOCUMENTOS.length} fragmentos`;
    $('#baseLista').innerHTML = DOCUMENTOS.map(d => `
      <details class="doc">
        <summary><b>${d.id}</b> ${escapar(d.titulo)}<span>${escapar(d.fuente)}</span></summary>
        <p>${escapar(d.texto)}</p>
      </details>`).join('');

    renderRag();
  }

  function renderRag() {
    const pregunta = $('#entradaRag').value.trim();
    const contRec = $('#recuperados');
    const contResp = $('#respuesta');

    if (!pregunta) {
      contRec.innerHTML = '<p class="vacio">Escribe una pregunta sobre la documentación interna.</p>';
      contResp.innerHTML = '<p class="vacio">Sin consulta.</p>';
      $('#promptRag').textContent = '';
      $('#promptPie').innerHTML = '';
      return;
    }

    const recuperados = LLM.recuperar(pregunta, 3);
    const respuesta = LLM.responder(pregunta, recuperados);
    const prompt = LLM.armarPrompt(pregunta, recuperados);

    contRec.innerHTML = recuperados.map((r, i) => `
      <article class="frag${r.score >= LLM.UMBRAL_RAG ? '' : ' frag--debil'}">
        <div class="frag__head">
          <span class="frag__id">${r.doc.id}</span>
          <h4>${escapar(r.doc.titulo)}</h4>
          <span class="frag__pos">#${i + 1}</span>
        </div>
        <div class="frag__barra"><i style="width:${Math.min(100, r.score * 100 / 0.6)}%"></i></div>
        <div class="frag__meta">
          <span>similitud ${r.score.toFixed(3)}</span>
          <span>${escapar(r.doc.fuente)}</span>
        </div>
        ${r.coincidencias.length
          ? `<div class="frag__terminos">${r.coincidencias.slice(0, 8).map(t => `<span>${escapar(t)}</span>`).join('')}</div>`
          : '<div class="frag__terminos"><span class="frag__nada">sin términos en común</span></div>'}
      </article>`).join('');

    contResp.dataset.anclada = String(respuesta.anclada);
    contResp.innerHTML = `
      <div class="respuesta__icono">${respuesta.anclada ? ICONOS.ok : ICONOS.alerta}</div>
      <div>
        <p>${escapar(respuesta.texto).replace(/\[(D\d+)\]/g, '<b class="cita">[$1]</b>')}</p>
        <span class="respuesta__pie">${respuesta.anclada
          ? 'Respuesta anclada a ' + respuesta.citas.join(', ') + ' · verificable en la base documental'
          : 'Sin base documental suficiente · el sistema no debe responder'}</span>
      </div>`;

    $('#promptRag').textContent = prompt;
    const tks = LLM.tokenizar(prompt).length;
    $('#promptPie').innerHTML =
      `Este prompt ocupa <b>${miles(tks)} tokens</b> — ${(tks / 8192 * 100).toFixed(1)} % de una ventana de 8K. ` +
      'Cada fragmento recuperado se paga en tokens: por eso el número de documentos que se inyectan es una decisión de diseño.';
  }

  /* ========================================================
     Secciones 6 y 7 — Enlaces y bibliografía
     ======================================================== */
  function montarEnlaces() {
    const cont = $('#listaEnlaces');
    ENLACES.forEach(e => {
      const a = crear('a', 'enlace', `
        <div class="enlace__icono">${ICONOS[e.icono]}</div>
        <h3>${e.nombre}</h3>
        <p>${e.descripcion}</p>
        <span class="enlace__url">${ICONOS.enlace}${e.url.replace(/^https?:\/\//, '').slice(0, 46)}</span>
      `);
      a.href = e.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.dataset.cat = e.cat;
      cont.appendChild(a);
    });

    const filtros = $('#filtrosEnlaces');
    FILTROS_ENLACES.forEach((f, i) => {
      const b = crear('button', 'chip-btn' + (i === 0 ? ' activo' : ''), f.etiqueta);
      b.type = 'button';
      b.addEventListener('click', () => {
        $$('#filtrosEnlaces .chip-btn').forEach(x => x.classList.remove('activo'));
        b.classList.add('activo');
        $$('#listaEnlaces .enlace').forEach(card => {
          card.classList.toggle('oculto', !(f.id === 'todos' || card.dataset.cat === f.id));
        });
      });
      filtros.appendChild(b);
    });
  }

  function montarBibliografia() {
    const cont = $('#listaBiblio');
    BIBLIOGRAFIA.forEach(ref => cont.appendChild(crear('li', '', `<span>${ref}</span>`)));
  }

  /* ========================================================
     Navegación: progreso, scroll-spy y animaciones de entrada
     ======================================================== */
  function montarNavegacion() {
    const barra = $('#progreso');
    const enlaces = $$('#navLinks .nav__link');
    const secciones = enlaces.map(a => $(a.getAttribute('href'))).filter(Boolean);

    const alScroll = () => {
      const alto = document.documentElement.scrollHeight - window.innerHeight;
      barra.style.width = (alto > 0 ? (window.scrollY / alto) * 100 : 0) + '%';

      const y = window.scrollY + window.innerHeight * 0.28;
      let actual = null;
      secciones.forEach(s => { if (s.offsetTop <= y) actual = s.id; });
      enlaces.forEach(a => a.classList.toggle('activo', a.getAttribute('href') === '#' + actual));
    };

    window.addEventListener('scroll', alScroll, { passive: true });
    window.addEventListener('resize', alScroll);
    alScroll();

    const obs = new IntersectionObserver(entradas => {
      entradas.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visto'); obs.unobserve(e.target); } });
    }, { threshold: .12 });
    $$('.reveal').forEach(el => obs.observe(el));
  }

  /* ========================================================
     Arranque
     ======================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    const estado = LLM.iniciar(CORPUS_LLM, DOCUMENTOS);

    montarPortada(estado);
    montarConceptos();
    montarQuiz();
    montarTabsLaboratorio();
    montarTokenizador();
    montarEmbeddings();
    montarAtencion();
    montarGeneracion();
    montarModelos();
    montarHerramientas();
    montarCasos();
    montarAsistente();
    montarEnlaces();
    montarBibliografia();
    montarNavegacion();
  });
})();
