// 5. Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const num1 = 35
const num2 = 29
const num3 = 46


const minOfThree = (num1,num2,num3) =>{
  const localMax = num1 < num2 ? num1 : num2
  return localMax < num3 ? localMax : num3
}

console.log(`Minimum  of ${num1} , ${num2} and ${num3} `,minOfThree(num1,num2))