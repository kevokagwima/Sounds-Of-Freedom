document.addEventListener("DOMContentLoaded", function () {
  const mainPoster = document.getElementById("mainPoster");
  const secondaryPoster = document.getElementById("secondaryPoster");

  // Add parallax effect to posters on mouse move
  document.addEventListener("mousemove", function (e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Main poster moves more prominently
    mainPoster.style.transform = `perspective(1000px) rotateY(${
      -15 + x * 10
    }deg) rotateX(${5 - y * 10}deg)`;

    // Secondary poster moves subtly
    secondaryPoster.style.transform = `perspective(1000px) rotateY(${
      10 - x * 5
    }deg) rotateX(${-5 + y * 5}deg)`;
  });

  // Add hover effect to main poster
  mainPoster.addEventListener("mouseenter", function () {
    this.style.zIndex = "3";
    secondaryPoster.style.filter = "brightness(0.85)";
  });

  mainPoster.addEventListener("mouseleave", function () {
    this.style.zIndex = "2";
    secondaryPoster.style.filter = "brightness(0.95)";
  });

  // Smooth scroll for buttons
  document.querySelector(".cta-primary").addEventListener("click", function () {
    document.querySelector(".tours-section").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Animation on load
  gsap.from(".hero-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(".hero-subtitle", {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.3,
  });

  gsap.from(".cta-container", {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.6,
  });

  gsap.from(".stats", {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.9,
  });

  gsap.from(".poster-main", {
    duration: 1.5,
    x: 100,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
    delay: 0.6,
  });

  gsap.from(".poster-secondary", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
    delay: 0.9,
  });
});
