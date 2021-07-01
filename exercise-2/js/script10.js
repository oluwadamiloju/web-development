// 10. Write a JavaScript program to compute the sum and product of an array of integers.

let integerArray = [1, 2, 3, 4, 5];
let sum = 0;
let product = 0;

function sumOfArrayElements(integerArray) {
    for(i = 0; i < integerArray.length; i++) {
        sum += integerArray[i];
    }
    return sum;
}

document.write(sumOfArrayElements(integerArray));

function productOfArrayElements(integerArray) {
    for(i = 0; i < integerArray.length; i++) {
        product *= integerArray[i];
    }
    return product;
}

document.write('<br>');
document.write(productOfArrayElements(integerArray));