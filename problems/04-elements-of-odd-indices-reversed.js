/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

function elementsOfOddIndicesReversed(str) {
    let result = [];
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        console.log(char);

        if(i % 2 === 1) {
            result.unshift(char);
            console.log(result);
        }
    }
    return result.join('');
}

console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
