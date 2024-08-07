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
  let totalWidth = 2 * n - 1
  for (let row = 0; row < n; row++) {
    let level = ''
    for (col = 0; col < totalWidth; col++) {
      let midpoint = Math.floor(totalWidth / 2)
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
