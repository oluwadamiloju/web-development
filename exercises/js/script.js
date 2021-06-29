// 1. generate a secret random number between 1 and 12

document.write(Math.floor(Math.random() * 12) + 1);

document.write("<br>");
document.write("<br>");

// 2. Output the name of the day based on the value of the day variable by using the switch statement

var dayOfWeek = parseInt(prompt("Enter a number between 1 and 7"));
let output;

if(dayOfWeek >= 1 && dayOfWeek <= 7){
    switch(dayOfWeek) {
        case 1:
            output = "Sunday";
            document.write(output);
            break;
        case 2:
            output = "Monday";
            document.write(output);
            break;
        case 3:
            output = "Tuesday";
            document.write(output);
            break;
        case 4:
            output = "Wednesday";
            document.write(output);
            break;
        case 5:
            output = "Thursday";
            document.write(output);
            break;
        case 6:
            output = "Friday";
            document.write(output);
            break;
        case 7:
            output = "Saturday";
            document.write(output);
            break;
        default:
            output = "";
            document.write(output);
    }
}                                                                                                                                                                                                                                                             

//3. Write a brief snippet of code using a Do While loop. The loop needs to have a counter starting at zero that increments every time the loop is executed. Inside the loop there also need to be a variable, initially set at 1, that doubles each time the loop is executed. The loop needs to continue until the doubling variable exceeds 5,000. Once the loop terminates, then return the counter.

let counter = 0;
let doublingValue = 1;

do {
    doublingValue *= 2;
    counter++;
} while(doublingValue <= 5000);

document.write("<br>");
document.write("<br>");
document.write("Counter is " + counter + " when doubling value exceeds 5000");
document.write("<br>");

//4. Write a program that displays all prime number from 1 - 10

for(let i = 1; i <= 10; i++) {
    let isPrime = true;
    for(let dividingNumber = 2; dividingNumber < i; dividingNumber++) {
        if(i % dividingNumber == 0 && i != dividingNumber) {
            isPrime = false;
            break;
        }
    }
    if(i > 1 && isPrime == true) {
        document.write('<br>')
        document.write(i + " is a prime number");
    }
}


 
        