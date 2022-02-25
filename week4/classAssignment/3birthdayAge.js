// 3. write a  func birthday to take person's name and age in object and increasing age
const birthday = (prsnObj) => (
  {
  ...prsnObj,
  age:prsnObj.age+1
  }
) 


const person1 = {
  name: "namexyz",
  age: 12
    
}

console.log(birthday(person1))