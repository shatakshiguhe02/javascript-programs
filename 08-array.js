
let array = [10, 20, 30, 20, 80];
console.log(array);
console.log(array[2]);
console.log(array[array.length - 1]);// read the last value


console.log(`==============update============`);
array[3] = 100;
console.log(array);

console.log(`========================`);


let arrayList = ["Jenny", "Elon", "Stew", "Bill", "Warn"];
console.log(arrayList[2])
    ;

console.log(`==============Traversing an array from start======================`);
for (let index = 0; index < arrayList.length; index++) {
    const element = arrayList[index];
    console.log(element);
}

console.log(`==============Traversing an array in reverse order ======================`);
for (let index = arrayList.length - 1; index >= 0; index--) {
    const element = arrayList[index];
    console.log(element);
}

console.log(`============== Print only even indexed elements  ===============`);
for (let index = 0; index < arrayList.length; index++) {
    if (index % 2 == 0) {
        const element = arrayList[index];
        console.log(element);
    }
}
