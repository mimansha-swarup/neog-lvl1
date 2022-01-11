// 2.  Write a program to take a number input from user and determine whether the number is odd or even.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter Number?`, uInp =>{
  console.log(
    uInp%2===0?"even Number" :"Odd Number"
  )
  readline.close()
})

