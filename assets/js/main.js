/**
 * WELLOSOPHY INTERACTIVE SCRIPTS & ANIMATION ENGINE
 * Brand: Wellosophy by Oriflame
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 2. ANIMATED NUMBER COUNTERS FOR STATS
  const statNumbers = document.querySelectorAll('.stat-number[data-counter]');
  let hasAnimatedStats = false;

  const animateCounters = () => {
    statNumbers.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-counter'));
      const prefix = stat.getAttribute('data-prefix') || '';
      const suffix = stat.getAttribute('data-suffix') || '';
      const duration = 1600; // ms
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out cubic formula
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.round(target * easeOut);

        stat.textContent = `${prefix}${currentVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = `${prefix}${target}${suffix}`;
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedStats) {
          hasAnimatedStats = true;
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  // 3. VIDEO TABS SWITCHER
  const videoTabs = document.querySelectorAll('.video-tab');
  const videoIframe = document.getElementById('heroVideoIframe');
  const videoCaption = document.getElementById('heroVideoCaption');
  const videoYtLink = document.getElementById('heroVideoYtLink');

  const videoData = {
    'axis': {
      src: 'https://www.youtube.com/embed/GuhB3Pt8Dwg',
      title: 'Tầm Quan Trọng Của Sự Cân Bằng Trục Não Da Ruột',
      url: 'https://youtu.be/GuhB3Pt8Dwg'
    },
    'digest': {
      src: 'https://www.youtube.com/embed/Mqcm3wIyHyY',
      title: 'Làm Sao Để Hệ Tiêu Hoá Khoẻ Mạnh?',
      url: 'https://youtu.be/Mqcm3wIyHyY'
    }
  };

  videoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      videoTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetKey = tab.getAttribute('data-video');
      const data = videoData[targetKey];
      if (data && videoIframe) {
        videoIframe.src = data.src;
        if (videoCaption) videoCaption.textContent = data.title;
        if (videoYtLink) {
          videoYtLink.href = data.url;
          videoYtLink.innerHTML = `Video không hiển thị? Xem trực tiếp trên YouTube →`;
        }
      }
    });
  });

  // 4. FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 5. IMAGE LIGHTBOX MODAL
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  const openLightbox = (src, alt) => {
    if (lightbox && lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || 'Phóng to ảnh phản hồi khách hàng';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  document.querySelectorAll('.lightbox-trigger').forEach(el => {
    el.addEventListener('click', () => {
      const img = el.querySelector('img') || el;
      if (img && img.src) {
        openLightbox(img.src, img.alt);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // 6. STICKY BAR & BACK TO TOP CONTROLLER ON SCROLL
  const stickyBar = document.querySelector('.sticky-bar');
  const floatTopBtn = document.getElementById('floatTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sticky bar appears after scrolling past 200px
    if (stickyBar) {
      if (scrollY > 200) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    }

    // Back to top button appears after 450px
    if (floatTopBtn) {
      if (scrollY > 450) {
        floatTopBtn.classList.add('visible');
      } else {
        floatTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (floatTopBtn) {
    floatTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 7. SMOOTH SCROLL FOR IN-PAGE LINKS
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 8. BUTTON CLICK RIPPLE EFFECT
  document.querySelectorAll('.btn-primary-gold, .btn-big-order, .sticky-btn-order, .btn-secondary-zalo').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = 'ripple-effect';

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });
});
