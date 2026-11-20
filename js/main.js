/* ==================================================
   INTERAKSI PORTFOLIO — Rafi Ahmad Habibi
   Berkas ini membaca data dari js/data.js.
   Tidak memerlukan library eksternal.
================================================== */
(() => {
  'use strict';
  const data = window.portfolioData;
  if (!data) { console.error('js/data.js belum dimuat.'); return; }
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const el = (tag, cls = '', txt = null) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (txt !== null) node.textContent = String(txt);
    return node;
  };
  const validUrl = value => {
    if (!value || typeof value !== 'string') return false;
    try { return ['http:', 'https:'].includes(new URL(value, document.baseURI).protocol); }
    catch { return false; }
  };

  // Foto profil, email, dan status magang.
  function renderProfile() {
    const p = data.profile;
    $('#availability-label').textContent = p.openToInternship ? 'Open to internship opportunities' : 'Portfolio & selected work';
    if (!p.openToInternship) $('.status-dot')?.remove();
    $('.hero-description').textContent = p.tagline;
    $('#projects-count').textContent = `${data.projects.length} Projects`;
    const about = $('#about-text');
    about.replaceChildren(...p.bio.map(para => el('p', '', para)));
    const avatar = $('#profile-avatar');
    if (validUrl(p.photo)) {
      const image = el('img'); image.alt = `Foto ${p.name}`; image.src = p.photo;
      image.addEventListener('error', () => avatar.replaceChildren(document.createTextNode(p.initials || 'RA')), { once: true });
      avatar.replaceChildren(image);
    } else avatar.textContent = p.initials || 'RA';
    const cv = $('#download-cv');
    if (validUrl(p.cvFile)) {
      cv.disabled = false; cv.removeAttribute('title');
      cv.addEventListener('click', () => {
        const url = new URL(p.cvFile, document.baseURI);
        if (url.origin === location.origin) {
          const a = el('a'); a.href = url.href; a.download = 'Rafi-Ahmad-Habibi-CV.pdf'; document.body.append(a); a.click(); a.remove();
        } else window.open(url.href, '_blank', 'noopener,noreferrer');
      });
    }
    // Perbarui link pribadi jika datanya berubah.
    if (p.email) {
      $$('a[href^="mailto:"]').forEach(a => {
        a.href = `mailto:${p.email}`;
        if (a.classList.contains('contact-email')) a.textContent = `${p.email} ↗`;
        else if (a.closest('.hero-meta')) a.textContent = `↗ ${p.email}`;
      });
    }
    if (p.location) {
      $('.hero-meta span').textContent = `⌖ ${p.location}`;
      $('.contact-location').textContent = `⌖ ${p.location}`;
    }
    const socials = p.socialLinks || {};
    $$('a[href*="github.com/rafihabibi16"]').filter(a => !a.closest('.project-actions')).forEach(a => { if (validUrl(socials.github)) a.href = socials.github; });
    $$('a[href*="linkedin.com/in/"]').forEach(a => { if (validUrl(socials.linkedin)) a.href = socials.linkedin; });
  }

  // Kelompok skill sebagai kartu.
  function renderSkills() {
    const frag = document.createDocumentFragment();
    (data.skillCategories || []).forEach(group => {
      const card = el('article', 'skill-card');
      const head = el('div', 'skill-heading');
      const icon = el('span', 'skill-icon', group.icon || '✳'); icon.setAttribute('aria-hidden', 'true');
      head.append(icon, el('h3', '', group.title));
      const tags = el('div', 'skill-tags');
      (group.skills || []).forEach(skill => tags.append(el('span', '', skill)));
      card.append(head, el('p', '', group.description || ''), tags);
      frag.append(card);
    });
    $('#skills-grid').replaceChildren(frag);
  }

  let currentGallery = [];
  let galleryIndex = 0;
  const dialog = $('#gallery-dialog');
  function updateGallery() {
    if (!currentGallery.length) return;
    const shot = currentGallery[galleryIndex];
    $('#gallery-image').src = shot.src;
    $('#gallery-image').alt = shot.caption || 'Screenshot proyek';
    $('#gallery-caption').textContent = shot.caption || '';
    $('#gallery-counter').textContent = `${galleryIndex + 1} / ${currentGallery.length}`;
    $('#gallery-prev').hidden = currentGallery.length <= 1;
    $('#gallery-next').hidden = currentGallery.length <= 1;
  }
  function openGallery(project, startIndex = 0) {
    const shots = Array.isArray(project.gallery) && project.gallery.length
      ? project.gallery : (project.image ? [{ src: project.image, caption: project.title }] : []);
    if (!shots.length) return;
    currentGallery = shots; galleryIndex = Math.min(Math.max(0, startIndex), shots.length - 1);
    $('#gallery-title').textContent = project.title;
    updateGallery();
    if (typeof dialog.showModal === 'function') dialog.showModal();
  }
  $('#gallery-close').addEventListener('click', () => dialog.close());
  $('#gallery-prev').addEventListener('click', () => { galleryIndex = (galleryIndex + currentGallery.length - 1) % currentGallery.length; updateGallery(); });
  $('#gallery-next').addEventListener('click', () => { galleryIndex = (galleryIndex + 1) % currentGallery.length; updateGallery(); });
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  document.addEventListener('keydown', e => {
    if (!dialog.open || currentGallery.length < 2) return;
    if (e.key === 'ArrowRight') $('#gallery-next').click();
    if (e.key === 'ArrowLeft') $('#gallery-prev').click();
  });

  // ==========================================
  // DIALOG DETAIL PROYEK
  // Dipisah dari galeri agar pembaca bisa melihat
  // peran, kontribusi, fitur, dan stack secara jelas.
  // ==========================================
  const projectDialog = $('#project-dialog');
  const projectDetailClose = $('#project-detail-close');

  function makeBulletList(items, parent) {
    const fragment = document.createDocumentFragment();
    (Array.isArray(items) ? items : []).forEach(item => {
      if (typeof item === 'string' && item.trim()) {
        fragment.append(el('li', '', item.trim()));
      }
    });
    parent.replaceChildren(fragment);
  }

  // Slideshow di dalam modal detail, agar foto bisa digeser tanpa keluar halaman proyek.
  let detailScreenshots = [];
  let detailSlideIndex = 0;
  let detailActiveProject = null;

  function updateDetailSlide() {
    const section = $('#project-detail-slideshow');
    if (!detailScreenshots.length) {
      section.hidden = true;
      return;
    }
    section.hidden = false;
    const current = detailScreenshots[detailSlideIndex];
    const image = $('#project-detail-image');
    image.src = current.src;
    image.alt = current.caption || `Screenshot ${detailActiveProject?.title || 'proyek'}`;
    $('#project-detail-caption').textContent = current.caption || '';
    $('#project-detail-counter').textContent = `${detailSlideIndex + 1} / ${detailScreenshots.length}`;
    const hasMultiple = detailScreenshots.length > 1;
    $('#project-detail-prev').hidden = !hasMultiple;
    $('#project-detail-next').hidden = !hasMultiple;
    const dots = $('#project-detail-dots');
    const fragment = document.createDocumentFragment();
    if (hasMultiple) detailScreenshots.forEach((shot, i) => {
      const button = el('button', `detail-dot${i === detailSlideIndex ? ' is-active' : ''}`);
      button.type = 'button';
      button.setAttribute('aria-label', `Tampilkan foto ${i + 1}: ${shot.caption || 'Screenshot proyek'}`);
      button.setAttribute('aria-pressed', String(i === detailSlideIndex));
      button.addEventListener('click', () => {
        detailSlideIndex = i;
        updateDetailSlide();
      });
      fragment.append(button);
    });
    dots.replaceChildren(fragment);
  }

  function moveDetailSlide(offset) {
    if (detailScreenshots.length < 2) return;
    detailSlideIndex = (detailSlideIndex + offset + detailScreenshots.length) % detailScreenshots.length;
    updateDetailSlide();
  }

  $('#project-detail-prev').addEventListener('click', () => moveDetailSlide(-1));
  $('#project-detail-next').addEventListener('click', () => moveDetailSlide(1));
  $('#project-detail-enlarge').addEventListener('click', () => {
    if (detailActiveProject) openGallery(detailActiveProject, detailSlideIndex);
  });

  // Mouse/keyboard tetap natural; swipe kiri-kanan mendukung perangkat sentuh.
  const slideSurface = $('#project-detail-cover');
  let startTouchX = 0, startTouchY = 0;
  slideSurface.addEventListener('touchstart', event => {
    if (event.touches.length !== 1) return;
    startTouchX = event.touches[0].clientX;
    startTouchY = event.touches[0].clientY;
  }, { passive: true });
  slideSurface.addEventListener('touchend', event => {
    if (!event.changedTouches.length || detailScreenshots.length < 2) return;
    const dx = event.changedTouches[0].clientX - startTouchX;
    const dy = event.changedTouches[0].clientY - startTouchY;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) moveDetailSlide(dx < 0 ? 1 : -1);
  }, { passive: true });

  document.addEventListener('keydown', event => {
    // Galeri penuh menjadi prioritas ketika dua dialog sedang terbuka.
    if (!projectDialog.open || dialog.open) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); moveDetailSlide(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); moveDetailSlide(-1); }
  });

  function openProjectDetails(project) {
    if (projectDialog.open) return;
    $('#project-detail-category').textContent = project.category || 'Project';
    $('#project-detail-title').textContent = project.title || 'Detail proyek';
    $('#project-detail-subtitle').textContent = project.subtitle || '';
    $('#project-detail-description').textContent = project.description || 'Deskripsi belum ditambahkan.';

    detailActiveProject = project;
    detailScreenshots = (Array.isArray(project.gallery) && project.gallery.length
      ? project.gallery : (validUrl(project.image) ? [{ src: project.image, caption: project.title }] : []))
      .filter(shot => shot && validUrl(shot.src));
    detailSlideIndex = 0;
    updateDetailSlide();

    const metaItems = [project.year, project.status, project.projectType,
      project.teamSize ? `${project.teamSize} anggota tim` : null].filter(Boolean);
    const meta = $('#project-detail-meta');
    meta.textContent = metaItems.join('  ·  ');
    meta.hidden = metaItems.length === 0;
    $('#project-detail-stack-label').textContent = project.stackLabel || 'Tech Stack';

    const role = $('#project-detail-role');
    role.textContent = project.role ? `Peran: ${project.role}` : '';
    role.hidden = !project.role;

    const contributions = (Array.isArray(project.contributions) ? project.contributions : [])
      .filter(item => typeof item === 'string' && item.trim());
    makeBulletList(contributions, $('#project-detail-contributions'));
    $('#project-detail-contributions').hidden = contributions.length === 0;
    $('#project-detail-contributions-empty').hidden = contributions.length > 0;

    const features = (Array.isArray(project.highlights) ? project.highlights : [])
      .filter(item => typeof item === 'string' && item.trim());
    makeBulletList(features, $('#project-detail-features'));
    $('#project-detail-features').parentElement.hidden = features.length === 0;

    const tech = $('#project-detail-tech');
    const techFrag = document.createDocumentFragment();
    (project.technologies || []).forEach(t => techFrag.append(el('span', '', t)));
    tech.replaceChildren(techFrag);

    const links = $('#project-detail-links');
    links.replaceChildren();

    const screenshots = el('button', 'detail-gallery-button', 'Lihat galeri screenshot ↗');
    screenshots.type = 'button';
    screenshots.addEventListener('click', () => openGallery(project, detailSlideIndex));
    links.append(screenshots);

    [
      ['Buka repository GitHub ↗', project.github],
      ['Buka live demo ↗', project.demo]
    ].forEach(([label, url]) => {
      if (!validUrl(url)) return;
      const link = el('a', '', label);
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      links.append(link);
    });

    projectDialog.showModal();
    // Setiap detail selalu dibuka dari bagian atas.
    projectDialog.scrollTop = 0;
  }

  projectDetailClose.addEventListener('click', () => projectDialog.close());
  projectDialog.addEventListener('click', event => {
    if (event.target === projectDialog) projectDialog.close();
  });

  // Kartu proyek menampilkan thumbnail asli, teknologi, dan galeri screenshot.
  function renderProjects() {
    const frag = document.createDocumentFragment();
    (data.projects || []).forEach((p, index) => {
      const card = el('article', 'project-card project-card-clickable');
      const media = el('button', `project-media ${p.theme || 'blue'}${p.portrait ? ' is-portrait' : ''}`);
      media.type = 'button'; media.setAttribute('aria-label', `Lihat detail proyek ${p.title}`);
      const img = el('img'); img.src = p.image; img.alt = p.imageAlt || p.title; img.loading = 'lazy'; img.decoding = 'async';
      img.addEventListener('error', () => {
        media.replaceChildren(el('span', 'fallback-image', p.title));
      }, { once: true });
      media.append(img, el('span', 'media-badge', 'Lihat detail proyek ↗'));
      media.addEventListener('click', () => openProjectDetails(p));
      const content = el('div', 'project-body');
      const over = el('div', 'project-overline');
      over.append(el('span', '', p.category || 'Project'), el('span', '', String(index + 1).padStart(2, '0')));
      const tech = el('div', 'project-tech');
      (p.technologies || []).forEach(t => tech.append(el('span', '', t)));
      const actions = el('div', 'project-actions');
      const detailButton = el('button', 'project-detail-action', 'Detail & Kontribusi ↗');
      detailButton.type = 'button'; detailButton.addEventListener('click', () => openProjectDetails(p));
      actions.append(detailButton);
      const gal = el('button', '', 'Screenshots ↗'); gal.type = 'button'; gal.addEventListener('click', () => openGallery(p)); actions.append(gal);
      if (validUrl(p.github)) {
        const a = el('a', '', 'GitHub ↗'); a.href = p.github; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.setAttribute('aria-label', `Repository GitHub ${p.title} (tab baru)`); actions.append(a);
      } else actions.append(el('span', 'link-unavailable', 'Repo belum tersedia'));
      if (validUrl(p.demo)) {
        const a = el('a', '', 'Live demo ↗'); a.href = p.demo; a.target = '_blank'; a.rel = 'noopener noreferrer'; actions.append(a);
      }
      const projectHeading = el('h3');
      const titleButton = el('button', 'project-title-button', p.title);
      titleButton.type = 'button';
      titleButton.addEventListener('click', () => openProjectDetails(p));
      projectHeading.append(titleButton);
      if (p.status) {
        const projectStatus = el('span', 'project-status', p.status);
        content.append(over, projectHeading, el('p', 'project-subtitle', p.subtitle || ''), projectStatus, el('p', 'project-description', p.description || ''), tech, actions);
      } else {
        content.append(over, projectHeading, el('p', 'project-subtitle', p.subtitle || ''), el('p', 'project-description', p.description || ''), tech, actions);
      }
      card.append(media, content);
      // Klik area kosong dalam kartu juga membuka detail. Tautan/tombol di dalam
      // kartu tetap bekerja sendiri agar tidak membuka dua aksi sekaligus.
      card.addEventListener('click', event => {
        if (event.target.closest('a, button')) return;
        openProjectDetails(p);
      });
      frag.append(card);
    });
    $('#projects-grid').replaceChildren(frag);
  }

  // Publikasi jurnal dibangun dari data.js agar mudah ditambah di masa depan.
  // Teks menggunakan textContent, bukan HTML mentah.
  function renderPublications() {
    const container = $('#publications-list');
    if (!container) return;
    const frag = document.createDocumentFragment();
    (data.publications || []).forEach((paper, index) => {
      const card = el('article', 'publication-card');
      const side = el('div', 'publication-aside');
      side.append(
        el('span', 'publication-number', String(index + 1).padStart(2, '0')),
        el('span', 'publication-aside-label', 'JOURNAL ARTICLE'),
        el('span', 'publication-aside-year', paper.year || '—')
      );
      const main = el('div', 'publication-content');
      const meta = el('p', 'publication-meta', [paper.journal, paper.volume, paper.date].filter(Boolean).join('  •  '));
      const title = el('h3', '', paper.title || 'Publikasi');
      const subtitle = el('p', 'publication-original-title', paper.originalTitle || '');
      const authors = el('p', 'publication-authors');
      authors.append(el('strong', '', 'Penulis: '));
      (paper.authors || []).forEach((name, i) => {
        const author = el('span', name.toLowerCase() === 'rafi ahmad habibi' ? 'publication-author-self' : '', name);
        authors.append(author);
        if (i < paper.authors.length - 1) authors.append(document.createTextNode(', '));
      });
      const description = el('p', 'publication-description', paper.description || '');
      const bottom = el('div', 'publication-bottom');
      const metrics = el('div', 'publication-metrics');
      (paper.metrics || []).forEach(metric => {
        const stat = el('div', 'publication-metric');
        stat.append(el('strong', '', metric.value), el('span', '', metric.label));
        metrics.append(stat);
      });
      const tags = el('div', 'publication-tags');
      (paper.topics || []).forEach(topic => tags.append(el('span', '', topic)));
      const links = el('div', 'publication-links');
      [
        ['Baca artikel', paper.articleUrl],
        ['Download PDF', paper.pdfUrl],
        ['Lihat DOI', paper.doiUrl]
      ].forEach(([label, url]) => {
        if (!validUrl(url)) return;
        const a = el('a', '', `${label} ↗`);
        a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', `${label}: ${paper.title} (tab baru)`);
        links.append(a);
      });
      bottom.append(metrics, tags, links);
      main.append(meta, title, subtitle, authors, description, bottom);
      card.append(side, main);
      frag.append(card);
    });
    if (!(data.publications || []).length) frag.append(el('p', 'publication-description', 'Belum ada publikasi yang ditampilkan.'));
    container.replaceChildren(frag);
  }

  function renderTimeline(id, items) {
    const frag = document.createDocumentFragment();
    (items || []).forEach(item => {
      const card = el('article', 'timeline-item');
      card.append(el('span', 'timeline-time', item.period || 'Periode belum dicantumkan'), el('h4', '', item.title || ''), el('p', 'timeline-place', item.place || ''), el('p', 'timeline-desc', item.description || ''));
      if (item.meta) card.append(el('span', 'timeline-meta', item.meta));
      frag.append(card);
    });
    $(id).replaceChildren(frag);
  }

  function renderCertifications() {
    const frag = document.createDocumentFragment();
    (data.certifications || []).forEach(cert => {
      const card = el('article', 'cert-card');
      const bottom = el('div', 'cert-bottom');
      bottom.append(el('span', '', cert.year || 'Tahun belum dicantumkan'));
      if (validUrl(cert.credentialUrl)) {
        const link = el('a', '', 'Lihat sertifikat ↗'); link.href = cert.credentialUrl; link.rel = 'noopener noreferrer'; link.target = '_blank'; bottom.append(link);
      } else bottom.append(el('span', '', 'Tautan belum tersedia'));
      const symbol = el('div', 'cert-symbol', '✳'); symbol.setAttribute('aria-hidden', 'true');
      card.append(symbol, el('h3', '', cert.title), el('p', 'cert-issuer', cert.issuer || 'Penyelenggara belum dicantumkan'), bottom);
      frag.append(card);
    });
    $('#certifications-grid').replaceChildren(frag);
  }

  // Preferensi tema disimpan di browser, tanpa library eksternal.
  function setupTheme() {
    let saved = null;
    try { saved = localStorage.getItem('rafi-portfolio-theme'); } catch { /* browser membatasi storage */ }
    const button = $('#theme-toggle');
    const apply = theme => {
      document.documentElement.setAttribute('data-theme', theme);
      button.setAttribute('aria-label', `Ganti ke mode ${theme === 'dark' ? 'terang' : 'gelap'}`);
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    };
    apply(saved === 'dark' ? 'dark' : 'light');
    button.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('rafi-portfolio-theme', next); } catch { /* tetap berfungsi tanpa storage */ }
    });
  }

  function setupNavigation() {
    const header = $('#site-header'), menu = $('#menu-toggle'), links = $('#nav-links');
    const close = () => { links.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Buka menu'); };
    menu.addEventListener('click', () => {
      const open = !links.classList.contains('is-open');
      links.classList.toggle('is-open', open);
      menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    });
    $$('.nav-links a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('click', e => { if (!header.contains(e.target)) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', () => { if (window.innerWidth >= 900) close(); }, { passive: true });
    let scheduled = false;
    const sections = $$('.nav-links a').map(a => document.getElementById(a.hash.slice(1))).filter(Boolean);
    const update = () => {
      header.classList.toggle('scrolled', window.scrollY > 15);
      let active = sections[0]?.id;
      sections.forEach(s => { if (s.getBoundingClientRect().top <= 160) active = s.id; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) active = 'kontak';
      $$('.nav-links a').forEach(a => {
        const yes = a.hash === `#${active}`;
        a.classList.toggle('active', yes);
        if (yes) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
      });
      scheduled = false;
    };
    window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  // Perpindahan antarbagian yang lebih halus dan konsisten.
  // Hanya menangani klik link internal; scroll roda mouse tetap alami.
  function setupSmoothAnchorScrolling() {
    let animationId = null;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cancelAnimation = () => {
      if (animationId !== null) {
        window.cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    // Jangan paksa animasi saat pengguna menggulir sendiri.
    window.addEventListener('wheel', cancelAnimation, { passive: true });
    window.addEventListener('touchstart', cancelAnimation, { passive: true });
    window.addEventListener('keydown', event => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
        cancelAnimation();
      }
    });

    document.querySelectorAll('a[href^="#"]:not(.skip-link)').forEach(link => {
      link.addEventListener('click', event => {
        // Biarkan klik dengan modifier/tab baru mengikuti perilaku browser.
        if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        const hash = link.getAttribute('href');
        if (!hash || hash === '#') return;
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (!target) return;

        event.preventDefault();
        cancelAnimation();

        const headerHeight = document.getElementById('site-header')?.offsetHeight || 74;
        const start = window.scrollY;
        const absoluteTop = target.getBoundingClientRect().top + start;
        const maximumScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        const destination = Math.max(0, Math.min(maximumScroll, absoluteTop - headerHeight - 12));
        const distance = destination - start;

        // Tetap perbarui URL agar section bisa dibagikan/di-bookmark.
        if (window.location.hash !== hash) {
          try { window.history.pushState(null, '', hash); }
          catch { /* Izin history pada beberapa preview lokal dibatasi. */ }
        }

        // Menghormati pengaturan sistem untuk mengurangi gerakan.
        if (reducedMotion.matches || Math.abs(distance) < 2) {
          window.scrollTo({ top: destination, behavior: 'auto' });
          return;
        }

        // Durasi mengikuti jarak, tetapi tetap nyaman untuk halaman panjang.
        const duration = Math.min(1250, Math.max(720, 650 + Math.abs(distance) * 0.18));
        const started = performance.now();

        function animate(now) {
          const progress = Math.min(1, (now - started) / duration);
          // easeInOutCubic: awal dan akhir lembut tanpa efek berlebihan.
          const eased = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          window.scrollTo(0, start + distance * eased);
          if (progress < 1) animationId = window.requestAnimationFrame(animate);
          else animationId = null;
        }

        animationId = window.requestAnimationFrame(animate);
      });
    });
  }

  // Form email tidak menyimpan pesan dan tidak menjamin pengiriman otomatis.
  function setupContact() {
    $('#contact-form').addEventListener('submit', e => {
      e.preventDefault();
      const form = e.currentTarget;
      if (!form.reportValidity()) return;
      const name = $('#contact-name').value.trim();
      const email = $('#contact-email').value.trim();
      const message = $('#contact-message').value.trim();
      if (!name || !email || !message) return;
      const subject = encodeURIComponent(`Portfolio Contact — ${name}`);
      const body = encodeURIComponent(`Halo Rafi,\n\n${message}\n\nSalam,\n${name}\n${email}`);
      $('#form-status').textContent = 'Aplikasi email akan terbuka. Periksa pesan lalu klik Kirim.';
      location.href = `mailto:${data.profile.email}?subject=${subject}&body=${body}`;
    });
  }

  // Animasi ringan, dan konten tetap terbaca jika observer tidak tersedia.
  function setupReveal() {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = $$('.section-title, .about-text, .about-aside, .skill-card, .project-card, .publication-card, .journey-grid, .cert-card, .contact-copy, .contact-form');
    const obs = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible'); obs.unobserve(entry.target);
    }), { threshold: .04, rootMargin: '0px 0px -20px 0px' });
    targets.forEach(t => { t.classList.add('reveal'); obs.observe(t); });
    document.documentElement.classList.add('js-reveal');
  }

  // Jalankan setelah HTML selesai dimuat oleh defer.
  renderProfile();
  renderSkills();
  renderProjects();
  renderPublications();
  renderTimeline('#education-timeline', data.education);
  renderTimeline('#experience-timeline', data.experiences);
  renderCertifications();
  setupTheme();
  setupNavigation();
  setupSmoothAnchorScrolling();
  setupContact();
  $('#current-year').textContent = String(new Date().getFullYear());
  setupReveal();
})();
