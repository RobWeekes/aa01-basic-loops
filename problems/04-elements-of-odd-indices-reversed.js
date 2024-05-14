/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

const elementsOfOddIndicesReversed = (str) => {
    // let ltrArr = str.split('');  // split not needed to do for loop
    // console.log(ltrArr);
    let resultArr = [];

    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        console.log(char);
        if(i % 2 !== 0) {
            resultArr.unshift(char);
            // console.log(resultArr);
        }
    }
    console.log(resultArr);
    return resultArr.join('');
}


console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
