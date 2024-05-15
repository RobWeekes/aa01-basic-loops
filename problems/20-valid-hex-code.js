/*
Define a function called `validHexCode` that returns `true` if its string
parameter is a valid hex code.

A valid hex code must begin with a pound key `#` followed by 6 characters.
Each character must be a digit from 0-9 or an alphabetic character from A-F.
All alphabetic characters may be uppercase or lowercase.
*/

const hexChars = 'abcdefABCDEF0123456789';

const validHexCode = str => {
    if(str.length !== 7 || str[0] !== '#') {
        return false;
    }

    for(let i = 1; i < str.length; i++) {
        if(!hexChars.includes(str[i])) {
            console.log('not a number or A-F');
            return false;
        }
    }
    return true;
}

console.log(validHexCode("!123456"));  // false
console.log(validHexCode("#123"));     // false
console.log(validHexCode("#1234567")); // false
console.log(validHexCode("1234567"));  // false
console.log(validHexCode("123456"));   // false
console.log(validHexCode("#123456"));  // true
console.log(validHexCode("#ABCDEF"));  // true
console.log(validHexCode("#abcDEF"));  // true
console.log(validHexCode("#88ef29"));  // true
console.log(validHexCode("#222!E4"));  // false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
try {
  module.exports = validHexCode;
} catch {}
