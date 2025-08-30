document.addEventListener("DOMContentLoaded", function () {
  const statNumbers = document.querySelectorAll(".stat-number");

  const animateNumbers = () => {
    statNumbers.forEach((stat) => {
      const target = stat.getAttribute("data-count");
      const suffix = stat.textContent.includes("km") ? "km" : "";
      const duration = 2000; // Animation duration in ms
      const step = target / (duration / 16); // 60fps

      let current = 0;
      const increment = () => {
        current += step;
        if (current < target) {
          stat.textContent = Math.floor(current) + (suffix ? suffix : "");
          requestAnimationFrame(increment);
        } else {
          stat.textContent = target + (suffix ? suffix : "");
        }
      };

      increment();
    });
  };

  // Trigger animation when section comes into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".stats-section"));
});

const contactBtn = document.querySelector("#contactBtn");
const contactModal = document.querySelector(".contact-modal");

contactBtn.addEventListener("click", () => {
  contactModal.classList.toggle("show-contact-modal");
});

const burger = document.querySelector(".burger");
const close = document.querySelector("#close");
const sidenav = document.querySelector(".side-nav");

burger.addEventListener("click", () => {
  sidenav.classList.add("show-side-nav");
});

close.addEventListener("click", () => {
  sidenav.classList.remove("show-side-nav");
});

// Get all the card elements
const cards = document.querySelectorAll(".card");
const tourSections = document.querySelectorAll(".tour-section");

// Add click event listeners to the cards
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const cardDataItem = card.dataset.item;

    tourSections.forEach((tourSection) => {
      const tourDataItem = tourSection.dataset.item;
      if (cardDataItem === tourDataItem) {
        tourSection.style.display = "grid";
        tourSection.scrollIntoView({ behavior: "smooth" });
      } else {
        tourSection.style.display = "none";
      }
    });
  });
});

function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function showEventOptions() {
  window.open("https://vabu.app/cinema-in-nature", "_blank");
  // document.getElementById("firstPopup").style.display = "flex";
}

function openLondonShow() {
  window.open(
    "https://www.eventbrite.co.uk/e/cinema-in-nature-experience-back-in-london-tickets-1524892838529",
    "_blank"
  );
}

function showSecondOptions() {
  closeModal("firstPopup");
  document.getElementById("secondPopup").style.display = "flex";
}

function showContact() {
  closeModal("contactPopup");
  document.getElementById("contactPopup").style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function callContact() {
  window.open("tel:+254702879696");
  closeModal("contactPopup");
}

function chatContact() {
  window.open("https://wa.me/+254702879696", "_blank");
  closeModal("contactPopup");
}

function openNairobi() {
  window.open("https://vabu.app/cinema-in-nature", "_blank");
  closeModal("firstPopup");
}

function openWeekendShow() {
  window.open("https://cinemainnature.com/london-exhibition", "_blank");
  closeModal("secondPopup");
}

function openMeetup() {
  window.open(
    "https://www.africacentre.org.uk/Event/cinema-in-nature-stakeholder-meetup32",
    "_blank"
  );
  closeModal("secondPopup");
}
