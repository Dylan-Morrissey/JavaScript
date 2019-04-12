// creating an array
var ourArray = ["John", 23];

// nested array
var ourArray = [["Hello", "World"], [123, 456]]

// array indexs
var firstElement = ourArray[0];
var firstIndex = ourArray[0][0];

// changing items in the array
ourArray[0] = ["Goodbye"];
console.log(ourArray);

// push()
var newArray = ["Hello", "World"];
console.log(newArray);
newArray.push("How are you?"); // adds to end of array
console.log(newArray);

// pop()
newArray.pop(); // removes last element
console.log(newArray);

// shift()
newArray.shift(); // removes the first element
console.log(newArray);

// unshift()
newArray.unshift("Bonjour"); // adds to the start of the array
console.log(newArray);