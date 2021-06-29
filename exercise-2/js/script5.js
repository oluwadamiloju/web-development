// 5. Write a function addWithSubcharge that adds two amounts with subcharge. For each amount less than or equal to 10, the subcharge is 1. For each amount greater than 10, the subcharge is 2.

let firstAmount = parseInt(prompt("Enter an amount to add to subcharge"));
let secondAmount = parseInt(prompt("Enter another amount to add to subcharge"));
let subcharge = 0;

function addWithSubcharge(firstAmount, secondAmount) {
    if(firstAmount < 10) subcharge += 1;
    if(secondAmount < 10) subcharge += 1;
    if(firstAmount > 10) subcharge += 2;
    if(secondAmount > 10) subcharge += 2;

    return subcharge;
}

document.write(addWithSubcharge(firstAmount, secondAmount));