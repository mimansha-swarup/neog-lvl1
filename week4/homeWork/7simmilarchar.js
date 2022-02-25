// given an array of string Find number of strings with similar charecters
//  const input = ["apple","orange","mango","papaya"]
// output {5:3,6:1}

const input = ["apple","orange","mango","papaya","guava"]

const simmilarChar = (simmilarCharObj , element)=> simmilarCharObj[element.length] ?  {
  ...simmilarCharObj,
  [element.length]: simmilarCharObj[element.length]+1
} : {
  ...simmilarCharObj,
  [element.length]: 1
}

console.log(input.reduce(simmilarChar,{}))

