const numbers = [1, 2, 3, 4, 5, 6, 8, 8];
// numbers.fill(10);           // used to replace all the values of an array.
console.log(numbers);

if(numbers.includes(5)){                   // To check whether the value is in the array or not, for that we can also use indexOf.
    console.log('Array contains five');
}

console.log(numbers.toString());
console.log(numbers.join('->'));        // To join an array as a string and join it with a specified character provided by us.