// Write a program that converts the string into uppercase

const sentUpperCase = (sentence)=> [...sentence].map(
  alphabet=> alphabet.charCodeAt(0) >=97 && alphabet.charCodeAt(0) <=122 ? String.fromCharCode(alphabet.charCodeAt(0) - 32) : alphabet
).join("")
 
// A -65
// Z -90
// a -97
// z -122

console.log(sentUpperCase("we_Are_neogrammer+++"))