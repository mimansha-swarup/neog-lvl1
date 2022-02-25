// 1 Given an array return an object for each item

const  arrItemToObj  = (element,index) => ({
  [index]:element
})
const arr = [12,2,4,5,7,9]

console.log(arr.map(arrItemToObj))
