// 5. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("enter number whose Factorial you want to see \n",(num)=>{

  let fact=1;

  for(let i = num; i>=1; i--){
    fact*=i
  }
  console.log(`Factorial of ${num} is ${fact}`)

  readline.close()
})
