// 8 write a function which can log text with your username. Another function which can write any text with ur user ID 
//  Now, compose both function to give one function which can log any text with both username and userID

const  logWithName = message => `Mimansha says, ${message} `

const  logWithId = message => `ID: aASA2134saef34vc32 ::  ${message} `

const  logWithNameAndId = message => logWithId(logWithName(message))



console.log(logWithNameAndId("how is your day"))
