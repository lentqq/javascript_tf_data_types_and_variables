function sumDigits (num){
    let currentNumber = num.toString();
    let sum = 0;

    for (let i = 0; i < currentNumber.length; i++) {
        sum += parseInt(currentNumber[i]);
    }
    console.log(sum);
}

sumDigits(5552)