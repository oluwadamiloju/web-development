// let sub = function subtotal(price, quantity) {
//     return price * quantity;
// };

// let result = sub(2, 17);
// console.log(result);

let totalTax = function calculateTax(subtotal) {
    let taxRate = 0.05;
    let tax = subtotal * taxRate;
    return tax;
};

let totalResult = function calculateTotal(price, quantity) {
    let subtotal = price * quantity;
    return subtotal + result1;
};

let result1 = totalTax(7);
let result2 = totalResult(3, 5);

console.log(result2);




