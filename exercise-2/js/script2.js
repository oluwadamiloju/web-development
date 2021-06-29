// 2. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

let x = parseInt(prompt("Enter a integer to check if they are positive or negative: ")); 
let y = parseInt(prompt("Enter another integer to check if they are positive or negative: "));

checkerForFirstNumber = (x > 0) ? x + " is positive" : x + " is negative";
checkerForSecondNumber = (y > 0) ? secondNumber + " is positive" : y + " is negative";

document.write(checkerForFirstNumber);
document.write('<br>');
document.write('<br>');
document.write(checkerForSecondNumber);