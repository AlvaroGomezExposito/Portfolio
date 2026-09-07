/* ============================================================
   PORTFOLIO — main.js
   ============================================================ */

// ── Language toggle ──────────────────────────────────────────
const TRANSLATIONS = {
  es: {
    'nav.home':     'Inicio',
    'nav.projects': 'Proyectos',
    'nav.skills':   'Habilidades',
    'nav.about':    'Sobre mí',
    'nav.contact':  'Contacto',

    'hero.tag':      'Generalista 3D · VFX · Producción Audiovisual',
    'hero.title':    'Álvaro Gómez<br><em>Expósito</em>',
    'hero.subtitle': 'Generalista 3D especializado en modelado orgánico, efectos visuales y producción audiovisual. De la idea a la imagen final.',
    'hero.cta1':     'Ver proyectos',
    'hero.cta2':     'CV',
    'hero.stat1':    'Proyectos',
    'hero.stat2':    'Años exp.',
    'hero.stat3':    'Herramientas',
    'hero.recent':   'Trabajos recientes',

    'projects.eyebrow': 'Galería',
    'projects.title':   'Proyectos',
    'projects.sub':     'Visualización 3D, arte digital y videojuegos.',
    'filter.all':   'Todo',
    'filter.3d':    '3D / Arq.',
    'filter.art':   'Arte digital',
    'filter.game':  'Games',

    'skills.eyebrow': 'Stack',
    'skills.title':   'Habilidades',
    'skills.sub':     'Software, técnicas y flujos de trabajo que domino.',

    'skills.sec.modeling':    'Modelado',
    'skills.sec.texturing':   'Texturizado',
    'skills.sec.animation':   'Animación',
    'skills.sec.languages':   'Lenguajes',
    'skills.sec.rendering':   'Renderizado',
    'skills.sec.postprod':    'Postproducción',
    'skills.sec.fx':          'FX / Simulación',
    'skills.sec.gameengines': 'Motores de Juego',
    'skills.sec.stack':       'Todo el stack',

    'skill.cat.3dsmax.mod':  'Modelado · Rigging · Escena',
    'skill.cat.substance':   'Texturizado · UDIM',
    'skill.cat.rizom':       'UV Unwrap · UDIM',
    'skill.cat.zbrush':      'Escultura digital',
    'skill.cat.maya':        'Modelado · Animación · Retopología',
    'skill.cat.ps.mod':      'Retoque · Texturizado',
    'skill.cat.topogun':     'Retopología',
    'skill.cat.blender':     'Modelado · Sculpt · Render',
    'skill.cat.3dsmax.anim': 'Animación · Rigging',
    'skill.cat.unity.anim':  'Animación · Game Engine',
    'skill.cat.csharp':      'Scripting · Unity',
    'skill.cat.arnold':      'Render · AOVs · Compositing',
    'skill.cat.corona':      'Render fotorrealista · Iluminación',
    'skill.cat.marmoset':    'Baking · Presentación 3D',
    'skill.cat.ae':          'Compositing · Motion · VFX',
    'skill.cat.ps.post':     'Postproducción · Compositing',
    'skill.cat.tyflow':      'Simulaciones · Partículas · FX',
    'skill.cat.unity.game':     '2D · 3D · Game Engine',
    'skill.cat.godot':          '2D · Game Engine',
    'skill.cat.gdscript':       'Scripting · Godot',
    'skill.cat.versioncontrol': 'Git · Branching · Merge',

    'skill.level.avanzado':  'Avanzado',
    'skill.level.intermedio':'Intermedio',
    'skill.level.basico':    'Básico',
    'skill.level.inter.avz': 'Intermedio-Avanzado',

    'about.eyebrow': 'Quién soy',
    'about.title':   'Sobre mí',
    'about.p1':      'Soy Álvaro Gómez Expósito, generalista 3D con base en España.',
    'about.p2':      'Mi trabajo abarca el modelado orgánico, la creación de efectos visuales y la producción audiovisual. Domino herramientas de modelado, texturizado y renderizado, así como Unity, lo que me permite abordar distintas fases del pipeline de producción 3D con autonomía y criterio creativo.',
    'about.p3':      'Me caracterizo por la creatividad y la capacidad de llevar un proyecto desde la fase de concepto hasta el resultado final. Estoy en constante aprendizaje, buscando siempre mejorar procesos y metodologías para obtener los mejores resultados en cada producción.',
    'about.exp':     'Experiencia y Formación',
    'about.exp.r1':  'Desarrollo de Juego 2D en GODOT',
    'about.exp.c1':  'Outlander Games',
    'about.exp.r2':  'Desarrollo completo de anuncio publicitario',
    'about.exp.c2':  'Escuela de formación laboral (ESCALA)',
    'about.exp.r3':  'Ciclo Formativo de Grado Superior',
    'about.exp.c3':  'Animaciones 3D, Juegos y Entornos Interactivos · UDIT',
    'about.philosophy':          'Filosofía de trabajo',
    'about.tag.curiosity':       'Curiosidad técnica',
    'about.tag.improvement':     'Mentalidad de mejora continua',
    'about.tag.research':        'Investigación autónoma',
    'about.tag.openness':        'Apertura a nuevas herramientas y tecnologías',
    'about.tag.experimentation': 'Experimentación e iteración',
    'about.tag.resourceful':     'Resolutivo',
    'about.tag.adaptability':    'Adaptabilidad ante nuevos retos',
    'about.tag.detail':          'Atención al detalle',
    'about.tag.versatility':     'Versatilidad',
    'about.tag.proactivity':     'Proactividad',
    'about.tag.passion3d':       'Pasión por el desarrollo 3D y la tecnología',
    'about.cv':      'Descargar CV',

    'contact.eyebrow':          'Hablemos',
    'contact.title':            'Contacto',
    'contact.sub':              'Disponible para proyectos freelance, colaboraciones y nuevas oportunidades.',
    'contact.name':             'Nombre',
    'contact.email':            'Email',
    'contact.email.placeholder':'tu@email.com',
    'contact.email.invalid':    'Introduce un email válido (ejemplo: tu@email.com)',
    'contact.msg':              'Mensaje',
    'contact.send':             'Enviar mensaje →',
    'contact.success':          'Mensaje enviado. ¡Te contesto pronto!',
    'contact.error':            'No se pudo enviar el mensaje. Prueba de nuevo o escríbeme directamente a alvarogomez0402@gmail.com',
    'contact.cv.val':           'Descargar CV (PDF)',
    'contact.availability':     'Disponibilidad',
    'contact.available':        'Disponible para proyectos',

    'gallery.download': 'Descargar',

    'footer.copy': '© 2025 Álvaro Gómez Expósito. Todos los derechos reservados.',
  },
  en: {
    'nav.home':     'Home',
    'nav.projects': 'Projects',
    'nav.skills':   'Skills',
    'nav.about':    'About',
    'nav.contact':  'Contact',

    'hero.tag':      '3D Generalist · VFX · Audiovisual Production',
    'hero.title':    'Álvaro Gómez<br><em>Expósito</em>',
    'hero.subtitle': '3D generalist specialising in organic modelling, visual effects and audiovisual production. From idea to final image.',
    'hero.cta1':     'View projects',
    'hero.cta2':     'CV',
    'hero.stat1':    'Projects',
    'hero.stat2':    'Yrs exp.',
    'hero.stat3':    'Tools',
    'hero.recent':   'Recent work',

    'projects.eyebrow': 'Gallery',
    'projects.title':   'Projects',
    'projects.sub':     '3D visualisation, digital art and video games.',
    'filter.all':   'All',
    'filter.3d':    '3D / Arch.',
    'filter.art':   'Digital art',
    'filter.game':  'Games',

    'skills.eyebrow': 'Stack',
    'skills.title':   'Skills',
    'skills.sub':     'Software, techniques and workflows I master.',

    'skills.sec.modeling':    'Modeling',
    'skills.sec.texturing':   'Texturing',
    'skills.sec.animation':   'Animation',
    'skills.sec.languages':   'Languages',
    'skills.sec.rendering':   'Rendering',
    'skills.sec.postprod':    'Post-Production',
    'skills.sec.fx':          'FX / Simulation',
    'skills.sec.gameengines': 'Game Engines',
    'skills.sec.stack':       'Full Stack',

    'skill.cat.3dsmax.mod':  'Modelling · Rigging · Scene',
    'skill.cat.substance':   'Texturing · UDIM',
    'skill.cat.rizom':       'UV Unwrap · UDIM',
    'skill.cat.zbrush':      'Digital Sculpting',
    'skill.cat.maya':        'Modelling · Animation · Retopology',
    'skill.cat.ps.mod':      'Retouching · Texturing',
    'skill.cat.topogun':     'Retopology',
    'skill.cat.blender':     'Modelling · Sculpt · Render',
    'skill.cat.3dsmax.anim': 'Animation · Rigging',
    'skill.cat.unity.anim':  'Animation · Game Engine',
    'skill.cat.csharp':      'Scripting · Unity',
    'skill.cat.arnold':      'Rendering · AOVs · Compositing',
    'skill.cat.corona':      'Photorealistic Render · Lighting',
    'skill.cat.marmoset':    'Baking · 3D Presentation',
    'skill.cat.ae':          'Compositing · Motion · VFX',
    'skill.cat.ps.post':     'Post-production · Compositing',
    'skill.cat.tyflow':      'Simulations · Particles · FX',
    'skill.cat.unity.game':     '2D · 3D · Game Engine',
    'skill.cat.godot':          '2D · Game Engine',
    'skill.cat.gdscript':       'Scripting · Godot',
    'skill.cat.versioncontrol': 'Git · Branching · Merge',

    'skill.level.avanzado':  'Advanced',
    'skill.level.intermedio':'Intermediate',
    'skill.level.basico':    'Basic',
    'skill.level.inter.avz': 'Intermediate-Advanced',

    'about.eyebrow': 'Who I am',
    'about.title':   'About me',
    'about.p1':      'I\'m Álvaro Gómez Expósito, a 3D generalist based in Spain.',
    'about.p2':      'My work covers organic modelling, visual effects creation and audiovisual production. I master modelling, texturing and rendering tools, as well as Unity, which allows me to tackle different stages of the 3D production pipeline with autonomy and creative judgement.',
    'about.p3':      'I am defined by creativity and the ability to take a project from the concept stage to the final result. I am constantly learning, always looking to improve processes and methodologies to achieve the best results in each production.',
    'about.exp':     'Experience & Education',
    'about.exp.r1':  '2D Game Development in GODOT',
    'about.exp.c1':  'Outlander Games',
    'about.exp.r2':  'Full development of an advertising campaign',
    'about.exp.c2':  'Vocational training school (ESCALA)',
    'about.exp.r3':  'Higher Vocational Training',
    'about.exp.c3':  '3D Animation, Games and Interactive Environments · UDIT',
    'about.philosophy':          'Work Philosophy',
    'about.tag.curiosity':       'Technical curiosity',
    'about.tag.improvement':     'Continuous improvement mindset',
    'about.tag.research':        'Autonomous research',
    'about.tag.openness':        'Openness to new tools and technologies',
    'about.tag.experimentation': 'Experimentation and iteration',
    'about.tag.resourceful':     'Resourceful',
    'about.tag.adaptability':    'Adaptability to new challenges',
    'about.tag.detail':          'Attention to detail',
    'about.tag.versatility':     'Versatility',
    'about.tag.proactivity':     'Proactivity',
    'about.tag.passion3d':       'Passion for 3D development and technology',
    'about.cv':      'Download CV',

    'contact.eyebrow':          'Get in touch',
    'contact.title':            'Contact',
    'contact.sub':              'Available for freelance projects, collaborations and new opportunities.',
    'contact.name':             'Name',
    'contact.email':            'Email',
    'contact.email.placeholder':'your@email.com',
    'contact.email.invalid':    'Enter a valid email (e.g. your@email.com)',
    'contact.msg':              'Message',
    'contact.send':             'Send message →',
    'contact.success':          'Message sent. I\'ll get back to you soon!',
    'contact.error':            'Couldn\'t send the message. Try again or email me directly at alvarogomez0402@gmail.com',
    'contact.cv.val':           'Download CV (PDF)',
    'contact.availability':     'Availability',
    'contact.available':        'Available for projects',

    'gallery.download': 'Download',

    'footer.copy': '© 2025 Álvaro Gómez Expósito. All rights reserved.',
  }
};

