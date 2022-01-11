// 4.  Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const num1 = 8
const num2 = 23
const num3 = 17


const maxOfThree = (num1,num2,num3) =>{
  const localMax = num1 > num2 ? num1 : num2
  return localMax > num3 ? localMax : num3
}

console.log(`maximum  of ${num1} , ${num2} and ${num3} `,maxOfThree(num1,num2,num3))