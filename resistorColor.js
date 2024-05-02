function raspberryPi(color) {
    const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    return `The given color is ${color} so the value is ${COLORS.indexOf(color)}.`;
}

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]; 

console.log(raspberryPi("black"));
console.log(raspberryPi("yellow"));
