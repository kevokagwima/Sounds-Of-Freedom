const code = `<h4>Other person's details</h4>
<div class="input">
  <label for="fname">First Name</label>
  <input name="First Name" required type="text" id="fname" placeholder="First Name">
</div>
<div class="input">
  <label for="surname">Last Name</label>
  <input name="Surname" required type="text" id="surname" placeholder="Last Name">
</div>
<div class="input">
  <label for="email">Email Address</label>
  <input name="email" required type="email" id="email" placeholder="Email Address">
</div>
<div class="input">
  <label for="phone">Phone Number</label>
  <input name="Phone Number" required type="number" id="phone" placeholder="Phone Number">
</div>
`;
const usersDiv = document.getElementById("users");

let citizen = 950;
let resident = 1050;
let non_resident = 1450;
let users = 1;

const more_btn = document.querySelector(".more-people");
const more = document.querySelector(".more-inputs");

const showForm = document.querySelector(".form");
const showButton = document.querySelectorAll(".button");
const pricing = document.querySelector(".pricing");
const total_amount = document.querySelector("#total-amount");

showButton[0].addEventListener("click", () => {
  pricing.classList.add("hide-pricing");
  showForm.classList.add("show-form");
  total_amount.innerHTML = citizen + 100;
  users = users;
  localStorage.setItem("pricing", "citizen");
});

showButton[1].addEventListener("click", () => {
  pricing.classList.add("hide-pricing");
  showForm.classList.add("show-form");
  total_amount.innerHTML = resident + 100;
  users = users;
  localStorage.setItem("pricing", "resident");
});

showButton[2].addEventListener("click", () => {
  pricing.classList.add("hide-pricing");
  showForm.classList.add("show-form");
  total_amount.innerHTML = non_resident + 100;
  users = users;
  localStorage.setItem("pricing", "non-resident");
});

more_btn.addEventListener("click", () => {
  more.innerHTML += code;
  var pricing = localStorage.getItem("pricing");
  if (pricing == "citizen") {
    let final;
    final = parseInt(total_amount.innerHTML) + citizen + 100;
    users = parseInt(usersDiv.innerHTML) + 1;
    total_amount.innerHTML = final;
    usersDiv.innerHTML = users;
  }
  if (pricing == "resident") {
    let final;
    final = parseInt(total_amount.innerHTML) + resident + 100;
    users = parseInt(usersDiv.innerHTML) + 1;
    total_amount.innerHTML = final;
    usersDiv.innerHTML = users;
  }
  if (pricing == "non-resident") {
    let final;
    final = parseInt(total_amount.innerHTML) + non_resident + 100;
    users = parseInt(usersDiv.innerHTML) + 1;
    total_amount.innerHTML = final;
    usersDiv.innerHTML = users;
  }
});

function updateTimeOptions() {
  var dateSelect = document.getElementById("day");
  var timeSelect = document.getElementById("time");
  var selectedDate = dateSelect.value;

  timeSelect.innerHTML = "";

  if (selectedDate === "Saturday 6") {
    addTimeOption("10:30", "10:30 AM", false);
    addTimeOption("2:00", "2:00 PM", false);
  }

  function addTimeOption(value, label, disabled) {
    var option = document.createElement("option");
    option.value = value;
    if (disabled) {
      option.disabled = true;
    }
    option.textContent = label;
    timeSelect.appendChild(option);
  }
}
