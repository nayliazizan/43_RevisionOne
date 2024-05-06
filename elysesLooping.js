//determine how many cards of a certain type are in the deck
const cardTypeCheck = (stack, card) => {
    let count = 0;
    stack.forEach((number) => {
        if (number === card) {
            count+= 1;
        }
    });
    return count;
}
console.log(cardTypeCheck([1, 2, 3, 4, 4], 4));
// => 2
console.log(cardTypeCheck([1, 2, 3, 4], 3));
// => 1

//determine how many odd or even cards there are
const determineOddEvenCards = (stack, type) => {
    let count = 0;
    for(const num of stack){
        if (type === true) {
            if (num % 2 === 0) {
                count += 1;
            }
        } else {
            if (num % 2 === 1) {
                count += 1;
            }
        }
    }
    return count;
}
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true));
// => 2
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false));
// => 4