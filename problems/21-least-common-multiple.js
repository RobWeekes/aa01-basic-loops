/*
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as
arguments. The functions should return the smallest number that is divisible by
both num1 and num2.
*/


// Math.min(num1, num2) = smaller number
function leastCommonMultiple(num1, num2) {
    for(let i = Math.min(num1, num2); i < 1000000; i++) {
        if(i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = leastCommonMultiple;
