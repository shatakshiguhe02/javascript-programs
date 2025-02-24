


function isPrime(num){
    for (let i = 2; i < num; i++) {
        if(num% i==0){
            return false;
        } 
    }
   return true; 
}
var result = isPrime(4);
console.log(`Is number 4 Prime - ${result}`);

var result = isPrime(5);
console.log(`Is number 5 Prime - ${result}`);

var result = isPrime(9);
console.log(`Is number 9 Prime - ${result}`);