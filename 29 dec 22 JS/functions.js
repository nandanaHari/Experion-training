greet();                            // we can write the function call even before the function declaration lines.
function greet(){
    console.log('Hello World');
}


function add(x, y) {
    return x + y;
}
const res = add(1, 4);
console.log(res);


function convertCasing(value) {
    return value.toUpperCase();
}
const res2 = convertCasing('Hello');
console.log(res2);
console.log(res2.toLowerCase());


// function getFirstChar1(value) {
//     return value[0];
// }
// const getFirstChar2 = function(value){
//     return value[0];
// };
// console.log(getFirstChar1('Hello'));
// console.log(getFirstChar2('Hello'));

const getFirstChar3 = (value) => {
    return value[0];
};
console.log(getFirstChar3('Hello'));

const getFirstChar = value => value[0];   // simplified form of getFirstChar3.
console.log(getFirstChar('Hello'));


