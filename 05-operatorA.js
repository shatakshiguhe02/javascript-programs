
function squareOfWordLength(sentence) {
    console.log(`1. Given sentence is : ${sentence}`);
    var length = sentence.length;
    console.log(`1.1 length of the sentence : ${length}`);
    var square = length * length;
    return square;
}
var result = squareOfWordLength("JavaScript");
console.log(`1.2 Square of word length is : ${result}`);
console.log("------------------------------------------------");
var result = squareOfWordLength("Google Chrome");
console.log(`1.2 Square of word length is : ${result}`);
console.log("------------------------------------------------");
var result = squareOfWordLength("Web Developer Smart");
console.log(`1.2 Square of word length is : ${result}`);
console.log("================================================");

function divideMultiply() {
    var string = "I am Angular Developer";
    console.log(`2. Given string is : ${string}`);
    var stringLength = string.length;
    console.log(`2.1 Length of the given string : ${stringLength}`);
    var result = string.split(" ");
    var totalWords = result.length;
    console.log(`2.2 Length of words available  : ${totalWords}`);

    console.log("------------------------------------------------");
    var divisionResult = stringLength / totalWords;
    console.log(`2.3 String length divided by string words : ${divisionResult}`);

    console.log("------------------------------------------------");
    var multiplyResult = stringLength * totalWords;
    console.log(`2.4 String length multiply by string words : ${multiplyResult}`);
}
divideMultiply();