// Creating Objects using an object constructor function:
// NOTE! The object class constructor function name should always begin with a capital letter.
// Creating an object class using a constructor function:

function Person(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	// Object method:
	this.ageStatement = `${this.firstName} ${this.lastName} is ${this.age} years old`;
}

// Adding a prototype method to the "Person" class:
Person.prototype.getFullName = function () {
	return `${this.firstName} ${this.lastName}`;
};

// Adding another prototype to "Person" class:
Person.prototype.editAge = function (age) {
	this.age = age;
	this.ageEdited = true; // This property assigns a boolean to an object when this function is used
	// to edit the "age" property after initial object instantiation.
};

// Instantiating a new object using the constructor function method (of the "Person" object class created above):
let person1 = new Person("Evans", "Gardner", 34);

person1.editAge(77); // Using the prototype method .editAge(arg) changes the age property value of the "person1" object.

console.log(person1); // Logging to console will show changes made to the age property value and a new property and value.
