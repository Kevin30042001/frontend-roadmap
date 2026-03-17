// app.js — Portfolio Kevin Chavez
// Datos embebidos directamente (sin fetch para evitar problemas de CORS/CSP en Vercel)

var DATA = {
  "profile": {
    "name": "Kevin Chávez",
    "title": "Frontend Engineer en formación",
    "location": "El Salvador 🇸🇻",
    "bio": "Estudiante de Ingeniería en Software en UTEC, construyendo mi camino hacia Frontend Engineer. Apasionado por crear interfaces rápidas, accesibles y bien diseñadas. Actualmente cursando un roadmap de 14–18 meses de HTML/CSS → JavaScript → TypeScript → React → Angular.",
    "email": "kevincha866@gmail.com",
    "github": "https://github.com/Kevin30042001",
    "linkedin": "",
    "available": true
  },
  "roadmap": {
    "title": "Frontend Engineer Roadmap",
    "duration": "14–18 meses",
    "lastSync": "2026-03-16",
    "phases": [
      {
        "id": 1, "emoji": "🧱", "color": "#4ade80",
        "title": "HTML Semántico + CSS Moderno + Responsive",
        "months": "Mes 1–2",
        "courses": [
          { "name": "Universidad Desarrollo Web - FrontEnd Web Developer!", "pct": 6 },
          { "name": "Desarrollo Web Frontend: HTML, CSS, Grid, Flexbox y BEM 2026", "pct": 0 }
        ]
      },
      {
        "id": 2, "emoji": "⚡", "color": "#facc15",
        "title": "JavaScript Profundo",
        "months": "Mes 2–5",
        "courses": [
          { "name": "Escuela de JavaScript 2026 - De cero a Master", "pct": 0 },
          { "name": "Universidad JavaScript - De Cero a Experto!", "pct": 0 },
          { "name": "Maestría en JavaScript: Desde Principiante Hasta Experto", "pct": 0 },
          { "name": "10 Proyectos de Javascript para tu portafolio", "pct": 0 }
        ]
      },
      {
        "id": 3, "emoji": "🔷", "color": "#38bdf8",
        "title": "TypeScript — Tipado Profesional",
        "months": "Mes 5–6",
        "courses": [
          { "name": "TypeScript para principiantes desde 0", "pct": 0 }
        ]
      },
      {
        "id": 4, "emoji": "⚛️", "color": "#fb923c",
        "title": "React 19 — Framework Principal",
        "months": "Mes 6–9",
        "courses": [
          { "name": "React JS 19: La Guía Selecta del Programador React", "pct": 0 },
          { "name": "React, Spring y ChatGPT IA: Crea tu primera App Full Stack", "pct": 0 },
          { "name": "Trabajando con datos en la Web", "pct": 0 }
        ]
      },
      {
        "id": 5, "emoji": "🔺", "color": "#e879f9",
        "title": "Angular — Framework Empresarial",
        "months": "Mes 9–12",
        "courses": [
          { "name": "Universidad Angular - De Cero a Experto - Actualizado", "pct": 0 },
          { "name": "Angular, Spring y ChatGPT IA: Crea tu primera App Full Stack", "pct": 0 }
        ]
      },
      {
        "id": 6, "emoji": "🚀", "color": "#f43f5e",
        "title": "Rendimiento, Accesibilidad y Testing",
        "months": "Mes 12–14",
        "courses": [
          { "name": "Todo sobre Testing y Debugging de Software", "pct": 0 },
          { "name": "Trabajando con datos en la Web", "pct": 0 }
        ]
      },
      {
        "id": 7, "emoji": "🎯", "color": "#a78bfa",
        "title": "Portafolio Profesional y Despliegue",
        "months": "Mes 14–16",
        "courses": [
          { "name": "10 Proyectos Completos para tu Portafolio", "pct": 0 },
          { "name": "React, Flask, Python, MySql y ChatGPT IA - App Full Stack", "pct": 0 }
        ]
      }
    ]
  },
  "projects": [
    {
      "id": 1,
      "icon": "🔌",
      "title": "Udemy Progress Tracker",
      "description": "Extensión de Chrome que sincroniza automáticamente el progreso de cursos de Udemy usando la API interna del sitio. Incluye web tracker con roadmap visual por fases.",
      "tech": ["Chrome Extension", "JavaScript", "HTML", "CSS"],
      "status": "in-progress",
      "github": "https://github.com/Kevin30042001/udemy-progress-tracker",
      "demo": ""
    },
    {
      "id": 2,
      "icon": "🗺️",
      "title": "Frontend Engineer Roadmap",
      "description": "Este mismo portafolio — tracker público de mi aprendizaje hacia Frontend Engineer Senior. 14–18 meses, 7 fases, sincronizado con Udemy.",
      "tech": ["HTML", "CSS", "JavaScript", "Vercel"],
      "status": "in-progress",
      "github": "https://github.com/Kevin30042001/frontend-roadmap",
      "demo": "https://frontend-roadmap-jade.vercel.app"
    }
  ],
  "skills": [
    { "name": "HTML / CSS",      "level": 40, "color": "#f97316" },
    { "name": "JavaScript",      "level": 15, "color": "#facc15" },
    { "name": "TypeScript",      "level": 5,  "color": "#38bdf8" },
    { "name": "React",           "level": 10, "color": "#61dafb" },
    { "name": "Angular",         "level": 5,  "color": "#e879f9" },
    { "name": "Java / Android",  "level": 60, "color": "#f43f5e" },
    { "name": "SQL / SQL Server","level": 65, "color": "#4ade80" },
    { "name": "Firebase",        "level": 50, "color": "#fb923c" },
    { "name": "Git / GitHub",    "level": 45, "color": "#a78bfa" },
    { "name": "Linux / RHEL",    "level": 40, "color": "#94a3b8" }
  ]
};

