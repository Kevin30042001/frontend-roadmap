// app.js — Portfolio Kevin Chávez — 5 Roadmaps

var DATA = {
  profile: {
    name: "Kevin Chávez",
    title: "Software Engineer en formación",
    location: "El Salvador 🇸🇻",
    bio: "Estudiante de Ingeniería en Software en UTEC. Siguiendo 5 roadmaps estructurados hacia múltiples especializaciones: Frontend, Backend, Full Stack, Java y Análisis de Datos. Apasionado por construir software de calidad, bien diseñado y mantenible.",
    email: "tu@email.com",
    github: "https://github.com/Kevin30042001",
    linkedin: "",
    available: true
  },

  roadmaps: [
    {
      id: "frontend",
      label: "Frontend Engineer",
      icon: "🎨",
      color: "#fb923c",
      duration: "14–18 meses",
      status: "active",
      lastSync: "2026-04-29",
      phases: [
        { id:1, emoji:"🧱", color:"#4ade80", title:"HTML + CSS Moderno + Responsive", months:"Mes 1–2",
          courses:[
            { name:"Universidad Desarrollo Web - FrontEnd Web Developer!", pct:7 },
            { name:"Desarrollo Web Frontend: HTML, CSS, Grid, Flexbox y BEM 2026", pct:0 }
          ]},
        { id:2, emoji:"⚡", color:"#facc15", title:"JavaScript Profundo", months:"Mes 2–5",
          courses:[
            { name:"Escuela de JavaScript 2026 - De cero a Master", pct:0 },
            { name:"Universidad JavaScript - De Cero a Experto!", pct:0 },
            { name:"Maestría en JavaScript: Desde Principiante Hasta Experto", pct:0 },
            { name:"10 Proyectos de Javascript para tu portafolio", pct:0 }
          ]},
        { id:3, emoji:"🔷", color:"#38bdf8", title:"TypeScript — Tipado Profesional", months:"Mes 5–6",
          courses:[
            { name:"TypeScript para principiantes desde 0", pct:0 }
          ]},
        { id:4, emoji:"⚛️", color:"#fb923c", title:"React 19 — Framework Principal", months:"Mes 6–9",
          courses:[
            { name:"React JS 19: La Guía Selecta del Programador React", pct:0 },
            { name:"React, Spring y ChatGPT IA: Crea tu primera App Full Stack", pct:0 },
            { name:"Trabajando con datos en la Web", pct:0 }
          ]},
        { id:5, emoji:"🔺", color:"#e879f9", title:"Angular — Framework Empresarial", months:"Mes 9–12",
          courses:[
            { name:"Universidad Angular - De Cero a Experto - Actualizado", pct:0 },
            { name:"Angular, Spring y ChatGPT IA: Crea tu primera App Full Stack", pct:0 }
          ]},
        { id:6, emoji:"🚀", color:"#f43f5e", title:"Rendimiento, Accesibilidad y Testing", months:"Mes 12–14",
          courses:[
            { name:"Todo sobre Testing y Debugging de Software Desde 0 a Experto", pct:0 },
            { name:"Trabajando con datos en la Web", pct:0 }
          ]},
        { id:7, emoji:"🎯", color:"#a78bfa", title:"Portafolio Profesional y Despliegue", months:"Mes 14–16",
          courses:[
            { name:"10 Proyectos Completos para tu Portafolio", pct:0 },
            { name:"React, Flask, Python, MySql y ChatGPT IA - App Full Stack", pct:0 }
          ]}
      ]
    },
    {
      id: "backend",
      label: "Backend Engineer",
      icon: "🖥️",
      color: "#38bdf8",
      duration: "18+ meses",
      status: "upcoming",
      lastSync: null,
      phases: [
        { id:1, emoji:"🧱", color:"#facc15", title:"JavaScript + TypeScript — Base del Lenguaje", months:"Mes 1–3",
          courses:[
            { name:"Escuela de JavaScript 2026 - De cero a Master", pct:0 },
            { name:"Universidad JavaScript - De Cero a Experto!", pct:0 },
            { name:"TypeScript para principiantes desde 0", pct:0 }
          ]},
        { id:2, emoji:"🗄️", color:"#4ade80", title:"Bases de Datos — Especialización Profunda", months:"Mes 3–6",
          courses:[
            { name:"Curso Completo de Bases de Datos. Aprende SQL y MySQL", pct:31 },
            { name:"Aprende SQL desde CERO hasta AVANZADO con MySQL", pct:0 },
            { name:"Bases de Datos con MySQL + ChatGPT y MongoDB", pct:0 },
            { name:"Aprende Bases de Datos Distribuidas en 1 hora", pct:0 }
          ]},
        { id:3, emoji:"🖥️", color:"#38bdf8", title:"Backend con Node.js — APIs REST Profesionales", months:"Mes 6–8",
          courses:[
            { name:"JavaScript: Desde cero con NodeJS", pct:0 },
            { name:"Desarrollo de API RESTful con Node.js, Koa", pct:0 }
          ]},
        { id:4, emoji:"🐘", color:"#a78bfa", title:"PHP + Laravel — Patrones Arquitectónicos", months:"Mes 8–11",
          courses:[
            { name:"Programación Web desde 0 con PHP 8, MySQL, Laravel y Symfony", pct:0 },
            { name:"Arquitectura Web Profesional: PHP y MySQL", pct:0 },
            { name:"Master en PHP Desde 0 hasta Desarrollar Proyectos", pct:0 }
          ]},
        { id:5, emoji:"☕", color:"#f43f5e", title:"Java + Spring Boot — Backend Empresarial", months:"Mes 11–14",
          courses:[
            { name:"Universidad Java - Cero a Experto - Actualizado", pct:0 },
            { name:"Spring 6 and Spring Boot 3: Developing Java Web Applications", pct:0 }
          ]},
        { id:6, emoji:"🐍", color:"#fb923c", title:"Python + FastAPI / Django", months:"Mes 14–16",
          courses:[
            { name:"Universidad Python - Cero a Experto - Actualizado", pct:0 },
            { name:"Desarrolla de forma rápida APIs con FastAPI", pct:0 },
            { name:"Django y ChatGPT - Crea tu primera App Web", pct:0 }
          ]},
        { id:7, emoji:"🏗️", color:"#e879f9", title:"Arquitectura de Sistemas + Seguridad", months:"Mes 16–18",
          courses:[
            { name:"Todo sobre Testing y Debugging de Software Desde 0 a Experto", pct:0 }
          ]}
      ]
    },
    {
      id: "fullstack",
      label: "Full Stack Developer",
      icon: "⚡",
      color: "#4ade80",
      duration: "18–20 meses",
      status: "upcoming",
      lastSync: null,
      phases: [
        { id:1, emoji:"🧱", color:"#facc15", title:"Fundamentos — JavaScript + TypeScript + HTML/CSS", months:"Mes 1–4",
          courses:[
            { name:"Escuela de JavaScript 2026 - De cero a Master", pct:0 },
            { name:"Universidad JavaScript - De Cero a Experto!", pct:0 },
            { name:"TypeScript para principiantes desde 0", pct:0 },
            { name:"Universidad Desarrollo Web - FrontEnd Web Developer!", pct:7 }
          ]},
        { id:2, emoji:"⚛️", color:"#fb923c", title:"Frontend Profesional — React 19", months:"Mes 4–6",
          courses:[
            { name:"React JS 19: La Guía Selecta del Programador React", pct:0 },
            { name:"Trabajando con datos en la Web", pct:0 }
          ]},
        { id:3, emoji:"🔺", color:"#e879f9", title:"Frontend Empresarial — Angular", months:"Mes 6–8",
          courses:[
            { name:"Universidad Angular - De Cero a Experto - Actualizado", pct:0 }
          ]},
        { id:4, emoji:"🗄️", color:"#4ade80", title:"Bases de Datos — SQL + NoSQL", months:"Mes 8–9",
          courses:[
            { name:"Curso Completo de Bases de Datos. Aprende SQL y MySQL", pct:31 },
            { name:"Bases de Datos con MySQL + ChatGPT y MongoDB", pct:0 }
          ]},
        { id:5, emoji:"🖥️", color:"#38bdf8", title:"Backend con Node.js — APIs REST", months:"Mes 9–11",
          courses:[
            { name:"JavaScript: Desde cero con NodeJS", pct:0 },
            { name:"Desarrollo de API RESTful con Node.js, Koa", pct:0 }
          ]},
        { id:6, emoji:"🐘", color:"#a78bfa", title:"Backend con PHP + Laravel", months:"Mes 11–14",
          courses:[
            { name:"Programación Web desde 0 con PHP 8, MySQL, Laravel y Symfony", pct:0 },
            { name:"Master en PHP Desde 0 hasta Desarrollar Proyectos", pct:0 }
          ]},
        { id:7, emoji:"☕", color:"#f43f5e", title:"Backend con Java + Spring Boot", months:"Mes 14–17",
          courses:[
            { name:"Universidad Java - Cero a Experto - Actualizado", pct:0 },
            { name:"Spring 6 and Spring Boot 3: Developing Java Web Applications", pct:0 }
          ]},
        { id:8, emoji:"🐍", color:"#fb923c", title:"Backend con Python + FastAPI", months:"Mes 17–18",
          courses:[
            { name:"Universidad Python - Cero a Experto - Actualizado", pct:0 },
            { name:"Desarrolla de forma rápida APIs con FastAPI", pct:0 }
          ]},
        { id:9, emoji:"🚀", color:"#facc15", title:"Integración Full Stack + Portafolio", months:"Mes 18–20",
          courses:[
            { name:"Todo sobre Testing y Debugging de Software Desde 0 a Experto", pct:0 },
            { name:"React, Flask, Python, MySql y ChatGPT IA - App Full Stack", pct:0 }
          ]}
      ]
    },
    {
      id: "java",
      label: "Java Developer",
      icon: "☕",
      color: "#f43f5e",
      duration: "13–14 meses",
      status: "upcoming",
      lastSync: null,
      phases: [
        { id:1, emoji:"🧱", color:"#f43f5e", title:"Java Core — El Lenguaje a Fondo", months:"Mes 1–3",
          courses:[
            { name:"Universidad Java - Cero a Experto - Actualizado", pct:0 },
            { name:"Curso completo de Java 2026 - De cero a Master", pct:0 }
          ]},
        { id:2, emoji:"🔷", color:"#fb923c", title:"POO Avanzada + Patrones de Diseño", months:"Mes 3–5",
          courses:[
            { name:"Java 25: Curso Profesional de Java 2026 – De Cero a Master", pct:0 },
            { name:"Programador Java en 37 Días Con prácticas", pct:0 }
          ]},
        { id:3, emoji:"🗄️", color:"#4ade80", title:"Bases de Datos con Java — JDBC + JPA + Hibernate", months:"Mes 5–6",
          courses:[
            { name:"Universidad Java - Cero a Experto - Actualizado", pct:0 },
            { name:"Entity Framework desde cero con una aplicación", pct:0 }
          ]},
        { id:4, emoji:"🌱", color:"#38bdf8", title:"Spring Boot — El Framework Empresarial", months:"Mes 6–9",
          courses:[
            { name:"Spring 6 and Spring Boot 3: Developing Java Web Applications", pct:0 }
          ]},
        { id:5, emoji:"🔒", color:"#e879f9", title:"Spring Security — Autenticación y Autorización", months:"Mes 9–10",
          courses:[
            { name:"Spring 6 and Spring Boot 3: Developing Java Web Applications", pct:0 }
          ]},
        { id:6, emoji:"🧪", color:"#facc15", title:"Testing Profesional en Java", months:"Mes 10–11",
          courses:[
            { name:"Todo sobre Testing y Debugging de Software Desde 0 a Experto", pct:0 }
          ]},
        { id:7, emoji:"🏗️", color:"#a78bfa", title:"Arquitectura Avanzada + Full Stack con Spring", months:"Mes 11–13",
          courses:[
            { name:"React, Spring y ChatGPT IA: Crea tu primera App Full Stack", pct:0 }
          ]}
      ]
    },
    {
      id: "data",
      label: "Analista de Datos",
      icon: "📊",
      color: "#a78bfa",
      duration: "12–14 meses",
      status: "upcoming",
      lastSync: null,
      phases: [
        { id:1, emoji:"🗄️", color:"#4ade80", title:"SQL — El Corazón del Análisis de Datos", months:"Mes 1–3",
          courses:[
            { name:"Curso Completo de Bases de Datos. Aprende SQL y MySQL", pct:31 },
            { name:"SQL - Curso completo de Bases de Datos - de 0 a...", pct:0 },
            { name:"Aprende SQL desde CERO hasta AVANZADO con MySQL", pct:0 },
            { name:"Entrenamiento de Base de Datos Microsoft SQL Server", pct:0 }
          ]},
        { id:2, emoji:"🐍", color:"#facc15", title:"Python para Datos — Pandas + Visualización", months:"Mes 3–5",
          courses:[
            { name:"Universidad Python - Cero a Experto - Actualizado", pct:0 },
            { name:"Curso Python: Manejo de Datos con Pandas", pct:0 },
            { name:"Análisis de Datos y Gráficos con Python", pct:0 }
          ]},
        { id:3, emoji:"📊", color:"#38bdf8", title:"Power BI — Visualización Ejecutiva", months:"Mes 5–7",
          courses:[
            { name:"Curso Power BI: De Principiante a Avanzado", pct:1 },
            { name:"Power BI - Mi primer proyecto - Fitness Life", pct:7 },
            { name:"Especialización en lenguaje DAX para análisis", pct:0 }
          ]},
        { id:4, emoji:"📗", color:"#fb923c", title:"Excel Avanzado para Análisis", months:"Mes 7–8",
          courses:[
            { name:"Microsoft Excel: De Principiante a Avanzado", pct:0 },
            { name:"Universidad Excel - Básico, Intermedio y Avanzado", pct:0 }
          ]},
        { id:5, emoji:"🏢", color:"#f43f5e", title:"SQL Server + Oracle — Entornos Enterprise", months:"Mes 8–10",
          courses:[
            { name:"Entrenamiento de Base de Datos Microsoft SQL Server", pct:0 },
            { name:"Curso completo de Oracle SQL. Todo lo que necesitas", pct:0 }
          ]},
        { id:6, emoji:"📈", color:"#e879f9", title:"Estadística + Machine Learning Básico", months:"Mes 10–12",
          courses:[
            { name:"Ciencia de datos y Machine Learning con Python", pct:0 },
            { name:"Análisis de datos con R Programming y Python", pct:0 }
          ]},
        { id:7, emoji:"🎨", color:"#a78bfa", title:"Tableau + Storytelling con Datos + Portafolio", months:"Mes 12–14",
          courses:[
            { name:"Curso Tableau - Desde cero para principiantes", pct:0 },
            { name:"Experto en Análisis y Visualización de Datos", pct:0 }
          ]}
      ]
    }
  ],

  projects: [
    {
      id:1, icon:"🔌",
      title:"Udemy Progress Tracker",
      description:"Extensión de Chrome que sincroniza automáticamente el progreso de cursos de Udemy usando la API interna del sitio. Incluye web tracker con 5 roadmaps visuales.",
      tech:["Chrome Extension","JavaScript","HTML","CSS"],
      status:"in-progress",
      github:"https://github.com/Kevin30042001/udemy-progress-tracker",
      demo:""
    },
    {
      id:2, icon:"🗺️",
      title:"Frontend Engineer Roadmap",
      description:"Portafolio público con tracker de 5 roadmaps de aprendizaje. Desplegado en Vercel, actualizado automáticamente desde GitHub.",
      tech:["HTML","CSS","JavaScript","Vercel"],
      status:"in-progress",
      github:"https://github.com/Kevin30042001/frontend-roadmap",
      demo:"https://frontend-roadmap-jade.vercel.app"
    }
  ],

  skills: [
    { name:"HTML / CSS",       level:40, color:"#f97316" },
    { name:"JavaScript",       level:15, color:"#facc15" },
    { name:"TypeScript",       level:5,  color:"#38bdf8" },
    { name:"React",            level:10, color:"#61dafb" },
    { name:"Angular",          level:5,  color:"#e879f9" },
    { name:"Java / Android",   level:60, color:"#f43f5e" },
    { name:"SQL / SQL Server", level:65, color:"#4ade80" },
    { name:"Firebase",         level:50, color:"#fb923c" },
    { name:"Git / GitHub",     level:45, color:"#a78bfa" },
    { name:"Linux / RHEL",     level:40, color:"#94a3b8" }
  ]
};

