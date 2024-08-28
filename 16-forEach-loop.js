
const array = [10, 20, 30, 40, 50 ];
array.forEach( ( currentValue, index, arr  )=>{
  console.log(currentValue, index, arr );
} );

console.log(`Traversing set`);

let mySet = new Set(); 
mySet.add(10);
mySet.add(50);
mySet.add(20);
mySet.add(50);
mySet.add(20);
mySet.forEach( (element)=>{
    console.log(element);
} );

console.log(`Traversing Map collection`); //to store multiple elements we use the concept map 
const myMap = new Map();
myMap.set("name", "Jenny"); // key : value pair using set() method
myMap.set("B", "Stew");
myMap.set("C", "Elon");
myMap.set("B", "Bill");
const cGradeStudent = myMap.get("name"); // only to get key use get() method
console.log(cGradeStudent);
myMap.forEach( (value, key)=>{
    console.log(value, key);
} );

// traverse --------------------
let oneSet = new Set();
oneSet.add(10);
oneSet.add(100);
oneSet.add(1000);
oneSet.add(10000);
oneSet.forEach((element)=>{
    console.log(element);  
})