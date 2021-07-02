// 10. Write a JavaScript program to compute the sum and product of an array of integers.

let integerArray = [1, 2, 3, 4, 5];
let sumOfAllArrayElements = 0;
let productOfAllArrayElements = 1;

function sumOfArrayElements(integerArray) {
    for(i = 0; i < integerArray.length; i++) {
        sumOfAllArrayElements += integerArray[i];
    }
    return sumOfAllArrayElements;
}

document.write("The sum of the array elements is " + sumOfArrayElements(integerArray));

function productOfArrayElements(integerArray) {
    for(i = 0; i < integerArray.length; i++) {
        productOfAllArrayElements *= integerArray[i];
    }
    return productOfAllArrayElements;
}

document.write('<br>');
document.write("The product of the array elements is " + productOfArrayElements(integerArray));