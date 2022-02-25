// // 3

// const family = [
//   {
//     name    : 'Tanay',
//     haveCycle : true
//   },
//   {
//     name     : 'Akanksha',
//     haveCycle : false
//   },
//   {
//     name     : 'Tanvi',
//     haveCycle : true
//   },
// 	{
//     name     : 'Kanak',
//     haveCycle : false
//   }
// ];


// // Your output should be: ['Tanay', 'Tanvi']
  
//   // Lengthy approach

// // console.log(
// //   family.filter(
// //     familyMemeber => familyMemeber.haveCycle 
// //   ).map(member => member.name)
// // )

// // with reduce

// console.log(
//   family.reduce(
//     (accFamily,currFamily) => currFamily.haveCycle? 
//     [...accFamily,currFamily.name]:accFamily, []
//   )
// )

