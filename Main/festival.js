// const ctrlVideo = document.querySelector("#video");
// const button = document.querySelector(".play-btn");

// window.onload = () => {
//   ctrlVideo.play();
//   button.classList.toggle("active");
// };

// button.addEventListener("click", () => {
//   video = button.nextElementSibling;
//   video.play();
//   video.requestFullscreen();
//   button.classList.toggle("active");
// });

// ctrlVideo.addEventListener("click", () => {
//   btns = ctrlVideo.previousElementSibling;
//   btns.classList.remove("active");
//   ctrlVideo.pause();
// });

const nav = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scroll_height = window.pageYOffset;
  if (scroll_height > 10) {
    nav.classList.add("active-header");
  } else {
    nav.classList.remove("active-header");
  }
});

const join_btn = document.querySelector("#join");
const form = document.querySelector(".mission-form");
const checkbox = document.querySelector("#check");

checkbox.addEventListener("click", () => {
  if (checkbox.checked == false) {
    form.classList.remove("show-mission-form");
  }
});

join_btn.addEventListener("click", () => {
  if (checkbox.checked == true) {
    form.classList.add("show-mission-form");
  } else {
    alert("You need to accept the mission in order to join the movement");
  }
});
