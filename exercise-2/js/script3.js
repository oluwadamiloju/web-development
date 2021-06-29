// 3. Write a JavaScript program to find the area of a scalene triangle where lengths of the three of its sides are 5, 6, 7.
let firstSide = 5;
let secondSide = 6;
let thirdSide = 7;

let semiPerimeter = (firstSide + secondSide + thirdSide) / 2;
let area = Math.sqrt(semiPerimeter * (semiPerimeter - firstSide) * (semiPerimeter - secondSide) * (semiPerimeter - thirdSide));

document.write(area); 