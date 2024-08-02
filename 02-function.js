console.log("=============function with no arguments and no return value==========");


function show() {
    console.log("Inside show function");
}
show();


console.log("=============function with arguments and no return value==========");


function multipy(n1, n2) {
    console.log("Given Numbers:", n1, n2);
    var result = n1 * n2;
    console.log("Multiplication is", result);
}
multipy(8, 9);
multipy(80, 90);
multipy(8.1, 9.1);
multipy(8);

console.log("=============function with no arguments and return value==========");


function demo() {
    console.log("Inside demo function....");
    return "Good Morning"
}
var result = demo();
console.log(result);

console.log("=============function with arguments and return value==========");

function square(num) {
    console.log("Given number of square is :", num);
    var result = num * num;
    return result;
}
var returnValue = square(5);
console.log("Square is", returnValue);