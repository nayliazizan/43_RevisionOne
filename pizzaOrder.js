/*
    Margherita: $7
    Caprese: $9
    Formaggio: $10
    ExtraSauce: $1 
    ExtraToppings: $2
*/

//calculate the price of a pizza
const pizzaPrice = (pizzaType, ...extras) => {
    let price;
    switch (pizzaType) {
        case "Margherita":
            price = 7;
            break;
        case "Caprese":
            price = 9;
            break;
        case "Formaggio":
            price = 10;
            break;
    }

    if (extras.length > 0) {
        extras.forEach(
            extra => {
                if (extra === "ExtraSauce") {
                    price += 1;
                } else {
                    price += 2;
                }
            }
        );
    } else {
        price += 0;
    }

    return price;
}

console.log(pizzaPrice('Margherita'));
// => 7
console.log(pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings'));
// => 12
console.log(pizzaPrice(
  'Caprese',
  'ExtraToppings',
  'ExtraToppings',
  'ExtraToppings',
  'ExtraToppings',
));
// => 17



//calculate the total price of an order
class PizzaOrder {
    constructor(pizza, ...extras) {
        this.pizza = pizza;
        this.extras = extras;
    }
}
const orderPrice = pizzaOrders => {
    let total = 0;
    for(const order of pizzaOrders){
        total += pizzaPrice(order.pizza, ...order.extras);
    }
    return total;
}
const margherita = new PizzaOrder('Margherita');
const caprese = new PizzaOrder('Caprese', 'ExtraToppings');
console.log(orderPrice([margherita, caprese]));
// => 18