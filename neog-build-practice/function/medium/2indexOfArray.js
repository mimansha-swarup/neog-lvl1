/*
Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
*/ 

const indexOf = (arr,num) => {
  
  for(index in arr) if(arr[index]===num) return index
}

console.log(indexOf([1,6,3,5,8,9], 3))