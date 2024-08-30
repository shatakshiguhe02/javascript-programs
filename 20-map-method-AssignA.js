

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(`==========1. Add 10 into each element and log new array result on console======`);
console.log(`Given array          : [${arrayNumbers}]`);
const AddTen = arrayNumbers.map((element)=>{
    return element+10;
})
console.log(`Adding 10 into each  : [${AddTen}]`);


console.log(` `);
console.log(`==========2. Cube the each element and log on console==========================`);
console.log(`Given array          : [${arrayNumbers}]`);
const cubeArray = arrayNumbers.map((element)=>{
    return element*element*element;
})
console.log(`Cube of each element : [${cubeArray}]`);


console.log(` `);
console.log(`==========3. Add the index value into each array element=======================`);
console.log(`Given array          : [${arrayNumbers}]`);
const addIndex = arrayNumbers.map((currentValue, index)=>{
    return currentValue+index;
})
console.log(`Addind index in each : [${addIndex}]`);


