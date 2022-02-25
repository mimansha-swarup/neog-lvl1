// 1. Take an object with yours  mothers name and your age. Now create an obj for your sibling by age difference
const me = {motherName: "mom",age:12}
const sibling = {
 ...me,
 age:me.age-4
}
console.log(sibling)