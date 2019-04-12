// creating a string 
var myName = "Dylan";

// quotes in strings
var myStr = "I am a \"double quoted\" string."; // using the \ escape
console.log(myStr);

var thisString = '"http://google.com"';
console.log(thisString);

var multiLineStr = "Firstline\n\tSecondline\n\t\tThirdline"
console.log(multiLineStr);

// adding strings
var addString = "I come first. " + "I come second.";
console.log(addString);

var ourStr = "This is firsts. ";
ourStr += "This is second.";

console.log(ourStr);

var nameStr = "Hello my name is " + myName + ", how are you?";
console.log(nameStr);

// length of strings.
var lengthOfMyName = 0;
lengthOfMyName = myName.length;
console.log(lengthOfMyName);

// string indexs
var firstLetterOfMyName = "";
firstLetterOfMyName = myName[0];
console.log(firstLetterOfMyName);

// last letter of any string
var lastLetterOfMyName = myName[myName.length - 1];
console.log(lastLetterOfMyName);