function scrollToptoLeft() {
  const container = document.querySelector(".events-grid");
  container.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  });
}

function scrollTopRight() {
  const container = document.querySelector(".events-grid");
  container.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  });
}
