
console.log(`========Program to find duplicate characters=========`);
console.log('');   

function duplicateCharCount(str){
   const charCount = {};
   for (const character of str) { //loop for each character in inputstring
     if (character!==' ') {
        charCount[character] = (charCount[character] || 0) + 1 ;
     }
   }
   for (const character in charCount) {
    if (charCount[character] > 1) {
        console.log(`${character} - ${charCount[character]}`);
     }
   }
}
const string = ["Banana", "Apple", "Software Developer"];

string.forEach(str => {
    console.log(`Duplicate characters in "${str}"`);
    duplicateCharCount(str);
});