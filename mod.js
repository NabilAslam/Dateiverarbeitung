const fs = require("fs");

let fileString = fs.readFileSync("input.txt").toString();

const characterArray = fileString.split(". ");

for (let i = 0; i < characterArray.length; i++) {
    characterArray[i] = "" + characterArray[i] + ".\n";
  }
  

  
fileString = characterArray.join("");

fs.writeFileSync("output.txt", fileString);