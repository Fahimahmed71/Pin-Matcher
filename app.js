// Genarate Pin
function getPin() {
  const pin = Math.floor(Math.random() * 10000);
  const pinString = pin + "";

  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

document.querySelector(".generate-btn").addEventListener("click", function () {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
});

// Keypad
document.getElementById("keyPad").addEventListener("click", function (e) {
  const num = e.target.innerText;
  const calc = document.getElementById("display-num");
  if (isNaN(num)) {
    if (num === "C") {
      calc.value = "";
    }
  } else {
    calc.value += num;
  }
});

// Submit Btn
document.getElementById("submit-btn").addEventListener("click", function () {
  const pin = document.getElementById("display-pin").value;
  const displayNum = document.getElementById("display-num").value;

  const success = document.getElementById("success");
  const failed = document.getElementById("failed");

  if (pin === displayNum) {
    success.style.display = "block";
    failed.style.display = "none";
  } else {
    failed.style.display = "block";
    success.style.display = "none";
  }
});
