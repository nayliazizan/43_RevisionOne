const reverseString = str => {
    const strRev =  str.split('').reverse().join('');
    //the .reverse method only work for array so we need to 
    //convert the string to arary bfr reverse it and then rejoin it
    return strRev;
}

console.log(reverseString("stressed"));
console.log(reverseString("strops"));
console.log(reverseString("racecar"));