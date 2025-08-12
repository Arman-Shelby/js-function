/***
 * objective: write a function to give me the sum of all numbers in an array
 * step1: create a function named sumOfNumbers
 * step2: call check whether the function is called properly
 * step3: take an array as parameter
 * step4: pass the parameter(s), check whether the parameter is passed properly format
 * step5: do the function tasks (step by step)
 * 
 * */
function sumOfNumbers(numbers)  {
    let sum = 0;
    for (const number of numbers) {
        console.log('Current number:', number);
        sum = sum + number;
    }
    return sum;


}
const numbs = [1, 2, 3, 4, 5];

const sum = sumOfNumbers(numbs);
console.log('Sum of numbers:', sum); // 15 