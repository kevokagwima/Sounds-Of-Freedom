document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const allDateInput = document.querySelectorAll("#date");
  // Function to get the next date of a specific day (0=Sunday, 1=Monday, ..., 6=Saturday)
  allDateInput.forEach((dateInput) => {
    function getNextDate(day) {
      const today = new Date();
      today.setDate(today.getDate() + ((day + 7 - today.getDay()) % 7));
      return today.toISOString().split("T")[0]; // Format to YYYY-MM-DD
    }

    // Set today's date as the minimum date
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];
    dateInput.setAttribute("min", formattedToday);
  });
});
