

console.log(`Traversing using forEach() `);
const array = [10, 21, 30, 43, 50];
array.forEach((element) => {
    console.log(element);
});

console.log(` ==== Even Numbers ===== `);
array.forEach((element) => {
    if (element % 2 == 0) {
        console.log(element);
    }
});


console.log(` ==== Transform array to it's square ===== `);
const arrayNum = [10, 21, 30, 43, 50];
console.log(arrayNum);
const arraySquare = arrayNum.map((element) => {
    return element * element;
});
console.log(arraySquare);