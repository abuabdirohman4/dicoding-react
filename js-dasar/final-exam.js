// if ((true || false) && (false || false)) {
//     console.log("It's true");
// } else {
//     console.log("It's false");
// }

// let x;
// x = 7;
// x = 'JS is great';
// console.log(x);

// const capital = {
//     "Jakarta": "Indonesia",
//     "London": "England",
//     "Tokyo": "Japan"
// }
// capital["New Delhi"] = "Indonesia";

// console.log(capital);
// console.log(capital["Indonesia"]);

// function calculate(value) {
//     return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
// }

// console.log(calculate(3));

// function minMax(arrayOfNumbers) {
//     let currentMin = arrayOfNumbers[0];
//     let currentMax = arrayOfNumbers[0];
//     for (value of arrayOfNumbers) {
//         if (value < currentMin) {
//             currentMin = value;
//         } else if (value > currentMax) {
//             currentMax = value;
//         }
//     }

//     console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }

// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71])

// let myString = "";

// try {
//     myString += "a";
//     throw Error();
// } catch(e) {
//     myString += "b";
// } finally {
//     myString += "c";
//     throw Error();
//     myString += "d";
// }

// console.log(myString);

// function product(firstNumber, secondNumber) {
//     return firstNumber * secondNumber;
// }

// primeList.forEach((element) => {
//     console.log(element);
// });


// function myFunction() {
//     const multiplier = (firstNumber, secondNumber) => firstNumber * secondNumber;
//     return multiplier;
// }

// const doubler = (num) => num * 2;
// console.log(doubler(2));

// const name = 'Dicoding';
// const language = 'JavaScript';

// console.log(`Hello $name. Welcome to $language!`);

function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
    console.log(`You are logged in as ${value}`);
})
console.log("Welcome!");