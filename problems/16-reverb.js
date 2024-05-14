/*
Write a function reverb that accepts a word as an argument. The function should
return a new word where all letters that come after the last vowel (including
the vowel itself) are repeated at the end of the word. If the value passed in is
not a string, say someone passes in a number as an argument, then return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

const vowels = "aeiouAEIOU";

const reverb = (word) => {
    if(typeof word !== 'string') {
        return null;    // return null if input is not a string
    }

    for(let i = word.length; i >= 0; i--) {
        let char = word[i];
        if(vowels.includes(char)) {
            console.log(word.slice(i));
            return word + word.slice(i);
        }   // return word echoed
    }
    return word;   // otherwise, return the string of numbers or consonants
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb('197393'));  // 197393
console.log(reverb(197393));    // null


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverb;
