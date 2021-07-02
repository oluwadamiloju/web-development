// 12. Given that we have an array of 10 values, write a program that
// - finds the largest value in array
// - finds the smallest value in the array
// - finds the sum, product of all values in the array
// - finds the sum, product of all odd numbers in the array

let intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let largest;
let smallest;
let sumOfIntegerArrayElements = 0;
let sumOfArrayOddElements = 0;
let productOfIntegerArrayElements = 1;
let productOfArrayOddElements = 1;

function largestValue(intArray) {
    for(let j = 0; j < intArray.length; j++) {
        largest = intArray[j];
        if(intArray[j + 1] > largest) {
            largest = intArray[j + 1];
        };
    };
    return largest;
};

document.write("The largest value is " + largestValue(intArray));
document.write('<br>');

function smallestValue(intArray) {
    for(let k = 0; k < intArray.length; k++) {
        smallest = intArray[0];
        if(smallest > intArray[k]) {
            smallest = intArray[k];
        }
    }
    return smallest;
}

document.write("The smallest value is " + smallestValue(intArray));
document.write('<br>');

function sumOfArrayElements(intArray) {
    for(let a = 0; a < intArray.length; a++) {
        sumOfIntegerArrayElements += intArray[a];
    };
    return sumOfIntegerArrayElements;
};

document.write("The sum of the array elements is " + sumOfArrayElements(intArray));
document.write('<br>');

function productOfArrayElements(intArray) {
    for(let b = 0; b < intArray.length; b++) {
        productOfIntegerArrayElements *= intArray[b];
    };
    return productOfIntegerArrayElements;
};

document.write("The product of the array elements is " + productOfArrayElements(intArray));
document.write('<br>');

function sumOfOddElements(intArray) {
    for(let d = 0; d < intArray.length; d++) {
        if(intArray[d] % 2 != 0) {
            sumOfArrayOddElements += intArray[d];
        };  
    };
    return sumOfArrayOddElements;
};

document.write("The sum of the odd array elements is " + sumOfOddElements(intArray));
document.write('<br>');

function productOfOddElements(intArray) {
    for(let f = 0; f < intArray.length; f++) {
        if((intArray[f] % 2) != 0) {
            productOfArrayOddElements *= intArray[f];
        };
    };
    return productOfArrayOddElements;
};

document.write("The product of the odd array elements is " + productOfOddElements(intArray));
document.write('<br>');