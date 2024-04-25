const EXPECTED_MINUTES_IN_OVEN = 40;
//export { EXPECTED_MINUTES_IN_OVEN };

const remainingMinutesInOven = (minsHasBeen) => {
    let minsLeft = EXPECTED_MINUTES_IN_OVEN - minsHasBeen;
    return minsLeft;
}

const preparationTimeInMinutes = (layers) => {
    let prepMins = layers * 2;
    return prepMins;
}

const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) => {
    let totalMins = (numberOfLayers * 2) + actualMinutesInOven;
    return totalMins;
}

console.log(`Lasagna needs to stay in the oven for ${remainingMinutesInOven(30)} minutes.`);
console.log(`Preparation for ${2} layers took ${preparationTimeInMinutes(2)} minutes.`);
console.log(`Total working time so far is ${totalTimeInMinutes(3, 20)} minutes.`);