// ── Cursor ───────────────────────────────────────────────────────
var cursor     = document.getElementById('cursor');
var cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', function(e) {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});
document.addEventListener('mousedown', function() { cursor.style.transform = 'translate(-50%,-50%) scale(1.8)'; });
document.addEventListener('mouseup',   function() { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; });

// ── Helpers ───────────────────────────────────────────────────────
function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function pctColor(pct, base) {
  if (pct === 100) return '#4ade80';
  if (pct > 0)     return base;
  return '#38384e';
}
function calcMaster(phases) {
  var sum = 0, count = 0;
  phases.forEach(function(p) {
    var valid = p.courses.filter(function(c) { return c.pct !== null && c.pct !== undefined; });
    if (valid.length) { sum += Math.round(valid.reduce(function(a,c){return a+c.pct;},0)/valid.length); count++; }
  });
  return count ? Math.round(sum/count) : 0;
}

// ── Hero ──────────────────────────────────────────────────────────
function renderHero(data) {
  document.getElementById('heroBio').textContent = data.profile.bio;

  if (!data.profile.available) {
    var b = document.getElementById('availBadge');
    b.style.cssText = 'background:rgba(80,80,106,.15);border-color:rgba(80,80,106,.3);color:#50506a';
    b.querySelector('.avail-dot').style.cssText = 'background:#50506a;box-shadow:none;animation:none';
    b.lastChild.textContent = ' No disponible';
  }

  var phases  = data.roadmap.phases;
  var courses = phases.reduce(function(a,p){return a+p.courses.length;},0);
  var done    = phases.reduce(function(a,p){return a+p.courses.filter(function(c){return c.pct===100;}).length;},0);
  var master  = calcMaster(phases);
  var projs   = data.projects.filter(function(p){return p.status==='completed';}).length;

  document.getElementById('heroStats').innerHTML =
    stat(master+'%','Roadmap completado') +
    stat(courses,'Cursos en roadmap') +
    stat(done,'Cursos terminados') +
    stat(projs,'Proyectos construidos');
}
function stat(n,l){ return '<div class="hero-stat"><div class="hero-stat-num">'+n+'</div><div class="hero-stat-label">'+esc(l)+'</div></div>'; }

// ── Skills ────────────────────────────────────────────────────────
function renderSkills(skills) {
  document.getElementById('skillsGrid').innerHTML = skills.map(function(s) {
    return '<div class="skill-row">'
      +'<span class="skill-name">'+esc(s.name)+'</span>'
      +'<div class="skill-bar-bg"><div class="skill-bar-fill" style="width:'+s.level+'%;background:'+s.color+'"></div></div>'
      +'<span class="skill-pct">'+s.level+'%</span>'
      +'</div>';
  }).join('');
}

