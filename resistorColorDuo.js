const resistorColorDuo = colorsGiven => {
    const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]; 
    return `The colors given are ${colorsGiven[0]} and ${colorsGiven[1]} so the value will be ${COLORS.indexOf(colorsGiven[0]) * 10 + COLORS.indexOf(colorsGiven[1])}`;
}

console.log(resistorColorDuo(["black", "grey"]));
console.log(resistorColorDuo(["red", "white"]));