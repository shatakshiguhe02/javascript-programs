console.log('======== Object cloning===========');
const student = {
    firstName: "Jenny",
    lastName: " Gates",
    age: 56
}
const clonedStudent = Object.assign({}, student);
console.log(clonedStudent);

const clonedObj = {...student};
console.log(clonedObj);

console.log('======== Object Merge ===========');
const std = {
    firstName: "Jenny",
    lastName: " Gates",
    age: 56
}
const address = {
    city: "LA",
    pin: 411057
}
const mergedObject = Object.assign({}, std, address);
console.log(mergedObject);
const mergeObj = { ...std, ...address };
console.log(mergeObj);