// 11. Write a function called sandwich calculator. This should accept one value: slicesOfBread
// - The function should return the total number of possible sandwiches based on the amount of slices available, so if there are 10 slices, it should return 5.
// Test your function with an alert box.
// - Extend your function so it accepts two values, slicesOfBread and slicesOfCheese.
// It takes two slices of bread and one of cheese to make a sandwich. The function should return the total number of possible sandwiches,
// so if there are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need an if statement to make this work.


// let slicesOfBread = parseInt(prompt("Enter the total slices of bread: "));
// function sandwichCalculator(slicesOfBread) {
//     let possibleSandwiches = Math.floor(slicesOfBread / 2);
//     return possibleSandwiches;
// }

// alert(sandwichCalculator(slicesOfBread));

let slicesOfBread = parseInt(prompt("Enter the total slices of bread: "));
let slicesOfCheese = parseInt(prompt("Enter the total slices of cheese: "));
let possibleSandwiches;

function sandwichCalculator(slicesOfBread, slicesOfCheese) {
    let breadPairs = Math.floor(slicesOfBread / 2);
    let cheeseCombo = breadPairs;

    if(slicesOfCheese = cheeseCombo || slicesOfCheese > cheeseCombo) {
        possibleSandwiches = breadPairs;
    }

    if(slicesOfCheese < cheeseCombo) {
        possibleSandwiches = slicesOfCheese;
    }
        
    return possibleSandwiches;
}

document.write("Possible number of sandwiches is " + sandwichCalculator(slicesOfBread, slicesOfCheese));