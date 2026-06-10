'use strict';

// ================================================================
// PORTFOLIO DATA
// ================================================================
const DATA = {
    about: {
        name:       'Muhammad Edo Raduputu Aprima',
        nim:        '13523096',
        university: 'Informatics Engineering, Institut Teknologi Bandung',
        bio: 'Hi Pips! I am Muhammad Edo Raduputu Aprima.\n\nCurrently a student at CS ITB, building my foundation in software engineering. I\'m also exploring the intersections of AI and robotics, interested in how machines learn to perceive and act.\n\nOutside of engineering, I spend my time on the badminton court or with a camera in hand. Both teach me about strategy and perspective.',
    },

    projects: [
        {
            filename:    '3D-Catalog-Model-Viewer.md',
            title:       '3D Catalog Model Viewer',
            date:        'Aug 2025',
            size:        3128,
            description: 'Built to address the need for an interactive and easy-to-use 3D model viewer and catalog. Allows users to upload, view, and annotate 3D models directly in the browser.',
            features: [
                'Model catalog with auto thumbnail generation.',
                'Interactive controls: zoom, pan, and auto-rotate.',
                'Working Tree — hierarchical view of all objects within 3D model.',
                'Toggle visibility (hide/show) of each object.',
                'Complete annotation system with CRUD and drag & drop.',
                'Animation controls (play, pause, stop) for animated models.',
                'Runtime mesh optimization for faster loading.',
            ],
            tech:  ['PHP', 'Three.js', 'SQLite', 'JavaScript'],
            links: [{ label: 'GitHub Repository', url: 'https://github.com/itbdelaboprogramming/Mockup_Threejs_Php' }],
        },
        {
            filename:    'Applicant-Tracking-System.md',
            title:       'Applicant Tracking System (ATS)',
            date:        'Jun 2025',
            size:        4820,
            description: 'A CV parsing engine in Python implementing multiple algorithms: KMP, Boyer-Moore, and Aho-Corasick for exact keyword matching, Levenshtein Distance for fuzzy matching, and Regex for structured information extraction.',
            features: [
                'Exact keyword matching with KMP, Boyer-Moore, Aho-Corasick.',
                'Fuzzy matching using Levenshtein Distance.',
                'Structured info extraction with Regex.',
            ],
            tech:  ['Python', 'Flet', 'Docker', 'MySQL'],
            links: [{ label: 'GitHub Repository', url: 'https://github.com/Fariz36/Tubes3_10Internship0Job' }],
        },
        {
            filename:    'Logistics-Management-System.md',
            title:       'Logistics Management System',
            date:        'May 2025',
            size:        4610,
            description: 'Logistics management application grounded in SOLID principles and key Design Patterns (Factory, Singleton, Repository, Adapter) for a modular and scalable codebase.',
            features: [
                'Shipment management for couriers.',
                'Courier, shipment, and parcel management for admin.',
                'Plugin system customizable by user to display data analysis.',
                'CRUD for shipment, courier, and parcel management.',
            ],
            tech:  ['Java', 'JavaFX', 'SOLID', 'Design Patterns'],
            links: [{ label: 'GitHub Repository', url: 'https://github.com/Labpro-21/if2010-tubes-2-2425-owo' }],
        },
        {
            filename:    'Rush-Hour-Puzzle-Solver.md',
            title:       'Rush Hour Puzzle Solver',
            date:        'May 2025',
            size:        3240,
            description: 'Implements various pathfinding algorithms to solve the Rush Hour puzzle — maneuver the primary vehicle out of a gridlocked board through the exit in minimum moves.',
            features: [
                'Uninformed search (UCS, IDS) and informed search (A*, IDA*).',
                'User-selectable search strategies and heuristic functions.',
                'Multiple heuristics: Blocking Pieces and Manhattan Distance.',
            ],
            tech:  ['Java', 'Swing'],
            links: [{ label: 'GitHub Repository', url: 'https://github.com/poetoeee/Tucil3_13523096' }],
        },
        {
            filename:    'Little-Alchemy-2-Solver.md',
            title:       'Little Alchemy 2 Solver',
            date:        'Apr 2025',
            size:        4250,
            description: 'Full-stack solver application with a Go backend modeling game recipes as a directed graph, executing BFS/DFS algorithms to find all solution paths.',
            features: [
                'Go backend with graph-based recipe modeling.',
                'Interactive Next.js frontend for element input and result display.',
                'BFS/DFS algorithm selection with configurable recipe count.',
                'Full-stack architecture with Docker containerization.',
            ],
            tech:  ['Next.js', 'Go', 'Docker'],
            links: [
                { label: 'GitHub (FE)', url: 'https://github.com/rafifrs/Tubes2_FE_SayMyName' },
                { label: 'GitHub (BE)', url: 'https://github.com/Starath/Tubes2_BE_SayMyName' },
            ],
        },
        {
            filename:    'Audio-and-Image-Retrieval.md',
            title:       'Audio and Image Retrieval',
            date:        'Dec 2024',
            size:        4780,
            description: 'Full-stack retrieval system for audio (MIDI) and images. Python/Flask backend uses Mido for MIDI processing and Pillow/SciPy for image analysis, served via API to a Next.js client.',
            features: [
                'Audio retrieval system accepting MIDI input.',
                'Image retrieval system accepting PNG/JPG input.',
                'Results sorted by similarity percentage.',
                'Uses Mido for MIDI and Pillow/SciPy for image analysis.',
            ],
            tech:  ['Next.js', 'Python', 'Flask', 'Matplotlib'],
            links: [{ label: 'GitHub Repository', url: 'https://github.com/poetoeee/Algeo02-23024' }],
        },
        {
            filename:    'Renovation-Tracker.md',
            title:       'Renovation Tracker',
            date:        'Nov 2024',
            size:        2950,
            description: 'A desktop project management tool built with Python to track tasks, budgets, and timelines for home renovation projects.',
            features: [
                'Project management with sort and filter by status percentage.',
                'Task management with sort and filter by status percentage.',
                'Budget management for every task and project.',
                'CRUD for projects, tasks, and budget management.',
                'CRUD for project inspiration page.',
            ],
            tech:  ['Python', 'TKinter', 'MySQL'],
            links: [{ label: 'GitHub Repository', url: 'https://github.com/poetoeee/IF2150-2024-K02-G09-Rebuilt' }],
        },
    ],

    experience: {
        professional: [
            {
                period: 'Mar 2025 – Present',
                title:  'Research Software Engineer Intern',
                org:    'Nakayama de Labo',
                desc: [
                    'Designed and built a full-stack web app for a 3D model catalog with an interactive viewer using PHP and Three.js.',
                    'Implemented CRUD annotation system, object hierarchy panel, animation controls, and runtime mesh optimization.',
                ],
            },
            {
                period: 'Oct 2024 – Dec 2024',
                title:  'Computational Lab Practical Assistant',
                org:    'Comlabs-USDI ITB',
                desc: [
                    'Assisted and assessed 50+ students as practicum assistant for Computational Thinking 2024–2025.',
                ],
            },
        ],
        organizations: [
            {
                period: 'Jan 2025 – Present',
                title:  'Head of Programming Division — Dago Hoogeschool Team',
                org:    'Unit Robotika ITB',
                desc: [
                    'Leading development of a humanoid soccer robot using ROS 2, architecting its motion control, computer vision pipeline, and autonomous decision-making modules.',
                ],
            },
            {
                period: 'Jan 2025 – Present',
                title:  'Staff of Career Development',
                org:    'Himpunan Mahasiswa Informatika (HMIF) ITB',
                desc: [
                    'Authored career-focused articles on Medium by interviewing alumni, reaching 200+ readers.',
                    'Designed career mentoring events connecting students with professionals and alumni.',
                ],
            },
            {
                period: 'Apr 2024 – Apr 2025',
                title:  'Staff of Intracampus',
                org:    'Unit Bulutangkis ITB',
                desc: [
                    'Organized comparative studies with other student organizations to benchmark best practices.',
                    'Planned and executed the annual Open House event for promotion and new member recruitment.',
                ],
            },
            {
                period: 'May 2024 – Dec 2024',
                title:  'Staff of Internal Control Unit',
                org:    'GAMAIS ITB',
                desc: [
                    'Coordinated technical and non-technical training programs across all divisions to enhance organizational capabilities.',
                ],
            },
        ],
        volunteering: [],
        awards: [],
    },

    skills: {
        Languages:            'C/C++, Java, Python, Go, JavaScript/TypeScript, SQL, PHP',
        Frontend:             'React, Next.js, Three.js, Tailwind CSS, HTML/CSS',
        'Backend/Databases':  'Node.js, Flask, MySQL, SQLite, PostgreSQL',
        'AI/ML':              'Numpy, Scikit-Learn, Pandas, NLP, Computer Vision',
        Tools:                'Git, Docker, Nginx, Linux, Figma',
    },

    social: [
        { label: 'LinkedIn',  pad: 'LinkedIn', display: 'linkedin.com/in/muhammadedo',    url: 'https://linkedin.com/in/muhammadedo' },
        { label: 'GitHub',    pad: 'GitHub', display: 'github.com/poetoeee',             url: 'https://github.com/poetoeee' },
        { label: 'Instagram', pad: 'Instagram', display: 'instagram.com/edoaprima',          url: 'https://www.instagram.com/edoaprima/' },
        { label: 'Email',     pad: 'Email', display: 'muhammadedo017@gmail.com',         url: 'mailto:muhammadedo017@gmail.com' },
        { label: 'University',  pad: 'University', display: '13523096@std.stei.itb.ac.id',         url: 'mailto:13523096@std.stei.itb.ac.id' },
    ],
};

