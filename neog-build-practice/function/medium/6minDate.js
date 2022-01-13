/*
Given two dates, your function should return which one comes before the other.
Example:
Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
*/ 

const dateCoverter = (year,month,day) => new Date(year,month,day)

const giveProperDate = (date) =>{
  
  const datearr =  date.split('/')

  return dateCoverter(datearr[2],datearr[1]-1,datearr[0])
}

const minDate = (date1,date2) => {

  const dateDate1 = giveProperDate(date1)
  const dateDate2 = giveProperDate(date2)

  if(dateDate1<dateDate2) return date1

  else if(dateDate1>dateDate2) return date2
  // console.log(date1,dateDate1,date2,dateDate2)
} 
  
console.log( minDate('02/05/2021', '24/01/2021'))
