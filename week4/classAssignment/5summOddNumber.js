// 5 find sum of odd number in array using reduce()

const arr =[1,3,5,2,22,11,9];

const sumOfOddNumber = (accumulator , current) => current%2 !==0?accumulator+current : accumulator

console.log(arr.reduce(sumOfOddNumber,0))