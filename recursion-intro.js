// Infinite call of the function, resulting in stack overflow
// function countUpFrom(number) {
//   console.log(number);
//   countUpFrom(number+1);
// }
// countUpFrom(1);

// recursive function, stops when it reaches 10
// "number <= 10" is referred to as a "recursive case"
// "number > 10" is referred to as a "base "case"
function countUpFrom(number) {
  if (number <= 10) { 
    console.log(number);
    countUpFrom(number+1);
  }
}
acountUpFrom(1);

