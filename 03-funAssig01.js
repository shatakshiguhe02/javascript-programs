console.log("******************no arguments and no return type*********************************");

function messageOne() {
    console.log("Message one: Javascript the revolution and boost for the technological ERA");
}
messageOne();

function messageTwo() {
    console.log("Message two: The spark of Coding which shines the coders is JAVASCRIPT");
}
messageTwo()

console.log("******************PersonL Details with arguments and no return type***************");

function personalDetails(firstName, lastName, collegeName) {
    console.log("First Name :", firstName);
    console.log("Last Name :", lastName);
    console.log("College Name :", collegeName);
}
personalDetails("Shatakshi","Guhe","PRPCEM");


console.log("******************************Addition of three***********************************");

function addThreeValues(value1,value2,value3) {
    console.log("Given Values:",value1,value2,value3 );
    var addition = value1+value2+value3;
    console.log("Addition of three :", addition);
}
addThreeValues(10.23, 600, 40);

function addThreeValues(param1,param2,param3) {
    console.log("Given Values:", param1,param2,param3);
    var addition = param1+param2+param3;
    console.log("Addition of three :", addition);
}
addThreeValues("Hello","Good","Morning");