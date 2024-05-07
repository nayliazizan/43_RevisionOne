//determine how long it takes to mix a juice
const timeToMixJuice = name => {
    let time;
    switch (name) {
        case 'Pure Strawberry Joy':
            time = 0.5;
            break;
        case 'Energizer':
        case 'Green Garden':
            time = 1.5;
            break;
        case 'Tropical Island':
            time = 3;
            break;
        case 'All or Nothing':
            time = 5;
            break;
        default:
            time = 2.5;
            break;
    }
    return time;
}
console.log(timeToMixJuice('Tropical Island'));
// => 3
console.log(timeToMixJuice('Berries & Lime'));
// => 2.5

//replenish the lime wedge supply
const limesToCut = (wedgesNeeded, limes) => {
    let cutWedges = 0;
    let wedges = 0;
    let i = 0;
    if (wedgesNeeded > 0) {
        while (cutWedges <= wedgesNeeded && i < limes.length) {
            switch(limes[i]) {
                case 'small':
                    wedges = 6;
                    break;
                case 'medium':
                    wedges = 8;
                    break;
                case 'large':
                    wedges = 10;
                    break;
            }
            cutWedges += wedges;
            i++;
        }
    } else {
        return i = 0;
    }
    return i;
}
console.log(limesToCut(0, ['small', 'small', 'large', 'medium', 'small']));
// => 4

//finish up the shift

const remainingOrders = (minutesLeft, orders) => {
    /* MY ORIGINAL ANSWER
    let i = 0;
    let totalTime = 0;
    
    if (minutesLeft > 0) {
        do {
            times = timeToMixJuice(orders[i]);
            totalTime += times;
            i++;
            orders.shift();
        } while (i < orders.length && totalTime < minutesLeft);
    }
    
    return orders;
    */
   //THE CORRECT ANSWER
    while (minutesLeft > 0) {
        minutesLeft -= timeToMixJuice(orders[0]);
        orders.shift();
    }
    return orders;
    
}
console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']));
// => ['Green Garden']