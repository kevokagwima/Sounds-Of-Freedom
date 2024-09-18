const ctrlVideo = document.querySelector("#video");
const button = document.querySelector(".play-btn");

button.addEventListener("click", () => {
  ctrlVideo.play();
  button.classList.toggle("active");
});

ctrlVideo.addEventListener("click", () => {
  button.classList.remove("active");
  ctrlVideo.pause();
});