// ── Cursor ───────────────────────────────────────────────────────
var cursor = document.getElementById('cursor');
var cursorRing = document.getElementById('cursorRing');
document.addEventListener('mousemove', function(e) {
  cursor.style.left = e.clientX+'px'; cursor.style.top = e.clientY+'px';
  cursorRing.style.left = e.clientX+'px'; cursorRing.style.top = e.clientY+'px';
});
document.addEventListener('mousedown', function(){ cursor.style.transform='translate(-50%,-50%) scale(1.8)'; });
document.addEventListener('mouseup',   function(){ cursor.style.transform='translate(-50%,-50%) scale(1)'; });

// ── Helpers ───────────────────────────────────────────────────────
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function pctColor(pct,base){ return pct===100?'#4ade80':pct>0?base:'#38384e'; }
function calcMaster(phases){
  var sum=0,count=0;
  phases.forEach(function(p){
    var v=p.courses.filter(function(c){return c.pct!=null;});
    if(v.length){sum+=Math.round(v.reduce(function(a,c){return a+c.pct;},0)/v.length);count++;}
  });
  return count?Math.round(sum/count):0;
}

// ── Hero ──────────────────────────────────────────────────────────
function renderHero(){
  document.getElementById('heroBio').textContent = DATA.profile.bio;

  // Stats: total roadmaps, cursos totales, completados, proyectos
  var totalCourses=0, totalDone=0;
  DATA.roadmaps.forEach(function(r){
    r.phases.forEach(function(p){
      totalCourses+=p.courses.length;
      totalDone+=p.courses.filter(function(c){return c.pct===100;}).length;
    });
  });
  var projs = DATA.projects.filter(function(p){return p.status==='completed';}).length;
  var activeRoadmaps = DATA.roadmaps.filter(function(r){return r.status==='active';}).length;

  document.getElementById('heroStats').innerHTML =
    stat(DATA.roadmaps.length,'Roadmaps de carrera') +
    stat(activeRoadmaps,'Activos ahora') +
    stat(totalCourses,'Cursos en total') +
    stat(totalDone,'Completados');
}
function stat(n,l){ return '<div class="hero-stat"><div class="hero-stat-num">'+n+'</div><div class="hero-stat-label">'+esc(l)+'</div></div>'; }

