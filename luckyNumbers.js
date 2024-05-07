//calculate the sum for the numbers on the slot machine
const twoSum = (arr1, arr2) => {
    return Number(arr1.join('')) + Number(arr2.join(''));
}
console.log(twoSum([1, 2, 3], [0, 7]));
//=> 130
// [1, 2, 3] represents 123 and [0, 7] represents 7.
// 123 + 7 = 130

//determine if a number is a palindrome
const luckyNumber = num => {
    if (num === Number(num.toString().split('').reverse().join(''))) {
        return true;
    } else {
        return false;
    }
}
console.log(luckyNumber(1441));
//=>  true
console.log(luckyNumber(123));
//=> false

//generate an error message for invalid user input
const errorMessage = input => {
    if (!input) {
        return 'Required field';
    } else {
        return Number(input) ? '' : 'Must be a number besides 0';
    }
}
console.log(errorMessage('123'));
// => ''
console.log(errorMessage(''));
// => 'Required field'
console.log(errorMessage('abc'));
// => 'Must be a number besides 0'