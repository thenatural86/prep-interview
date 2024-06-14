// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed = ''
  let str = n.toString()

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }

  return Math.sign(n) * parseInt(reversed)
}

module.exports = reverseInt
