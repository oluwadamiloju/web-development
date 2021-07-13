//Given an integer array nums, write a function that returns an array products, such that each
//entry at position i, in products is a product of all other elements in nums except nums[i].
//Example: if nums = [4, 5, 10, 2], your function should return [100, 80, 40, 200]

let founderArray = [4, 5, 10, 2];
let prdt = founderArray[0] * founderArray[1] * founderArray[2] * founderArray[3];

function newArrayOfElements() {
    let products = [];

    for(let num2 = 0; num2 < founderArray.length; num2++) {
        products.push(prdt / founderArray[num2]);
    }
    return products;
}

document.write(newArrayOfElements());

