console.log("-------------no arguments no returns-----------");

function stringBasics(){
    console.log(`1. My dream company name is "Google" `);
}
stringBasics();

console.log("------------------Hobbies----------------------");

function hobbiesList() {
    var hobbyOne = "Sketching";
    var hobbyTwo = "Coding";
    var hobbyThree = "Playing Cricket";
    console.log(`2. My hobbies are : ${hobbyOne}, ${hobbyTwo}, ${hobbyThree}`);
}
hobbiesList();

console.log("------------Addition OF Hobbies----------------");

function hobbies() {
    var hobbyOne = "Sketching";
    var hobbyTwo = "Coding";
    var hobbyThree = "Playing Cricket";
    var TotalLength = hobbyOne.length + hobbyTwo.length + hobbyThree.length;
    console.log(`3. Total Number of characters in Hobbies: ${TotalLength}`);
}
hobbies();