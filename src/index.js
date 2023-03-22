import validator from "./validator.js";

const cardNumberInput = document.querySelector("#input-card-number");
const nameLastnameInput = document.querySelector("#name-lastname");
// const cardForm = document.querySelector("#card-form");
// const formBtn = document.querySelector("#form-btn");

cardNumberInput.addEventListener("keyup", () => {
  const cardNumbersString = cardNumberInput.value;
  // console.log(cardNumbersString);
  const isvalid = validator.isValid(cardNumbersString);
  const maskify = validator.maskify(cardNumbersString);

  const cardCreditNumberInput = document.querySelector("#card-credit-number");
  cardCreditNumberInput.innerHTML = maskify.replaceAll("#", "*");
});
