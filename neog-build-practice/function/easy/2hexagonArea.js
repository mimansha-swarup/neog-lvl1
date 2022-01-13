/*
Given length of a regular hexagon, your function should return area of the hexagon.
Example:
Input: areaOfHexagon(10) ––> Output: 259.80
*/ 

const areaOfHexagon = (side) => ((3*Math.sqrt(3)*Math.pow(side,2))/2).toFixed(2) 

console.log(areaOfHexagon(10))