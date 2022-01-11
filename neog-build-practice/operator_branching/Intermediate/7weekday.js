// 7.  Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

// const weekdays=['monday','tuesday','wednesday','thrusday','friday', 'saturday','sunday'] 

readline.question("enter Day \n",(day)=>{

  if (day[0].toLowerCase() ==="s") console.log("Weekend,attend neog classes")
  else console.log("Weekday, do assignment")

 

  readline.close()
})
