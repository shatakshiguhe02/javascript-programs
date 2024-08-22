console.log(`----------------Count Character for small and capital case------------------------------ `);

function charCount(str) {  //functionDefination
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') { //this ensures that 'A' is treated the same as 'a'
            count++;
        }
    }
    return count;

}
const strings =  ["JavaScript", "Do or Die", "Learn with us, Job with us", "Empowering Dreams, Guaranteeing Futures", "Anny, My favorite fruit is Apple"];

strings.forEach( S => {
    const result = charCount(S);
    console.log(`String : ${S} --> Count of 'a' or 'A' : ${result}`);
});
