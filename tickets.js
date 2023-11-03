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

const more_btn = document.querySelector(".more-people");
const more = document.querySelector(".more-inputs");
more_btn.addEventListener("click", () => {
  more.innerHTML += code;
});

const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const phone = document.getElementById("phone");
  var url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  fetch(url, {
    headers: {
      BusinessShortCode: "5242257",
      Password:
        "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",
      Timestamp: "20160216165627",
      TransactionType: "CustomerPayBillOnline",
      Amount: "1",
      PartyA: "0796897011",
      PartyB: "5242257",
      PhoneNumber: "254708374149",
      CallBackURL: "https://sofafrica.com/",
      AccountReference: "Test",
      TransactionDesc: "Test",
    },
  });
  console.log("hello");
});
