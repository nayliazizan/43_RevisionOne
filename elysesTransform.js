// Double every single card
const seeingDouble = deck => {
    return deck.map(value => value * 2);
}

// Create multiple copies of every 3 found in the deck
const threeOfEachThree = deck => {
    return deck.flatMap(value => value === 3 ? [value, value, value] : value);
}

// Find two cards from the exact middle of the deck
const middleTwo = deck => {
    const middleIndex = Math.floor(deck.length / 2);
    return deck.slice(middleIndex - 1, middleIndex + 1);
}

// The outside two cards will reappear in the middle of the deck
const sandwichTrick = deck => {
    const first = deck.shift();
    const last = deck.pop();
    
    deck.splice(deck.length/2, 0, last, first)
    return deck;
}

// Every card that isn't 2 disappears
const twoIsSpecial = deck => {
    return deck.filter(value => value === 2);
}

// Convert a shuffled deck into a perfectly ordered deck
const perfectlyOrdered = deck => {
    return deck.sort((a, b) => a - b);
}

// Reorder the deck
const reorder = deck => {
    return deck.reverse();
}

let deck = [1, 2, 3, 4, 10];
console.log(seeingDouble(deck));
// => [2, 4, 6, 8, 20]

deck = [1, 3, 9, 3, 7];
console.log(threeOfEachThree(deck));
// => [1, 3, 3, 3, 9, 3, 3, 3, 7]

deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(middleTwo(deck));
// => [5, 6]

deck = [1, 2, 3, 5, 6, 10];
console.log(sandwichTrick(deck));
// => [2, 3, 10, 1, 5, 6]

deck = [1, 2, 3, 4, 10, 2];
console.log(twoIsSpecial(deck));
// => [2, 2]

deck = [10, 1, 5, 3, 2, 8, 7];
console.log(perfectlyOrdered(deck));
// => [1, 2, 3, 5, 7, 8, 10]

deck = [10, 1, 5, 3, 2];
console.log(reorder(deck));
// => [2, 3, 5, 1, 10]