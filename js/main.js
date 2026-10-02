/* =========================================================
   Hussam Itani · Portfolio – vanilla JS, no build step
   ========================================================= */
(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ---------- Tech stack (single source of truth) ----------
     icon: Devicon class (https://devicon.dev), fav: shows a ★ */
  const STACK = [
    { name: 'Laravel',        icon: 'devicon-laravel-original',  cat: 'backend',  fav: true },
    { name: 'PHP',            icon: 'devicon-php-plain',         cat: 'backend',  fav: true },
    { name: 'Livewire',       icon: 'devicon-livewire-plain',    cat: 'backend',  fav: true },
    { name: 'Composer',       icon: 'devicon-composer-line',     cat: 'backend' },
    { name: 'Symfony',        icon: 'devicon-symfony-original',  cat: 'backend' },
    { name: 'Node.js',        icon: 'devicon-nodejs-plain',      cat: 'backend' },
    { name: 'RabbitMQ',       icon: 'devicon-rabbitmq-original', cat: 'backend' },
    { name: 'Vue.js',         icon: 'devicon-vuejs-plain',       cat: 'frontend', fav: true },
    { name: 'Alpine.js',      icon: 'devicon-alpinejs-original', cat: 'frontend' },
    { name: 'Tailwind CSS',   icon: 'devicon-tailwindcss-original', cat: 'frontend', fav: true },
    { name: 'JavaScript',     icon: 'devicon-javascript-plain',  cat: 'frontend' },
    { name: 'TypeScript',     icon: 'devicon-typescript-plain',  cat: 'frontend' },
    { name: 'Vite',           icon: 'devicon-vitejs-plain',      cat: 'frontend' },
    { name: 'HTML5',          icon: 'devicon-html5-plain',       cat: 'frontend' },
    { name: 'CSS3',           icon: 'devicon-css3-plain',        cat: 'frontend' },
    { name: 'Sass',           icon: 'devicon-sass-original',     cat: 'frontend' },
    { name: 'MySQL',          icon: 'devicon-mysql-original',    cat: 'devops' },
    { name: 'MariaDB',        icon: 'devicon-mariadb-original',  cat: 'devops' },
    { name: 'PostgreSQL',     icon: 'devicon-postgresql-plain',  cat: 'devops' },
    { name: 'Redis',          icon: 'devicon-redis-plain',       cat: 'devops' },
    { name: 'Elasticsearch',  icon: 'devicon-elasticsearch-plain', cat: 'devops' },
    { name: 'Docker',         icon: 'devicon-docker-plain',      cat: 'devops',   fav: true },
    { name: 'Nginx',          icon: 'devicon-nginx-original',    cat: 'devops' },
    { name: 'Linux',          icon: 'devicon-linux-plain',       cat: 'devops' },
    { name: 'Bash',           icon: 'devicon-bash-plain',        cat: 'devops' },
    { name: 'AWS',            icon: 'devicon-amazonwebservices-plain-wordmark', cat: 'devops' },
    { name: 'Git',            icon: 'devicon-git-plain',         cat: 'devops' },
    { name: 'GitHub Actions', icon: 'devicon-githubactions-plain', cat: 'devops' },
    { name: 'GitLab CI',      icon: 'devicon-gitlab-plain',      cat: 'devops' },
    { name: 'Sentry',         icon: 'devicon-sentry-original',   cat: 'devops' },
    { name: 'PhpStorm',       icon: 'devicon-phpstorm-plain',    cat: 'devops' },
    { name: 'Postman',        icon: 'devicon-postman-plain',     cat: 'devops' },
    { name: 'Jira',           icon: 'devicon-jira-plain',        cat: 'devops' },
    { name: 'Unity',          icon: 'devicon-unity-plain',       cat: 'gamedev',  fav: true },
    { name: 'C#',             icon: 'devicon-csharp-plain',      cat: 'gamedev' },
    { name: 'Blender',        icon: 'devicon-blender-original',  cat: 'gamedev' },
    { name: 'Unreal Engine',  icon: 'devicon-unrealengine-original', cat: 'gamedev' },
    { name: 'Godot',          icon: 'devicon-godot-plain',       cat: 'gamedev' },
  ];

  /* ---------- Floating diagonal icons ---------- */
  function initFloaters() {
    const box = $('#floaters');
    if (!box || reducedMotion) return;
    const count = window.innerWidth < 720 ? 14 : 28;
    const rnd = (min, max) => Math.random() * (max - min) + min;
    // Laravel-ish icons more often
    const pool = [...STACK, ...STACK.filter(s => s.fav), ...STACK.filter(s => s.fav)];

    for (let i = 0; i < count; i++) {
      const tech = pool[Math.floor(Math.random() * pool.length)];
      const depth = Math.random();                // 0 = far, 1 = near
      const el = document.createElement('span');
      el.className = 'floater';
      el.dataset.depth = depth.toFixed(2);
      el.style.cssText = `
        --x:${rnd(-20, 90)}vw;
        --size:${(14 + depth * 26).toFixed(0)}px;
        --alpha:${(0.12 + depth * 0.28).toFixed(2)};
        --blur:${((1 - depth) * 1.6).toFixed(1)}px;
        --dur:${rnd(18, 38).toFixed(1)}s;
        --delay:${(-rnd(0, 38)).toFixed(1)}s;
        --dx:${rnd(35, 70).toFixed(0)}vh;
        --rot:${rnd(-200, 200).toFixed(0)}deg;`;
      el.innerHTML = `<i class="${tech.icon} colored" title="${tech.name}"></i>`;
      box.appendChild(el);
    }

    // subtle mouse parallax – nearer icons move more
    const floaters = $$('.floater', box);
    let raf = null;
    window.addEventListener('pointermove', (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const mx = (e.clientX / window.innerWidth - 0.5) * 2;
        const my = (e.clientY / window.innerHeight - 0.5) * 2;
        floaters.forEach(f => {
          const d = parseFloat(f.dataset.depth) * 30;
          f.firstElementChild.style.setProperty('--px', `${(-mx * d).toFixed(1)}px`);
          f.firstElementChild.style.setProperty('--py', `${(-my * d).toFixed(1)}px`);
        });
        raf = null;
      });
    }, { passive: true });
  }

  /* ---------- Cursor glow ---------- */
  function initCursorGlow() {
    const glow = $('#cursorGlow');
    if (!glow || reducedMotion) return;
    window.addEventListener('pointermove', (e) => {
      glow.style.transform = `translate(${e.clientX - 210}px, ${e.clientY - 210}px)`;
    }, { passive: true });
  }

  /* ---------- Typed roles ---------- */
  function initTyped() {
    const el = $('#typed');
    if (!el) return;
    const roles = [
      'Laravel Professional @ byte5',
      'PHP Developer for 10+ years',
      'php artisan make:awesome',
      'Clean Code & Architecture Nerd',
      'Unity & VR Game Developer',
      'Computervisualistik Graduate',
    ];
    if (reducedMotion) { el.textContent = roles[0]; return; }
    let r = 0, c = 0, deleting = false;
    const tick = () => {
      const word = roles[r];
      el.textContent = word.slice(0, c);
      if (!deleting && c === word.length) { deleting = true; return setTimeout(tick, 1800); }
      if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; }
      c += deleting ? -1 : 1;
      setTimeout(tick, deleting ? 35 : 70);
    };
    tick();
  }

  /* ---------- Terminal animation ---------- */
  function initTerminal() {
    const term = $('#terminal');
    if (!term) return;
    const lines = [
      ['<span class="t-prompt">➜</span> php artisan about --only=developer', 600],
      ['', 200],
      ['  <span class="t-key">Name</span> ............... <span class="t-str">Hussam Itani</span>', 120],
      ['  <span class="t-key">Role</span> ............... <span class="t-str">Laravel Professional</span>', 120],
      ['  <span class="t-key">Company</span> ............ <span class="t-str">byte5</span>', 120],
      ['  <span class="t-key">Experience</span> ......... <span class="t-str">10+ years</span>', 120],
      ['  <span class="t-key">Studied</span> ............ <span class="t-str">Computervisualistik</span>', 120],
      ['  <span class="t-key">Hobby</span> .............. <span class="t-str">Game Dev (Unity, VR)</span>', 120],
      ['', 300],
      ['<span class="t-prompt">➜</span> php artisan test', 600],
      ['', 200],
      ['  <span class="t-ok">✓</span> writes clean code', 150],
      ['  <span class="t-ok">✓</span> ships on time', 150],
      ['  <span class="t-ok">✓</span> loves games', 150],
      ['', 100],
      ['  Tests:  <span class="t-ok">3 passed</span>  <span class="t-red">♥</span>', 0],
    ];
    if (reducedMotion) { term.innerHTML = lines.map(l => l[0]).join('\n'); return; }

    const prefix = '<span class="t-prompt">➜</span> ';
    let done = '';
    let i = 0;
    const next = () => {
      if (i >= lines.length) return;
      const [html, pause] = lines[i++];
      if (!html.startsWith(prefix)) {         // output lines appear instantly
        done += html + '\n';
        term.innerHTML = done;
        return setTimeout(next, pause);
      }
      const cmd = html.slice(prefix.length);  // commands are typed char by char
      let c = 0;
      const typeCmd = () => {
        term.innerHTML = done + prefix + cmd.slice(0, c) + '<span class="caret">▌</span>';
        if (c++ < cmd.length) return setTimeout(typeCmd, 45);
        done += html + '\n';
        term.innerHTML = done;
        setTimeout(next, pause);
      };
      typeCmd();
    };
    setTimeout(next, 900);
  }

  /* ---------- Stack grid + filter ---------- */
  function initStack() {
    const grid = $('#stackGrid');
    if (!grid) return;
    grid.innerHTML = STACK.map(s => `
      <div class="stack-item${s.fav ? ' is-fav' : ''}" data-cat="${s.cat}">
        <i class="${s.icon} colored" aria-hidden="true"></i>
        <span>${s.name}</span>
      </div>`).join('');

    $$('.stack-tab').forEach(tab => tab.addEventListener('click', () => {
      $$('.stack-tab').forEach(t => t.classList.toggle('is-active', t === tab));
      const f = tab.dataset.filter;
      $$('.stack-item', grid).forEach((item, idx) => {
        const show = f === 'all' || item.dataset.cat === f;
        item.classList.toggle('is-hidden', !show);
        item.classList.remove('pop');
        if (show) {
          void item.offsetWidth; // restart animation
          item.style.animationDelay = `${(idx % 12) * 30}ms`;
          item.classList.add('pop');
        }
      });
    }));

    // 3D tilt on hover
    if (reducedMotion) return;
    grid.addEventListener('pointermove', (e) => {
      const item = e.target.closest('.stack-item');
      if (!item) return;
      const r = item.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      item.style.transform = `perspective(500px) rotateX(${-y * 16}deg) rotateY(${x * 16}deg) translateY(-4px)`;
    });
    grid.addEventListener('pointerout', (e) => {
      const item = e.target.closest('.stack-item');
      if (item && !item.contains(e.relatedTarget)) item.style.transform = '';
    });
  }

  /* ---------- Reveal on scroll + counters ---------- */
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        $$('[data-count]', entry.target).forEach(countUp);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    $$('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
      io.observe(el);
    });
  }

  function countUp(el) {
    const target = parseInt(el.dataset.count, 10);
    if (reducedMotion) { el.textContent = target; return; }
    const start = performance.now();
    const dur = 1400;
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Nav ---------- */
  function initNav() {
    const nav = $('#nav');
    const toggle = $('#navToggle');
    const links = $$('#navLinks a');

    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    links.forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }));

    // highlight current section
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${e.target.id}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(s => io.observe(s));
  }

  /* ---------- Mini game: Shred Koblenz ---------- */
  function initGame() {
    const canvas = $('#game');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const overlay = $('#gameOverlay');
    const msg = $('#gameMsg');
    const scoreEl = $('#score');
    const bestEl = $('#best');
    const startBtn = $('#gameStart');

    let best = 0;
    try { best = parseInt(localStorage.getItem('shred-best') || '0', 10); } catch (_) {}
    bestEl.textContent = best;

    const keys = { left: false, right: false };
    let state, running = false, last = 0;

    const reset = () => {
      state = {
        x: W / 2, vx: 0,
        speed: 180,
        dist: 0,
        obstacles: [],
        flakes: Array.from({ length: 40 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2 + 1 })),
        trail: [],
        spawn: 0,
        t: 0,
      };
    };

    const spawn = () => {
      const type = Math.random() < 0.8 ? 'tree' : 'rock';
      state.obstacles.push({ type, x: 20 + Math.random() * (W - 40), y: H + 30, r: type === 'tree' ? 14 : 11 });
    };

    const update = (dt) => {
      const s = state;
      s.t += dt;
      s.speed = 180 + s.t * 9;
      const dir = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
      s.vx += dir * 1400 * dt;
      s.vx *= Math.pow(0.02, dt);
      s.x = Math.max(14, Math.min(W - 14, s.x + s.vx * dt));
      s.dist += s.speed * dt;

      s.spawn -= dt;
      if (s.spawn <= 0) { spawn(); s.spawn = Math.max(0.22, 0.8 - s.t * 0.015); }

      s.obstacles.forEach(o => (o.y -= s.speed * dt));
      s.obstacles = s.obstacles.filter(o => o.y > -40);
      s.flakes.forEach(f => { f.y -= s.speed * dt * 0.3 * f.r; if (f.y < 0) { f.y = H; f.x = Math.random() * W; } });

      s.trail.push({ x: s.x, y: 120 });
      s.trail.forEach(p => (p.y -= s.speed * dt));
      s.trail = s.trail.filter(p => p.y > -10);

      const score = Math.floor(s.dist / 10);
      scoreEl.textContent = score;

      for (const o of s.obstacles) {
        if (Math.hypot(o.x - s.x, o.y - 120) < o.r + 8) return gameOver(score);
      }
    };

    const draw = () => {
      const s = state;
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#f4f9ff'); g.addColorStop(1, '#dbe9fb');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

      // board trail
      ctx.strokeStyle = '#b8cbe6'; ctx.lineWidth = 3; ctx.beginPath();
      s.trail.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      ctx.stroke();

      // obstacles
      s.obstacles.forEach(o => {
        if (o.type === 'tree') {
          ctx.fillStyle = '#6b4f3a'; ctx.fillRect(o.x - 3, o.y + 8, 6, 10);
          ctx.fillStyle = '#1f7a5a';
          ctx.beginPath(); ctx.moveTo(o.x, o.y - 22); ctx.lineTo(o.x - 16, o.y + 10); ctx.lineTo(o.x + 16, o.y + 10); ctx.fill();
          ctx.fillStyle = '#fff';
          ctx.beginPath(); ctx.moveTo(o.x, o.y - 22); ctx.lineTo(o.x - 6, o.y - 10); ctx.lineTo(o.x + 6, o.y - 10); ctx.fill();
        } else {
          ctx.fillStyle = '#7a8399';
          ctx.beginPath(); ctx.ellipse(o.x, o.y, 13, 9, 0, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(o.x - 2, o.y - 5, 8, 3, 0, 0, Math.PI * 2); ctx.fill();
        }
      });

      // snowboarder
      const tilt = Math.max(-0.6, Math.min(0.6, s.vx / 400));
      ctx.save(); ctx.translate(s.x, 120); ctx.rotate(tilt);
      ctx.fillStyle = '#ff2d20'; ctx.fillRect(-15, 4, 30, 5);               // board (Laravel red)
      ctx.fillStyle = '#22d3ee'; ctx.fillRect(-6, -10, 12, 14);              // body
      ctx.fillStyle = '#ffd7b5'; ctx.beginPath(); ctx.arc(0, -15, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#1b2340'; ctx.fillRect(-6, -20, 12, 4);               // beanie
      ctx.restore();

      // snow
      ctx.fillStyle = '#ffffffdd';
      s.flakes.forEach(f => { ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill(); });
    };

    const loop = (now) => {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      update(dt);
      if (running) draw();
      requestAnimationFrame(loop);
    };

    const start = () => {
      if (running) return;
      reset();
      running = true;
      overlay.classList.add('is-hidden');
      last = performance.now();
      requestAnimationFrame(loop);
    };

    const gameOver = (score) => {
      running = false;
      if (score > best) {
        best = score;
        bestEl.textContent = best;
        try { localStorage.setItem('shred-best', String(best)); } catch (_) {}
      }
      const quips = ['Wipeout! 🌲', 'Tree: 1 – You: 0', 'Should\'ve used VR 🥽', 'Bailed! Try again', 'Nice run! 🏂'];
      $('.game__title', overlay).textContent = quips[Math.floor(Math.random() * quips.length)];
      msg.innerHTML = `Score: <b>${score}</b> · Press <kbd>Space</kbd> or tap`;
      startBtn.textContent = 'Retry';
      overlay.classList.remove('is-hidden');
    };

    // controls
    const gameInView = () => {
      const r = canvas.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    window.addEventListener('keydown', (e) => {
      if (!gameInView()) return;
      if (['ArrowLeft', 'a', 'A'].includes(e.key)) { keys.left = true; if (running) e.preventDefault(); }
      if (['ArrowRight', 'd', 'D'].includes(e.key)) { keys.right = true; if (running) e.preventDefault(); }
      if (e.code === 'Space' && !running) { e.preventDefault(); start(); }
    });
    window.addEventListener('keyup', (e) => {
      if (['ArrowLeft', 'a', 'A'].includes(e.key)) keys.left = false;
      if (['ArrowRight', 'd', 'D'].includes(e.key)) keys.right = false;
    });
    startBtn.addEventListener('click', (e) => { e.stopPropagation(); start(); });

    const game = canvas.parentElement;
    const touch = (e) => {
      if (!running) return;
      const r = canvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      keys.left = x < r.width / 2;
      keys.right = !keys.left;
    };
    const release = () => { keys.left = keys.right = false; };
    game.addEventListener('pointerdown', touch);
    game.addEventListener('pointermove', (e) => { if (e.buttons) touch(e); });
    window.addEventListener('pointerup', release);
    game.addEventListener('pointercancel', release);

    reset();
    draw();
  }

  /* ---------- Konami code easter egg ---------- */
  function initKonami() {
    const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let pos = 0;
    window.addEventListener('keydown', (e) => {
      pos = e.key === code[pos] ? pos + 1 : (e.key === code[0] ? 1 : 0);
      if (pos === code.length) {
        pos = 0;
        document.body.classList.toggle('party');
        console.log('%c🎮 Party mode toggled! +30 lives', 'color:#ff2d20;font-size:16px');
      }
    });
  }

  /* ---------- Console greeting for fellow devs ---------- */
  console.log(
    '%cHey dev 👋%c\nLooking under the hood? This page is plain HTML, CSS & JS.\nSource: https://github.com/hussamitani/hussamitani.github.io',
    'color:#ff2d20;font-size:20px;font-weight:bold', 'color:#8b90ab'
  );

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    $('#year').textContent = new Date().getFullYear();
    initFloaters();
    initCursorGlow();
    initTyped();
    initTerminal();
    initStack();
    initReveal();
    initNav();
    initGame();
    initKonami();
  });
})();
