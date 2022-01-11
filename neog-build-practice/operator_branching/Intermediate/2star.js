/*
2.
Print the following star pattern :-

*
* *
* * *
* * * *
* * * * *

*/ 

let output = "";
for(let i =0; i<5; i++){
  output = "";
  for(let j =0; j<i; j++){
    output += "*";
  }
  console.log(output)
}