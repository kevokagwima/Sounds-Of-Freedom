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
const total = document.getElementById("total-amount");
const usersDiv = document.getElementById("users");
let final = 950;
let users = 1;
const more_btn = document.querySelector(".more-people");
const more = document.querySelector(".more-inputs");
more_btn.addEventListener("click", () => {
  more.innerHTML += code;
  final = parseInt(total.innerHTML) + 950;
  users = parseInt(usersDiv.innerHTML) + 1;
  total.innerHTML = final;
  usersDiv.innerHTML = users;
});

const showForm = document.querySelector(".form");
const showButton = document.querySelector(".button");
const pricing = document.querySelector(".pricing");

showButton.addEventListener("click", () => {
  pricing.classList.add("hide-pricing");
  showForm.classList.add("show-form");
});
