/*
Write a function isPerfectSquare that accepts a number as an argument. The
method should return a boolean indicating whether or not the argument is a
perfect square.

A perfect square is a number that is the product of some number multiplied by
itself.*
*/

const isPerfectSquare = num => {
    let result = 0;
    for(let i = 1; i <= num; i++) {     // i <= num accounts for 1 (edge case)
        result = i * i;
        console.log(result);
        if(result === num) {
            return true;
        }
    }
    return false;
}

console.log(isPerfectSquare(1))     // true
console.log(isPerfectSquare(4))     // true
console.log(isPerfectSquare(64))    // true
console.log(isPerfectSquare(100))   // true
console.log(isPerfectSquare(169))   // true
console.log(isPerfectSquare(2))     // false
console.log(isPerfectSquare(40))    // false
console.log(isPerfectSquare(32))    // false
console.log(isPerfectSquare(50))    // false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isPerfectSquare;
