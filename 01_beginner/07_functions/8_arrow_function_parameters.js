// Creating an arrrow function (with parameters):
let productFunction = (a, b) => {
	return a * b;
};

console.log(productFunction(7, 3)); // Calling the arrow function with arguments.
//-------------------------------------------------------------------------------------------------------
// Shorter syntax for creating arrow functions with parameters:
let productFunction2 = (a, b) => a * b;
// The "return" key word is removed along with the curly brackets of the function.
// The value of what is evaluated after the arrow of the functon is returned by default.

console.log(productFunction2(10, 4)); // Calling the arrow function with arguments.
//-------------------------------------------------------------------------------------------------------
// A further shorter syntax for creating arrow functions with parameters:
// let isPositive = number => number >= 0;
// The brackets that hold the parameter "number" can be removed entirely as well.

// console.log(isPositive(3)); //Calling the arrow function with arguments.
// The above function is commented out because my code editor adds brackets around the function's argument value by default.
