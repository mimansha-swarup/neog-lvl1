//3.  Write a program to take a number input from user and print multiplication table 12 times for that number.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("enter number whose table you want to see \n",(num)=>{

  for(let i = 1; i<=12; i++){
    console.log(`${num} x ${i} = ${num*i}`)
  }

  readline.close()
})
