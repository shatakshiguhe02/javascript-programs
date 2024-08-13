console.log(`-------------------Array-Assignment-01------------------------------------`);


console.log(`======================Question-01=========================================`);
let arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`1.   Given Fruit list : ${arrayFruits}`);
console.log(`1.1  First element    : ${arrayFruits[0]}`);
console.log(`1.2  Last element     : ${arrayFruits[arrayFruits.length - 1]}`);

console.log(`======================Question-02=========================================`);
let arrayBefore = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`2.   Given Fruit list : ${arrayBefore}`);
arrayBefore.unshift("Papaya");
console.log(`2.1  Adding at first  : ${arrayBefore}`);

console.log(`======================Question-03=========================================`);
let removeBetween = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`3.   Given Fruit list : ${removeBetween}`);
removeBetween.splice(3, 1);
console.log(`3.1  After RemoveList : ${removeBetween}`);

console.log(`======================Question-04=========================================`);
let arrayAtLast = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`4.   Given Fruit list : ${arrayAtLast}`);
arrayAtLast.push('Pineapple');
console.log(`4.1  Insert at Last   : ${arrayAtLast}`);

console.log(`======================Question-05=========================================`);
let insertElementArray = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`5.   Given Fruit list : ${insertElementArray}`);
insertElementArray.splice(4,0,"Dragon Fruit");
console.log(`5.1  Insert beforeOne : ${insertElementArray}`);

console.log(`======================Question-06=========================================`);
let replaceElement =  ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`6.   Given Fruit list : ${replaceElement}`);
replaceElement.splice(1,1,"Kiwi")
console.log(`6.1  Replace withOne  : ${replaceElement}`);

console.log(`======================Question-07=========================================`);
let indexOneToFour = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`7.   Given Fruit list : ${indexOneToFour}`);
let index = indexOneToFour.slice(1, 4);
console.log(`7.1  Index from 1 - 4 : ${index}`);

console.log(`======================Question-08=========================================`);
let lastThreeFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`8.   Given Fruit list : ${lastThreeFruits}`);
let elementOne = lastThreeFruits[lastThreeFruits.length - 3];
let elementTwo = lastThreeFruits[lastThreeFruits.length - 2];
let elementThree = lastThreeFruits[lastThreeFruits.length - 1];
console.log(`8.1  Last 3 Element   : ${elementOne},${elementTwo},${elementThree}`);

