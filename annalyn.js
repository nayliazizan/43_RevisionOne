//check if the 'Fast Attack' action is possible
const canExecuteFastAttack = knightIsAwake => {
    if (knightIsAwake === true) {
        return false;
    } else {
        return true;
    }
}
//const knightIsAwake = true;
//console.log(canExecuteFastAttack(knightIsAwake));
// => false

//check if the 'Spy' action is possible
const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) => {
    if (knightIsAwake === true || archerIsAwake === true || prisonerIsAwake === true){
        return true;
    } else {
        return false;
    }
}
//const knightIsAwake = false;
//const archerIsAwake = true;
//const prisonerIsAwake = false;
//console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));
// => true

//check if the 'Signal Prisoner' action is possible
const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
    if (archerIsAwake === false && prisonerIsAwake === true) {
        return true;
    } else {
        return false;
    }
}
//const archerIsAwake = false;
//const prisonerIsAwake = true;
//console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake));
// => true

//check if the 'Free Prisoner' action is possible
const canFreePrisoner = (knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) => {
    if (petDogIsPresent) {
        return !archerIsAwake;
    } else {
        return !archerIsAwake && !knightIsAwake && prisonerIsAwake;
    }
}
const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = false;
console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));
// => false