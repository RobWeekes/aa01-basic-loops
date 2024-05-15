/*
Write a function doubleLetterCount that takes in a string and returns the number
of times that the same letter repeats twice in a row.
*/

const doubleLetterCount = str => {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        let char1 = str[i];
        console.log(char1);
        let char2 = str[i + 1];
        console.log(char2);

        if(char2 === char1) {
            count++;
            console.log(count);
        }
    }
    return count;
}



console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubleLetterCount;
