/*
Given a and b, your function should return the value of ab
Example:
Input: power(2,3) ––> Output: 8
*/ 
const expoPowe = (base,exponent) => exponent <= 1 ? base : base * expoPowe(base,exponent-1)

console.log(expoPowe(2,3))