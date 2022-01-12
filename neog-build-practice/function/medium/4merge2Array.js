// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

const merge2Array=(arr1,arr2) => [...arr1,...arr2]

console.log(merge2Array([1,2,3,4],[5,7,4,3,21]))