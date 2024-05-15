/*
Write a function fib that accepts a number n as an argument. The function should
return the "n-th" number of the Fibonacci sequence. The first two numbers of the
Fibonacci sequence are 1; to generate subsequent numbers of the Fibonacci
sequence, we take the sum of the previous two numbers of the sequence.
*/

const fib = n => {
    // if(n === 0) {    // not needed if for loop is done correctly
    //     return null;
    // }
    // if(n === 1) {
    //     return 1;
    // }
    // if(n === 2) {
    //     return 1;
    // }

    let sequence = [1, 1];

    for(let i = 0; i < n - 2; i++) {
        let last = sequence[sequence.length - 1];
        let secondLast = sequence[sequence.length - 2];
        let next = last + secondLast;
        sequence.push(next);
        console.log(next);
        console.log(sequence);
        console.log(last);
    }

    let last = sequence[sequence.length - 1];
    console.log(last);
    console.log(sequence);
    return last;
}

console.log(fib(1));    // 1
console.log(fib(2));    // 1
console.log(fib(3));    // 2
console.log(fib(4));    // 3
console.log(fib(5));    // 5
console.log(fib(6));    // 8

console.log(fib(7));    // 13
console.log(fib(8));    // 21
console.log(fib(9));    // 34

console.log(fib(10));   // 55
console.log(fib(11));   // 89
console.log(fib(12));   // 144


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fib;
