// 1. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
let firstNumber = parseInt(prompt("Enter a number: ")); 
let secondNumber = parseInt(prompt("Enter another number: "));
result = (firstNumber + secondNumber == 50 || secondNumber == 50) ? "sum of numbers is 50 is true" : "sum of numbers is 50 is false";
document.write(result);
document.write('<br>');
result2 = (firstNumber == 50) ? firstNumber + " is 50 is true" : firstNumber + " is 50 is false";
document.write(result2);
document.write('<br>');
result3 = (secondNumber == 50) ? secondNumber + " is 50 is true" : secondNumber + " is 50 is false";
document.write(result3);
document.write('<br>');

