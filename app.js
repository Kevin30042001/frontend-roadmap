// app.js — Portfolio Kevin Palacios
// Lee data.json y renderiza todo dinámicamente

// ── Cursor ──────────────────────────────────────────────────────
var cursor     = document.getElementById('cursor');
var cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', function(e) {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});

document.addEventListener('mousedown', function() {
  cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
});
document.addEventListener('mouseup', function() {
  cursor.style.transform = 'translate(-50%,-50%) scale(1)';
});

// ── Helpers ──────────────────────────────────────────────────────
function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function pctColor(pct, baseColor) {
  if (pct === 100) return '#4ade80';
  if (pct > 0)     return baseColor;
  return '#38384e';
}

// ── Render hero ───────────────────────────────────────────────────
function renderHero(data) {
  document.getElementById('heroBio').textContent = data.profile.bio;

  if (!data.profile.available) {
    var badge = document.getElementById('availBadge');
    badge.style.background = 'rgba(80,80,106,.15)';
    badge.style.borderColor = 'rgba(80,80,106,.3)';
    badge.style.color = '#50506a';
    badge.querySelector('.avail-dot').style.background = '#50506a';
    badge.querySelector('.avail-dot').style.boxShadow = 'none';
    badge.querySelector('.avail-dot').style.animation = 'none';
    badge.lastChild.textContent = 'No disponible';
  }

  // Stats
  var phases  = data.roadmap.phases;
  var courses = phases.reduce(function(a,p) { return a + p.courses.length; }, 0);
  var done    = phases.reduce(function(a,p) {
    return a + p.courses.filter(function(c) { return c.pct === 100; }).length;
  }, 0);
  var masterPct = calcMaster(phases);
  var projs = data.projects.filter(function(p) { return p.status === 'completed'; }).length;

  var statsHTML =
    stat(masterPct + '%', 'Roadmap completado') +
    stat(courses,          'Cursos en roadmap') +
    stat(done,             'Cursos terminados') +
    stat(projs,            'Proyectos construidos');

  document.getElementById('heroStats').innerHTML = statsHTML;
}

function stat(num, label) {
  return '<div class="hero-stat">'
    + '<div class="hero-stat-num">' + num + '</div>'
    + '<div class="hero-stat-label">' + esc(label) + '</div>'
    + '</div>';
}

// ── Render skills ──────────────────────────────────────────────────
function renderSkills(skills) {
  var html = '';
  skills.forEach(function(s) {
    html += '<div class="skill-row">'
      + '<span class="skill-name">' + esc(s.name) + '</span>'
      + '<div class="skill-bar-bg"><div class="skill-bar-fill" style="width:' + s.level + '%;background:' + s.color + '"></div></div>'
      + '<span class="skill-pct">' + s.level + '%</span>'
      + '</div>';
  });
  document.getElementById('skillsGrid').innerHTML = html;
}

// ── Calc master pct ────────────────────────────────────────────────
function calcMaster(phases) {
  var sum = 0, count = 0;
  phases.forEach(function(p) {
    var synced = p.courses.filter(function(c) { return c.pct !== null && c.pct !== undefined; });
    if (synced.length) {
      sum += Math.round(synced.reduce(function(a,c) { return a + c.pct; }, 0) / synced.length);
      count++;
    }
  });
  return count ? Math.round(sum / count) : 0;
}

// ── Render roadmap ─────────────────────────────────────────────────
function renderRoadmap(roadmap) {
  var phases = roadmap.phases;
  var master = calcMaster(phases);

  document.getElementById('masterPct').textContent  = master + '%';
  document.getElementById('masterFill').style.width = master + '%';

  var html = '';
  phases.forEach(function(phase) {
    var synced = phase.courses.filter(function(c) { return c.pct !== null && c.pct !== undefined; });
    var phasePct = synced.length
      ? Math.round(synced.reduce(function(a,c) { return a + c.pct; }, 0) / synced.length)
      : 0;

    var isDone  = phasePct === 100;
    var inProg  = phasePct > 0 && !isDone;
    var c       = phase.color;

    var badgeStyle = isDone
      ? 'background:' + c + '22;color:' + c
      : inProg
        ? 'background:rgba(250,204,21,.1);color:#facc15'
        : 'background:#1a1a22;color:#50506a';
    var badgeText = isDone ? '✓ completada' : inProg ? 'en curso' : 'pendiente';

    // Courses rows
    var coursesHTML = '';
    phase.courses.forEach(function(course) {
      var pct    = course.pct || 0;
      var cDone  = pct === 100;
      var col    = pctColor(pct, c);

      coursesHTML += '<div class="course-item">'
        + '<span class="course-item-name' + (cDone ? ' done-text' : '') + '">' + esc(course.name) + '</span>'
        + '<div class="course-item-right">'
        + '<div class="course-mini-bar"><div class="course-mini-fill" style="width:' + pct + '%;background:' + col + '"></div></div>'
        + '<span class="course-pct-label" style="color:' + col + '">' + (cDone ? '✓' : pct + '%') + '</span>'
        + '</div>'
        + '</div>';
    });

    html += '<div class="phase-card">'
      + '<div class="phase-card-header">'
      + '<div class="phase-num-badge" style="background:' + c + '18;color:' + c + '">F' + phase.id + '</div>'
      + '<div class="phase-info">'
      + '<div class="phase-name">' + phase.emoji + ' ' + esc(phase.title) + '</div>'
      + '<div class="phase-meta-text">⏱ ' + esc(phase.months) + '</div>'
      + '</div>'
      + '<div class="phase-right">'
      + '<span class="phase-pct-label" style="color:' + c + '">' + phasePct + '%</span>'
      + '<span class="phase-status-badge" style="' + badgeStyle + '">' + badgeText + '</span>'
      + '</div>'
      + '</div>'
      + '<div class="phase-bar"><div class="phase-bar-inner" style="width:' + phasePct + '%;background:' + c + '"></div></div>'
      + '<div class="phase-courses">' + coursesHTML + '</div>'
      + '</div>';
  });

  document.getElementById('phasesList').innerHTML = html;
  document.getElementById('footerSync').textContent =
    'Último sync: ' + (roadmap.lastSync || 'pendiente');
}

