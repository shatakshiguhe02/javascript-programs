
console.log("======================Vowel count================================");
var sentence = "I am very good IT Developer";
vowels = "aeiou";
vowelCount = 0;
for (let i = 0; i < sentence.length; i++) {
    var character = sentence.charAt(i).toLowerCase();
    if (vowels.includes(character)) {
        vowelCount++;
    }
}
console.log(`Total number of vowels including small and capital are : ${vowelCount}`)


console.log("======================Sum of cube================================");
// sum of 1 to 5;
// var sum = 0;
// for (let index = 1; index <=5; index++) {
//     sum = sum + index;
// }
// console.log(`sum of 1 to 5: ${sum}`);
var sumCube = 0;
for (let index = 1; index <= 5; index++) {
    sumCube = sumCube + index * index * index;
}
console.log(`Sum of the cube of numbers 1 to 5 : ${sumCube}`);



console.log("================Odd-Position characters from given string==============");

function oddPositioned(string) {
    console.log(`Given string is : ${string}`);

    for (let i = 0; i < string.length; i++) {
        var char = string.charAt(i);
        if ((i % 2 == 1) && char != ' ') {
            console.log(char);
        }
    }
}
oddPositioned("Hard work always pays back");
oddPositioned("Soon I will be UI IT Champ");
