/*
Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
*/ 

const encodeString = (sentence,step)=>[...sentence].map(
  el =>
    el.charCodeAt(0)===32 ? el : String.fromCharCode((el.charCodeAt(0)+step))
  ).join("")

console.log(encodeString("neogcamp", 2))
// skiping 32 cause its whitespace