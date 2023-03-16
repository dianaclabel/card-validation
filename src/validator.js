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
        const number = parseInt(element);
        // console.log(number);
        cardNumbers.push(number);
      });
      cardNumbers.reverse();
      console.log(cardNumbers);
    }

    for (let i = 0; i <= cardNumbers.length - 1; i++) {
      if (i % 2 === 0) {
        totalPar += cardNumbers[i];
        total += cardNumbers[i];
      } else {
        // let resultVerification;
        const result = cardNumbers[i] * 2;

        const numberTostring = result.toString();
        const resultVerification = numberTostring.split("");

        if (resultVerification.length === 2) {
          for (const number of resultVerification) {
            const stringToNumber = parseInt(number);
            totalImpar += stringToNumber;
            total += stringToNumber;
          }
        } else {
          const stringToNumber = parseInt(resultVerification[0]);
          totalImpar += stringToNumber;
          total += stringToNumber;
        }

        console.log(resultVerification);
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
    return isValid;
  },
  maskify: () => {},
};

export default validator;
