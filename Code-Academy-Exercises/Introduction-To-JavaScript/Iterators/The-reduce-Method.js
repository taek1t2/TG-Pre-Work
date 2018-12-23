const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);



//.reduce() method returns a single value afgter iterating through the elements of an array, in other words, reducing the array.
//The .reduce() method can also take an optional second parameter to set an initial value for accumulator.
