/*
Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5
*/ 

const arrayLength = (arr) => {
  let len = 0
  for(ele in arr) len+=1
  return len
}

console.log(arrayLength([60,60,60]))