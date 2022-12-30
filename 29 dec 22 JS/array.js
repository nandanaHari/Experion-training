let numbers = [1, 2, 3];
// numbers[0] = 100;           // update a value at 0th index.
// numbers[4] = 5;                 // it will create a new index 4, but this will leave empty cells
numbers.push(5);                // this will create a new index without leaving empty cells
console.log(numbers);
// console.log(numbers[30]);       // this will give an undefined result because there is no 30 index.

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6, 7];
firstArray.push(...secondArray);       // adding secondArray to firstArray.
console.log(firstArray);

let thirdArray = firstArray.concat(secondArray);        // concat will store the aaded arrays to a new array.
console.log(thirdArray);