// ================================================================
// VIRTUAL FILESYSTEM
// ================================================================
const FS = {
    '~': {
        items: [
            { name: 'about',      type: 'dir', perms: 'drwxr-xr-x', size: 4096, date: 'Jun  7' },
            { name: 'projects',   type: 'dir', perms: 'drwxr-xr-x', size: 4096, date: 'Aug  1' },
            { name: 'experience', type: 'dir', perms: 'drwxr-xr-x', size: 4096, date: 'Jun  7' },
        ],
        hidden: [
            { name: '.bashrc',  type: 'file', perms: '-rw-r--r--', size: 3486, date: 'Jun  7' },
            { name: '.profile', type: 'file', perms: '-rw-r--r--', size:  807, date: 'Jun  7' },
            { name: '.secret',  type: 'file', perms: '-rw-------', size:   42, date: 'Jun  7' },
        ],
    },
    '~/about': {
        items: [
            { name: 'bio.txt',     type: 'file', perms: '-rw-r--r--', size: 1680, date: 'Jun  7' },
            { name: 'skills.json', type: 'file', perms: '-rw-r--r--', size: 2048, date: 'Jun  7' },
            { name: 'social.txt',  type: 'file', perms: '-rw-r--r--', size: 1024, date: 'Jun  7' },
        ],
        hidden: [],
    },
    '~/projects': {
        items: DATA.projects.map(p => ({
            name:  p.filename,
            type:  'file',
            perms: '-rw-r--r--',
            size:  p.size,
            date:  p.date.replace(' ', '  '),
        })),
        hidden: [],
    },
    '~/experience': {
        items: [
            { name: 'professional.log',  type: 'file', perms: '-rw-r--r--', size: 4096, date: 'Jun  7' },
            { name: 'organizations.log', type: 'file', perms: '-rw-r--r--', size: 6144, date: 'Jun  7' },
            { name: 'volunteering.log',  type: 'file', perms: '-rw-r--r--', size:  512, date: 'Jun  7' },
            { name: 'awards.log',        type: 'file', perms: '-rw-r--r--', size:  512, date: 'Jun  7' },
        ],
        hidden: [],
    },
};

// ================================================================
// TERMINAL STATE
// ================================================================
const state = {
    cwd:       '~',
    history:   [],
    histIdx:   -1,
    tabCache:  { input: '', matches: [], idx: -1 },
};

// ================================================================
// MODAL
// ================================================================
const dragState = { active: false, startX: 0, startY: 0, origLeft: 0, origTop: 0 };

function renderModalContent(project) {
    const badges  = project.tech.map(t => `<span class="tech-badge">${esc(t)}</span>`).join('');
    const links   = project.links.map(l =>
        `<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer" class="modal-link-btn">[${esc(l.label)}]</a>`
    ).join('');
    const features = project.features.map(f => `<li>${esc(f)}</li>`).join('');

    // src intentionally empty — set by openModal after onerror is wired up
    return `
<div class="modal-screenshot" id="modal-screenshot">
  <img id="modal-img" src="" alt="${esc(project.title)} screenshot">
  <div class="img-nav" id="img-nav">
    <button class="img-nav-btn" id="img-prev">&#8592;</button>
    <span class="img-counter" id="img-counter">1 / 1</span>
    <button class="img-nav-btn" id="img-next">&#8594;</button>
  </div>
</div>
<span class="readme-h1">${esc(project.title)}</span>
<span class="out-line readme-desc" style="margin-bottom:10px">${esc(project.description)}</span>
<span class="readme-h2">Key Features</span>
<ul class="readme-features" style="margin-bottom:10px">${features}</ul>
<span class="readme-h2">Tech Stack</span>
<div style="margin:6px 0 14px">${badges}</div>
<span class="readme-h2">Links</span>
<div class="readme-links" style="margin-top:6px">${links}</div>`;
}

function openModal(project) {
    modalTitleEl.textContent = project.filename;
    modalBody.innerHTML      = renderModalContent(project);
    modalOverlay.hidden      = false;

    // Reset to centered position each open
    modalWindow.style.left      = '';
    modalWindow.style.top       = '';
    modalWindow.style.transform = '';

    const wrap    = modalBody.querySelector('#modal-screenshot');
    const img     = modalBody.querySelector('#modal-img');
    const navEl   = modalBody.querySelector('#img-nav');
    const counter = modalBody.querySelector('#img-counter');
    const prevBtn = modalBody.querySelector('#img-prev');
    const nextBtn = modalBody.querySelector('#img-next');

    if (!img || !wrap) { inputEl.focus(); return; }

    const hasGallery = Array.isArray(project.images) && project.images.length > 0;

    if (hasGallery) {
        // Known images array → gallery mode
        const srcs = project.images.map(f => `assets/images/projects/${f}`);
        let cur = 0;

        function showSlide(idx) {
            img.src = srcs[idx];
            if (counter) counter.textContent = `${idx + 1} / ${srcs.length}`;
        }

        if (srcs.length > 1 && navEl) {
            navEl.style.display = 'flex';
            prevBtn.onclick = () => { cur = (cur - 1 + srcs.length) % srcs.length; showSlide(cur); };
            nextBtn.onclick = () => { cur = (cur + 1) % srcs.length;               showSlide(cur); };
        }

        img.onerror = () => { wrap.style.display = 'none'; };
        showSlide(0);

    } else {
        // Auto-detect: try extensions in order; hide container when all fail
        if (navEl) navEl.style.display = 'none';
        const base = `assets/images/projects/${project.filename.replace('.md', '')}`;
        const exts = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];
        let i = 0;
        function tryNext() {
            if (i < exts.length) { img.src = base + exts[i++]; }
            else { wrap.style.display = 'none'; }
        }
        img.onerror = tryNext;
        tryNext();
    }

    inputEl.focus();
}

