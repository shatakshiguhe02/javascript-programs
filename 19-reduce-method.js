
const array = [2, 3, 1, 5, 4]; //15


const sum = array.reduce((runningTotal, element)=>{
   return runningTotal + element;
}, 0);
console.log(sum);



const arrayNum = [1, 2, 1, 3, 3, 4, 4];
const duplicate = arrayNum.reduce((accumulator, currentValue) => {
    // Check if the currentValue is already in the accumulator
    if (!accumulator.includes(currentValue)) {
        // If not, add it to the accumulator
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(duplicate);
