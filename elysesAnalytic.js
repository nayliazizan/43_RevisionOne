// Find the position of a card
const getCardPosition = (myArr, card) => {
    return myArr.indexOf(card);
}

// Determine if a card is present
const doesStackIncludeCard = (myArr, card) => {
    return myArr.includes(card);
}

// Determine if each card is even
const isEachCardEven = myArr => {
    return myArr.every(num => num % 2 == 0);
}

// Check if the stack contains an odd-value card
const doesStackIncludeOddCard = myArr => {
    return myArr.some(num => num % 2 !== 0);
}

// Get the first odd card from the stack
const getFirstOddCard = myArr => {
    return myArr.find(num => num % 2 !== 0);
}

// Determine the position of the first card that is even
const getFirstEvenCardPosition = myArr => {
    return myArr.findIndex(num => num % 2 == 0);
}

let card = 2;
console.log(getCardPosition([9, 7, 3, 2], card));
// => 3

card = 3;
console.log(doesStackIncludeCard([2, 3, 4, 5], card));
// => true

console.log(isEachCardEven([2, 4, 6, 7]));
// => false

console.log(doesStackIncludeOddCard([3, 2, 6, 4, 8]));
// => true

console.log(getFirstOddCard([4, 2, 8, 7, 9]));
// => 7

console.log(getFirstEvenCardPosition([5, 2, 3, 1]));
// => 1