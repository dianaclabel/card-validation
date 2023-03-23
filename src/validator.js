const validator = {
  isValid: (cardNumbersString) => {
    const cardNumbers = []; //numeros tipo numero
    let total = 0;
    let isValid;

    stringToNumber(cardNumbersString);

    function stringToNumber(cardNumbersString) {
      //se convierte de string to array
      const arrString = cardNumbersString.split("");
      //convertir cada elemento a  tipo numero
      arrString.forEach((element) => {
        const number = parseInt(element);
        cardNumbers.push(number);
      });
      cardNumbers.reverse();
      // console.log(cardNumbers);
    }

    for (let i = 0; i <= cardNumbers.length - 1; i++) {
      //numeros en la posicion par
      if (i % 2 === 0) {
        total += cardNumbers[i];
      } else {
        //numeros en la posicion impar
        const result = cardNumbers[i] * 2;

        const numberTostring = result.toString();
        // lo convertinos en un array de string
        const resultVerification = numberTostring.split("");

        if (resultVerification.length === 2) {
          for (const number of resultVerification) {
            const stringToNumber = parseInt(number);

            total += stringToNumber;
          }
        } else {
          const stringToNumber = parseInt(resultVerification[0]);

          total += stringToNumber;
        }

        // console.log(resultVerification);
      }
    }
    // console.log(total);

    if (total % 10 === 0) {
      isValid = true;
    } else {
      isValid = false;
    }

    return isValid;
  },
  maskify: (cardNumbersString) => {
    let numbers = cardNumbersString;

    if (numbers.length > 4) {
      //obtener los ultimos cuatro numeros
      const numbersVisible = numbers.substring(numbers.length - 4);
      // console.log(numbersVisible);
      //obtiene todos los numeros excepto los ultimos cuatro numeros
      const numbersToMaskify = numbers.substring(0, numbers.length - 4);
      //pasamos de string a array
      const numbersToMaskifyArr = numbersToMaskify.split("");
      // console.log(numbersToMaskifyArr);
      const numbersMaskify = [];
      //iterar la cantidad de numeros que tenemos en numbersToMaskifyArr
      for (let i = 0; i < numbersToMaskifyArr.length; i++) {
        numbersMaskify.push("#");
      }
      // join nos permite convertir un array en una cadena
      const numberInvisible = numbersMaskify.join("");
      // console.log(numberInvisible);

      numbers = numberInvisible + numbersVisible;
    }
    return numbers;
  },
};

export default validator;
