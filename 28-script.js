
console.log('====== DOM API - getElementById() ===========');
const headingElement = document.getElementById("heading");
console.log(headingElement);
console.log(headingElement.innerHTML);

console.log(`=======DOM API - getElementByTagName()========`);
const h3Element = document.getElementsByTagName("h3"); // return collection of data
console.log(h3Element);
console.log(h3Element[0].innerHTML);

console.log(`========DOM API - getElementbyClassName=======`);
const techElements = document.getElementsByClassName("tech");
console.log(techElements);
for (const element of techElements) {
    console.log(element.innerHTML); 
}

console.log(`========DOM API - querySelector()=============`);
console.log(`============fetching an element with its tag name ========`);
const elementH3 = document.querySelector("h3");
console.log(elementH3);

console.log(`============fetching an element with its id ===============`);
const elementreact = document.querySelector("#react")
console.log(elementreact.innerHTML);

console.log(`============fetching an element with its class name ===============`);
const elementClass = document.querySelector(".tech") //queryselector will return only one element 
console.log(elementClass.innerHTML); //top one ll be printed on console

console.log(`===========DOM API - querySelectorAll()====================`);
console.log(`============fetching all element with Li tag name ===============`);
const elementLi= document.querySelectorAll("li");
for (const element of elementLi) {
    console.log(element.innerHTML);
}

console.log(`============fetching all element with class name as tech ===============`);
const elementTech = document.querySelectorAll('.tech');
for (const element of elementTech) {
    console.log(element.innerHTML);
}

console.log(`=========Modifying the element==============`);
const h3_element = document.querySelector("h3");
h3_element.innerHTML = "My Skills";

console.log(`=========Applying the style==============`); // just for learning purpose never used in real
const angularelement = document.querySelector("#ang");
angularelement.style.color = "orange";
angularelement.style.fontSize = "larger";
angularelement.style.fontFamily = "forte";
// angularelement.style.backgroundColor = "pink";

console.log(`=========Changing an attribute==============`); // just for learning purpose never used in real
const anchorEle = document.querySelector('a'); // to change the attribute value use setAttribute
anchorEle.setAttribute("href", "http://www.facebook.com/");

console.log(`============== creating new node under DOM tree========================`);
const element_h2 = document.createElement("h2");
const textNode = document.createTextNode("E-Commerce: Student Management");

element_h2.appendChild(textNode);
const elementSection = document.querySelector("section");

elementSection.appendChild(element_h2);
element_h2.style.color = "red";

console.log(`======= Remove Child ==========`);
const elementUL = document.querySelector("ul");
const elementReact = document.querySelector("#react");

elementUL.removeChild(elementReact);

console.log(`================EVENTS======================`);
const gradPara = document.querySelector("#grad");
gradPara.addEventListener('click', ()=>{
    console.log(`You clicked me aa...`); 
    alert("Hey.. Man you clicked me ah!!");
});

const numberToSquare = document.querySelector("#numberToSquare");
const btnSquare = document.querySelector("#squareBtn");
btnSquare.addEventListener('click', ()=>{
    alert(numberToSquare.value * numberToSquare.value);
})

const btnVowels = document.querySelector("#vowelsBtn");
const vowels = "aeiou";
let vowelsStr = "";
btnVowels.addEventListener('click', () => {
   const givenName = prompt("Enter your name", "Jenny");
   const nameInLowerCase = givenName.toLowerCase();
   const isConfirm = confirm("Are you Sure ?");
   if (isConfirm) {
    for (const char of nameInLowerCase) {
        if (vowels.includes(char)) {
            vowelsStr = vowelsStr + char;
        }   
       }
       alert(`Vowels : ${vowelsStr} in given name and it's count is : ${vowelsStr.length}`);
   }
});