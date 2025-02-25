document.getElementById("AddMoney").style.display = "block";
document.getElementById("cashOut").style.display = "none";

document.getElementById("Add-money-box").addEventListener("click", function () {
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("AddMoney").style.display = "block";
});

document.getElementById("cashOut-box").addEventListener("click", function () {
  document.getElementById("AddMoney").style.display = "none";
  document.getElementById("cashOut").style.display = "block";
});
