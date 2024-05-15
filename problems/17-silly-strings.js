/*
Write a function sillyString that accepts a word as an argument. The function
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/

const vowels = "aeiouAEIOU";

const sillyString = function(word) {
    const wordArr = word.split('');
    let resultArr = [];
    console.log(wordArr);

    for(let i = 0; i < word.length; i++) {
        const char = word[i];

        // push each character in order to new array,
        // then do additional push for vowels \/
        resultArr.push(char);
        console.log(resultArr);

        if(vowels.includes(char)) {  // if you hit a vowel, push 'b' then the vowel again
            resultArr.push('b');
            resultArr.push(char);
            console.log(resultArr);
        }
    }
    console.log(resultArr);
    return resultArr.join('');
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber

console.log(sillyString('isosceles'));    //


// helper func to count vowels, not needed with array push method
// (was doing tricky split method that didnt work with multiple vowels)

// const countVowels = (word) => {
//     let count = 0;
//     for(let i = 0; i < word.length; i++) {
//         if(vowels.includes(word[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels('stop')); // 1
// console.log(countVowels('scooter')); // 3
// let count = countVowels(word);
// console.log(count);

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
