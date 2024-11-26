document.addEventListener("DOMContentLoaded", function () {
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
