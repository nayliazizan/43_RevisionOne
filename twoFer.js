function gifting(name = "you") {
    return name ? `One for ${name}, one for me.` : `One for you, one for me.`;
}

console.log(gifting());
console.log(gifting("Arwen"));