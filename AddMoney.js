document
  .getElementById("Add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertPin = parseInt(pin);
    const mainBalnece = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalnece);

    if (convertPin === 1234) {
      const sum = convertedMainBalance + convertedAmount;
      document.getElementById("main-balance").innerText = sum;
    } else {
      console.log("pin wrong");
    }
  });
