/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

const vowels = "aeiouAEIOU";

// const abbreviate = str => {
//     let result = '';
//     for(let i = 0; i < str.length; i++) {
//         if(!vowels.includes(str[i])) {
//             result += str[i];
//         }
//     }
//     return result;
// }

// FILTER method --
const abbreviate = str => {
    let letterArr = str.split('');
    const resultArr = letterArr.filter((char) => !vowels.includes(char));
    return resultArr.join('');
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
