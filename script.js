// ===============================
// AutoVendue - Script principal
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  fadeInSections();
  smoothScroll();
  navbarScrollEffect();
});

// -------------------------------
// Animación de entrada suave
// -------------------------------
function fadeInSections() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";

    setTimeout(() => {
      section.style.transition = "all 0.8s ease";
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 150);
  });
}

// -------------------------------
// Scroll suave para enlaces internos
// -------------------------------
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

// -------------------------------
// Navbar efecto scroll
// -------------------------------
function navbarScrollEffect() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.style.background = "rgba(2, 6, 23, 0.95)";
    } else {
      navbar.style.background = "rgba(2, 6, 23, 0.85)";
    }
  });
}
