function raspberryPi(value) {
    let resistor;

    switch (value) {
        case 0:
            resistor = "black";
            break;
        case 1:
            resistor = "brown";
            break;
        case 2:
            resistor = "red";
            break;
        case 3:
            resistor = "orange";
            break;
        case 4:
            resistor = "yellow";
            break;
        case 5:
            resistor = "green";
            break;
        case 6:
            resistor = "blue";
            break;
        case 7:
            resistor = "violet";
            break;
        case 8:
            resistor = "grey";
            break;
        case 9:
            resistor = "white";
            break;
        default:
            resistor = "Invalid Value"
    }

    console.log(`The given value is ${value}. Therefore, its resistor is ${resistor}-colored.`);
}

raspberryPi(2);
raspberryPi(6);
