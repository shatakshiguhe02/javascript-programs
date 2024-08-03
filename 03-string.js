var greet = "Good Morning"
console.log("Given string is:",greet);

var greetLength = greet.length;
console.log("Total umber of characters:",greetLength);

var charAt = greet.charAt(0);
console.log("Character at index 0 is :", charAt);

var charAt = greet.charAt(5);
console.log("Character at index 5 is :", charAt);

console.log("-------last index character----------------------");

var lastChar = greet.charAt(greet.length-1);
console.log("Character at last index:",lastChar);

console.log("-------toUppercase-------------------------------");

var upperCaseAt = greet.toUpperCase();
console.log("result to upper case:",upperCaseAt);

console.log("-------toLowercase--------------------------------");

var lowerCaseAt = greet.toLowerCase();
console.log("result to lower case:",lowerCaseAt);

console.log("-------Concat( ) method----------------------------");

var firstName = "Jenny";
var lastName = " Gates";
var concatString = firstName + lastName;
console.log("Concat string using + Operator:",concatString );
var result = firstName.concat(lastName);
console.log("Concat string using concat() :",result );

console.log("-------Indexof( ) method----------------------------");

var indexOf=greet.indexOf("g");
console.log("Index of :",indexOf);

console.log("============= replace() ===============-------------");

var result = greet.replace("Morning", "Afternoon");
console.log("After replace: ", result);

console.log("============= trim() ===============-----------------");

var day = "   Saturday    ";
var dayLength = day.length;
console.log("Before string trim length is: ", dayLength);

var dayAfterTrim = day.trim();
var dayAfterTrimLength= dayAfterTrim.length;
console.log("After string trim length is: ", dayAfterTrimLength);
console.log(dayAfterTrim);

console.log("Total removed character: leading and trailing- ",dayLength- dayAfterTrimLength);

console.log("============= includes() ===============------------");
var result = greet.includes("Mor");
console.log(result);
var result = greet.includes("mor");
console.log(result);

console.log("============= slice() ===============--------------");
var result = greet.slice(3, 11);
console.log(result);
var result = greet.slice(5);
console.log(result);

console.log("============= split() ===============");
var result = greet.split(" ");
console.log(result);
console.log("Total number of words: ", result.length);

var myLove = "I love only JavaScript";
var result = myLove.split(" ");
console.log(result);
console.log("Total number of words: ", result.length);

console.log(` Given sentence - ${myLove} Total number of words ${result}`);

console.log(`I love only "JavaScript" `);