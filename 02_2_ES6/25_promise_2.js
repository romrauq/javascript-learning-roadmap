// TOPIC: Complete a Promise with resolve and reject

// A promise has three states: pending, fulfilled, and rejected.

// The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise.

// The resolve and reject parameters given to the promise argument are used to do this.resolve is used when you want your promise to succeed, and reject is used when you want it to fail.

// These are methods that take an argument, as seen below:

const myPromise = new Promise((resolve, reject) => {
	if (true) {
		resolve("Promise was fulfilled");
	} else {
		reject("Promise was rejected");
	}
});
