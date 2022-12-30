// console.log('Hello World')
// console.log('Hello', 'World')
// console.clear()
// var i = 5;
// console.log(i);
// var firstName = "Johny";
// var lastName = 'Depp';
// console.log(firstName, lastName);
// console.log(typeof firstName);
var data = "This is a String";
console.log(data);          //display whole data
console.log(data[0]);       //display first element
console.log(data.length);   //display total length
console.log(data[data.length - 1]);     //display last element of the data
var res = data.toUpperCase();
console.log(res);
var res = data.toLowerCase();
console.log(res);
var message = '    Js for Web    ';
console.log(message);
console.log(message.trim());        //remove whitespaces at the starting and ending
console.log(message.trimStart());   //remove whitespaces at the left of content
console.log(message.trimEnd());     //remove whitespaces at the end of the content
console.log(message.split(''));     
// var res = message.replace(' ', '_');        //only replaces on first occurance
// console.log(res);
// var res = message.replaceAll(' ', '_');
// console.log(res);
var res = message.trim().replaceAll(' ', '_');
console.log(res);
var res = message
    .toUpperCase()
    .trim()
    .replaceAll(' ', '_');
console.log(res);

for (let i = 0; i < 5; i++){
    console.log('Inside for loop', i);
}
// console.log("After for loop", i);
const firstName = 'Johnny';
const lastName = 'Depp';
console.log(firstName, lastName);


const language = 'JS';
console.log(language);