let currentLang = localStorage.getItem('lang') || 'es';
let currentModalItem = null;

function refreshModalText() {
  if (!currentModalItem) return;
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  const d = currentModalItem.dataset;
  const en = currentLang === 'en';
  overlay.querySelector('.modal__cat').textContent   = (en && d.catEn)   ? d.catEn   : (d.cat   || '');
  overlay.querySelector('.modal__title').textContent = (en && d.titleEn) ? d.titleEn : (d.title || '');
  overlay.querySelector('.modal__desc').innerHTML    = (en && d.descEn)  ? d.descEn  : (d.desc  || '');
  const modalLangBtn = document.getElementById('modalLangToggle');
  if (modalLangBtn) modalLangBtn.textContent = en ? 'ES' : 'EN';
  const dlText = overlay.querySelector('.gallery__download-text');
  if (dlText) {
    dlText.textContent = t('gallery.download');
    dlText.closest('.gallery__download').setAttribute('aria-label', t('gallery.download'));
  }
}

function t(key) {
  return TRANSLATIONS[currentLang][key] || key;
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = t(key);
    if (val) el.placeholder = val;
  });
  const en = currentLang === 'en';
  document.querySelectorAll('.project-item').forEach(item => {
    const d = item.dataset;
    const titleEl = item.querySelector('.project-item__title');
    const catEl   = item.querySelector('.project-item__cat');
    if (titleEl && (d.listTitle || d.listTitleEn))
      titleEl.textContent = en && d.listTitleEn ? d.listTitleEn : (d.listTitle || titleEl.textContent);
    if (catEl && (d.catEs || d.catEn))
      catEl.textContent = en && d.catEn ? d.catEn : (d.catEs || catEl.textContent);
    const descEl = item.querySelector('.project-item__desc');
    if (descEl && d.listDescEn)
      descEl.textContent = en ? d.listDescEn : descEl.textContent;
  });
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = currentLang;

  // Refresh hero slideshow caption if active
  if (typeof window._heroSlideshowUpdateLang === 'function') window._heroSlideshowUpdateLang();
}

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('lang', currentLang);
  applyLang();
  refreshModalText();
}

