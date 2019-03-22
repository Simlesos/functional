function unary(fn) {
  return function onlyOneArg(arg) {
    return fn(arg)
  }
}

const unary2 = fn => arg => fn(arg)

console.log([1, 2, 3].map(unary(parseInt)))
