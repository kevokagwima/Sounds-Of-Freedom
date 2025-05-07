document.querySelector("#read-more").addEventListener("click", () => {
  const themeFull = document.querySelector(".full-text");
  const isExpanded = themeFull.style.display === "block";

  if (isExpanded) {
    themeFull.style.display = "none";
    document.querySelector("#read-more").textContent = "Read More";
  } else {
    themeFull.style.display = "block";
    document.querySelector("#read-more").textContent = "Read Less";
  }
});
