const stageButtons = document.querySelectorAll('.stage-button');
const stagePanels = document.querySelectorAll('.stage-panel');
const navToggle = document.getElementById('navLinks');
const mobileMenuBtn = document.querySelector('.mobile-menu');

stageButtons.forEach(button => {
  button.addEventListener('click', () => {
    stageButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    stagePanels.forEach(panel => panel.classList.remove('active'));

    const target = document.getElementById(button.dataset.target);
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
    target.classList.add('active');
  });
});

if (mobileMenuBtn)
  mobileMenuBtn.addEventListener('click', () => {
    navToggle.classList.toggle('open');
  });

window.addEventListener('click', event => {
  if (!mobileMenuBtn) return;
  const isMenuButton = mobileMenuBtn.contains(event.target);
  const isNavLinks = navToggle.contains(event.target);
  if (!isMenuButton && !isNavLinks) {
    navToggle.classList.remove('open');
  }
});
