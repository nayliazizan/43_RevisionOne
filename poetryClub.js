//get the first letter of a sentence
const frontDoorResponse = line => {
    //lines.forEach(line => { console.log(line[0])});
    return line[0];
}
console.log(frontDoorResponse('Stands so high'));
// => "S"

//capitalize a word
const frontDoorPassword = word => {
    const firstLetterCap = (word[0]).toUpperCase();
    const remainingLetters = (word.substring(1)).toLowerCase();
    return `${firstLetterCap}${remainingLetters}`;
}
console.log(frontDoorPassword('SHIRE'));
// => "Shire"
console.log(frontDoorPassword('shire'));
// => "Shire"

//get the last letter of a sentence
const backDoorResponse = line => {
    const trimmed = line.trim();
    return trimmed[trimmed.length-1];
}
console.log(backDoorResponse('Stands so high'));
// => "h"
console.log(backDoorResponse('Stands so high   '));
// => "h"

//be polite
const backDoorPassword = word => {
    const capitalized = frontDoorPassword(word);
    return `${capitalized}, please`;
}
console.log(backDoorPassword('horse'));
// => "Horse, please"