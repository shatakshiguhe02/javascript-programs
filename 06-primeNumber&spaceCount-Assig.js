
console.log(`==============Program to count prime numbers==============`);
const array = [3,9,7,6,19,29,53];
console.log(`Given array         : ${array}`);
function isPrime(num) {
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}
var result = isPrime(3);
console.log(`Is 3 prime number   : ${result}`);
var result = isPrime(9);
console.log(`Is 9 prime number   : ${result}`);
var result = isPrime(7);
console.log(`Is 7 prime number   : ${result}`);
var result = isPrime(6);
console.log(`Is 6 prime number   : ${result}`);
var result = isPrime(19);
console.log(`Is 19 prime number  : ${result}`);
var result = isPrime(29);
console.log(`Is 29 prime number  : ${result}`);
var result = isPrime(53);
console.log(`Is 53 prime number  : ${result}`);
const arrayNumbers = [3,9,7,6,19,29,53];
var count=0;
for (const number of arrayNumbers) {
    if(isPrime(number)){
        count++;
    }
}
console.log(`Prime numbers count : ${count}`);


console.log(`============Write a program to count the spaces============`);
function spaceCount(string){
   let count = 0;
   for (const element of string) {
    if(element == " "){
        count++;
     }
   }
   return count;
}
const string1 = "Revision is the mother of success";
console.log(`Given string is : ${string1}`);
const result1 = spaceCount(string1);
console.log(`Total number of space in First string is  : ${result1}`);

const string2 = "JavaScript is the language of internet world";
console.log(`Given string is : ${string2}`);
const result2 = spaceCount(string2);
console.log(`Total number of space in second string is : ${result2}`);


