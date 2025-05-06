document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", function () {
    const themeCard = this.closest(".theme-card");
    const themeFull = themeCard.querySelector(".theme-full");
    const isExpanded = themeFull.style.display === "block";

    if (isExpanded) {
      themeFull.style.display = "none";
      this.textContent = "Read More";
      themeCard.style.maxHeight = "";
    } else {
      themeFull.style.display = "block";
      this.textContent = "Read Less";
      themeCard.style.maxHeight = "none";
    }
  });
});
