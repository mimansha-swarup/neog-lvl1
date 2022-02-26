//10. write a function compose() which can take any number of function and run the function in given order when called with argument 
const increment = num => num+1;
const square = num => num*num;

const compose = (...args) => (num) => args.reduce((finalValue,currentOperation) => currentOperation(finalValue),num)

const incrementThenSquare = (num) => compose(increment,square)(num)

console.log(incrementThenSquare(2))