function closeModal() {
    if (modalOverlay.hidden) return;
    modalOverlay.hidden = true;
    modalBody.innerHTML = '';
    document.getElementById('modal-titlebar').classList.remove('dragging');
    dragState.active = false;
    inputEl.focus();
}

function initModal() {
    const titlebar = document.getElementById('modal-titlebar');

    // --- Mouse drag ---
    titlebar.addEventListener('mousedown', e => {
        if (e.target.closest('.modal-ctrl')) return;
        e.preventDefault();
        dragState.active = true;
        dragState.startX = e.clientX;
        dragState.startY = e.clientY;

        const rect = modalWindow.getBoundingClientRect();
        // First drag: switch from centered transform to fixed left/top
        modalWindow.style.transform = 'none';
        modalWindow.style.left      = rect.left + 'px';
        modalWindow.style.top       = rect.top  + 'px';
        dragState.origLeft = rect.left;
        dragState.origTop  = rect.top;
        titlebar.classList.add('dragging');
    });

    document.addEventListener('mousemove', e => {
        if (!dragState.active) return;
        modalWindow.style.left = (dragState.origLeft + e.clientX - dragState.startX) + 'px';
        modalWindow.style.top  = (dragState.origTop  + e.clientY - dragState.startY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (!dragState.active) return;
        dragState.active = false;
        titlebar.classList.remove('dragging');
        // Persist current position as new origin for next drag
        dragState.origLeft = parseFloat(modalWindow.style.left) || dragState.origLeft;
        dragState.origTop  = parseFloat(modalWindow.style.top)  || dragState.origTop;
    });

    // --- Touch drag ---
    titlebar.addEventListener('touchstart', e => {
        if (e.target.closest('.modal-ctrl')) return;
        const t = e.touches[0];
        dragState.active = true;
        dragState.startX = t.clientX;
        dragState.startY = t.clientY;
        const rect = modalWindow.getBoundingClientRect();
        modalWindow.style.transform = 'none';
        modalWindow.style.left = rect.left + 'px';
        modalWindow.style.top  = rect.top  + 'px';
        dragState.origLeft = rect.left;
        dragState.origTop  = rect.top;
    }, { passive: true });

    document.addEventListener('touchmove', e => {
        if (!dragState.active) return;
        const t = e.touches[0];
        modalWindow.style.left = (dragState.origLeft + t.clientX - dragState.startX) + 'px';
        modalWindow.style.top  = (dragState.origTop  + t.clientY - dragState.startY) + 'px';
    }, { passive: true });

    document.addEventListener('touchend', () => { dragState.active = false; });

    // --- Close handlers ---
    modalCloseBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !modalOverlay.hidden) {
            e.preventDefault();
            closeModal();
        }
    });
}

// ================================================================
// HOVER CARD
// ================================================================
function positionHoverCard(anchor) {
    const rect  = anchor.getBoundingClientRect();
    const cardW = hoverCard.offsetWidth  || 268;
    const cardH = hoverCard.offsetHeight || 220;
    const vpW   = window.innerWidth;
    const vpH   = window.innerHeight;
    const gap   = 14;

    // Prefer right of the element; flip left if it would overflow
    let left = rect.right + gap;
    if (left + cardW > vpW - 8) left = rect.left - cardW - gap;

    // Align top with element; clamp to viewport
    let top = rect.top - 8;
    if (top + cardH > vpH - 8) top = vpH - cardH - 8;
    if (top < 8) top = 8;

    hoverCard.style.left = left + 'px';
    hoverCard.style.top  = top  + 'px';
}

function showHoverCard(project, anchor) {
    hcTitleEl.textContent = project.title;
    hcDescEl.textContent  = truncate(project.description, 88);
    hcBadgesEl.innerHTML  = project.tech.slice(0, 4)
        .map(t => `<span class="tech-badge" style="font-size:11px;padding:1px 6px">${esc(t)}</span>`)
        .join('');

    // Reset image state
    hcImgWrap.style.display = '';
    hcImg.src = '';

    hoverCard.hidden = false;
    positionHoverCard(anchor);

    // Load first available image
    if (Array.isArray(project.images) && project.images.length > 0) {
        hcImg.onerror = () => { hcImgWrap.style.display = 'none'; };
        hcImg.src = `assets/images/projects/${project.images[0]}`;
    } else {
        const base = `assets/images/projects/${project.filename.replace('.md', '')}`;
        const exts = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];
        let i = 0;
        function tryNextHc() {
            if (i < exts.length) { hcImg.src = base + exts[i++]; }
            else { hcImgWrap.style.display = 'none'; }
        }
        hcImg.onerror = tryNextHc;
        tryNextHc();
    }
}

function hideHoverCard() {
    hoverCard.hidden = true;
    hcImg.src = '';
}

function initHoverCard() {
    // Skip on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    let showTimer = null;

    // mouseover / mouseout bubble — works with event delegation
    outputEl.addEventListener('mouseover', e => {
        const target = e.target.closest('[data-project]');
        if (!target) return;
        clearTimeout(showTimer);
        showTimer = setTimeout(() => {
            const filename = target.getAttribute('data-project');
            const proj = DATA.projects.find(p => p.filename === filename);
            if (proj) showHoverCard(proj, target);
        }, 150);
    });

    outputEl.addEventListener('mouseout', e => {
        const target = e.target.closest('[data-project]');
        if (!target) return;
        clearTimeout(showTimer);
        hideHoverCard();
    });
}

