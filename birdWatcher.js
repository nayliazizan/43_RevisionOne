//determine the total number of birds that you counted so far
const totalBirdCount = birdsPerDay => {
    let sum = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
        sum += birdsPerDay[i];
    }
    return sum;
}
//birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
//console.log(totalBirdCount(birdsPerDay));
// => 34

//calculate the number of visiting birds in a specific week
const birdsInWeek = (birdsPerDay, weekNumber) => {
    let sum = 0;
    let startIndex = (weekNumber - 1) * 7;
    let endIndex = startIndex + 7;
    for (let i = startIndex; i < endIndex; i ++) {
        sum += birdsPerDay[i];
    }
    return sum;
}
//const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
//console.log(birdsInWeek(birdsPerDay, 2));
// => 12

//fix a counting mistake
const fixBirdCountLog = birdsPerDay => {
    for (let i = 0; i < birdsPerDay.length; i+= 2) {
        birdsPerDay[i] += 1;
    }
    return birdsPerDay;
}
birdsPerDay = [2, 5, 0, 7, 4, 1];
console.log(fixBirdCountLog(birdsPerDay));
// => [3, 5, 1, 7, 5, 1]