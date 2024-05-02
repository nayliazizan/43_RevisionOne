function gigasecond(startDate) {
    // convert the startDate to milliseconds
    let startDateMs = startDate.getTime();
    
    // add 1,000,000,000,000 seconds worth of one gigasecond
    let endDateMs = startDateMs + 1000000000000;
    
    // create a new Date object using the calculated milliseconds
    let endDate = new Date(endDateMs);
    
    return endDate;
}

let startDate = new Date("January 16, 2001 21:00:00");
let endDate = gigasecond(startDate);
console.log("One gigasecond after", startDate, "is", endDate);


