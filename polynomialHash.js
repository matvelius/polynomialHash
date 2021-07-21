let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let lineIndex = 0
let a = 0
let m = 0

rl.on('line', function (line) {

  if (lineIndex == 0) {

    a = parseInt(line)

  } else if (lineIndex == 1) {

    m = parseInt(line)

  } else if (lineIndex == 2) {

    const s = line

    console.log(hash(s))

    rl.close()
    return
  }

  lineIndex += 1

})

function hash(s) {
  const sLength = s.length
  let hashValue = 0

  for (let i = 0; i < sLength; i++) {
    if (i < sLength - 1) {
      hashValue = (hashValue + s.charCodeAt(i)) * a % m
    } else {
      hashValue = (hashValue + s.charCodeAt(i)) % m
    }
  }

  return hashValue
}