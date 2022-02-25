// 6 return an obj with usm of odd number and sum of even number
//  eg:{even:33,odd:32}
const arr =[1,3,5,2,22,11,9];

const sumOfNumber = (oddEvenObj , num) => num%2===0?{...oddEvenObj,even: oddEvenObj.even+num }:{...oddEvenObj,odd: oddEvenObj.odd+num  }

console.log(arr.reduce(sumOfNumber,{even:0,odd:0}))
