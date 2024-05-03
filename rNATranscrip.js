const toRna = dna => {
    let newRna = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "G") {
            newRna += "C";
        } else if (dna[i] === "C") {
            newRna += "G";
        } else if (dna[i] === "T") {
            newRna += "A";
        } else if (dna[i] === "A") {
            newRna += "U";
        }
    }
    return newRna;
}

console.log(toRna("GATTACA"));
console.log(toRna("CCGG")); 
