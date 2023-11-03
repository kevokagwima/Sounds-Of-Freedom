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
