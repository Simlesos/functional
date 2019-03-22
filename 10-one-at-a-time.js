// curriedAjax('http://some.api/person')({ user: CURRENT_USER_ID })(
//   function foundUser(user) {
//     /* .. */
//   }
// )

// var personFetcher = curriedAjax('http://some.api/person')
// var getCurrentUser = personFetcher({ user: CURRENT_USER_ID })
// getCurrentUser(function foundUser(user) {
//   /* .. */
// })

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

const curry2 = (fn, arity = fn.length) =>
  (nextCurried = prevArgs => nextArgs => {
    const args = [...prevArgs, nextArgs]
    if (args.length >= arity) {
      return fn(...args)
    } else {
      return nextCurried(args)
    }
  })([])

function add(x, y) {
  return x + y
}

console.log([1, 2, 3, 4, 5].map(curry(add)(3)))

const adder = curry(add)
console.log([1, 2, 3, 4, 5].map(adder(3)))

function sum(...nums) {
  let total = 0
  for (let num of nums) {
    total += num
  }
  return total
}

const curried = curry(sum, 5)
console.log(curried(1)(2)(3)(4)(5))

// same
const curried2 = v1 => v2 => v3 => v4 => v5 => sum(v1, v2, v3, v4, v5)
