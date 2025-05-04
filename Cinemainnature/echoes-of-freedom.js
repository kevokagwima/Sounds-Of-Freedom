document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((element) => {
    fadeObserver.observe(element);
  });
});

// Smooth scrolling
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;
  const headerContent = document.querySelector(".header-content");

  if (scrollPosition > 50) {
    headerContent.style.transform = "translateY(-20px)";
    headerContent.style.opacity = "0.9";
  } else {
    headerContent.style.transform = "translateY(0)";
    headerContent.style.opacity = "1";
  }
});
