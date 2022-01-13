/*
Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9
(Hint: Lookup rest parameters in JavaScript)
*/ 

const findMax = (...args) => {
  let maxValue = args[0]
  args.slice(1).map(
    ele => ele > maxValue && (maxValue=ele)
  )
 return maxValue
}

console.log(findMax(2,3,4,5,67))