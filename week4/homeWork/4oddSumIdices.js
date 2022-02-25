// find sum of all number in odd indices
const arr =[1,2,3,4,5,6,7,8,9,10]

const oddIndicesSum = (sum, num, index)=> index%2 !==0 ?sum+num : sum

console.log(arr.reduce(oddIndicesSum,0))