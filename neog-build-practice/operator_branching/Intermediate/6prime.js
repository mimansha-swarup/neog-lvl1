// 6.  Write a Program to take a number input from user and find if the number is Prime or not.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("enter number whose Factorial you want to see \n",(num)=>{

  let flag=false;

  for(let i = 2; i<= Math.floor(Math.sqrt(num)); i++){
    if(num%i ===0){
      flag=true
      break
    }
  }

  if(flag) console.log(`${num} is not prime`)
  else console.log(`${num} is  prime`)

  readline.close()
})