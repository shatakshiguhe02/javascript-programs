
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`==============1. Reverse the array==========================================`);
console.log(`Given array   : ${arrayRollNumbers}`);
const arrayReverse = arrayRollNumbers.reverse();
console.log(`Reverse array : ${arrayReverse}`);


console.log(` `);
console.log(`==============2. Using sort() method and custom sorting logic===============`);
const arraySort = arrayRollNumbers.sort();
console.log(`Sort array    : ${arraySort}`);


console.log(` `);
console.log(`==============3. Sort array im ascending order and custom logic=============`);
const arrayCustom = arrayRollNumbers.sort((n1,n2)=>{
    return n1>n2 ? 1 : -1;
});
console.log(`Array in ascending order  : ${arrayCustom}`);


console.log(` `);
console.log(`==============4. Greatest number from array=================================`);
const arrayGreatest = arrayRollNumbers.sort((n1,n2)=>{
    return n1>n2 ? 1 : -1;
})
const greaterNumber = arrayGreatest[arrayGreatest.length-1];
console.log(`Greatest number from arr  : ${greaterNumber}`);


console.log(` `);
console.log(`==============5. Smallest number from array=================================`);
const arraySmallest = arrayRollNumbers.sort((n1,n2)=>{
    return n1>n2 ? 1 : -1 ;
})
const smallestNumber = arraySmallest[0];
console.log(`Smallest number from arr  : ${smallestNumber}`);


console.log(` `);
console.log(`==============6. Remove duplicates from array===============================`);
// const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
const uniqueArray = [];
for (let index = 0; index < arrayRollNumbers.length; index++) {
    let element = arrayRollNumbers[index];
    if (uniqueArray.indexOf(element)== -1) {
        uniqueArray.push(element);     
    }
}
console.log(`After removing duplicates : ${uniqueArray} `);
