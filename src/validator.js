const validator = {
  isValid: (cardNumbersString) => {
    let cardNumbers = []; //numeros tipo numero
    let totalPar = 0;
    let totalImpar = 0;

    stringToNumber(cardNumbersString);

    function stringToNumber(cardNumbersString) {
      const arrString = cardNumbersString.split("");
      arrString.forEach((element) => {
        let number = parseInt(element);
        // console.log(number);
        cardNumbers.push(number);
      });
    }

    for (let i = 0; i <= cardNumbers.length - 1; i++) {
      if (i % 2 === 0) {
        let resultVerification;
        let result = cardNumbers[i] * 2;
        let numberTostring = result.toString();
        resultVerification = numberTostring.split("");

        if (resultVerification.length === 2) {
          for (const number of resultVerification) {
            let numberToString = parseInt(number);
          }

          //  totalPar += result;
        }
        console.log(resultVerification);
      } else {
        totalImpar += cardNumbers[i];
      }
    }
    console.log(totalPar);
    console.log(totalImpar);
  },
  maskify: () => {},
};

export default validator;
