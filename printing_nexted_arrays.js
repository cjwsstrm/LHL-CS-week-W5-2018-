function printItems(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
}

const array = ["words", [["are", ["better"]], [[[",right?"]], "Yes"]]];
printItems(array);


// An example of using iteration instead. Harder to read / interpret 

// function printItems(array) {
//   while (array.length > 0) {
//     const element = array.shift();

//     if (Array.isArray(element)) {
//       element.reverse().forEach((newElement)=> {
//         array.unshift(newElement);
//       });
//     } else {
//       console.log(element);
//     }
//   }
// }