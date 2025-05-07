document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".client-logos-container");
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.style.cursor = "grabbing";
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    // Stop the animation when manually scrolling
    container.style.animation = "none";
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.style.cursor = "grab";
    // Restart animation if not manually scrolling
    if (!isDown) {
      container.style.animation = "scroll 20s linear infinite";
    }
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.style.cursor = "grab";
    // Restart animation after a delay
    setTimeout(() => {
      if (!isDown) {
        container.style.animation = "scroll 20s linear infinite";
      }
    }, 2000);
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    container.scrollLeft = scrollLeft - walk;
  });

  // Touch events for mobile
  container.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.animation = "none";
  });

  container.addEventListener("touchend", () => {
    isDown = false;
    setTimeout(() => {
      if (!isDown) {
        container.style.animation = "scroll 20s linear infinite";
      }
    }, 2000);
  });

  container.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });
});
