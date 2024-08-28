
console.log(`========Program to find duplicate characters=========`);
// console.log('');   

// function duplicateCharCount(str){
//    const charCount = {};
//    for (const character of str) { //loop for each character in inputstring
//      if (character!==' ') {
//         charCount[character] = (charCount[character] || 0) + 1 ;
//      }
//    }
//    for (const character in charCount) {
//     if (charCount[character] > 1) {
//         console.log(`${character} - ${charCount[character]}`);
//      }
//    }
// }
// const string = ["Banana", "Apple", "Software Developer"];

// string.forEach(str => {
//     console.log(`Duplicate characters in "${str}"`);
//     duplicateCharCount(str);
// });



// ==========================
let str = "Banana";  // a - 3, n - 2
let finalOutput = {};
for (let index = 0; index < str.length; index++) {
    const element = str.charAt(index);
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        const char = str.charAt(j);
        if (char==element) {
            count++;     
        }
    }
    // console.log(element, count);
    if (count>1) {
        finalOutput[element] = count;
    }  
}
// console.log(finalOutput);
for (const key in finalOutput) {
    const element = finalOutput[key];
    console.log(`${key} - ${element}`);
    
}