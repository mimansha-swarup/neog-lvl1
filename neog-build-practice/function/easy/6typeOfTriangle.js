/*
Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
*/ 

const typeOfTriangle = (angle1,angle2,angle3) => {
  if(angle1 + angle2 + angle3 !== 180)
    return "not a triangle"
  else if(angle1 === angle2 && angle2 === angle3 )
    return "Equilateral triangle"
  else if(angle1 === angle2 || angle2 === angle3  )
    return "isosceles triangle"
  else if(angle1 !== angle2 && angle2 !== angle3 )
    return "scalene triangle"
}

console.log(typeOfTriangle(60,60,60))