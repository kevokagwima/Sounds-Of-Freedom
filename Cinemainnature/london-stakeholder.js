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

function openMeetup() {
  window.open(
    "https://www.africacentre.org.uk/Event/cinema-in-nature-stakeholder-meetup32",
    "_blank"
  );
}

function openLondon() {
  window.open("https://cinemainnature.com/london-exhibition", "_blank");
}

function openNairobi() {
  window.open("https://paydexp.com/cinema-in-nature", "_blank");
}
