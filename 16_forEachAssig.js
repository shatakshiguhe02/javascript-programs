
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`==============1. array element with index using foreach()==========`);
console.log(`Given array: ${arrayNumbers}`);
arrayNumbers.forEach((currentValue, index) => {
    console.log(`Element : ${currentValue}, Index : ${index}`);
});

console.log(`==============2. Find the positive number and log on console=======`);
let emptyArr = [];
arrayNumbers.forEach((currentValue) => {
    if (currentValue > 0) {
        emptyArr.push(currentValue);
    }
})
console.log(`positive Numbers : ${emptyArr}`);

console.log(`==============3. Find the Negative number and log on console=======`);
let emptyArray = [];
arrayNumbers.forEach((currentValue) => {
    if (currentValue < 0) {
        emptyArray.push(currentValue);
    }
})
console.log(`Negative Numbers : ${emptyArray}`);

console.log(`==============4. Find the Even number and log on console===========`);
let evenArray = [];
arrayNumbers.forEach((currentValue) => {
    if (currentValue % 2 == 0) {
        evenArray.push(currentValue);
    }
})
console.log(`Negative Numbers : ${evenArray}`);

console.log(`==============5. Sum of elements and log on console================`);
let sum = 0;
arrayNumbers.forEach((currentValue) => {
    sum = sum + currentValue;
    
})
console.log(`Sum of elements  : ${sum}`);


console.log(`==============6. even indexed array value log on console===========`);
arrayNumbers.forEach((currentValue, index) => {
    if (index%2==0) {
        console.log(`Even Indexed array and its value : ${index} : ${currentValue}`);
    }
})
