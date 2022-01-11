// 6.  Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const monthList= ["january","febuary","march","april","may","june","july","august","september","october","november","december"]
 

const getNumericalMonth= monthString => monthList.findIndex(el=>el===monthString.toLowerCase())+1
  
const getDateFormatMonth= monthNum => new Date("2022",monthNum,0)
// I have specified 


readline.question("enter Month full Name i.e January  \n",(month)=>{

  const numericMonth = getNumericalMonth(month)
  const noOfDays =getDateFormatMonth(numericMonth).getDate()


  console.log(
    noOfDays===31?`Yes, ${month} Contains 31 days`:`No, ${month} Contains ${noOfDays} days only`
  )

  readline.close()
})