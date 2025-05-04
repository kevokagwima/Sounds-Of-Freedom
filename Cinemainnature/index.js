// const bookBtns = document.querySelectorAll("#book-now");
// const closebookBtn = document.querySelector("#cross");
// const bookModal = document.querySelector(".book-modal");

// bookBtns.forEach((bookBtn) => {
//   bookBtn.addEventListener("click", () => {
//     bookModal.classList.add("show-book-modal");
//   });
// });

// closebookBtn.addEventListener("click", () => {
//   bookModal.classList.remove("show-book-modal");
// });

document.addEventListener("DOMContentLoaded", function () {
  const logoContainer = document.getElementById("logoContainer");
  const images = logoContainer.getElementsByTagName("img");
  let totalWidth = 0;

  for (let img of images) {
    totalWidth +=
      img.clientWidth + parseInt(window.getComputedStyle(img).marginRight) * 2;
  }

  const animationDuration = totalWidth / 100 + 40 + "s";
  logoContainer.style.animationDuration = animationDuration;

  // Optional: Clone images for seamless scrolling
  const clonedLogos = logoContainer.innerHTML;
  logoContainer.innerHTML += clonedLogos;
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