// ── Skills ────────────────────────────────────────────────────────
function renderSkills(){
  document.getElementById('skillsGrid').innerHTML = DATA.skills.map(function(s){
    return '<div class="skill-row">'
      +'<span class="skill-name">'+esc(s.name)+'</span>'
      +'<div class="skill-bar-bg"><div class="skill-bar-fill" style="width:'+s.level+'%;background:'+s.color+'"></div></div>'
      +'<span class="skill-pct">'+s.level+'%</span>'
      +'</div>';
  }).join('');
}

// ── Roadmap tabs ──────────────────────────────────────────────────
var activeTab = 'frontend';

function renderRoadmapTabs(){
  var tabsEl = document.getElementById('roadmapTabs');
  tabsEl.innerHTML = DATA.roadmaps.map(function(r){
    var isActive = r.id === activeTab;
    var statusDot = r.status==='active'
      ? '<span style="width:6px;height:6px;border-radius:50%;background:#4ade80;box-shadow:0 0 5px #4ade80;display:inline-block;margin-right:6px"></span>'
      : '';
    return '<button class="rm-tab'+(isActive?' rm-tab-active':'')+'" data-id="'+r.id+'" style="'+(isActive?'border-color:'+r.color+';color:'+r.color:'')+'">'+statusDot+r.icon+' '+esc(r.label)+'</button>';
  }).join('');

  tabsEl.querySelectorAll('.rm-tab').forEach(function(btn){
    btn.addEventListener('click', function(){
      activeTab = btn.dataset.id;
      renderRoadmapTabs();
      renderActiveRoadmap();
    });
  });
}

