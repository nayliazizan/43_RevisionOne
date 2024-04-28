// Retrieve a card from a stack
const getItem = (myArr, position) => {
    return myArr[position];
}

// Exchange a card in the stack
const setItem = (myArr, position, replacementCard) => {
    myArr[position] = replacementCard;
    return myArr;
}

// Insert a card at the top of the stack
const insertItemAtTop = (myArr, newCard) => {
    myArr.push(newCard);
    return myArr;
}

// Remove a card from the stack
const removeItem = (myArr, position) => {
    myArr.splice(position, 1);
    return myArr;
}

// Remove the top card from the stack
const removeItemFromTop = (myArr, position) => {
    myArr.pop();
    return myArr;
}

// Insert a card at the bottom of the stack
const insertItemAtBottom = (myArr, newCard) => {
    myArr.unshift(newCard);
    return myArr;
}

// Remove a card from the bottom of the stack
const removeItemAtBottom = (myArr) => {
    myArr.shift();
    return myArr;
}

// Check the size of the stack
const checkSizeOfStack = (myArr, stackSize) => {
    if (myArr.length === stackSize) {
        return true;
    } else {
        return false;
    }
}

let position = 2;
console.log(getItem([1, 2, 4, 1], position));
// => 4

position = 2;
const replacementCard = 6;
console.log(setItem([1, 2, 4, 1], position, replacementCard));
// => [1, 2, 6, 1]

let newCard = 8;
console.log(insertItemAtTop([5, 9, 7, 1], newCard));
// => [5, 9, 7, 1, 8]

position = 2;
console.log(removeItem([3, 2, 6, 4, 8], position));
// => [3, 2, 4, 8]

console.log(removeItemFromTop([3, 2, 6, 4, 8]));
// => [3, 2, 6, 4]

newCard = 8;
console.log(insertItemAtBottom([5, 9, 7, 1], newCard));
// => [8, 5, 9, 7, 1]

console.log(removeItemAtBottom([8, 5, 9, 7, 1]));
// => [5, 9, 7, 1]

const stackSize = 4;
console.log(checkSizeOfStack([3, 2, 6, 4, 8], stackSize));
// => false