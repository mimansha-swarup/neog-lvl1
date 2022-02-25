// find the biggest number in the array
const arr =[1,2,3,4,50,6,7,8,9,10]

const largestNum = (largest, num)=> largest<num ?num : largest

console.log(arr.reduce(largestNum,0))