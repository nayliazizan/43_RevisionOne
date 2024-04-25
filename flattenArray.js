function flattenList(nestedList) {
    if(!Array.isArray(nestedList)) {
        return nestedList;
    }

    const finalList = [];

    for (let i = 0; i < nestedList.length; i++) {
        const item = nestedList[i];

        if(Array.isArray(item)) {
            const subList = flattenList(item);

            for (let j = 0; j < subList.length; j++) {
                if(subList[j] !== null) {
                    finalList.push(subList[j]);
                }
            }
        } else {
            if (item !== null) {
                finalList.push(item);
            }
        }
    }

    return finalList;
}

const inputList = [90, [2, 45, null, 4], [null], 23];
const flattenedList = flattenList(inputList);
console.log(flattenedList);


