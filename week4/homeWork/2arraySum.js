// 2 Given an array of numbers calculate sum

const  sumOfArray = (sum,num) => num+sum

const arr = [12,2,4,5,7,9]

console.log(arr.reduce(sumOfArray,0))
