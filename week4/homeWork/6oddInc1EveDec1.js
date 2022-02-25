// return an array where odd number are incremented by 1 and even number are decremented by 1

const arr =[1,2,3,4,5,6,7,8,9,10]

const oddInc1EveDec1 = (num)=> num%2===0 ? num-1 : num+1

console.log(arr.map(oddInc1EveDec1))