// ================================================================
// PIXEL ROBOT CANVAS
// ================================================================
function initRobotCanvas() {
    const canvas = document.getElementById('robot-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const S  = 4;           // px per pixel-unit
    const CW = canvas.width;   // 280
    const CH = canvas.height;  // 76

    // Colors are resolved per-frame so they follow theme switches
    function palette() {
        const lt = document.body.classList.contains('light');
        return {
            b: lt ? '#0184bc' : '#8be9fd',
            d: lt ? '#c8c8c8' : '#44475a',
            e: lt ? '#383a42' : '#f8f8f2',
            s: lt ? '#50a14f' : '#50fa7b',
            a: lt ? '#a626a4' : '#ff79c6',
        };
    }

    // [x, y, colorKey] — base (non-leg) pixels, robot is 8 units wide
    const BASE = [
        [3,0,'a'],                                                                        // antenna tip
        [3,1,'d'],[4,1,'d'],                                                              // antenna base
        [2,2,'b'],[3,2,'b'],[4,2,'b'],[5,2,'b'],                                          // head top
        [1,3,'b'],[2,3,'b'],[3,3,'b'],[4,3,'b'],[5,3,'b'],[6,3,'b'],                      // head
        [1,4,'b'],[2,4,'e'],[3,4,'b'],[4,4,'b'],[5,4,'e'],[6,4,'b'],                      // eyes
        [1,5,'b'],[2,5,'b'],[3,5,'b'],[4,5,'b'],[5,5,'b'],[6,5,'b'],                      // head bottom
        [2,6,'b'],[3,6,'b'],[4,6,'b'],[5,6,'b'],                                          // chin
        [3,7,'b'],[4,7,'b'],                                                              // neck
        [1,8,'b'],[2,8,'b'],[3,8,'b'],[4,8,'b'],[5,8,'b'],[6,8,'b'],                      // body top
        [0,9,'b'],[1,9,'d'],[2,9,'b'],[3,9,'s'],[4,9,'s'],[5,9,'b'],[6,9,'d'],[7,9,'b'],  // body mid + arms
        [1,10,'b'],[2,10,'b'],[3,10,'b'],[4,10,'b'],[5,10,'b'],[6,10,'b'],                 // body bottom
        [2,11,'b'],[3,11,'b'],[4,11,'b'],[5,11,'b'],                                      // hips
    ];

    // 4-frame walk cycle (only leg pixels)
    const WALK = [
        [[2,12,'b'],[5,12,'b'],[1,13,'b'],[5,13,'b'],[1,14,'b'],[6,14,'b']], // step A
        [[2,12,'b'],[5,12,'b'],[2,13,'b'],[5,13,'b'],[2,14,'b'],[5,14,'b']], // mid
        [[2,12,'b'],[5,12,'b'],[2,13,'b'],[6,13,'b'],[3,14,'b'],[6,14,'b']], // step B
        [[2,12,'b'],[5,12,'b'],[2,13,'b'],[5,13,'b'],[2,14,'b'],[5,14,'b']], // mid
    ];

    const RW   = 8 * S;  // robot canvas width in px
    const offY = CH - 15 * S; // top-left y so robot bottom sits at canvas bottom

    let rx    = Math.round((CW - RW) / 2);
    let dir   = 1;
    let frame = 0;
    let tick  = 0;

    function draw() {
        const P = palette();
        ctx.clearRect(0, 0, CW, CH);
        const flip  = dir < 0;
        const allPx = [...BASE, ...WALK[frame]];
        allPx.forEach(([px, py, c]) => {
            const drawX = flip ? (7 - px) : px;
            ctx.fillStyle = P[c];
            ctx.fillRect(Math.round(rx + drawX * S), Math.round(offY + py * S), S, S);
        });
    }

    const iv = setInterval(() => {
        tick++;
        rx += dir * 0.9;
        if (tick % 7 === 0) frame = (frame + 1) % WALK.length;
        if (dir > 0 && rx + RW > CW - 14) dir = -1;
        else if (dir < 0 && rx < 14)      dir =  1;
        draw();
    }, 40);

    draw();
    window._robotIv = iv; // keep ref for potential cleanup
}

// ================================================================
// SPLASH
// ================================================================
function startTypewriter() {
    const el = document.getElementById('splash-typewriter');
    if (!el) return;

    const texts = [
        'Building software at the intersection of AI & robotics.',
        'CS @ ITB · Open to internship opportunities.',
        'Code. Robots. Badminton. Camera.',
    ];

    let ti = 0, ci = 0, del = false;

    function tick() {
        const cur = texts[ti];
        if (!del) {
            ci++;
            el.textContent = cur.slice(0, ci);
            if (ci === cur.length) { del = true; setTimeout(tick, 2200); return; }
        } else {
            ci--;
            el.textContent = cur.slice(0, ci);
            if (ci === 0) { del = false; ti = (ti + 1) % texts.length; setTimeout(tick, 420); return; }
        }
        setTimeout(tick, del ? 32 : 68);
    }

    setTimeout(tick, 900);
}

function enterTerminal() {
    const splash = document.getElementById('splash');
    const tw     = document.getElementById('terminal-window');

    splash.classList.add('fading');
    setTimeout(() => {
        splash.hidden = true;
        tw.hidden = false;
        runBoot().then(init);
    }, 360);
}

function exitTerminal() {
    const splash = document.getElementById('splash');
    const tw     = document.getElementById('terminal-window');

    tw.hidden = true;
    splash.classList.remove('fading'); // restore pointer-events
    splash.hidden = false;
    splash.style.opacity = '0';
    requestAnimationFrame(() => {
        splash.style.transition = 'opacity 0.3s ease';
        splash.style.opacity = '1';
    });
    setTimeout(() => { splash.style.transition = ''; }, 350);
}

function initSplash() {
    initRobotCanvas();
    startTypewriter();
    document.getElementById('enter-terminal').addEventListener('click', enterTerminal);
}

// ================================================================
// BOOT STATE
// ================================================================
let bootActive   = false;
let bootTimeouts = [];

// ================================================================
// DOM REFERENCES
// ================================================================
const outputEl      = document.getElementById('output');
const inputEl       = document.getElementById('terminal-input');
const promptEl      = document.getElementById('prompt-display');
const modalOverlay  = document.getElementById('modal-overlay');
const modalWindow   = document.getElementById('modal-window');
const modalTitleEl  = document.getElementById('modal-title');
const modalBody     = document.getElementById('modal-body');
const modalCloseBtn = document.getElementById('modal-close-btn');

const hoverCard  = document.getElementById('hover-card');
const hcImgWrap  = document.getElementById('hc-img-wrap');
const hcImg      = document.getElementById('hc-img');
const hcTitleEl  = document.getElementById('hc-title');
const hcDescEl   = document.getElementById('hc-desc');
const hcBadgesEl = document.getElementById('hc-badges');

// ================================================================
// UTILITIES
// ================================================================
function esc(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function truncate(str, max) {
    return str.length <= max ? str : str.slice(0, max - 1).trimEnd() + '…';
}

function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
}

function append(node) {
    outputEl.appendChild(node);
    outputEl.scrollTop = outputEl.scrollHeight;
}

function appendBlock(html) {
    append(el('div', 'output-block', html));
}

function echoCmd(cmdText) {
    const d = el('div', 'cmd-echo');
    d.innerHTML = `<span class="prompt">${esc(promptEl.textContent)}</span> ${esc(cmdText)}`;
    append(d);
}

function updatePrompt() {
    const display = state.cwd === '~'
        ? '~'
        : state.cwd.replace(/^~\//, '~/');
    promptEl.textContent = `edo@portfolio:${display}$`;
}

// ================================================================
// CONTENT RENDERERS
// ================================================================
function renderLS(showHidden) {
    const dir = FS[state.cwd];
    if (!dir) return `<span class="out-line c-red">ls: cannot open directory</span>`;

    let items = [...dir.items];
    if (showHidden) {
        items = [...dir.hidden, ...items];
        items.unshift(
            { name: '..',  type: 'dir',  perms: 'drwxr-xr-x', size: 4096, date: 'Jun  7' },
            { name: '.',   type: 'dir',  perms: 'drwxr-xr-x', size: 4096, date: 'Jun  7' },
        );
    }

    if (items.length === 0) {
        return `<span class="out-line c-gray">(empty directory)</span>`;
    }

    const rows = items.map(item => {
        const isHidden = item.name.startsWith('.');
        const isExec   = item.perms.includes('x', 4);
        const isDir    = item.type === 'dir';

        let rowCls = 'ls-row';
        if (isHidden)   rowCls += ' is-hidden';
        else if (isDir) rowCls += ' is-dir';
        else if (isExec) rowCls += ' is-exec';
        else             rowCls += ' is-file';

        const displayName = isDir ? item.name + '/' : item.name;
        const sizeStr     = String(item.size).padStart(5);

        let cmd = '';
        if (isDir && !isHidden) {
            cmd = item.name === '..' ? 'cd ..' : `cd ${item.name}`;
        } else if (!isHidden) {
            cmd = `cat ${item.name}`;
        }

        const isProjectFile = !isHidden && !isDir && state.cwd === '~/projects' &&
            DATA.projects.some(p => p.filename === item.name);

        const dataCmdAttr     = cmd ? `data-cmd="${esc(cmd)}"` : '';
        const dataProjectAttr = isProjectFile ? ` data-project="${esc(item.name)}"` : '';

        return `<span class="${rowCls}"><span class="c-gray">${esc(item.perms)} 1 edo edo ${sizeStr} ${esc(item.date)} </span><span class="ls-name" ${dataCmdAttr}${dataProjectAttr}>${esc(displayName)}</span></span>`;
    });

    return rows.join('');
}

function renderAbout() {
    const lines = DATA.about.bio.split('\n').map(l =>
        l ? `<span class="out-line">${esc(l)}</span>` : `<span class="out-sep"></span>`
    );
    return `<span class="out-sep"></span>${lines.join('')}<span class="out-sep"></span>`;
}

function renderProject(project) {
    const featureItems = project.features.map(f => `<li>${esc(f)}</li>`).join('');
    const badges       = project.tech.map(t => `<span class="tech-badge">${esc(t)}</span>`).join('');
    const links        = project.links.map(l =>
        `<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">[${esc(l.label)}]</a>`
    ).join(' ');

    return `
<div class="readme-wrap">
  <span class="readme-h1">${esc(project.title)}</span>
  <span class="out-line readme-desc">${esc(project.description)}</span>
  <span class="readme-h2">Key Features</span>
  <ul class="readme-features">${featureItems}</ul>
  <span class="readme-h2">Tech Stack</span>
  <div style="margin:4px 0 8px">${badges}</div>
  <span class="readme-h2">Links</span>
  <div class="readme-links">${links}</div>
</div>`;
}

function renderExperience(category) {
    const entries = DATA.experience[category] || [];
    if (entries.length === 0) {
        return `<span class="out-line c-gray">(no entries yet)</span>`;
    }
    return entries.map(exp => {
        const descs = exp.desc.map(d => `<span class="out-line log-desc"> - ${esc(d)}</span>`).join('');
        return `
<div class="log-entry">
  <span class="out-line log-date">[${esc(exp.period)}]</span>
  <span class="out-line log-title">&gt; ${esc(exp.title)}</span>
  <span class="out-line log-org">${esc(exp.org)}</span>
  ${descs}
</div>`;
    }).join('');
}

function renderTree(showHeader = true) {
    const g = (s) => `<span class="c-gray">${s}</span>`;
    const dir  = (name, cmd) => `<span class="ls-name c-cyan" data-cmd="${esc(cmd)}">${esc(name)}/</span>`;
    const file = (name, cmd, proj) =>
        `<span class="ls-name c-green" data-cmd="${esc(cmd)}"${proj ? ` data-project="${esc(proj)}"` : ''}>${esc(name)}</span>`;

    const aboutFiles = [
        ['bio.txt',     'cat about/bio.txt'],
        ['skills.json', 'cat about/skills.json'],
        ['social.txt',  'cat about/social.txt'],
    ];
    const expFiles = [
        ['professional.log',  'cat experience/professional.log'],
        ['organizations.log', 'cat experience/organizations.log'],
        ['volunteering.log',  'cat experience/volunteering.log'],
        ['awards.log',        'cat experience/awards.log'],
    ];

    const lines = [];

    if (showHeader) {
        lines.push(`<span class="out-line"><span class="c-pink">edo@portfolio:~$</span><span class="c-white">  tree</span></span>`);
        lines.push(`<span class="out-sep"></span>`);
    }

    // about/
    lines.push(`<span class="out-line">${g('├── ')}${dir('about', 'cd about')}</span>`);
    aboutFiles.forEach(([name, cmd], i) => {
        const last = i === aboutFiles.length - 1;
        lines.push(`<span class="out-line">${g('│   ' + (last ? '└── ' : '├── '))}${file(name, cmd)}</span>`);
    });

    // projects/
    lines.push(`<span class="out-line">${g('├── ')}${dir('projects', 'cd projects')}</span>`);
    DATA.projects.forEach((p, i) => {
        const last = i === DATA.projects.length - 1;
        lines.push(`<span class="out-line">${g('│   ' + (last ? '└── ' : '├── '))}${file(p.filename, `cat projects/${p.filename}`, p.filename)}</span>`);
    });

    // experience/
    lines.push(`<span class="out-line">${g('└── ')}${dir('experience', 'cd experience')}</span>`);
    expFiles.forEach(([name, cmd], i) => {
        const last = i === expFiles.length - 1;
        lines.push(`<span class="out-line">${g('    ' + (last ? '└── ' : '├── '))}${file(name, cmd)}</span>`);
    });

    lines.push(`<span class="out-sep"></span>`);
    lines.push(`<span class="out-line c-gray">Click any item or type <span class="c-cyan">help</span> for commands.</span>`);

    return lines.join('');
}

function renderSkills() {
    const rows = Object.entries(DATA.skills).map(([k, v]) =>
        `<span class="json-row"><span class="json-key">"${esc(k)}"</span><span class="c-gray">: </span><span class="json-val">"${esc(v)}"</span></span>`
    );
    return `
<span class="out-line json-brace">{</span>
${rows.join('\n')}
<span class="out-line json-brace">}</span>`;
}

function renderSocial() {
    const rows = DATA.social.map(s =>
        `<div class="social-row"><span class="social-label c-gray">[${esc(s.pad)}]</span><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.display)}</a></div>`
    );
    return `<span class="out-line c-gray">Connecting to social networks...</span><span class="out-sep"></span>${rows.join('')}`;
}

function renderHelp() {
    const cmds = [
        ['ls [-a]',        'List directory contents. -a shows hidden files.'],
        ['tree',           'Show full clickable directory tree from root.'],
        ['cd <dir>',       'Change directory: about, projects, experience, ..'],
        ['cat <file>',     'Display file. Project .md files open the viewer.'],
        ['open <project>', 'Open project viewer by name (fuzzy match).'],
        ['pwd',            'Print current working directory.'],
        ['whoami',         'Display user identity.'],
        ['theme',          'Toggle between dark and light theme.'],
        ['clear',          'Clear the terminal screen.'],
        ['help',           'Show this help message.'],
    ];
    const rows = cmds.map(([cmd, desc]) =>
        `<div class="help-row"><span class="help-cmd">${esc(cmd)}</span><span>${esc(desc)}</span></div>`
    );
    return `
<span class="out-line c-green">Available commands:</span>
<span class="out-sep"></span>
${rows.join('\n')}
<span class="out-sep"></span>
<span class="help-note c-gray">Press <span class="c-cyan">Tab</span> for autocomplete &nbsp;|&nbsp; <span class="c-cyan">↑ ↓</span> for history &nbsp;|&nbsp; <span class="c-cyan">Ctrl+L</span> to clear</span>`;
}

const NEOFETCH_ASCII = [
    '  ▓▓▓ ▓▓  ▓▓▓  ',
    '  ▓   ▓ ▓ ▓ ▓  ',
    '  ▓▓  ▓ ▓ ▓ ▓  ',
    '  ▓   ▓ ▓ ▓ ▓  ',
    '  ▓▓▓ ▓▓  ▓▓▓  ',
    '                ',
    '  edo@portfolio ',
].join('\n');

function renderNeofetch() {
    const uptime = (() => {
        const start = new Date('2022-08-01');
        const now   = new Date();
        const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
        const yrs = Math.floor(months / 12);
        const mos = months % 12;
        return `${yrs}y ${mos}m (since Aug 2022)`;
    })();

    const info = [
        ['OS',        'Ubuntu 24.04 LTS x86_64'],
        ['Host',      'portfolio.sh'],
        ['Kernel',    '6.8.0 — ITB Informatics, Batch \'22'],
        ['Uptime',    uptime],
        ['Packages',  `${DATA.projects.length} (projects shipped)`],
        ['Shell',     'bash 5.2.0'],
        ['Languages', 'C/C++, Java, Python, Go, JavaScript, PHP'],
        ['Frontend',  'Next.js, React, Three.js'],
        ['Backend',   'Node.js, Flask, Go, PHP'],
        ['Status',    'Open to internship opportunities ✓'],
    ];

    const infoRows = info.map(([k, v]) =>
        `<div class="nf-row"><span class="nf-key">${esc(k)}</span><span class="nf-colon">:</span>${esc(v)}</div>`
    ).join('');

    const colorDots = ['#ff5555','#ffb86c','#f1fa8c','#50fa7b','#8be9fd','#6272a4','#ff79c6','#f8f8f2']
        .map(c => `<span class="nf-dot" style="background:${c}"></span>`)
        .join('');

    return `
<div class="neofetch-wrap">
  <pre class="neofetch-ascii">${esc(NEOFETCH_ASCII)}</pre>
  <div class="neofetch-info">
    <span class="nf-user"><span class="c-cyan c-bold">edo</span><span class="c-gray">@</span><span class="c-cyan c-bold">portfolio</span></span>
    <span class="nf-sep">─────────────────────────────────</span>
    ${infoRows}
    <div class="nf-colors">${colorDots}</div>
  </div>
</div>`;
}

function renderThemeScript() {
    return `<span class="out-line c-gray">#!/bin/bash</span>
<span class="out-line c-gray"># Toggles terminal color theme</span>
<span class="out-line c-gray">source ~/.profile && toggle_theme</span>
<span class="out-sep"></span>
<span class="out-line">Running...</span>`;
}

// ================================================================
// COMMANDS
// ================================================================
const COMMANDS = {

    ls(args) {
        const showHidden = args.some(a => a.startsWith('-') && a.includes('a'));
        return renderLS(showHidden);
    },

    cd(args) {
        const raw    = (args[0] || '~').replace(/\/$/, '');
        const target = raw === '' ? '~' : raw;

        if (target === '~' || target === '$HOME') {
            state.cwd = '~';
            updatePrompt();
            return null;
        }

        if (target === '..') {
            if (state.cwd !== '~') {
                state.cwd = '~';
                updatePrompt();
            }
            return null;
        }

        const absTarget = target.startsWith('~')
            ? target
            : `${state.cwd}/${target}`;

        if (!FS[absTarget]) {
            const dirName = target.split('/').pop();
            const parentDir = FS[state.cwd];
            const found = parentDir && parentDir.items.some(i => i.name === dirName && i.type === 'dir');
            if (!found) {
                return `<span class="out-line c-red">bash: cd: ${esc(target)}: No such file or directory</span>`;
            }
        }

        state.cwd = absTarget;
        updatePrompt();

        if (absTarget === '~/about') {
            return `<span class="out-line c-gray">~/about — profile &amp; info</span><span class="out-sep"></span>${renderLS(false)}`;
        }
        if (absTarget === '~/projects') {
            return `<span class="out-line c-gray">~/projects — ${DATA.projects.length} projects</span><span class="out-sep"></span>${renderLS(false)}`;
        }
        if (absTarget === '~/experience') {
            return `<span class="out-line c-gray">~/experience — credentials &amp; history</span><span class="out-sep"></span>${renderLS(false)}`;
        }
        return null;
    },

    cat(args) {
        if (!args[0]) {
            return `<span class="out-line c-red">cat: missing operand. Try: cat &lt;filename&gt;</span>`;
        }

        const filename = args[0].replace(/^\.\//, '');

        // Cross-directory: cat dir/file from ~
        if (state.cwd === '~' && filename.includes('/')) {
            const slash = filename.indexOf('/');
            const dir   = filename.slice(0, slash);
            const file  = filename.slice(slash + 1);

            if (dir === 'projects') {
                const proj = DATA.projects.find(p => p.filename === file);
                if (proj) {
                    setTimeout(() => openModal(proj), 60);
                    return `<span class="out-line c-gray">Opening viewer: <span class="c-cyan">${esc(proj.title)}</span></span>`;
                }
                return `<span class="out-line c-red">cat: ${esc(filename)}: No such file</span>`;
            }
            if (dir === 'about') {
                switch (file) {
                    case 'bio.txt':     return renderAbout();
                    case 'skills.json': return renderSkills();
                    case 'social.txt':  return renderSocial();
                }
            }
            if (dir === 'experience') {
                switch (file) {
                    case 'professional.log':  return renderExperience('professional');
                    case 'organizations.log': return renderExperience('organizations');
                    case 'volunteering.log':  return renderExperience('volunteering');
                    case 'awards.log':        return renderExperience('awards');
                }
            }
            return `<span class="out-line c-red">cat: ${esc(filename)}: No such file</span>`;
        }

        // From ~/about
        if (state.cwd === '~/about') {
            switch (filename) {
                case 'bio.txt':     return renderAbout();
                case 'skills.json': return renderSkills();
                case 'social.txt':  return renderSocial();
                default: return `<span class="out-line c-red">cat: ${esc(filename)}: No such file</span>`;
            }
        }

        // From ~/experience
        if (state.cwd === '~/experience') {
            switch (filename) {
                case 'professional.log':  return renderExperience('professional');
                case 'organizations.log': return renderExperience('organizations');
                case 'volunteering.log':  return renderExperience('volunteering');
                case 'awards.log':        return renderExperience('awards');
                default: return `<span class="out-line c-red">cat: ${esc(filename)}: No such file</span>`;
            }
        }

        // From ~/projects
        if (state.cwd === '~/projects') {
            const proj = DATA.projects.find(p => p.filename === filename);
            if (proj) {
                setTimeout(() => openModal(proj), 60);
                return `<span class="out-line c-gray">Opening viewer: <span class="c-cyan">${esc(proj.title)}</span></span>`;
            }
            return `<span class="out-line c-red">cat: ${esc(filename)}: No such file</span>`;
        }

        // From ~ — hidden easter-egg files only
        if (state.cwd === '~') {
            switch (filename) {
                case '.bashrc':
                    return `<span class="out-line c-gray"># ~/.bashrc</span>
<span class="out-line c-gray">alias ll='ls -la'</span>
<span class="out-line c-gray">alias please='sudo'</span>
<span class="out-line c-gray">export TERM=xterm-256color</span>`;
                case '.profile':
                    return `<span class="out-line c-gray"># ~/.profile</span>
<span class="out-line c-gray">if [ -n "$BASH_VERSION" ]; then</span>
<span class="out-line c-gray">    [ -f ~/.bashrc ] && . ~/.bashrc</span>
<span class="out-line c-gray">fi</span>`;
                case '.secret':
                    return `<span class="out-line c-pink">01001000 01101001 00100001 00100000 01011001 01101111</span>
<span class="out-line c-pink">01110101 00100000 01100110 01101111 01110101 01101110</span>
<span class="out-line c-pink">01100100 00100000 01101001 01110100 00101110 00100000</span>
<span class="out-line c-gray">// Binary-to-text: "Hi! You found it. Now what?"</span>`;
            }
        }

        return `<span class="out-line c-red">cat: ${esc(filename)}: No such file or directory</span>`;
    },

    pwd(_args) {
        const full = state.cwd.replace('~', '/home/edo');
        return `<span class="out-line">${esc(full)}</span>`;
    },

    whoami(_args) {
        return `<span class="out-line"><span class="c-cyan c-bold">edo</span> — ${esc(DATA.about.name)}</span>
<span class="out-line c-gray">→ <span class="c-cyan">cat about/bio.txt</span> for full profile</span>`;
    },

    clear(_args) {
        outputEl.innerHTML = '';
        return null;
    },

    help(_args) {
        return renderHelp();
    },

    neofetch(_args) {
        return renderNeofetch();
    },

    theme(_args) {
        const isLight = document.body.classList.toggle('light');
        return `<span class="out-line">Theme → <span class="c-cyan">${isLight ? 'light' : 'dark'}</span></span>`;
    },

    open(args) {
        const query = args.join(' ').trim().toLowerCase();
        if (!query) {
            return `<span class="out-line c-red">open: usage: open &lt;project-name&gt;</span>
<span class="out-line c-gray">Example: <span class="c-cyan">open 3D-Catalog</span> or <span class="c-cyan">open ATS</span></span>`;
        }
        const proj = DATA.projects.find(p =>
            p.title.toLowerCase().includes(query) ||
            p.filename.toLowerCase().includes(query)
        );
        if (proj) {
            setTimeout(() => openModal(proj), 60);
            return `<span class="out-line c-gray">Opening viewer: <span class="c-cyan">${esc(proj.title)}</span></span>`;
        }
        return `<span class="out-line c-red">open: no project matching "<span class="c-yellow">${esc(args.join(' '))}</span>"</span>
<span class="out-line c-gray">Run <span class="c-cyan">ls ~/projects</span> to see available projects.</span>`;
    },

    tree(_args) {
        return renderTree(false);
    },

    // ---- Easter eggs ----

    sudo(args) {
        const sub = args.join(' ').toLowerCase();
        if (sub.includes('rm') && sub.includes('-rf')) {
            return `<span class="out-line c-red">Permission denied.</span>
<span class="out-line c-gray">Nice try. This incident has been logged.</span>`;
        }
        if (sub.includes('girlfriend') || sub.includes('install love')) {
            return `<span class="out-line">Reading package lists... Done</span>
<span class="out-line c-red">E: Unable to locate package girlfriend</span>
<span class="out-line c-gray">0 upgraded, 0 newly installed, 0 to remove.</span>`;
        }
        return `<span class="out-line c-red">[sudo] password for edo: </span>
<span class="out-line c-red">sudo: edo is not in the sudoers file.</span>
<span class="out-line c-gray">This incident will be reported.</span>`;
    },

    exit(_args) {
        return `<span class="out-line c-gray">logout</span>
<span class="out-line">Connection to portfolio.sh closed.</span>
<span class="out-line c-gray">(Reload to reconnect.)</span>`;
    },

    vim(_args) {
        return `<span class="out-line c-gray">VIM — Vi IMproved</span>
<span class="out-line c-gray">Entering normal mode...</span>
<span class="out-line c-yellow">:q!</span>
<span class="out-line c-gray">Just kidding. There is no escape from here.</span>`;
    },

    git(args) {
        if (args[0] === 'push' && args[1] === '--force') {
            return `<span class="out-line c-red">error: push --force to main rejected.</span>
<span class="out-line c-gray">Your senior is watching. Please don't.</span>`;
        }
        if (args[0] === 'blame') {
            return `<span class="out-line">a1b2c3d (edo ${new Date().toDateString()}) It was me. I wrote this.</span>`;
        }
        return `<span class="out-line c-gray">fatal: not a git repository (or this isn't that kind of portfolio)</span>`;
    },

    ssh(_args) {
        return `<span class="out-line">ssh: connect to host production.server.io port 22: Connection refused</span>
<span class="out-line c-gray">Nice instinct, but this is a static site.</span>`;
    },

    _unknown(cmd) {
        return `<span class="out-line c-red">bash: ${esc(cmd)}: command not found</span>
<span class="out-line c-gray">Type <span class="c-cyan">help</span> for available commands.</span>`;
    },
};

// ================================================================
// COMMAND EXECUTION
// ================================================================
function runCommand(raw) {
    const input = raw.trim();
    if (!input) return;

    if (state.history[state.history.length - 1] !== input) {
        state.history.push(input);
    }
    state.histIdx = state.history.length;

    echoCmd(input);

    const parts = input.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) || [];
    const cmd   = parts[0].toLowerCase();
    const args  = parts.slice(1);

    const handler = COMMANDS[cmd];
    const result  = handler ? handler(args) : COMMANDS._unknown(cmd);

    if (result) appendBlock(result);

    outputEl.scrollTop = outputEl.scrollHeight;
}

// ================================================================
// AUTOCOMPLETE
// ================================================================
function getMatches(input) {
    const parts = input.trimStart().split(/\s+/);
    const cmd   = parts[0].toLowerCase();

    if (parts.length === 1) {
        const names = Object.keys(COMMANDS).filter(k => !k.startsWith('_'));
        return names.filter(n => n.startsWith(cmd));
    }

    const partial = parts[parts.length - 1];
    const dir     = FS[state.cwd];
    if (!dir) return [];

    if (cmd === 'cd') {
        const dirs = dir.items.filter(i => i.type === 'dir').map(i => i.name + '/');
        if (state.cwd !== '~') dirs.push('../');
        return dirs.filter(d => d.startsWith(partial));
    }

    if (cmd === 'cat') {
        const files = dir.items.filter(i => i.type === 'file').map(i => i.name);
        return files.filter(f => f.startsWith(partial));
    }

    return [];
}

function handleTab() {
    const cur = inputEl.value;

    if (state.tabCache.input !== cur) {
        state.tabCache = { input: cur, matches: getMatches(cur), idx: -1 };
    }

    const { matches } = state.tabCache;
    if (matches.length === 0) return;

    if (matches.length === 1) {
        const parts = cur.trimStart().split(/\s+/);
        parts[parts.length - 1] = matches[0];
        inputEl.value = (cur.startsWith(' ') ? ' ' : '') + parts.join(' ');
        state.tabCache.input = inputEl.value;
        return;
    }

    // Cycle through matches on repeated Tab
    state.tabCache.idx = (state.tabCache.idx + 1) % matches.length;
    const parts = cur.trimStart().split(/\s+/);
    parts[parts.length - 1] = matches[state.tabCache.idx];
    inputEl.value = (cur.startsWith(' ') ? ' ' : '') + parts.join(' ');

    if (state.tabCache.idx === 0) {
        // First Tab press with multiple: show options
        echoCmd(cur);
        appendBlock(`<span class="autocomplete-row">${matches.map(esc).join('  ')}</span>`);
        state.tabCache.input = inputEl.value;
    }
}

// ================================================================
// EVENT HANDLERS
// ================================================================
function handleKeydown(e) {
    switch (e.key) {
        case 'Enter': {
            const val = inputEl.value;
            inputEl.value = '';
            state.tabCache = { input: '', matches: [], idx: -1 };
            runCommand(val);
            break;
        }
        case 'ArrowUp': {
            e.preventDefault();
            if (state.histIdx > 0) {
                state.histIdx--;
                inputEl.value = state.history[state.histIdx];
                requestAnimationFrame(() =>
                    inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length)
                );
            }
            break;
        }
        case 'ArrowDown': {
            e.preventDefault();
            if (state.histIdx < state.history.length - 1) {
                state.histIdx++;
                inputEl.value = state.history[state.histIdx];
            } else {
                state.histIdx = state.history.length;
                inputEl.value = '';
            }
            break;
        }
        case 'Tab': {
            e.preventDefault();
            handleTab();
            break;
        }
        case 'l':
            if (e.ctrlKey) { e.preventDefault(); outputEl.innerHTML = ''; }
            break;
        case 'c':
            if (e.ctrlKey) {
                e.preventDefault();
                if (inputEl.value) {
                    echoCmd(inputEl.value + '^C');
                    inputEl.value = '';
                }
            }
            break;
    }
}

// ================================================================
// OUTPUT CLICK DELEGATION (for ls clickable names)
// ================================================================
function handleOutputClick(e) {
    const target = e.target.closest('[data-cmd]');
    if (target) {
        e.preventDefault();
        const cmd = target.getAttribute('data-cmd');
        if (cmd) runCommand(cmd);
    }
}

// ================================================================
// PUBLIC API (called from HTML onclick)
// ================================================================
function focusInput() {
    inputEl.focus();
}

function runMobileCmd(cmd) {
    runCommand(cmd);
    inputEl.focus();
}

// ================================================================
// BOOT SEQUENCE
// ================================================================
const BOOT_LINES = [
    // Kernel messages — fast
    { d:  0,  c: 'gray',   t: 'BIOS date: 06/08/2026  UEFI Revision 2.8' },
    { d: 38,  c: 'gray',   t: '[    0.000000] Booting Linux 6.8.0-45-generic #45-Ubuntu SMP PREEMPT_DYNAMIC' },
    { d: 24,  c: 'gray',   t: '[    0.000000] Command line: BOOT_IMAGE=/vmlinuz root=/dev/sda1 quiet splash' },
    { d: 20,  c: 'gray',   t: '[    0.001432] BIOS-provided physical RAM map:' },
    { d: 22,  c: 'gray',   t: '[    0.002891] ACPI: RSDP 0x000F05B0 000024 (v02 BOCHS)' },
    { d: 24,  c: 'gray',   t: '[    0.018234] PCI: Using configuration type 1 for base access' },
    { d: 26,  c: 'gray',   t: '[    0.045678] clocksource: hpet: mask: 0xffffffff max_cycles: 0xffffffff' },
    { d: 20,  c: 'gray',   t: '[    0.078912] NET: Registered PF_INET protocol family' },
    { d: 22,  c: 'gray',   t: '[    0.124567] Initializing cgroup subsys memory' },
    { d: 28,  c: 'gray',   t: '[    0.234891] TCP hash table entries: 65536 (order: 7, 524288 bytes)' },
    { d: 40,  c: '',       t: '' },
    // Module loading
    { d: 30,  c: 'gray',   t: '[    0.345123] loading module: portfolio_core.ko ...' },
    { d: 85,  c: 'green',  t: '[    0.430456] portfolio_core: initialized' },
    { d: 35,  c: 'gray',   t: '[    0.466234] loading module: projects_db.ko ...' },
    { d: 95,  c: 'green',  t: '[    0.561543] projects_db: 7 entries loaded' },
    { d: 35,  c: 'gray',   t: '[    0.597123] loading module: skills_resolver.ko ...' },
    { d: 80,  c: 'green',  t: '[    0.677456] skills_resolver: 4 categories indexed' },
    { d: 35,  c: 'gray',   t: '[    0.713012] loading module: experience_log.ko ...' },
    { d: 100, c: 'green',  t: '[    0.813234] experience_log: 6 records parsed' },
    { d: 50,  c: '',       t: '' },
    // Systemd-style services
    { d: 75,  c: 'green',  t: '[  OK  ] Started systemd-journald.service — Journal Service.' },
    { d: 110, c: 'green',  t: '[  OK  ] Started networkd-dispatcher.service — Dispatcher.' },
    { d: 130, c: 'green',  t: '[  OK  ] Listening on NetworkManager-wait-online.service.' },
    { d: 120, c: 'green',  t: '[  OK  ] Started portfolio-data.service — Portfolio Data Layer.' },
    { d: 100, c: 'green',  t: '[  OK  ] Started bash.service — Bourne Again Shell.' },
    { d: 120, c: 'green',  t: '[  OK  ] Reached target Network.' },
    { d: 110, c: 'green',  t: '[  OK  ] Reached target Remote File Systems.' },
    { d: 180, c: 'yellow', t: '[ WARN ] projects/: image assets not yet linked. Modal viewer pending.' },
    { d: 150, c: 'green',  t: '[  OK  ] Started portfolio.service — Muhammad Edo Raduputu Aprima.' },
    { d: 130, c: 'green',  t: '[  OK  ] Reached target Graphical Interface.' },
    { d: 320, c: '',       t: '' },
    // Login prompt
    { d: 140, c: '',       t: 'portfolio.sh login: edo' },
    { d: 420, c: 'gray',   t: 'Password: ••••••••' },
    { d: 340, c: '',       t: '' },
    { d: 80,  c: 'gray',   t: 'Last login: Sun Jun 8 2026 from 127.0.0.1' },
    { d: 110, c: '',       t: 'Welcome to portfolio.sh' },
    { d: 200, c: '',       t: '' },
];

const BOOT_COLOR_MAP = {
    gray:   'c-gray',
    green:  'c-green',
    yellow: 'c-yellow',
    red:    'c-red',
    cyan:   'c-cyan',
};

function runBoot() {
    return new Promise(resolve => {
        bootActive = true;

        // Put input line in boot-hint mode
        inputEl.disabled    = true;
        inputEl.placeholder = 'press any key or click to skip...';
        promptEl.innerHTML  = '<span class="c-green">[ booting ]</span>';
        document.getElementById('input-line').classList.add('boot-mode');

        function finish() {
            if (!bootActive) return;
            bootActive = false;
            bootTimeouts.forEach(clearTimeout);
            bootTimeouts = [];
            document.removeEventListener('keydown', onSkip);
            document.removeEventListener('click',   onSkip);

            // Restore input line
            inputEl.disabled    = false;
            inputEl.placeholder = '';
            updatePrompt();
            document.getElementById('input-line').classList.remove('boot-mode');

            // Fade out → clear → resolve
            outputEl.style.opacity = '0';
            const tid = setTimeout(() => {
                outputEl.innerHTML    = '';
                outputEl.style.opacity = '1';
                resolve();
            }, 280);
            bootTimeouts.push(tid);
        }

        function onSkip(e) {
            if (e.target && e.target.tagName === 'A') return;
            finish();
        }

        document.addEventListener('keydown', onSkip);
        document.addEventListener('click',   onSkip);

        let cum = 0;
        BOOT_LINES.forEach(line => {
            cum += line.d;
            const id = setTimeout(() => {
                if (!bootActive) return;
                const p = document.createElement('p');
                const cls = line.c ? BOOT_COLOR_MAP[line.c] : '';
                p.className = 'out-line boot-line' + (cls ? ' ' + cls : '');
                p.textContent = line.t;
                outputEl.appendChild(p);
                outputEl.scrollTop = outputEl.scrollHeight;
            }, cum);
            bootTimeouts.push(id);
        });

        const endId = setTimeout(finish, cum + 300);
        bootTimeouts.push(endId);
    });
}

// ================================================================
// INIT
// ================================================================
function init() {
    inputEl.addEventListener('keydown', handleKeydown);
    outputEl.addEventListener('click', handleOutputClick);
    document.getElementById('terminal-body').addEventListener('click', function (e) {
        if (!e.target.closest('a') && !e.target.closest('[data-cmd]')) {
            focusInput();
        }
    });
    initModal();
    initHoverCard();

    // Terminal window buttons
    const tw = document.getElementById('terminal-window');
    document.querySelector('.button.close').addEventListener('click', exitTerminal);
    document.querySelector('.button.minimize').addEventListener('click', () => {
        tw.classList.toggle('minimized');
    });
    document.querySelector('.button.maximize').addEventListener('click', () => {
        tw.classList.toggle('maximized');
    });

    // Show tree view on load
    appendBlock(renderTree());
    inputEl.focus();
}

window.focusInput   = focusInput;
window.runMobileCmd = runMobileCmd;

document.addEventListener('DOMContentLoaded', initSplash);
