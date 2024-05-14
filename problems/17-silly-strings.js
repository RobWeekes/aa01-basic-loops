/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/

const vowels = "aeiouAEIOU";

// helper func to count vowels
const countVowels = (word) => {
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i])) {
            count++;
        }
    }
    return count;
}

const sillyString = function(word) {
    let result = '';    // basic string concat is only working for 1 vowel words
    const resultArr = word.split('');
    console.log(resultArr);
    let vowelIndex = 0;

    let count = countVowels(word);
    console.log(count);

    for(let i = 0; i < word.length; i++) {
        const char = word[i];

        if(vowels.includes(char) && count > 0) {
            console.log(count)
            // slice(indexStart, indexEnd)
            // result = word.slice(0, i + 1) + 'b' + char; // this only works for 1 vowel words, with more vowels this restores the first part of word to normal
            console.log(result);
            resultArr.push('b');
            resultArr.push(char);
            count--;
            vowelIndex = i;
            console.log(vowelIndex);
        }
        console.log(vowelIndex);
        // console.log(result);
    }
    // result = result + word.slice(vowelIndex + 1, word.length);
    // return result;
    return resultArr;
}

console.log(countVowels('stop')); // 1
console.log(countVowels('scooter')); // 3

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
