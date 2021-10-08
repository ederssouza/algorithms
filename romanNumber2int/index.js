const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function romanNumber2Int (string) {
  return Array.from(string.toUpperCase())
    .reduce((acc, letter, index, arr) => {
      const currentLetterValue = romanNumbers[letter]
      const nextLetter = arr[index + 1]
      const nextLetterValue = nextLetter ? romanNumbers[nextLetter] : 0

      return currentLetterValue < nextLetterValue
        ? (acc -= currentLetterValue)
        : (acc += currentLetterValue)
    }, 0)
}

module.exports = { romanNumber2Int }