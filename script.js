console.log("Hello world.");
console.log("From script.js file.");

const myName = "Mark";
let age = 60;
const number = 9053076455;
const address = "Purok dos";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);

function greet(greetings, names = []) {
    if (Array.isArray(names)) {
        names = names.join(", ");
    }
    return `${greetings} sa enyu ${names}`;
}
console.log(greet("Mayung aga", ["Mark", "Bai", "Soy", "Tol", "Erp"]));

const heading = document.querySelector("h1");
heading.textContent = "Your father's name";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "100px";
console.log(heading);

heading.addEventListener("click", function () {
    heading.style.color = "red";
    console.log("Heading was clicked.");
});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);

const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});