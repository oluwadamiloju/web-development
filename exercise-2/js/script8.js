// 8. Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array.
// example - console.log(first([7, 9, 0, -2])); console.log(first([],3)); console.log(first([7, 9, 0],3)); console.log(first([7, 9, 0, -2],6)); 
// Output should be: Expected Output : 
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]

let randomArray = ["sarah", [], true, 6];
function firstElement(randomArray) {
    let first = randomArray[0];
    return first;
}

document.write(firstElement(randomArray));