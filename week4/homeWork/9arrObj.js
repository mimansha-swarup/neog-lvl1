//return an array of object with key as item and value as number of characters in the string

const arrName = ["neog","level","one","gonna","complete","it"]

const objReduce = (arrObj,element)=> ({...arrObj,[element]:element.length})

console.log(
  arrName.reduce(objReduce,{})
)
