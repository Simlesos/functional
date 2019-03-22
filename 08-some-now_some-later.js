function getPerson(data, cb) {
  ajax('http://some.api/person', data, cb)
}

function getOrder(data, cb) {
  ajax('http://some.api/order', data, cb)
}

function getCurrentUser(cb) {
  getPerson({ user: CURRENT_USER_ID }, cb)
}

function partial(fn, ...presetArgs) {
  return function partiallyApplied(...lastArgs) {
    return fn(...presetArgs, ...lastArgs)
  }
}

const partial2 = (fn, ...presetArgs) => (...lastArgs) =>
  fn(...presetArgs, ...lastArgs)

// bind function

// 1
const getCurrentUser2 = partial(ajax, 'http://some.api/person', {
  user: CURRENT_USER_ID,
})

// var getCurrentUser = function partiallyApplied(...laterArgs) {
//   return ajax('http://some.api/person', { user: CURRENT_USER_ID }, ...laterArgs)
// }

// 2
const getPeron1 = partial(ajax, 'http://some.api/person')
const getCurrentUser3 = partial(getPeron1, { user: CURRENT_USER_ID })

// var getCurrentUser = function outerPartiallyApplied(...outerLaterArgs) {
//   var getPerson = function innerPartiallyApplied(...innerLaterArgs) {
//     return ajax('http://some.api/person', ...innerLaterArgs)
//   }

//   return getPerson({ user: CURRENT_USER_ID }, ...outerLaterArgs)
// }

function add(x, y) {
  return x + y
}
console.log(
  [1, 2, 3, 4, 5].map(function adder(val) {
    return add(3, val)
  })
)

console.log([1, 2, 3, 4, 5].map(partial(add, 3)))
