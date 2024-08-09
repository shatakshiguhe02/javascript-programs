console.log("==================If else statement======================");

console.log(`Before if block`);
var age = 19;
if (age >= 18) {
    console.log(`Inside if block`);
    console.log(`You are eligible for vote. Age : ${age}`);
}
console.log(`After if block`);


console.log("-----------------------------------------------------------");

var votingChecker = function (age, person) {
    if (age >= 18) {
        console.log(`Hey ${person} your age is ${age} and you are eligible for vote`);
    } else {
        console.log(`Unfortunately , Hey ${person} your age is ${age} and you are not eligible for vote`);
    }
}
votingChecker(21, "Jenny");
votingChecker(17, "Elon");