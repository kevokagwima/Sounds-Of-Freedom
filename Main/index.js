const nav = document.querySelector(".header");
const burger = document.querySelector(".burger");
const close_sidenav = document.querySelector("#close");
const side_nav = document.querySelector(".side-nav");

window.addEventListener("scroll", () => {
  const scroll_height = window.pageYOffset;
  if (scroll_height > 10) {
    nav.classList.add("active-header");
  } else {
    nav.classList.remove("active-header");
  }
});

window.addEventListener("scroll", () => {
  side_nav.classList.remove("show-side-nav");
  cinema.classList.remove("show-cinema");
});

burger.addEventListener("click", () => {
  side_nav.classList.toggle("show-side-nav");
});

close_sidenav.addEventListener("click", () => {
  side_nav.classList.toggle("show-side-nav");
});

const cinema = document.querySelector(".cinema-drop-down");
const gallery = document.querySelector(".gallery");

gallery.addEventListener("mouseover", () => {
  cinema.classList.add("show-cinema");
});

const ctrlVideo = document.querySelectorAll("#video");
const button = document.querySelectorAll(".play-btn");

// window.onload = () => {
//   // ctrlVideo[0].play();
//   button[0].classList.toggle("active");
// };

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    video = btn.nextElementSibling;
    ctrlVideo.forEach((vid) => {
      if (!vid.paused) {
        vid.pause();
        vid.previousElementSibling.classList.remove("active");
      }
    });
    video.play();
    // video.requestFullscreen();
    btn.classList.toggle("active");
  });
});

ctrlVideo.forEach((vid) => {
  vid.addEventListener("click", () => {
    btns = vid.previousElementSibling;
    btns.classList.remove("active");
    vid.pause();
  });
});

var slideIndex = 1;
showDiv(slideIndex);

function plusDiv(n) {
  showDiv((slideIndex += n));
}

function showDiv(n) {
  var i;
  var x = document.getElementsByClassName("cinema-img");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "grid";
}
