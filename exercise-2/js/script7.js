// 7. Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum.

let integer1 = parseInt(prompt("Please enter an integer: "));
let integer2 = parseInt(prompt("Please enter an integer: "));
let sum;

sum = integer1 + integer2;

if(integer1 == integer2) {
    sum = 3 * (integer1 + integer2);
}

document.write("The sum of the integers is " + sum);