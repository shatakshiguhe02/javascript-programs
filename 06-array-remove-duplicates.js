
console.log(`======Remove duplicates from array=========`);
// by using { new set() } method we can remove duplicates but then need to use spread operator
// const array = [11, 3, 4, 11, 4, 7, 3];
// const uniqueset = new Set(array);
// const uniquearray = [...uniqueset];
// console.log(uniquearray);

//another option using for loop
const array = [11, 3, 4, 11, 4, 7, 3];
console.log(`Given array                 : [ ${array} ]`);
const uniqueArr = []; // empty array to store the values
for (let index = 0; index < array.length; index++) {
     if (!uniqueArr.includes(array[index])) {
        uniqueArr.push(array[index]);
     }
}
console.log(`After Removing Duplicates   : [ ${uniqueArr} ]`);
console.log(" ");


console.log(`======First and Last char Capitalize========`);
const str = "How are you mate";
console.log(`Given string                : "${str}"`);
const splitString = str.toLowerCase().split(' '); // 'how' 'are' 'you' 'mate'
// console.log(splitString);
let arrayNew = [];
for (let i = 0 ; i < splitString.length; i++){ 
  const character = splitString[i];
  let firstChar = character.charAt(0).toUpperCase();
  let lastChar = character.charAt(character.length-1).toUpperCase();
  let midChar = character.slice(1,-1);
  
  let result = firstChar+midChar+lastChar;
  arrayNew.push(result);
}

console.log(`After capitalize F & L char : "${arrayNew.join(' ')}"`)
