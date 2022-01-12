// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers


const toSentenceCase=(sentence) =>sentence.split(" ").map(word=>(
    word[0].toUpperCase()+ word.slice(1,word.length)
  )).join(" ")


console.log(toSentenceCase('we are neoGrammers'))