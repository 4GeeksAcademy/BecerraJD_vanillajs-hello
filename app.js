console.log("Hagamos combinaciones!!!");

let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extns = [".com", ".net", ".us", ".ar", ".es"]

for (let pronoun = 0; pronoun < pronouns.length; pronoun++) {
  for (let adj = 0; adj < adjs.length; adj++) {
    for (let noun = 0; noun < nouns.length; noun++) {
      for (let extn = 0; extn < extns.length; extn++) {
        console.log(pronouns[pronoun], adjs[adj], nouns[noun], extns[extn]);
      }
    }
  }
}