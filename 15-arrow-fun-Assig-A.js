
console.log(`============Arrow Function Assignment==================`);
console.log(`--------1. with no args and no return value------------ `);
const FirstArrow = () =>{
    console.log(`"Good Morning, Today is Monday"`);   
}
FirstArrow();
console.log(` `);


console.log(`--------2. with 3 args and no return value------------- `);
const multiplication = (n1,n2,n3=1) => {
    console.log(`Given args are    : ${n1}, ${n2}, ${n3}`);    
    console.log(`multiplication is : ${n1*n2*n3} `);    
}
multiplication(5,5,2);
multiplication(10,4);
console.log(` `);


console.log(`--------3. with 5 args and return value---------------- `);
const addition = (a1,a2,a3,a4,a5) => {
     const sum = a1+a2+a3+a4+a5;
     console.log(`Given args are    : ${a1},${a2},${a3},${a4},${a5} `);
     return sum;      
}
const logValues = (str1, str2, str3, str4, str5) => { //concatenated strings
    const message = `${str1} ${str2} ${str3} ${str4} ${str5}`;
    console.log(`Addition is       : ${message}`);
    return message;
}
const result = addition(100,100,200,349,756);
console.log(`Addition is       : ${result}`);

const resultmessage = logValues("I am","learning","ES6","features","in depth")