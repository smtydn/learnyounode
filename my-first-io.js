const fs = require('fs')


const inputPath = process.argv[2]

let content = fs.readFileSync(inputPath).toString()
let lineCount = content.split('\n').length - 1
console.log(lineCount)