document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".theme-card");
  const prevBtn = document.querySelector(".carousel-button.prev");
  const nextBtn = document.querySelector(".carousel-button.next");
  const dots = document.querySelectorAll(".carousel-dot");

  let currentIndex = 0;
  const totalSlides = Math.ceil(cards.length / 2);

  function updateCarousel() {
    // Hide all cards
    cards.forEach((card) => {
      card.classList.remove("active");
      card.style.order = "";
    });

    // Show current pair of cards
    cards[currentIndex * 2].classList.add("active");
    cards[currentIndex * 2].style.order = "1";

    if (cards[currentIndex * 2 + 1]) {
      cards[currentIndex * 2 + 1].classList.add("active");
      cards[currentIndex * 2 + 1].style.order = "2";
    }

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });

    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalSlides - 1;
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  // Event listeners
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      goToSlide(parseInt(this.dataset.index));
    });
  });

  // Initialize
  updateCarousel();
});
