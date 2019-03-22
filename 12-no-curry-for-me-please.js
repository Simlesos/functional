function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(nextArgs) {
      const args = [...prevArgs, nextArgs]
      if (args.length >= arity) {
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })([])
}

function uncurry(fn) {
  return function uncurried(...args) {
    let ret = fn
    for (let arg of args) {
      ret = ret(arg)
    }

    return ret
  }
}

const uncurry2 = fn => (...args) => {
  var ret = fn

  for (let arg of args) {
    ret = ret(arg)
  }

  return ret
}

function sum(...nums) {
  var sum = 0
  for (let num of nums) {
    sum += num
  }
  return sum
}

var curriedSum = curry(sum, 5)
var uncurriedSum = uncurry(curriedSum)

console.log(curriedSum(1)(2)(3)(4)(5)) // 15
console.log(uncurriedSum(1, 2, 3, 4, 5)) // 15
console.log(uncurriedSum(1, 2, 3)(4)(5))
