// HERO BUTTONS SMOOTH SCROLL
document.getElementById("btnInventory").addEventListener("click", () => {
  document.getElementById("inventory").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btnContact").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// QUICK SEARCH
document.getElementById("btnSearch").addEventListener("click", () => {
  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;

  alert(`Buscando:\nMarca: ${make}\nModelo: ${model}\nPrecio: ${minPrice} - ${maxPrice}`);
});

// INVENTORY FILTERS
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;
    alert("Filtro seleccionado: " + value);
  });
});

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("¡Mensaje enviado exitosamente!");
  this.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-container");
  hero.style.opacity = "0";
  hero.style.transform = "translateY(20px)";

  setTimeout(() => {
    hero.style.transition = "all 0.8s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 100);
});
