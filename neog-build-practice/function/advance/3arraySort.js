/*
Given an array of numbers, your function should return an array in the ascending order.
Example:
Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
*/ 
const sortArray = (arr)=> {
  for(let i =0; i<=arr.length; i++  )
  {
    for(let j =0; j<=i; j++  ) {
      if(arr[i]<arr[j]) [ arr[i] , arr[j] ] = [ arr[j] , arr[i] ] 
    }
  } 
  return arr  
} 


console.log(sortArray([100,83,32,9,45,61]))