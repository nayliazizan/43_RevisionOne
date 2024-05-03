//one to determine if you will need to get a license
const needsLicense = kind => {
    return kind === 'car' || kind === 'truck' ? true : false;
}

//one to help you choose between two vehicles
const chooseVehicle = (option1, option2) => {
    return option1 < option2 ? option1 + " is clearly the better choice." : option2 + " is clearly the better choice.";
}

//one to estimate the acceptable price for a used vehicle
const calculateResellPrice = (originalPrice, age) => {
    if (age < 3) {
        return originalPrice * 0.8;
    } else if (age >= 3 && age <= 10) {
        return originalPrice * 0.7;
    } else {
        return originalPrice * 0.5;
    }
}

console.log(needsLicense('car'));
// => true
console.log(needsLicense('bike'));
// => false

console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));
// =>  'Toyota Corolla is clearly the better choice.'
console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'));
// =>  'Volkswagen Beetle is clearly the better choice.'

console.log(calculateResellPrice(1000, 1));
// => 800
console.log(calculateResellPrice(1000, 5));
// => 700
console.log(calculateResellPrice(1000, 15));
// => 500