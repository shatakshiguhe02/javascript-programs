console.log(`-------------------Array-Assignment-02---------------------------------`);
let arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`#.   Given Array List  : ${arrayNumbers}`);

console.log(`=======================================================================`);
let arrayOne = arrayNumbers.length;
console.log(`1.   Total Element     : ${arrayOne}`);

console.log(`=======================================================================`);
let arrayTwo = arrayNumbers[0];
let arrayThree = arrayNumbers[arrayNumbers.length - 1];
console.log(`2.   First Element     : ${arrayTwo}`);
console.log(`2.1  Last Element      : ${arrayThree}`);

console.log(`=======================================================================`);
let lastThird = arrayNumbers[arrayNumbers.length - 3];
console.log(`3.   ThirdLast Element : ${lastThird} `);

console.log(`=======================================================================`);
let evenNumber = []; //  array to hold the even numbers
for (const element of arrayNumbers) {
    if (element % 2 == 0) {
        evenNumber.push(element);
    }
}
console.log(`4.   Even Numbers are  : ${evenNumber} `);

console.log(`=======================================================================`);
// let arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let oddNumbers = [];
for (const element of arrayNumbers) {
    if (element % 2 == 1) {
        oddNumbers.push(element);
    }
}
console.log(`5.   Odd Numbers are   : ${oddNumbers}`);

console.log(`=======================================================================`);
let mulitpleOffive = [];
for (const element of arrayNumbers) {
    if (element % 5 == 0) {
        mulitpleOffive.push(element);
    }
}
console.log(`9.   Multiple of Five  : ${mulitpleOffive}`);

console.log(`=======================================================================`);
let result = arrayNumbers.includes(115);
console.log(`10.  Is Number 115 available in the array : ${result}`);

console.log(`=======================================================================`);
let number = arrayNumbers.includes(23);
console.log(`10.  Is Number 115 available in the array : ${number}`);

console.log(`=======================================================================`);
arrayNumbers.splice(3, 0, 55, 66)
console.log(`10.  Insert Number     : ${arrayNumbers}`);

console.log(`=======================================================================`);
arrayNumbers.splice(4, 3);
console.log(`11.  After Delete 3 elements from index 4 : ${arrayNumbers}`);