// ── Mobile nav ───────────────────────────────────────────────
function initMobileNav() {
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!burger || !mobileMenu) return;
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ── Active nav link ──────────────────────────────────────────
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === page || (page === 'index.html' && href === 'index.html'));
  });
}

// ── Skill bars animate on view ───────────────────────────────
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar__fill');
  if (!bars.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('animated');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => obs.observe(b));
}

// ── Project filter ───────────────────────────────────────────
function initFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.project-item');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach(item => {
        const show = cat === 'all' || item.dataset.cat === cat;
        item.style.display = show ? '' : 'none';
      });
    });
  });
}

// ── Modal lightbox ───────────────────────────────────────────
function initModal() {
  const overlay     = document.getElementById('modalOverlay');
  if (!overlay) return;
  const closeBtn    = document.getElementById('modalClose');
  const items       = document.querySelectorAll('.project-item');
  const fullscreenEl = document.getElementById('imgFullscreen');
  const fsMedia      = document.getElementById('fsMedia');
  const fsPrev       = document.getElementById('fsPrev');
  const fsNext       = document.getElementById('fsNext');
  const fsCounter    = document.getElementById('fsCounter');
  let galleryState    = null;
  let fullscreenState = null;

  function isVideo(src) {
    return /\.(mp4|webm|ogg|mov)$/i.test(src.split('|')[0]);
  }

  function isYoutube(src) {
    return src.includes('youtube.com/embed');
  }

  function isEmbed(src) {
    return /\.html?$/i.test(src.split('|')[0]);
  }

  function requestYoutubeHQ(iframe) {
    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'setPlaybackQuality', args: ['hd1080'] }), '*');
  }

  function parseMedia(entry) {
    const parts = entry.split('|');
    const src = parts[0].trim();
    const volPart = parts.find(p => p.startsWith('vol:'));
    const volume = volPart ? parseFloat(volPart.split(':')[1]) : null;
    return { src, volume };
  }

  function setFsMedia(entry) {
    const { src, volume } = parseMedia(entry);
    if (isYoutube(src)) {
      fsMedia.innerHTML = `<iframe src="${src}?autoplay=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;border:0;"></iframe>`;
      {
        const iframe = fsMedia.querySelector('iframe');
        if (iframe) iframe.addEventListener('load', () => {
          requestYoutubeHQ(iframe);
          if (volume !== null) iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'setVolume', args: [Math.round(volume * 100)] }), '*');
        });
      }
    } else if (isEmbed(src)) {
      fsMedia.innerHTML = `<iframe src="${src}" frameborder="0" allowfullscreen style="width:100%;height:100%;border:0;"></iframe>`;
    } else if (isVideo(src)) {
      fsMedia.innerHTML = `<video src="${src}" autoplay loop playsinline controls></video>`;
      if (volume !== null) { const v = fsMedia.querySelector('video'); if (v) v.volume = volume; }
    } else {
      fsMedia.innerHTML = `<img src="${src}" alt="">`;
    }
  }

  // ── Fullscreen viewer ──────────────────────────────────────
  function openFullscreen(imgs, idx) {
    fullscreenState = Array.isArray(imgs) ? { imgs, idx } : null;
    const src = Array.isArray(imgs) ? imgs[idx] : imgs;
    setFsMedia(src);
    if (fullscreenState && fullscreenState.imgs.length > 1) {
      fsPrev.style.display = '';
      fsNext.style.display = '';
      fsCounter.textContent = `${idx + 1} / ${fullscreenState.imgs.length}`;
    } else {
      fsPrev.style.display = 'none';
      fsNext.style.display = 'none';
      fsCounter.textContent = '';
    }
    fullscreenEl.classList.add('open');
  }

  function navigateFullscreen(dir) {
    if (!fullscreenState) return;
    fullscreenState.idx = (fullscreenState.idx + dir + fullscreenState.imgs.length) % fullscreenState.imgs.length;
    const entry = fullscreenState.imgs[fullscreenState.idx];
    const { src } = parseMedia(entry);
    if (isYoutube(src) || isVideo(src)) {
      const newIdx = fullscreenState.idx;
      closeFullscreen();
      if (galleryState) {
        galleryState.idx = newIdx;
        renderGallery(overlay.querySelector('.modal__media'), galleryState.imgs, galleryState.idx, overlay.querySelector('.modal__title').textContent);
      }
      return;
    }
    setFsMedia(entry);
    fsCounter.textContent = `${fullscreenState.idx + 1} / ${fullscreenState.imgs.length}`;
    if (galleryState) {
      galleryState.idx = fullscreenState.idx;
      renderGallery(overlay.querySelector('.modal__media'), galleryState.imgs, galleryState.idx, overlay.querySelector('.modal__title').textContent, false);
    }
  }

  function closeFullscreen() {
    const v = fsMedia && fsMedia.querySelector('video');
    if (v) v.pause();
    if (fsMedia) fsMedia.innerHTML = '';
    fullscreenEl.classList.remove('open');
    fullscreenState = null;
  }

  if (fullscreenEl) {
    fullscreenEl.addEventListener('click', e => {
      if (e.target === fullscreenEl) closeFullscreen();
      if (e.target.tagName === 'IMG' && e.target.closest('#fsMedia')) closeFullscreen();
    });
  }
  if (fsPrev) fsPrev.addEventListener('click', e => { e.stopPropagation(); navigateFullscreen(-1); });
  if (fsNext) fsNext.addEventListener('click', e => { e.stopPropagation(); navigateFullscreen(1); });

  // ── Modal gallery ──────────────────────────────────────────
  function renderGallery(mediaWrap, imgs, idx, title, autoplay = true) {
    const { src, volume } = parseMedia(imgs[idx]);
    let mediaEl;
    if (isYoutube(src)) {
      const apParam = autoplay ? '?autoplay=1&enablejsapi=1' : '?enablejsapi=1';
      mediaEl = `<iframe src="${src}${apParam}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;border:0;"></iframe>`;
    } else if (isEmbed(src)) {
      mediaEl = `<iframe src="${src}" frameborder="0" allowfullscreen style="width:100%;height:100%;border:0;"></iframe>`;
    } else if (isVideo(src)) {
      const muted = volume === null ? 'muted' : '';
      const apAttr = autoplay ? 'autoplay' : '';
      mediaEl = `<video src="${src}" ${apAttr} ${muted} loop playsinline controls style="width:100%;height:100%;object-fit:contain;background:#000;"></video>`;
    } else {
      mediaEl = `<img src="${src}" alt="${title}">`;
    }
    let downloadBtn = '';
    if (!isYoutube(src) && !isVideo(src) && currentModalItem) {
      const links = (currentModalItem.dataset.downloadLinks || '').split(',').map(s => s.trim());
      const dlUrl = links[idx] || '';
      if (dlUrl) {
        downloadBtn = `<a class="gallery__download" href="${dlUrl}" target="_blank" rel="noopener noreferrer" aria-label="${t('gallery.download')}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span class="gallery__download-text">${t('gallery.download')}</span>
        </a>`;
      }
    }
    mediaWrap.innerHTML = `
      ${mediaEl}
      ${downloadBtn}
      <button class="gallery__prev" aria-label="Anterior">&#8249;</button>
      <button class="gallery__next" aria-label="Siguiente">&#8250;</button>
      <div class="gallery__counter">${idx + 1} / ${imgs.length}</div>
    `;
    if (downloadBtn) {
      mediaWrap.querySelector('.gallery__download').addEventListener('click', e => e.stopPropagation());
    }
    if (volume !== null && isVideo(src)) { const v = mediaWrap.querySelector('video'); if (v) v.volume = volume; }
    if (isYoutube(src)) {
      const iframe = mediaWrap.querySelector('iframe');
      if (iframe) iframe.addEventListener('load', () => {
        requestYoutubeHQ(iframe);
        if (volume !== null) iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'setVolume', args: [Math.round(volume * 100)] }), '*');
      });
    }
    mediaWrap.querySelector('.gallery__prev').addEventListener('click', e => {
      e.stopPropagation();
      galleryState.idx = (galleryState.idx - 1 + imgs.length) % imgs.length;
      renderGallery(mediaWrap, imgs, galleryState.idx, title);
    });
    mediaWrap.querySelector('.gallery__next').addEventListener('click', e => {
      e.stopPropagation();
      galleryState.idx = (galleryState.idx + 1) % imgs.length;
      renderGallery(mediaWrap, imgs, galleryState.idx, title);
    });
  }

  function openModal(item) {
    currentModalItem = item;
    const data = item.dataset;
    const en = currentLang === 'en';
    overlay.querySelector('.modal__cat').textContent   = (en && data.catEn)   ? data.catEn   : (data.cat   || '');
    overlay.querySelector('.modal__title').textContent = (en && data.titleEn) ? data.titleEn : (data.title || '');
    overlay.querySelector('.modal__desc').innerHTML    = (en && data.descEn)  ? data.descEn  : (data.desc  || '');
    const modalLangBtn = document.getElementById('modalLangToggle');
    if (modalLangBtn) modalLangBtn.textContent = en ? 'ES' : 'EN';
    const mediaWrap = overlay.querySelector('.modal__media');
    galleryState = null;

    if (data.video) {
      mediaWrap.innerHTML = `<video src="${data.video}" autoplay muted loop playsinline></video>`;
    } else if (data.gallery) {
      const imgs = data.gallery.split(',').map(s => s.trim());
      galleryState = { imgs, idx: 0 };
      renderGallery(mediaWrap, imgs, 0, data.title || '');
    } else {
      mediaWrap.innerHTML = `<img src="${data.img || ''}" alt="${data.title || ''}">`;
    }

    const tagsWrap = overlay.querySelector('.modal__tags');
    tagsWrap.innerHTML = (data.tags || '').split(',').map(t => `<span class="modal__tag">${t.trim()}</span>`).join('');
    const logosWrap = overlay.querySelector('.modal__logos');
    const sourceLogos = item.querySelector('.project-item__logos');
    logosWrap.innerHTML = sourceLogos ? sourceLogos.innerHTML : '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    galleryState = null;
    currentModalItem = null;
    const v = overlay.querySelector('video');
    if (v) v.pause();
    const mediaWrap = overlay.querySelector('.modal__media');
    if (mediaWrap) mediaWrap.innerHTML = '';
  }

  // ── Swipe táctil en galería del modal ───────────────────────
  const galleryMediaEl = overlay.querySelector('.modal__media');
  let swipeStartX = 0;
  galleryMediaEl.addEventListener('touchstart', e => {
    swipeStartX = e.touches[0].clientX;
  }, { passive: true });
  galleryMediaEl.addEventListener('touchend', e => {
    if (!galleryState) return;
    if (isEmbed(parseMedia(galleryState.imgs[galleryState.idx]).src)) return;
    const dx = e.changedTouches[0].clientX - swipeStartX;
    if (Math.abs(dx) < 50) return;
    const title = overlay.querySelector('.modal__title').textContent;
    galleryState.idx = dx < 0
      ? (galleryState.idx + 1) % galleryState.imgs.length
      : (galleryState.idx - 1 + galleryState.imgs.length) % galleryState.imgs.length;
    renderGallery(galleryMediaEl, galleryState.imgs, galleryState.idx, title);
  }, { passive: true });

  // ── Swipe táctil en visor fullscreen ────────────────────────
  if (fullscreenEl) {
    let fsTouchX = 0;
    fullscreenEl.addEventListener('touchstart', e => {
      fsTouchX = e.touches[0].clientX;
    }, { passive: true });
    fullscreenEl.addEventListener('touchend', e => {
      if (fullscreenState && isEmbed(parseMedia(fullscreenState.imgs[fullscreenState.idx]).src)) return;
      const dx = e.changedTouches[0].clientX - fsTouchX;
      if (Math.abs(dx) < 50) return;
      dx < 0 ? navigateFullscreen(1) : navigateFullscreen(-1);
    }, { passive: true });
  }

  items.forEach(item => {
    item.addEventListener('click', () => openModal(item));
    item.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(item); });
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
  });

  // Auto-open project from URL param (?open=N)
  const openParam = new URLSearchParams(window.location.search).get('open');
  if (openParam !== null) {
    const idx = parseInt(openParam, 10);
    if (!isNaN(idx) && items[idx]) {
      openModal(items[idx]);
      history.replaceState(null, '', window.location.pathname);
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  const modalLangBtn = document.getElementById('modalLangToggle');
  if (modalLangBtn) modalLangBtn.addEventListener('click', toggleLang);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) { closeModal(); return; }
    if (e.target.tagName === 'IMG' && e.target.closest('.modal__media')) {
      if (galleryState) {
        openFullscreen(galleryState.imgs, galleryState.idx);
      } else {
        openFullscreen(e.target.src, 0);
      }
    }
  });

  document.addEventListener('keydown', e => {
    const fsOpen = fullscreenEl && fullscreenEl.classList.contains('open');
    if (e.key === 'Escape') {
      if (fsOpen) { closeFullscreen(); return; }
      closeModal();
      return;
    }
    if (e.key === 'ArrowLeft') {
      if (fsOpen) { navigateFullscreen(-1); return; }
      if (!galleryState) return;
      galleryState.idx = (galleryState.idx - 1 + galleryState.imgs.length) % galleryState.imgs.length;
      renderGallery(overlay.querySelector('.modal__media'), galleryState.imgs, galleryState.idx, overlay.querySelector('.modal__title').textContent);
    }
    if (e.key === 'ArrowRight') {
      if (fsOpen) { navigateFullscreen(1); return; }
      if (!galleryState) return;
      galleryState.idx = (galleryState.idx + 1) % galleryState.imgs.length;
      renderGallery(overlay.querySelector('.modal__media'), galleryState.imgs, galleryState.idx, overlay.querySelector('.modal__title').textContent);
    }
  });
}

