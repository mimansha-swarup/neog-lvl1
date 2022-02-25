// 3 can you write your own reduce using for loop

const  mockReduce  = function(callBack,accumulator=0) {
  for (let i = 0; i < this.length; i++) {
    accumulator = callBack(accumulator,this[i])
  }
  return accumulator
}

Array.prototype.mockReduce = mockReduce

const reducer = (accumulator,current) =>current+accumulator

const arry = [1,2,3,4,5,6,7,8,9,10]

console.log(arry.mockReduce(reducer))
console.log(arry.mockReduce((sum,num)=>num%2==0?{...sum,even:num+sum.even}:{...sum,odd:num+sum.odd},{even:0,odd:0}))