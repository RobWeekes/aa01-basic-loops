/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

let alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
    let newStr = '';
    let newChar = '';

    for(let i = 0; i < string.length; i++) {

        let char = string[i];
        console.log(char)
        let index = alphabet.indexOf(char); // find the index of each character
        console.log(index);

        if(index + num > 25) {      // account for letters shifted out of range
            newChar = alphabet[index + num - 26];
        } else {
            newChar = alphabet[index + num];    // then shift the char by 'num'
        }

        console.log(newChar);
        newStr = newStr + newChar;
        console.log(newStr);
    }

    return newStr;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"

console.log(caesarCipher("bootcamp", 14));


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
