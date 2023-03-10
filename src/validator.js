const validator = {};
let cardNumbers = []; //numeros tipo numero

const cardForm = document.querySelector("#card-form");
const comprarBtn = document.querySelector("#btn-comprar");

comprarBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const data = new FormData(cardForm);
  const cardNumbersString = data.get("card-number");
  const arrString = cardNumbersString.split("");
  stringToNumber(arrString);
});

function stringToNumber(arrString) {
  arrString.forEach((element) => {
    let number = parseInt(element);
    // console.log(number);
    cardNumbers.push(number);
  });
}
console.log(cardNumbers);

export default validator;
