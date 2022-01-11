// 3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251

const num1 = 129
const num2 = 251

const max = (num1,num2) => num1 > num2 ? num1 : num2

console.log(`maximum  of ${num1} and ${num2} `,max(num1,num2))
