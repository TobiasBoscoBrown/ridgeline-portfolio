// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(13,27,42,0.98)';
  } else {
    nav.style.background = 'rgba(13,27,42,0.92)';
  }
});

// Mobile hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Brand roadmap tabs
document.querySelectorAll('.brand-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.brand-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.brand-roadmap').forEach(r => r.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('brand-' + tab.dataset.brand).classList.add('active');
  });
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});
