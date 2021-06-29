let years = [1855, 1848, 1420];
let countries = ["Canada", "France", "Nigeria", "Thailand", "United States"];
let mess = [53, "Canada", true, 1420];

document.write("Years: " + years);
document.write('<br>');
document.write('<br>');
document.write("Countries: " + countries);
document.write('<br>');
document.write('<br>');
document.write("Mess: " + mess);

let len = countries.length;
console.log(len);

console.log(countries.push("Morocco"));
console.log(countries.pop());
console.log(countries.unshift("Ghana"));
console.log(countries.shift());

