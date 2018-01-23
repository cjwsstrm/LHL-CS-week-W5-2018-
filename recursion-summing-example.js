// Loop version
function sumToOneL(n) {
  let sum = 0;
  for (let i = n; i >= 1; i--) {
    sum += i;
  }
  return sum;
}

console.log('Loop:', sumToOneL(4));


// Recursive version
// Base case is n === 1
// Recursive case is n > 1
function sumToOneR(n) {
  if (n === 1) {
    console.log(`Base case, n currently is: ${n} \n`)
    return 1;
  }
  console.log(`Where n = ${n}, n + sumtToOneR(n - 1) is: ${n + sumToOneR(n - 1)}`)
  console.log(`Recursive case, n currently is: ${n} \n`)
  return n + sumToOneR(n - 1);
}

console.log('Recursion:', sumToOneR(4));