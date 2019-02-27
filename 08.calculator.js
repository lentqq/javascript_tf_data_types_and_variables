function calculator(firstNmuber, operator, secondNumber){
    let result = Number;
   if (operator === '+'){
       result = firstNmuber + secondNumber;
       console.log(result.toFixed(2));
   }
   else if (operator === '-'){
       result = firstNmuber - secondNumber;
       console.log(result.toFixed(2));
   }
   else if (operator === '*'){
       result = firstNmuber * secondNumber;
       console.log(result.toFixed(2));
   }
   else if (operator === '/'){
       result = firstNmuber / secondNumber;
       console.log(result.toFixed(2));
   }

}

calculator(25,'*', 5)