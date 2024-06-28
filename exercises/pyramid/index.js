// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let totalWidth = n * 2 - 1
  for (let row = 0; row < n; row++) {
    let midpoint = Math.floor(totalWidth / 2)
    let level = ''
    for (let col = 0; col < totalWidth; col++) {
      if (col >= midpoint - row && col <= midpoint + row) {
        level += '#'
      } else {
        level += ' '
      }
    }
    console.log(level)
  }
}

module.exports = pyramid
