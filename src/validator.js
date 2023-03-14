const validator = {
  isValid: (cardNumbersString) => {
    const cardNumbers = []; //numeros tipo numero
    let totalPar = 0;
    let totalImpar = 0;
    let total = 0;
    let isValid;

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
            let stringToNumber = parseInt(number);
            totalPar += stringToNumber;
            total += stringToNumber;
          }
        } else {
          let stringToNumber = parseInt(resultVerification[0]);
          totalPar += stringToNumber;
          total += stringToNumber;
        }

        console.log(resultVerification);
      } else {
        totalImpar += cardNumbers[i];
        total += cardNumbers[i];
      }
    }

    console.log(totalPar);
    console.log(totalImpar);
    console.log(total);

    if (total % 10 === 0) {
      isValid = true;
    } else {
      isValid = false;
    }

    console.log(isValid);
  },
  maskify: () => {},
};

export default validator;
