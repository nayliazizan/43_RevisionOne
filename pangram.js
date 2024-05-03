// a program to check if the given string is a pangram or not

// returns true if the string is pangram else false
function checkPangram(sentence) {
    sentence = sentence.toLowerCase();

    // initialize a set of characters
    const set = new Set();

    for (let charac of sentence) {
        // if the character is already a lowercase character
        if (charac >= "a" && charac <= "z") {
            set.add(charac);
        }
    }

    // check if the size is 26 or not
    return set.size === 26;
}

// driver program to test above functions
let sentence = "The five boxing wizards jump quickly.";

if (checkPangram(sentence) == true)
    console.log(sentence + "\nis a pangram");
else
    console.log(
        sentence + "\nis not a pangram"
    );
