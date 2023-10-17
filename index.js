console.log("The package file is attempting to load...");

const greetMe = (name) => console.log(`Hello, ${name}!`);

module.exports = {greetMe}

console.log("The package file finished loading.");
