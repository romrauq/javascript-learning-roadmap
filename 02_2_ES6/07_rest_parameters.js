//  In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters.
// With the rest parameter, you can create functions that take a variable number of arguments.
// These arguments are stored in an array that can be accessed later from inside the function.

function howMany(...args) {
	return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // Returns "You have passed 3 arguments."
console.log(howMany("Hi!", null, [1, 3], {})); // Returns "You have passed 4 arguments."

// Practice Challenge:
// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

// const sum = (x, y, z) => {
// 	const args = [x, y, z];
// 	return args.reduce((a, b) => a + b, 0);
// };

const sum = (...args) => {
	return args.reduce((a, b) => a + b, 0);
};
