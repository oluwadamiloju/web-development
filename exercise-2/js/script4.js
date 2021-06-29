// Write a function toArray that takes 5 values and returns these values in an array.

let firstValue = prompt("Enter a value to put in an array: ");
let secondValue = prompt("Enter a value to put in an array: ");
let thirdValue = prompt("Enter a value to put in an array: ");
let fourthValue = prompt("Enter a value to put in an array: ");
let fifthValue = prompt("Enter a value to put in an array: ");

function toArray(firstValue, secondValue, thirdValue, fourthValue, fifthValue) {
    let array = [];
    array.push(firstValue);
    array.push(secondValue);
    array.push(thirdValue);
    array.push(fourthValue);
    array.push(fifthValue);

    return array;
}

document.write(toArray(firstValue, secondValue, thirdValue, fourthValue, fifthValue))