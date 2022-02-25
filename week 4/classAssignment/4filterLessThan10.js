// 4 write a function which can tell whether a number is less than 10 or not. 
// Supply this dinction to Array.filter() to get an array with no 10s in it
const filterLessThan10 = element => element <10;

const arr =[13,34,87,2,3,4,5,6,7,];

console.log(arr.filter(filterLessThan10))