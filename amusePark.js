//create a new visitor
const createVisitor = (name, age, ticketId) => {
    return {
        name,
        age, 
        ticketId
    }
}
//console.log(createVisitor('Verena Nardi', 45, 'H32AZ123'));
// => { name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' }

//revoke the ticket
const revokeTicket = obj => {
    obj.ticketId = null;
    return obj;
}
/*
const visitor = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
};
*/
//console.log(revokeTicket(visitor));
// => { name: 'Verena Nardi', age: 45, ticketId: null }

//determine the ticket status
const ticketStatus = (tickets, ticketId) => {
    if (tickets[ticketId] === undefined) {
        return 'unknown ticket id';
    } else if (tickets[ticketId] === null) {
        return 'not sold';
    } else {
        return `sold to ${tickets[ticketId]}`
    }
}
/*
const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
}; 
*/
//console.log(ticketStatus(tickets, 'RE90VAW7'));
// => 'unknown ticket id'
//console.log(ticketStatus(tickets, '0H2AZ123'));
// => 'not sold'
//console.log(ticketStatus(tickets, '23LA9T41'));
// => 'sold to Verena Nardi'

//improve the ticket status response
const simpleTicketStatus = (tickets, ticketId) => {
    switch (tickets[ticketId]) {
        case undefined:
        case null:
          return 'invalid ticket !!!';
        default:
          return tickets[ticketId];
}
}
/*
const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
};
console.log(simpleTicketStatus(tickets, '23LA9T41'));
// => 'Verena Nardi'  
console.log(simpleTicketStatus(tickets, '0H2AZ123'));
// => 'invalid ticket !!!' 
console.log(simpleTicketStatus(tickets, 'RE90VAW7'));
// => 'invalid ticket !!!'
*/

//determine the version of terms and conditions
const gtcVersion = obj => {
    if (obj.hasOwnProperty('gtc')) {
        return obj.gtc.version;
    }
}
const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
};
console.log(gtcVersion(visitorNew));
// => '2.1'
const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
};
console.log(gtcVersion(visitorOld));
// => undefined