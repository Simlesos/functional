const { add, gt, lte, pipe, reduce, filter, allPass } = require('ramda')

const numbers = [4, 10, 0, 27, 42, 17, 15, -6, 58]

const sumOnlyFavorites = filter(allPass([gt(20), lte(10)]))

const printMagicNumber = pipe(
  sumOnlyFavorites,
  reduce(add, 0),
  magicNumber => `The magic number is ${magicNumber}`,
  console.log
)

printMagicNumber(numbers)
