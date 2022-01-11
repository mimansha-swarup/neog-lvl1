// 1. Try converting these codes to ES6 syntax-
/*
1.1.
var aloo = 1;
if (aloo == 1) {
   var a = 2;
   console.log(a);
}
console.log(aloo);
*/

console.log("1.1.")
let aloo = 1;
if (aloo === 1) {
   let a = 2;
   console.log(a);
}
console.log(aloo);

console.log("---------------")

/* 
1.2.
var multiply = function(x, y) {
  return x * y;
};
*/

console.log("1.2.")
const multiply = (x, y) =>  x * y
console.log("multiply func",multiply(2,2))

console.log("---------------")

/* 
1.3.
var customer = {
  name: "Bhaalo"
};
var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"
*/

console.log("1.3.")
const customer = {
  name: "Bhaalo"
};
const card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
const message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece`
console.log(message)

console.log("---------------")

/* 
1.4.
var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2];

*/

console.log("1.4.")
const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"]
const CEO = Neog[0]
const Mentor = Neog[2];


console.log("---------------")

/* 
1.5.
var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0],
var surname = arr[1];
console.log(firstName);
console.log(surname);

*/

console.log("1.5.")
const arr = ["MA", "TA", "PA", "CA"];
const firstName = arr[0];
const surname = arr[1];
console.log(firstName);
console.log(surname);


console.log("---------------")

/*
1.6.
var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
};

*/

console.log("1.6.")
let Aaloo = "Tasty";
let Bhaloo = "Cute";
const Obj = {
  Aaloo,
  Bhaloo
};


console.log("---------------")

/*
1.7.
var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

*/

console.log("1.7.")

const a = 5;
const b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

console.log("---------------")

/*
1.8.
var arithmeticsObj = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  }
};
*/

console.log("1.8.")

const arithmeticsObj = {
  sum: (num1, num2) => num1 + num2,
  multiply: (num1, num2) => num1 * num2
};
console.log(arithmeticsObj.multiply(2,2))


console.log("---------------")
/*
1.9.
var avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
var operation = avengers.operation,
  members = avengers.members;

*/

console.log("1.9.")

const avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
const {operation,members} = avengers

console.log("---------------")

// 2. Convert ES6 to ES5
/*
2.1
const packIt = (...args) => console.log(args)

packIt(1,2,3,5,5)
*/

console.log("2.1.")

function packIt (){
  
  var args = arguments
    console.log(
        Object.keys(args).map(
            function(el){
                return args[el]
            }
        )        
    )
    // console.log(
    //     Object.keys(arguments).map(
    //          function(el){
        
    //             return arguments[el]
    //         }
    //     )
    // )
    //  o/p : [ '0', 1, [ '0', '1', '2', '3', '4' ], undefined, undefined ]
    // cause arguments is of that anonymous function

}

packIt(1,2,3,5,5)

console.log("---------------")

// 3. Guess the output 
/*
3.1
const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)
*/

console.log("3.1.")
console.log('\no/p- is "Namate Welcome" ' )
console.log('reason-' )
console.log('const [Hello = hello(), Welcome = welcome()] = ["Namaste"] \nHere we are giving hello() func as default value to "Hello" and welcome() func to "Welcome" \nbut on destructuring we are getting "Namaste" value in  "Hello" variable\n' )

console.log("---------------")
/*
3.2
const obj = {
    aloo : 1,
    bhallo : 2
}

const {c : aloo = [2,3,4].push(5), aloo} = obj 

console.log(aloo)
*/

console.log("3.2.")
console.log('\nwe will get error as aloo is aleardy declared ' )
console.log('reason-' )
console.log('"c" is not present in obj\nc : aloo = [2,3,4].push(5)\nHere we are renaming "c" to "aloo" and giving a fallback value as [2,3,4].push(5) ,it will give len of array\nbut we are alsoo destructuring aloo from the obj\nThat\'s why we are getting error' )

console.log("---------------")