// ── Render projects ────────────────────────────────────────────────
function renderProjects(projects) {
  var projectColors = ['#f97316','#4ade80','#38bdf8','#a78bfa','#f43f5e','#facc15'];

  var html = '';
  projects.forEach(function(p, i) {
    var statusClass = 'status-' + p.status.replace('-','-');
    var statusLabel = p.status === 'completed'   ? '✓ Completado'
                    : p.status === 'in-progress' ? '▶ En progreso'
                    : '○ Pendiente';

    var color = projectColors[i % projectColors.length];

    var techHTML = p.tech.map(function(t) {
      return '<span class="tech-tag">' + esc(t) + '</span>';
    }).join('');

    var linksHTML = '';
    if (p.github) {
      linksHTML += '<a href="' + esc(p.github) + '" target="_blank" class="project-link">GitHub →</a>';
    }
    if (p.demo) {
      linksHTML += '<a href="' + esc(p.demo) + '" target="_blank" class="project-link">Demo →</a>';
    }
    

    html += '<div class="project-card" style="border-top-color:' + color + '">'
      + '<div class="project-top">'
      + '<div style="font-size:1.4rem">' + (p.icon || '🛠') + '</div>'
      + '<span class="project-status ' + statusClass + '">' + statusLabel + '</span>'
      + '</div>'
      + '<div class="project-title">' + esc(p.title) + '</div>'
      + '<p class="project-desc">' + esc(p.description) + '</p>'
      + '<div class="project-tech">' + techHTML + '</div>'
      + '<div class="project-links">' + linksHTML + '</div>'
      + '</div>';
  });

  document.getElementById('projectsGrid').innerHTML = html;
}

// ── Render contact ─────────────────────────────────────────────────
function renderContact(profile) {
  document.getElementById('contactSub').textContent =
    'Estudiante de Ingeniería en Software en UTEC, El Salvador. ' +
    'Construyendo hacia Frontend Engineer Senior. ' +
    'Abierto a prácticas, proyectos y oportunidades de aprendizaje.';

  var html = '';
  if (profile.email) {
    html += '<a href="mailto:' + esc(profile.email) + '" class="btn-primary">✉ ' + esc(profile.email) + '</a>';
  }
  if (profile.github) {
    html += '<a href="' + esc(profile.github) + '" target="_blank" class="btn-ghost">GitHub</a>';
  }
  if (profile.linkedin) {
    html += '<a href="' + esc(profile.linkedin) + '" target="_blank" class="btn-ghost">LinkedIn</a>';
  }

  document.getElementById('contactLinks').innerHTML = html;
}

// ── Project card top border fix ────────────────────────────────────
// Apply top border via JS since ::before needs per-card color
function applyProjectBorders() {
  var cards = document.querySelectorAll('.project-card');
  cards.forEach(function(card) {
    var color = card.style.borderTopColor;
    if (color) {
      card.style.borderTop = '2px solid ' + color;
      card.style.borderTopColor = '';
    }
  });
}

// ── Load data.json ─────────────────────────────────────────────────
fetch('data.json')
  .then(function(r) { return r.json(); })
  .then(function(data) {
    renderHero(data);
    renderSkills(data.skills);
    renderRoadmap(data.roadmap);
    renderProjects(data.projects);
    renderContact(data.profile);
    applyProjectBorders();
  })
  .catch(function(e) {
    console.error('Error cargando data.json:', e);
    document.getElementById('heroBio').textContent =
      'Error cargando datos. Asegúrate de que data.json esté en la misma carpeta.';
  });
