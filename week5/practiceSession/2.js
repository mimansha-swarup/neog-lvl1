// 2

const arr = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]             


// Your output should be: 121

/*** 60+36+16+9 ***/
console.log(
  arr.reduce((sumAge,currAge) => sumAge+ currAge.age,0
)
)