function renderActiveRoadmap(){
  var roadmap = DATA.roadmaps.find(function(r){return r.id===activeTab;});
  if(!roadmap) return;
  var master = calcMaster(roadmap.phases);
  var c = roadmap.color;

  document.getElementById('masterPct').textContent  = master+'%';
  document.getElementById('masterPct').style.color  = c;
  document.getElementById('masterFill').style.width = master+'%';
  document.getElementById('masterFill').style.background = c;
  document.getElementById('roadmapDuration').textContent = roadmap.icon+' '+roadmap.label+' · '+roadmap.duration;
  document.getElementById('footerSync').textContent = roadmap.lastSync ? 'Último sync: '+roadmap.lastSync : 'Pendiente de inicio';

  // Status banner
  var bannerEl = document.getElementById('roadmapBanner');
  if(roadmap.status === 'active'){
    bannerEl.style.display='flex';
    bannerEl.style.borderColor='rgba(74,222,128,.25)';
    bannerEl.style.background='rgba(74,222,128,.06)';
    bannerEl.style.color='#4ade80';
    bannerEl.textContent='● Roadmap activo — en progreso actualmente';
  } else {
    bannerEl.style.display='flex';
    bannerEl.style.borderColor='rgba(80,80,106,.2)';
    bannerEl.style.background='rgba(80,80,106,.06)';
    bannerEl.style.color='#50506a';
    bannerEl.textContent='○ Próximo roadmap — comenzará al completar el anterior';
  }

  document.getElementById('phasesList').innerHTML = roadmap.phases.map(function(phase){
    var synced = phase.courses.filter(function(c){return c.pct!=null;});
    var phasePct = synced.length ? Math.round(synced.reduce(function(a,c){return a+c.pct;},0)/synced.length) : 0;
    var isDone  = phasePct===100;
    var inProg  = phasePct>0&&!isDone;
    var pc      = phase.color;

    var badgeStyle = isDone ? 'background:'+pc+'22;color:'+pc
                   : inProg ? 'background:rgba(250,204,21,.1);color:#facc15'
                   : 'background:#1a1a22;color:#50506a';
    var badgeText = isDone?'✓ lista':inProg?'en curso':'pendiente';

    var coursesHTML = phase.courses.map(function(course){
      var pct = course.pct||0;
      var col = pctColor(pct,pc);
      return '<div class="course-item">'
        +'<span class="course-item-name'+(pct===100?' done-text':'')+'">'+esc(course.name)+'</span>'
        +'<div class="course-item-right">'
        +'<div class="course-mini-bar"><div class="course-mini-fill" style="width:'+pct+'%;background:'+col+'"></div></div>'
        +'<span class="course-pct-label" style="color:'+col+'">'+(pct===100?'✓':pct+'%')+'</span>'
        +'</div></div>';
    }).join('');

    return '<div class="phase-card">'
      +'<div class="phase-card-header">'
      +'<div class="phase-num-badge" style="background:'+pc+'18;color:'+pc+'">F'+phase.id+'</div>'
      +'<div class="phase-info"><div class="phase-name">'+phase.emoji+' '+esc(phase.title)+'</div>'
      +'<div class="phase-meta-text">⏱ '+esc(phase.months)+'</div></div>'
      +'<div class="phase-right"><span class="phase-pct-label" style="color:'+pc+'">'+phasePct+'%</span>'
      +'<span class="phase-status-badge" style="'+badgeStyle+'">'+badgeText+'</span></div>'
      +'</div>'
      +'<div class="phase-bar"><div class="phase-bar-inner" style="width:'+phasePct+'%;background:'+pc+'"></div></div>'
      +'<div class="phase-courses">'+coursesHTML+'</div>'
      +'</div>';
  }).join('');
}

