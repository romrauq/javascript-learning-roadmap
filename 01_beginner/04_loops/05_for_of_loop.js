const myArr = ["Kwesi", "James", "Steven", "Frank"];
const myArr2 = [
	["Jane", 6],
	["Felicia", 7],
	["Dorothy", 6],
	["Whitney", 6],
];
let person = { name: "John", age: 34, occupation: "Fixer" };
//-------------------------------------------------------------------------------------------------------
// for...of will loop through and return values of an array.
// for...of loops only loop through iterable objects like such as arrays, map and set.
// for...of loops do not work on objects because objects are not iterable.

for (x of myArr) {
	console.log(x);
}

for (x of myArr2) {
	console.log(x);
}
