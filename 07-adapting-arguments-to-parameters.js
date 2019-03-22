function foo(x, y) {
  console.log(x, y)
}

function bar(fn) {
  fn([3, 9])
}

bar(foo)

function spreadArgs(fn) {
  return function spreadFn(argsArr) {
    return fn(...argsArr)
  }
}
const spreadArgs2 = fn => argsArr => fn(...argsArr)

spreadArgs(foo)([1, 4])

function gatherArgs(fn) {
  return function(...argsArr) {
    return fn(argsArr)
  }
}
const gatherArgs2 = fn => (...argsArr) => fn(argsArr)

gatherArgs(spreadArgs(foo))(11, 12)

function combineFirstTwo([v1, v2]) {
  return v1 + v2
}

console.log([1, 2, 3, 4, 5].reduce(gatherArgs(combineFirstTwo)))
