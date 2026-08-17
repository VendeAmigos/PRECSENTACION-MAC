/**
 * SWISS MINIMALIST PRESENTATION ENGINE — MAC ARCHIVE
 * Powered by GSAP & Web Audio API
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- ESTADO DE LA APLICACIÓN ---
  const state = {
    currentSlide: 0,
    totalSlides: 6,
    isHeroActive: true,
    isAnimating: false,
    soundEnabled: true,
    gridVisible: true,
    topics: [
      { id: 0, num: '01', title: '01 / 06 — LOS INICIOS (LISA & APPLE II)', dock: '01 // LOS INICIOS Y EL PROYECTO LISA' },
      { id: 1, num: '02', title: '02 / 06 — 1984 MACINTOSH 128K', dock: '02 // 1984: LA REVOLUCIÓN DEL MACINTOSH' },
      { id: 2, num: '03', title: '03 / 06 — LA ERA MAC OS CLÁSICO', dock: '03 // MAC OS CLÁSICO (1984 - 2001)' },
      { id: 3, num: '04', title: '04 / 06 — SISTEMAS HISTÓRICOS & EXPERIMENTALES', dock: '04 // APPLE DOS, A/UX Y COPLAND' },
      { id: 4, num: '05', title: '05 / 06 — LA COMPRA DE NEXT Y MAC OS X', dock: '05 // NEXTSTEP Y EL NACIMIENTO DE OS X' },
      { id: 5, num: '06', title: '06 / 06 — EL LEGADO (IOS A VISIONOS)', dock: '06 // EL LEGADO Y LA COMPUTACIÓN ESPACIAL' }
    ]
  };

  // --- ELEMENTOS DEL DOM ---
  const introHero = document.getElementById('intro-hero');
  const macMonument = document.getElementById('mac-monument');
  const macText = document.getElementById('mac-text');
  const btnStart = document.getElementById('btn-start-presentation');
  
  // Elementos de la Manzana Interactiva
  const appleInteractive = document.getElementById('apple-interactive');
  const heroAppleSvg = document.getElementById('hero-apple-svg');
  const biteShape = document.getElementById('bite-shape');
  const appleStateText = document.getElementById('apple-state-text');
  const biteSparkles = document.querySelectorAll('.bite-sparkles .sparkle');

  const mainHeader = document.getElementById('main-header');
  const presentationDock = document.getElementById('presentation-dock');
  const brandClickable = document.getElementById('brand-clickable');
  
  const slides = document.querySelectorAll('.slide-section');
  const navDots = document.querySelectorAll('.nav-dot');
  
  const headerActiveTopic = document.getElementById('header-active-topic');
  const dockTopicLabel = document.getElementById('dock-topic-label');
  const counterCurrent = document.getElementById('counter-current');
  const counterTotal = document.getElementById('counter-total');
  
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  
  const btnToggleSound = document.getElementById('btn-toggle-sound');
  const btnToggleGrid = document.getElementById('btn-toggle-grid');
  const btnToggleFs = document.getElementById('btn-toggle-fullscreen');
  const gridOverlay = document.querySelector('.swiss-grid-overlay');
  
  const shortcutsModal = document.getElementById('shortcuts-modal');
  const btnHelpShortcuts = document.getElementById('btn-help-shortcuts');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');

  // --- SINTETIZADOR DE AUDIO RETRO SWISS (WEB AUDIO API) ---
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  function playSound(type) {
    if (!state.soundEnabled) return;
    try {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      
      const now = audioCtx.currentTime;

      if (type === 'bite') {
        // Mordisco físico / Crujiente crunch mecánico de la manzana
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);
        
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

        // Ruido blanco crujiente del mordisco
        const bufferSize = Math.floor(audioCtx.sampleRate * 0.07);
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
        }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        const noiseGain = audioCtx.createGain();
        noiseGain.gain.setValueAtTime(0.22, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        noise.connect(noiseGain);
        noiseGain.connect(audioCtx.destination);
        
        osc.start(now);
        osc.stop(now + 0.09);
        noise.start(now);
      } else if (type === 'start') {
        // Mac Retro Chord Chime sutil sintetizado (F major chord cálido)
        const freqs = [349.23, 440.0, 523.25, 698.46]; // F4, A4, C5, F5
        freqs.forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now);
          
          gain.gain.setValueAtTime(0.001, now);
          gain.gain.exponentialRampToValueAtTime(0.08 / (idx + 1), now + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

          osc.connect(gain);
          gain.connect(audioCtx.destination);
          
          osc.start(now);
          osc.stop(now + 1.8);
        });
      } else if (type === 'click') {
        // Clic de precisión mecánica suiza
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.03);
        
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'slide') {
        // Sweep aerodinámico de transición
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start(now);
        osc.stop(now + 0.14);
      }
    } catch (e) {
      console.warn('Audio Context interaction:', e);
    }
  }

  // --- ANIMACIÓN INICIAL DE TRANSFORMACIÓN / ZOOM-OUT DE "MAC" CON MORDISCO ---
  function enterPresentation(targetIndex = 0) {
    if (!state.isHeroActive || state.isAnimating) return;
    state.isAnimating = true;

    const targetSlideEl = slides[targetIndex] || slides[0];

    // 1. Efecto de mordisco de la manzana
    playSound('bite');
    if (appleStateText) appleStateText.textContent = 'MORDIDA 1984';
    if (appleInteractive) appleInteractive.classList.add('is-bitten');

    setTimeout(() => {
      playSound('start');
    }, 180);

    // Preparar las clases del slide destino antes de animar para evitar destellos
    slides.forEach((s, idx) => {
      s.classList.toggle('active-slide', idx === targetIndex);
      s.classList.toggle('prev-slide', idx < targetIndex);
    });

    // Timeline cinemática unificada: Mordisco -> Zoom Hero -> Entrar Diapositiva Destino
    const tl = gsap.timeline({
      onComplete: () => {
        introHero.classList.add('stage-hidden');
        state.isHeroActive = false;
        state.isAnimating = false;
        state.currentSlide = targetIndex;
        updateUIElements(targetIndex);
        // Limpiar solo transformaciones al finalizar para asegurar la mejor interactividad sin interferir en la opacidad
        gsap.set(targetSlideEl.querySelectorAll('.slide-container, .slide-meta-row, .slide-title, .editorial-lead, .swiss-info-card, .pillar-card, .timeline-entry, .catalog-card, .block-step, .family-card, .swiss-quote-block, .manifesto-box, .swiss-alert-banner, .quote-architectural, .summary-final-box, .image-frame-swiss, .tech-spec-bar'), { clearProps: 'transform' });
      }
    });

    // A. Mordisco en el SVG con retroceso elástico y partículas
    tl.to(biteShape, {
      scale: 1,
      duration: 0.18,
      ease: 'back.out(2)'
    })
    .fromTo(heroAppleSvg, 
      { scale: 1, rotate: 0 },
      { scale: 1.18, rotate: -6, duration: 0.15, yoyo: true, repeat: 1, ease: 'power2.out' },
      '<'
    )
    .fromTo(biteSparkles,
      { scale: 0, opacity: 1, x: 0, y: 0 },
      { 
        scale: 1.2, 
        opacity: 0, 
        x: (i) => [14, 24, 18, 28, 20][i] || 15, 
        y: (i) => [-16, -6, 8, 18, 4][i] || 0,
        stagger: 0.02, 
        duration: 0.45, 
        ease: 'power3.out' 
      },
      '<'
    )
    // B. Zoom dinámico del monumento MAC & Manzana hacia el header mientras se descompone el Hero
    .to(macText, {
      scale: 1.35,
      letterSpacing: '0.12em',
      duration: 0.35,
      ease: 'power2.in'
    }, '+=0.05')
    .to(macMonument, {
      scale: 0.15,
      y: -window.innerHeight * 0.4,
      x: -window.innerWidth * 0.4,
      opacity: 0,
      duration: 0.6,
      ease: 'expo.inOut'
    }, '-=0.1')
    .to('.hero-eyebrow, .hero-subtitle, .swiss-cta-button, .hero-hint', {
      y: 30,
      opacity: 0,
      duration: 0.3,
      stagger: 0.04,
      ease: 'power2.in'
    }, '-=0.55')
    .to(introHero, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.25')
    
    // C. Mostrar Header y Dock
    .to([mainHeader, presentationDock], {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: 'power3.out',
      onStart: () => {
        mainHeader.classList.remove('hidden-init');
        presentationDock.classList.remove('hidden-init');
      }
    }, '-=0.25')

    // D. Entrar elementos de la diapositiva en la misma timeline fluida de 0 a 1
    .fromTo(targetSlideEl.querySelector('.slide-container'),
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.3'
    )
    .fromTo(targetSlideEl.querySelector('.slide-meta-row'),
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '<'
    )
    .fromTo(targetSlideEl.querySelector('.slide-title'),
      { opacity: 0, x: 25 },
      { opacity: 1, x: 0, duration: 0.4, ease: 'power3.out' }, '-=0.25'
    )
    .fromTo(targetSlideEl.querySelector('.editorial-lead'),
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }, '-=0.25'
    )
    .fromTo(targetSlideEl.querySelectorAll('.swiss-info-card, .pillar-card, .timeline-entry, .catalog-card, .block-step, .family-card'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }, '-=0.25'
    )
    .fromTo(targetSlideEl.querySelectorAll('.swiss-quote-block, .manifesto-box, .swiss-alert-banner, .quote-architectural, .summary-final-box'),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '-=0.25'
    )
    .fromTo(targetSlideEl.querySelector('.image-frame-swiss'),
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out' }, '-=0.35'
    )
    .fromTo(targetSlideEl.querySelector('.tech-spec-bar'),
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2'
    );
  }

  // Volver a la portada Hero monumental (Restaura la manzana entera intacta)
  function returnToHero() {
    if (state.isHeroActive || state.isAnimating) return;
    state.isAnimating = true;
    playSound('click');

    const tl = gsap.timeline({
      onComplete: () => {
        state.isHeroActive = true;
        state.isAnimating = false;
      }
    });

    tl.to([mainHeader, presentationDock], {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        mainHeader.classList.add('hidden-init');
        presentationDock.classList.add('hidden-init');
      }
    })
    .set(introHero, { display: 'flex', opacity: 0 })
    .to(introHero, {
      opacity: 1,
      duration: 0.4,
      onStart: () => {
        introHero.classList.remove('stage-hidden');
        // Restaurar estado de la manzana
        if (appleInteractive) appleInteractive.classList.remove('is-bitten');
        if (appleStateText) appleStateText.textContent = 'INTACTA';
        gsap.set(biteShape, { scale: 0 });
        gsap.set(heroAppleSvg, { scale: 1, rotate: 0 });
      }
    })
    .fromTo(macMonument, 
      { scale: 0.4, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.2)' }
    )
    .fromTo('.hero-eyebrow, .hero-subtitle, .swiss-cta-button, .hero-hint',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' }
    );
  }

  // --- NAVEGACIÓN ENTRE DIAPOSITIVAS ---
  function goToSlide(targetIndex, playAudio = true, force = false) {
    if (targetIndex < 0 || targetIndex >= state.totalSlides || state.isAnimating) return;
    if (!force && targetIndex === state.currentSlide && !state.isHeroActive) return;

    state.isAnimating = true;
    if (playAudio) playSound('slide');

    const prevIndex = state.currentSlide >= 0 ? state.currentSlide : 0;
    const direction = targetIndex >= prevIndex ? 1 : -1;
    state.currentSlide = targetIndex;
    state.isHeroActive = false;

    const currentSlideEl = slides[prevIndex];
    const nextSlideEl = slides[targetIndex];

    // Actualizar UI badges
    updateUIElements(targetIndex);

    // Cancelar animaciones previas en todos los elementos
    gsap.killTweensOf(slides);
    slides.forEach(s => gsap.killTweensOf(s.querySelectorAll('*')));

    const isSameSlide = (prevIndex === targetIndex && currentSlideEl.classList.contains('active-slide'));

    const tl = gsap.timeline({
      onComplete: () => {
        slides.forEach((s, idx) => {
          s.classList.toggle('active-slide', idx === targetIndex);
          s.classList.toggle('prev-slide', idx < targetIndex);
        });
        state.isAnimating = false;
        // Limpiar solo transformaciones al terminar la animación para mantener interactividad limpia
        gsap.set(nextSlideEl.querySelectorAll('.slide-container, .slide-meta-row, .slide-title, .editorial-lead, .swiss-info-card, .pillar-card, .timeline-entry, .catalog-card, .block-step, .family-card, .swiss-quote-block, .manifesto-box, .swiss-alert-banner, .quote-architectural, .summary-final-box, .image-frame-swiss, .tech-spec-bar'), { clearProps: 'transform' });
      }
    });

    if (!isSameSlide && currentSlideEl && currentSlideEl.classList.contains('active-slide')) {
      // Animar salida del slide anterior limpiamente
      tl.to(currentSlideEl.querySelector('.slide-container'), {
        x: -30 * direction,
        opacity: 0,
        duration: 0.22,
        ease: 'power2.in'
      })
      .call(() => {
        currentSlideEl.classList.remove('active-slide');
        currentSlideEl.classList.toggle('prev-slide', prevIndex < targetIndex);
      });
    }

    // Activar slide destino de forma fluida
    tl.call(() => {
      slides.forEach((s, idx) => {
        if (idx !== targetIndex) s.classList.remove('active-slide');
      });
      nextSlideEl.classList.add('active-slide');
      nextSlideEl.classList.remove('prev-slide');
    })
    // Animación de entrada de todos los elementos (0 -> 1 sin destellos)
    .fromTo(nextSlideEl.querySelector('.slide-container'),
      { opacity: 0, x: 25 * direction },
      { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }
    )
    .fromTo(nextSlideEl.querySelector('.slide-meta-row'),
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '<'
    )
    .fromTo(nextSlideEl.querySelector('.slide-title'),
      { opacity: 0, x: 20 * direction },
      { opacity: 1, x: 0, duration: 0.35, ease: 'power3.out' }, '-=0.2'
    )
    .fromTo(nextSlideEl.querySelector('.editorial-lead'),
      { opacity: 0, x: 15 * direction },
      { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }, '-=0.25'
    )
    .fromTo(nextSlideEl.querySelectorAll('.swiss-info-card, .pillar-card, .timeline-entry, .catalog-card, .block-step, .family-card'),
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out' }, '-=0.2'
    )
    .fromTo(nextSlideEl.querySelectorAll('.swiss-quote-block, .manifesto-box, .swiss-alert-banner, .quote-architectural, .summary-final-box'),
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.25'
    )
    .fromTo(nextSlideEl.querySelector('.image-frame-swiss'),
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' }, '-=0.3'
    )
    .fromTo(nextSlideEl.querySelector('.tech-spec-bar'),
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2'
    );
  }

  function updateUIElements(index) {
    const topic = state.topics[index];
    
    // Header & Dock labels
    if (headerActiveTopic) headerActiveTopic.textContent = topic.title;
    if (dockTopicLabel) dockTopicLabel.textContent = topic.dock;
    
    // Counter
    if (counterCurrent) counterCurrent.textContent = topic.num;
    
    // Nav dots
    navDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });

    // Prev / Next button states
    if (btnPrev) btnPrev.disabled = (index === 0);
    if (btnNext) btnNext.disabled = (index === state.totalSlides - 1);
  }

  // --- LISTENERS DE INTERACCIÓN ---

  // Botón y clic en Hero
  btnStart.addEventListener('click', () => enterPresentation(0));
  macMonument.addEventListener('click', () => enterPresentation(0));
  
  // Brand Header para volver
  brandClickable.addEventListener('click', returnToHero);

  // Botones Anterior / Siguiente
  btnPrev.addEventListener('click', () => {
    if (state.currentSlide > 0) goToSlide(state.currentSlide - 1);
  });

  btnNext.addEventListener('click', () => {
    if (state.currentSlide < state.totalSlides - 1) goToSlide(state.currentSlide + 1);
  });

  // Clic en Dots del Navegador
  navDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
      if (state.isHeroActive) {
        enterPresentation(slideIndex);
      } else {
        goToSlide(slideIndex);
      }
    });
  });

  // Toggle de Sonido
  btnToggleSound.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    const icon = document.getElementById('sound-icon');
    if (icon) {
      icon.setAttribute('data-lucide', state.soundEnabled ? 'volume-2' : 'volume-x');
      if (window.lucide) window.lucide.createIcons();
    }
    if (state.soundEnabled) playSound('click');
  });

  // Toggle de Retícula Suiza
  btnToggleGrid.addEventListener('click', () => {
    state.gridVisible = !state.gridVisible;
    gridOverlay.classList.toggle('hidden', !state.gridVisible);
    playSound('click');
  });

  // Toggle Pantalla Completa
  btnToggleFs.addEventListener('click', () => {
    playSound('click');
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
      document.getElementById('fs-icon').setAttribute('data-lucide', 'minimize');
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      document.getElementById('fs-icon').setAttribute('data-lucide', 'maximize');
    }
    if (window.lucide) window.lucide.createIcons();
  });

  // Modal de Atajos de Teclado
  function openModal() {
    shortcutsModal.classList.add('modal-active');
    shortcutsModal.setAttribute('aria-hidden', 'false');
    playSound('click');
  }

  function closeModal() {
    shortcutsModal.classList.remove('modal-active');
    shortcutsModal.setAttribute('aria-hidden', 'true');
    playSound('click');
  }

  btnHelpShortcuts.addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);

  // --- GESTIÓN DE EVENTOS DE TECLADO ---
  window.addEventListener('keydown', (e) => {
    // Si el modal está abierto, Esc lo cierra
    if (shortcutsModal.classList.contains('modal-active')) {
      if (e.key === 'Escape') closeModal();
      return;
    }

    if (state.isHeroActive) {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        enterPresentation();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
        e.preventDefault();
        if (state.currentSlide < state.totalSlides - 1) {
          goToSlide(state.currentSlide + 1);
        }
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        if (state.currentSlide > 0) {
          goToSlide(state.currentSlide - 1);
        }
        break;

      case 'Escape':
        returnToHero();
        break;

      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
        const target = parseInt(e.key, 10) - 1;
        goToSlide(target);
        break;

      case 'f':
      case 'F':
        btnToggleFs.click();
        break;

      case 'g':
      case 'G':
        btnToggleGrid.click();
        break;

      case '?':
        openModal();
        break;
    }
  });

  // --- SOPORTE PARA RUEDA DEL RATÓN (MOUSE WHEEL) ---
  let wheelTimeout = null;
  window.addEventListener('wheel', (e) => {
    if (state.isHeroActive || shortcutsModal.classList.contains('modal-active') || state.isAnimating) return;
    
    if (wheelTimeout) return;
    wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 500);

    if (e.deltaY > 30) {
      if (state.currentSlide < state.totalSlides - 1) goToSlide(state.currentSlide + 1);
    } else if (e.deltaY < -30) {
      if (state.currentSlide > 0) goToSlide(state.currentSlide - 1);
    }
  }, { passive: true });

  // --- SOPORTE PARA TOUCH / SWIPE EN DISPOSITIVOS MÓVILES ---
  let touchStartX = 0;
  let touchStartY = 0;

  window.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (state.isHeroActive) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0 && state.currentSlide < state.totalSlides - 1) {
        goToSlide(state.currentSlide + 1);
      } else if (diffX < 0 && state.currentSlide > 0) {
        goToSlide(state.currentSlide - 1);
      }
    }
  }, { passive: true });

});
