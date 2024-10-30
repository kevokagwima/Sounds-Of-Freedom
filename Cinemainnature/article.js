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

const package_btn = document.querySelector(".package-btn");
const close_btn = document.querySelector("#close");
const package_box = document.querySelector(".packages-box");

package_btn.addEventListener("click", () => {
  package_box.classList.add("show-package");
});

close_btn.addEventListener("click", () => {
  package_box.classList.remove("show-package");
});

// const modal = document.querySelector(".modal");
// const openModalBtn = document.querySelectorAll("#buy-btn");
// const closeModalBtn = document.querySelector("#close-modal");

// openModalBtn.forEach((p) => {
//   p.addEventListener("click", () => {
//     modal.classList.add("open-modal");
//   });
// });

// closeModalBtn.addEventListener("click", () => {
//   modal.classList.remove("open-modal");
// });
