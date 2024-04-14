// Animation de chargement
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

// Effet de survol sur les boutons de navigation
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("hover-effect");
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("hover-effect");
  });
});

// Animation de défilement fluide pour les liens de navigation
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
$(document).ready(function () {
  $(".project-carousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Nombre de diapositives affichées en même temps
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768, // Point de rupture pour les tailles d'écran plus petites
        settings: {
          slidesToShow: 1, // Affiche une seule diapositive sur les écrans plus petits
        },
      },
    ],
  });
});
