import validator from "./validator.js";

const cardForm = document.querySelector("#card-form");
const cardNumberInput = document.querySelector("#input-card-number");
const nameLastnameInput = document.querySelector("#input-name-lastname");
const expirationDateInput = document.querySelector("#input-expiration-date");

const checkCardDiv = document.querySelector("#check-card");
const checkCardImg = document.querySelector("#img-check-card");

cardNumberInput.addEventListener("keyup", () => {
  const cardNumbersString = cardNumberInput.value;
  //llamo la funcion del archivo validator
  const masked = validator.maskify(cardNumbersString);
  const isvalid = validator.isValid(cardNumbersString);

  const cardCreditNumberP = document.querySelector("#card-credit-number");
  cardCreditNumberP.innerHTML = masked
    .replaceAll("#", "*")
    .split(/(.{4})/)
    .filter((s) => s.length)
    .join(" ");

  //mostrar el check o error del numero de la tarjeta
  if (cardNumbersString.length >= 15) {
    checkCardDiv.style.display = "block";
    if (isvalid) {
      checkCardImg.src = "./assets/check.png";
    } else {
      checkCardImg.src = "./assets/error.png";
    }
  } else {
    checkCardDiv.style.display = "none";
  }
});

nameLastnameInput.addEventListener("keyup", () => {
  const valueNameLastname = nameLastnameInput.value;
  const nameLastnameP = document.querySelector("#name-lastname");
  nameLastnameP.innerHTML = valueNameLastname.toUpperCase();
});

expirationDateInput.addEventListener("keyup", () => {
  const valueExpirationDate = expirationDateInput.value;
  const expirationDateP = document.querySelector("#expiration-date");
  expirationDateP.innerHTML = valueExpirationDate;
});

cardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //formData es una instancia para captar los datos
  const datos = new FormData(cardForm);

  const nombreUsuario = datos.get("card-name");

  alert(nombreUsuario + ", gracias por su compra");
});
