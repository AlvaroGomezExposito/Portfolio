/* ============================================================
   PORTFOLIO — layout.js
   Injects shared nav and footer into every page.
   ============================================================ */

(function () {
  const NAV_HTML = `
    <nav class="nav">
      <div class="nav__inner">
        <a href="index.html" class="nav__logo">Álvaro <span>Gómez Expósito</span></a>

        <div class="nav__links">
          <a href="index.html"    data-i18n="nav.home">Inicio</a>
          <a href="projects.html" data-i18n="nav.projects">Proyectos</a>
          <a href="skills.html"   data-i18n="nav.skills">Habilidades</a>
          <a href="about.html"    data-i18n="nav.about">Sobre mí</a>
          <a href="contact.html"  data-i18n="nav.contact">Contacto</a>
        </div>

        <div class="nav__controls">
          <button id="langToggle" class="nav__lang">EN</button>
          <button id="navBurger" class="nav__burger" aria-label="Abrir menú" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

    <div id="mobileMenu" class="nav__mobile" role="navigation" aria-label="Menú móvil">
      <a href="index.html"    data-i18n="nav.home">Inicio</a>
      <a href="projects.html" data-i18n="nav.projects">Proyectos</a>
      <a href="skills.html"   data-i18n="nav.skills">Habilidades</a>
      <a href="about.html"    data-i18n="nav.about">Sobre mí</a>
      <a href="contact.html"  data-i18n="nav.contact">Contacto</a>
    </div>
  `;

  const FOOTER_HTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <p class="footer__copy" data-i18n="footer.copy">© 2025 Álvaro Gómez Expósito. Todos los derechos reservados.</p>
          <div class="footer__links">
            <a href="https://alvatrom.artstation.com/" target="_blank" rel="noopener">
              <span>ArtStation</span>
              <img src="assets/img/logos/ArtstationLogo.png" alt="" class="footer__link-logo">
            </a>
            <a href="https://github.com/AlvaroGomezExposito" target="_blank" rel="noopener">
              <span>GitHub</span>
              <img src="assets/img/logos/Github_logo.png" alt="" class="footer__link-logo footer__link-logo--white">
            </a>
            <a href="https://www.linkedin.com/in/alvaro-gomez-exposito-3d" target="_blank" rel="noopener">
              <span>LinkedIn</span>
              <img src="assets/img/logos/Linkedin.png" alt="" class="footer__link-logo">
            </a>
          </div>
          <a href="privacy.html" class="footer__legal" data-i18n="footer.privacy">Privacidad</a>
        </div>
      </div>
    </footer>
  `;

  const navEl    = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');

  if (navEl)    navEl.innerHTML    = NAV_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
})();