// ── Hero Slideshow ───────────────────────────────────────────
function initHeroSlideshow() {
  const link = document.getElementById('heroSlideLink');
  if (!link) return;

  const slides = link.querySelectorAll('.hero__slide');
  const dots   = link.querySelectorAll('.hero__slide-dot');
  const catEl  = document.getElementById('heroSlideCat');
  const nameEl = document.getElementById('heroSlideName');
  const fillEl = document.getElementById('heroProgressFill');

  const PROJECTS = [
    { cat: '3D / Arquitectura',      catEn: '3D / Architecture',     name: 'Exposición de Vivienda',               nameEn: 'Housing Exhibition',                   idx: 1 },
    { cat: 'Arte Digital / Fan Art', catEn: 'Digital Art / Fan Art', name: 'Nuka-Cola: Holiday Spirit Never Ends', nameEn: 'Nuka-Cola: Holiday Spirit Never Ends', idx: 2 },
    { cat: '3D / Motion',            catEn: '3D / Motion',           name: 'Anuncio Educativo ESCALA',             nameEn: 'ESCALA Educational Ad',                idx: 3 },
    { cat: 'Arte Digital / Fan Art', catEn: 'Digital Art / Fan Art', name: 'Dettlaff — Fan Art',                   nameEn: 'Dettlaff — Fan Art',                   idx: 4 },
    { cat: '3D / Motion',            catEn: '3D / Motion',           name: 'Anuncio Conceptual Canon',             nameEn: 'Conceptual Canon Ad',                  idx: 5 },
  ];

  const DURATION = 5000;
  let current    = 0;
  let tickTimer  = null;  // setTimeout for next slide
  let slideStart = null;  // Date.now() when slide last resumed (null while paused)
  let elapsed    = 0;     // ms accumulated on current slide before last pause

  function updateText(p) {
    const en = currentLang === 'en';
    if (catEl)  catEl.textContent = en ? p.catEn  : p.cat;
    if (nameEl) nameEl.textContent = en ? p.nameEn : p.name;
  }

  function animateProgress(fromMs) {
    if (!fillEl) return;
    const remaining = DURATION - fromMs;
    fillEl.style.transition = 'none';
    fillEl.style.width = (fromMs / DURATION * 100) + '%';
    fillEl.offsetWidth; // reflow
    fillEl.style.transition = `width ${remaining}ms linear`;
    fillEl.style.width = '100%';
  }

  function freezeProgress() {
    if (!fillEl) return;
    const w  = parseFloat(getComputedStyle(fillEl).width);
    const pw = parseFloat(getComputedStyle(fillEl.parentElement).width);
    fillEl.style.transition = 'none';
    fillEl.style.width = (w / pw * 100) + '%';
  }

  function scheduleNext(delay) {
    clearTimeout(tickTimer);
    tickTimer = setTimeout(() => goTo((current + 1) % slides.length), delay);
  }

  function goTo(idx) {
    clearTimeout(tickTimer);
    slides[current].classList.remove('hero__slide--active');
    dots[current].classList.remove('hero__slide-dot--active');
    current = idx;
    slides[current].classList.add('hero__slide--active');
    dots[current].classList.add('hero__slide-dot--active');
    updateText(PROJECTS[current]);
    link.href = `projects.html?open=${PROJECTS[current].idx}`;
    elapsed = 0;
    slideStart = null;
    if (!link.matches(':hover')) {
      slideStart = Date.now();
      animateProgress(0);
      scheduleNext(DURATION);
    }
  }

  link.addEventListener('mouseenter', () => {
    clearTimeout(tickTimer);
    if (slideStart !== null) {
      elapsed += Date.now() - slideStart;
      slideStart = null;
    }
    freezeProgress();
  });

  link.addEventListener('mouseleave', () => {
    const remaining = DURATION - elapsed;
    if (remaining <= 0) {
      goTo((current + 1) % slides.length);
    } else {
      slideStart = Date.now();
      animateProgress(elapsed);
      scheduleNext(remaining);
    }
  });

  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      goTo(parseInt(dot.dataset.slide, 10));
    });
  });

  window._heroSlideshowUpdateLang = () => updateText(PROJECTS[current]);
  elapsed = 0;
  slideStart = Date.now();
  updateText(PROJECTS[0]);
  animateProgress(0);
  scheduleNext(DURATION);
}

