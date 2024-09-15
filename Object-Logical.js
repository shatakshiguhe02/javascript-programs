console.log(`===========WAP to list the properties of a JavaScript object==============================`);
var student = {
    name : "David Rayy",
    class : "VI",
    rollno : 12
}
var property = Object.keys(student);
console.log(`1.  List of properties      -> `,property);

console.log(`===========WAP to delete the rollno property from the object deleting the property========`);
var student = {
    name : "David Rayy",
    class : "VI",
    rollno : 12
}
console.log(`2.  Before deleting roll no ->`,student);
delete student.rollno;
console.log(`2   After deleting roll no  ->`,student);


console.log(`===========WAP to get the length of a JavaScript object===================================`);
var car = {
    make: "Toyota",
    model: "camry",
    year : 2020,
    color :"blue"
};
const {make, model, year, color} = car;
const length = Object.keys({make, model, year, color}).length
console.log(`3.  Length of object        -> ${length}`);

console.log(`===========WAP to get dynamic access to an object property in JavaScript==================`);
var person = {
    name:"John deo",
    age: 32,
    profession: "Developer"
}
console.log(`4.  access to object property ->`, person.profession);

console.log(`===========WAP to modify an object's property in an array of objects in JavaScript========`);
var employee = [
    {
        id: 1,
        name: "John Deo",
        profession :"Developer",
        salary: 32000
    }
];
function updatesalary(id, newSalary){
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].id == id) {
            employee[i].salary = newSalary;
            return;
        }
    }
}
updatesalary(1, 60000);
console.table(employee);


console.log(`===========WAP to get the last item of JavaScript object==================================`);
var car = {
    make: "Toyota",
    model: "camry",
    year : 2020,
    color :"blue"
};
let key = Object.keys(car);
let lastkey = key[key.length - 1]
console.log(`6. last item of object  -> ${lastkey} : ${car[lastkey]}`);

console.log(`===========How to add an object to an array in JavaScript==================================`);
var fruit = ["apple", "banana", "orange"];
var newfruit = { 
    name : "mongo"
}
fruit.push(newfruit);
console.log(`7. Add object to array  ->`,...fruit);

console.log(`===========How to convert an Object {} to an Array [] of key-value pairs in JavaScript?=====`);
const obj = {
    key1:"value1",
    key2:"value2",
    key3:"value3"
}
let array = Object.entries(obj);
console.log(...array);
