const ctrlVideo = document.querySelectorAll("#video");
const button = document.querySelectorAll(".play-btn");

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

const step = document.querySelectorAll(".step");
const line = document.querySelectorAll(".line");

const stepObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("style-step", entry.isIntersecting);
      if (entry.isIntersecting) stepObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.4,
  }
);
step.forEach((q) => {
  stepObserver.observe(q);
});

const lineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("style-line", entry.isIntersecting);
      if (entry.isIntersecting) lineObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
  }
);
line.forEach((q) => {
  lineObserver.observe(q);
});
