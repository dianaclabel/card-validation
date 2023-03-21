import validator from "./validator.js";

// const cardForm = document.querySelector("#card-form");
const cardNumberInput = document.querySelector("#input-card-number");
// const formBtn = document.querySelector("#form-btn");

cardNumberInput.addEventListener("keyup", () => {
  const cardNumbersString = cardNumberInput.value;
  console.log(cardNumbersString);
  validator.isValid(cardNumbersString);

  // const arrString = cardNumbersString.split("");
  // stringToNumber(arrString);
});

// formBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   const data = new FormData(cardForm);
//   const cardNumbersString = data.get("card-number");
//   const arrString = cardNumbersString.split("");
//   stringToNumber(arrString);
// });

// function stringToNumber(cardNumbersString) {
//   const arrString = cardNumbersString.split("");
//   let cardNumbers = []; //numeros tipo numero

//   arrString.forEach((element) => {
//     let number = parseInt(element);
//     // console.log(number);
//     cardNumbers.push(number);
//   });

//   validator.isValid(cardNumbers);
// }

// console.log(cardNumbers);