// ── Roadmap ───────────────────────────────────────────────────────
function renderRoadmap(roadmap) {
  var master = calcMaster(roadmap.phases);
  document.getElementById('masterPct').textContent  = master + '%';
  document.getElementById('masterFill').style.width = master + '%';
  document.getElementById('footerSync').textContent = 'Último sync: ' + (roadmap.lastSync || '—');

  document.getElementById('phasesList').innerHTML = roadmap.phases.map(function(phase) {
    var synced  = phase.courses.filter(function(c){return c.pct!==null&&c.pct!==undefined;});
    var phasePct = synced.length ? Math.round(synced.reduce(function(a,c){return a+c.pct;},0)/synced.length) : 0;
    var isDone  = phasePct === 100;
    var inProg  = phasePct > 0 && !isDone;
    var c       = phase.color;

    var badgeStyle = isDone ? 'background:'+c+'22;color:'+c
                   : inProg ? 'background:rgba(250,204,21,.1);color:#facc15'
                   : 'background:#1a1a22;color:#50506a';
    var badgeText  = isDone ? '✓ completada' : inProg ? 'en curso' : 'pendiente';

    var coursesHTML = phase.courses.map(function(course) {
      var pct  = course.pct || 0;
      var col  = pctColor(pct, c);
      return '<div class="course-item">'
        +'<span class="course-item-name'+(pct===100?' done-text':'')+'">'+esc(course.name)+'</span>'
        +'<div class="course-item-right">'
        +'<div class="course-mini-bar"><div class="course-mini-fill" style="width:'+pct+'%;background:'+col+'"></div></div>'
        +'<span class="course-pct-label" style="color:'+col+'">'+(pct===100?'✓':pct+'%')+'</span>'
        +'</div></div>';
    }).join('');

    return '<div class="phase-card">'
      +'<div class="phase-card-header">'
      +'<div class="phase-num-badge" style="background:'+c+'18;color:'+c+'">F'+phase.id+'</div>'
      +'<div class="phase-info"><div class="phase-name">'+phase.emoji+' '+esc(phase.title)+'</div>'
      +'<div class="phase-meta-text">⏱ '+esc(phase.months)+'</div></div>'
      +'<div class="phase-right"><span class="phase-pct-label" style="color:'+c+'">'+phasePct+'%</span>'
      +'<span class="phase-status-badge" style="'+badgeStyle+'">'+badgeText+'</span></div>'
      +'</div>'
      +'<div class="phase-bar"><div class="phase-bar-inner" style="width:'+phasePct+'%;background:'+c+'"></div></div>'
      +'<div class="phase-courses">'+coursesHTML+'</div>'
      +'</div>';
  }).join('');
}

// ── Projects ──────────────────────────────────────────────────────
function renderProjects(projects) {
  var colors = ['#f97316','#4ade80','#38bdf8','#a78bfa','#f43f5e','#facc15'];
  document.getElementById('projectsGrid').innerHTML = projects.map(function(p,i) {
    var col   = colors[i % colors.length];
    var sClass= 'status-'+p.status.replace('-progress','-progress');
    var sLabel= p.status==='completed'?'✓ Completado':p.status==='in-progress'?'▶ En progreso':'○ Pendiente';
    var tech  = p.tech.map(function(t){return '<span class="tech-tag">'+esc(t)+'</span>';}).join('');
    var links = '';
    if (p.github) links += '<a href="'+esc(p.github)+'" target="_blank" class="project-link">GitHub →</a>';
    if (p.demo)   links += '<a href="'+esc(p.demo)+'"   target="_blank" class="project-link">Demo →</a>';
    if (!links)   links  = '<span class="project-link" style="opacity:.4;cursor:default">Próximamente</span>';

    return '<div class="project-card" style="border-top:2px solid '+col+'">'
      +'<div class="project-top"><div style="font-size:1.4rem">'+(p.icon||'🛠')+'</div>'
      +'<span class="project-status '+sClass+'">'+sLabel+'</span></div>'
      +'<div class="project-title">'+esc(p.title)+'</div>'
      +'<p class="project-desc">'+esc(p.description)+'</p>'
      +'<div class="project-tech">'+tech+'</div>'
      +'<div class="project-links">'+links+'</div>'
      +'</div>';
  }).join('');
}

// ── Contact ───────────────────────────────────────────────────────
function renderContact(profile) {
  document.getElementById('contactSub').textContent =
    'Estudiante de Ingeniería en Software en UTEC, El Salvador. '+
    'Construyendo hacia Frontend Engineer Senior. '+
    'Abierto a prácticas, proyectos y oportunidades de aprendizaje.';

  var html = '';
  if (profile.email)    html += '<a href="mailto:'+esc(profile.email)+'" class="btn-primary">✉ '+esc(profile.email)+'</a>';
  if (profile.github)   html += '<a href="'+esc(profile.github)+'" target="_blank" class="btn-ghost">GitHub</a>';
  if (profile.linkedin) html += '<a href="'+esc(profile.linkedin)+'" target="_blank" class="btn-ghost">LinkedIn</a>';
  document.getElementById('contactLinks').innerHTML = html;
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  renderHero(DATA);
  renderSkills(DATA.skills);
  renderRoadmap(DATA.roadmap);
  renderProjects(DATA.projects);
  renderContact(DATA.profile);
});
