//get the first card
const getFirstCard = stack => {
    const [a, ...everythingElse] = stack;
    return a;
}
console.log(getFirstCard([5, 9, 7, 1, 8]));
// => 5

//get the second card
const getSecondCard = stack => {
    const [a, b, ...everythingElse] = stack;
    return b;
}
console.log(getSecondCard([3, 2, 10, 6, 7]));
// => 2

//swap the first two cards
const swapTopTwoCards = stack => {
    const [a, b, ...everythingElse] = stack;
    return [b, a, ...everythingElse];
}
console.log(swapTopTwoCards([10, 7, 3, 8, 5]));
// => [7, 10, 3, 8, 5]

//discard the top card
const discardTopCard = stack => {
    const [a, ...everythingElse] = stack;
    return [a, [...everythingElse]];
}
console.log(discardTopCard([2, 5, 4, 9, 3]));
// => [2, [5, 4, 9, 3]]

//insert face cards
const insertFaceCards = stack => {
    const [a, ...everythingElse] = stack;
    const newValues = ['jack', 'queen', 'king'];
    return [a, ...newValues, ...everythingElse];
}
console.log(insertFaceCards([5, 4, 7, 10]));
// => [5, 'jack', 'queen', 'king', 4, 7, 10]