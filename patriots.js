const register_btn = document.querySelector(".register");
const join_btn = document.querySelector(".join");
const register_form = document.querySelector(".reg-form");
const join_form = document.querySelector(".join-form");
const options = document.querySelector(".options");
const close = document.querySelector("#close");

register_btn.addEventListener("click", () => {
  register_form.style.display = "grid";
  options.style.display = "None";
  close.style.display = "block";
});

join_btn.addEventListener("click", () => {
  join_form.style.display = "grid";
  options.style.display = "None";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  register_form.style.display = "none";
  join_form.style.display = "none";
  options.style.display = "grid";
  close.style.display = "none";
});

const all_teams = window.localStorage.getItem("Air Force");
console.log(all_teams);

register_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("surname").value,
    team: document.getElementById("team").value,
  };
  console.log(formData);
  if (window.localStorage.getItem(formData.team)) {
    console.log("Team already exists");
  } else {
    window.localStorage.setItem(`${formData.team}`, formData);
  }
});
