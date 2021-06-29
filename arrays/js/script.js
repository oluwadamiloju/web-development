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

let countryAndYears = countries.concat(years); //concat method joins two arrays
document.write('<br>');
document.write('<br>');
document.write(countryAndYears);

document.write('<br>');
document.write('<br>');
document.write(countryAndYears.join(" & ")); //join method converts the array to a string and seperates them by comma, the default separator if one is not specified

document.write('<br>');
document.write('<br>');
document.write(countryAndYears.reverse()); //reverse method reverses the elements of an array

document.write('<br>');
document.write('<br>');
document.write(countries.sort()); //sort method sorts the arrays in ascending alphabetical order or in numerical order. the numerical order may cause problems some times...look up compare method
