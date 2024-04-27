const dayRate = (hourRate) => {
    return hourRate * 8;
}

const daysInBudget = (fixedBudget, hourRate) => {
    return Math.floor(fixedBudget / dayRate(hourRate));
}

const priceWithMonthlyDiscount = (hourRate, numDays, discount) => {
    //full months cost
    const fullMonths = Math.floor(numDays/22);
    const fullMonthsCost = 22 * dayRate(hourRate) * (1-discount);

    //remaining days cost
    const remainDays = numDays % 22;
    const remainDaysCost = remainDays * dayRate(hourRate);

    //total cost
    const totalCost = Math.ceil(fullMonths * fullMonthsCost + remainDaysCost);

    return totalCost;
}

dayRate(89);
daysInBudget(20000, 89);
console.log(priceWithMonthlyDiscount(89, 230, 0.42));