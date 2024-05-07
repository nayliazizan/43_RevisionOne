// Importing the notify function from the notifier module
import { notify } from './notifier';
// Importing the order function from the grocer module
import { order } from './grocer';


//create a callback to be called when the order is successful
const onSuccess = () => {
    notify({ message: 'SUCCESS' });
}
onSuccess();
// => `notify` called with `{ message: 'SUCCESS' }`


//create a callback to be called when the order fails with an error
const onError = () => {
    notify({ message: 'ERROR' });
}
onError();
// => `notify` called with `{ message: 'ERROR' }`


//create a wrapper to wrap the external api function
const orderFromGrocer = (query, onSuccessCallback, onErrorCallback) => {
    order(query, onSuccessCallback, onErrorCallback);
}
const query = {
    variety: string,
    quantity: number,
};
orderFromGrocer(
    { variety: 'pear', quantity: 12 },
    exampleSuccessCallback,
    exampleErrorCallback,
);
// => `order` was called with the query and the callbacks


//create a convenient short function
const postOrder = (variety, quantity) => {
    // Create a query object with the provided variety and quantity
    const query = { variety: variety, quantity: quantity };
    // Call orderFromGrocer function with the query object and callbacks for success and error handling
    orderFromGrocer(query, onSuccess, onError);
  }
postOrder('peach', 100);
// => order submitted for 100 peaches