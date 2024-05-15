/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

const vowels = "aeiou";
let vowelArr = ['a', 'e', 'i', 'o', 'u'];

function vowelCipher(str) {
    let strArr = [];

    for(let i = 0; i < str.length; i++) {
        let char = str[i];

        if(vowelArr.includes(str[i])) {
            if(char === 'a') {strArr.push('e')}
            if(char === 'e') {strArr.push('i')}
            if(char === 'i') {strArr.push('o')}
            if(char === 'o') {strArr.push('u')}
            if(char === 'u') {strArr.push('a')}
        } else {
            strArr.push(char)}
    }

    console.log(strArr);
    return strArr.join('');
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