// ── Projects ──────────────────────────────────────────────────────
function renderProjects(){
  var colors=['#f97316','#4ade80','#38bdf8','#a78bfa','#f43f5e','#facc15'];
  document.getElementById('projectsGrid').innerHTML = DATA.projects.map(function(p,i){
    var col=colors[i%colors.length];
    var sClass='status-'+p.status;
    var sLabel=p.status==='completed'?'✓ Completado':p.status==='in-progress'?'▶ En progreso':'○ Pendiente';
    var tech=p.tech.map(function(t){return '<span class="tech-tag">'+esc(t)+'</span>';}).join('');
    var links='';
    if(p.github) links+='<a href="'+esc(p.github)+'" target="_blank" class="project-link">GitHub →</a>';
    if(p.demo)   links+='<a href="'+esc(p.demo)+'"   target="_blank" class="project-link">Demo →</a>';
    if(!links)   links='<span class="project-link" style="opacity:.4;cursor:default">Próximamente</span>';
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
function renderContact(){
  document.getElementById('contactSub').textContent =
    'Estudiante de Ingeniería en Software en UTEC, El Salvador. '+
    'Construyendo hacia múltiples especializaciones en software. '+
    'Abierto a prácticas, proyectos y oportunidades de aprendizaje.';
  var html='';
  if(DATA.profile.email)    html+='<a href="mailto:'+esc(DATA.profile.email)+'" class="btn-primary">✉ '+esc(DATA.profile.email)+'</a>';
  if(DATA.profile.github)   html+='<a href="'+esc(DATA.profile.github)+'" target="_blank" class="btn-ghost">GitHub</a>';
  if(DATA.profile.linkedin) html+='<a href="'+esc(DATA.profile.linkedin)+'" target="_blank" class="btn-ghost">LinkedIn</a>';
  document.getElementById('contactLinks').innerHTML = html;
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function(){
  renderHero();
  renderSkills();
  renderRoadmapTabs();
  renderActiveRoadmap();
  renderProjects();
  renderContact();
});
