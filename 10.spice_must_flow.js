function spiceMustFlow(startingYield){
  let dayCounter = 0;
  let totalSpiceExtracted = 0;
  let consumedSpices = 0;

  while (startingYield > 0) {
      consumedSpices = startingYield - 26;
      startingYield -= 10;
      dayCounter ++;
      totalSpiceExtracted += consumedSpices;
      if (startingYield < 100){
          totalSpiceExtracted = totalSpiceExtracted - 26;
          break;
      }
  }
  console.log(dayCounter);
  console.log(totalSpiceExtracted.toFixed(2));
}

spiceMustFlow(111)






