document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileNav = document.querySelector(".mobile-nav");

  if (hamburgerMenu && mobileNav) {
    hamburgerMenu.addEventListener("click", function () {
      this.classList.toggle("active");
      mobileNav.classList.toggle("active");
    });

    // Menutup menu saat mengklik di luar menu
    document.addEventListener("click", function (event) {
      if (
        !hamburgerMenu.contains(event.target) &&
        !mobileNav.contains(event.target)
      ) {
        hamburgerMenu.classList.remove("active");
        mobileNav.classList.remove("active");
      }
    });
  }
  // Fungsi untuk menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      nav.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    // Menutup menu saat link diklik
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        nav.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // Fungsi untuk menginisialisasi carousel
  function initializeCarousel(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const slides = container.querySelectorAll(".slider-image, .carousel-slide");
    const prevButton = container.querySelector(
      ".carousel-nav.prev, .slider-nav.prev"
    );
    const nextButton = container.querySelector(
      ".carousel-nav.next, .slider-nav.next"
    );
    let currentSlide = 0;

    function showSlide(n) {
      slides[currentSlide].classList.remove("active");
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add("active");
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => showSlide(currentSlide + 1));
    }

    // Inisialisasi slide pertama
    showSlide(0);
  }

  // Inisialisasi carousel untuk halaman index
  initializeCarousel(".slider");

  // Inisialisasi carousel untuk halaman profil prodi
  initializeCarousel(".carousel-container");
});
