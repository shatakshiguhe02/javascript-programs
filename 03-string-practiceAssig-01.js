
console.log(`----------------1. WAP to find length or total number of characters of the string---------------`);
function string(stringOne){
    let str = stringOne.length;
    console.log(`Given string is         : ${stringOne}`);
    console.log(`Length of the string is : ${str}`);  
}
string("Hello, World!");
string("Javascript is the language of internet");

//------------Another way to solve above one--------------------------//
// const stringOne = "Hello, World!";
// console.log(`Given string is : ${stringOne}`);
// const string = stringOne.length;
// console.log(`Length of string is : ${string}`);
// -------------------------------------------------------------------//

console.log(`----------------2. WAP to print or log the last character of Given string-----------------------`);
function lastCharacter(string){
    const result = string.charAt(string.length - 1);
    console.log(`Given string is              : ${string}`);
    console.log(`Last character of string is  : ${result}`);
}
lastCharacter("Hey, my friend, programming language");
lastCharacter("I am learning logical programs");
lastCharacter("ReactJS");

console.log(`----------------3. WAP to print or log the First character of given string-----------------------`);
function firstCharacter(stringfirst) {
    const response = stringfirst.charAt(0);
    console.log(`Given String    : ${stringfirst}`);
    console.log(`First character : ${response}`); 
}
firstCharacter("React");
firstCharacter("Elon musk");
firstCharacter("Apple founder is stew job");

console.log(`----------------4. WAP to check whether given strings contains word {UI} or not-----------------------`);
function contains(word) {
    const res = word.includes('UI');
    console.log(`Given String    : ${word}`);
    console.log(`Is containes    : ${res}`); 
}
contains("React - UI Developer");
contains("UI Developer");
contains("FrontEnd and Backend Technologies");

console.log(`----------------5. WAP to How do you split a string into an array of substrings?-----------------------`);
function splitString(str) {
    const strSplit = str.split(",");
    console.log(`Given String is                     : ${str}`);
    console.log(`After split into array of substring `, strSplit);
}
splitString("apple,orange,banana");
splitString("Stew,Bill,Jenny,Elon");