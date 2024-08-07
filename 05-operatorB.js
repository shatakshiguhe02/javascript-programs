function greaterNumber(num1, num2) {
    var result = num1 >= num2 ? num1 : num2;
    console.log(`1. Given numbers are : ${num1},${num2} Greater number is : ${result}`);

}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("================================");

function isEvenOrOddNum(number) {
    var result = number % 2 == 0 ? true : false;
    console.log(`2. Given number ${number} is even : ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("=================================");

function wordLength(word) {
    console.log(`3. Given string is : ${word}`);
    var result = word.length;
    console.log(`3.1 Given length of word is : ${result}`);
    return res = word.length % 2 == 0 ? 'EVEN' : 'ODD';
}
var res = wordLength("JavaScript");
console.log(`3.2 Value of given string is : ${res}`);
console.log("---------------------------------");
var res = wordLength("developer");
console.log(`3.3 Value of given string is : ${res}`);
console.log("---------------------------------");
var res = wordLength("Google");
console.log(`3.4 Value of given string is : ${res}`);

