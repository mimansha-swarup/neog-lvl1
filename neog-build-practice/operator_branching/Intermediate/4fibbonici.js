// 4.  Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const fibbonicci = (n) =>{
  if (n === 0) return 0
  else if (n <= 2) return 1
  return fibbonicci(n-1)+fibbonicci(n-2)
}

for(let i=0; i<11; i++) console.log(fibbonicci(i)))