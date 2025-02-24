document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById("mobile-number").value;
    const pin = document.getElementById("pin").value;
    const convertPin = parseInt(pin);

    console.log(mobileNumber, pin);

    if (mobileNumber.length === 11) {
      if (convertPin === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("Pin Don`t Match");
      }
    } else {
      alert("valid Number");
    }
  });
