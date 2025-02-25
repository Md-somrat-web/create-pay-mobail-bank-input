document
  .getElementById("CashOut-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const pin = document.getElementById("cashOut-pin").value;
    const convertedpin = parseFloat(pin);
    const amount = document.getElementById("cashOut-Amount").value;
    const convertedAmount = parseInt(amount);
    const mainBalnece = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalnece);

    if (convertedPin === 1234) {
      const sum = convertedMainBalance - convertedAmount;
      document.getElementById("main-balance").innerText = sum;
    } else {
      console.log("pin wrong");
    }
  });