// ── Contact form (Google Apps Script + Gmail) ──────────────────
// URL del Web App desplegado en script.google.com (ver apps-script/Code.gs).
// Si se crea una implementación nueva (no solo una nueva versión), esta
// URL cambia y hay que actualizarla aquí.
const CONTACT_FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzQrNW2uInzSoJiPdO883zCqjnWyGqPFPem8_q3FMtar63xoZsTv7QLOjGVvJdXKkvJPg/exec';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.getElementById('formSuccess');
    const error = document.getElementById('formError');
    const errorEmail = document.getElementById('formErrorEmail');
    if (error) error.style.display = 'none';
    if (errorEmail) errorEmail.style.display = 'none';

    // Honeypot: campo oculto que solo rellenan los bots. Si viene relleno,
    // se descarta el envío sin avisar (ni éxito ni error) para no delatar el filtro.
    const honeypot = document.getElementById('website');
    if (honeypot && honeypot.value.trim()) return;

    const emailInput = document.getElementById('email');
    if (emailInput && !EMAIL_PATTERN.test(emailInput.value.trim())) {
      if (errorEmail) errorEmail.style.display = 'block';
      return;
    }

    const formData = new FormData(form);

    // Apps Script Web Apps no soportan CORS estándar, así que la
    // petición se hace en modo 'no-cors': el navegador no deja leer
    // la respuesta, pero el envío llega igualmente al script.
    fetch(CONTACT_FORM_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        if (success) {
          success.style.display = 'block';
          form.reset();
          setTimeout(() => { success.style.display = 'none'; }, 5000);
        }
      })
      .catch(() => {
        if (error) {
          error.style.display = 'block';
          setTimeout(() => { error.style.display = 'none'; }, 6000);
        }
      });
  });
}

// ── Scroll: shrink nav shadow ────────────────────────────────
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 20 ? 'var(--bg-line)' : 'transparent';
  }, { passive: true });
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.addEventListener('click', toggleLang);
  applyLang();
  setActiveNav();
  initMobileNav();
  initSkillBars();
  initFilter();
  initModal();
  initContactForm();
  initNavScroll();
  initHeroSlideshow();
});
