function partial(fn, ...presetArgs) {
  return function partiallyApplied(...lastArgs) {
    return fn(...presetArgs, ...lastArgs)
  }
}

function reverArgs(fn) {
  return function argsRevered(...args) {
    return fn(...args.reverse())
  }
}

const reverArgs2 = fn => (...args) => fn(...args.reverse())

// const getUser = reverArgs(
//   partial(reverArgs(ajax), function cb() {
//     // do something
//   })
// )

// getUser('http://some.api/person', { user: CURRENT_USER_ID })

function partialRight(fn, ...lastArgs) {
  return function reverArgs(...prevArgs) {
    return fn([...prevArgs, ...lastArgs])
  }
}

const partialRight2 = (fn, ...lastArgs) => (...prevArgs) =>
  fn([...prevArgs, ...lastArgs])

function foo(x, y, z, ...rest) {
  console.log(x, y, z, rest)
}

// Glitch
var f = partialRight(foo, 'z:last')
f(1, 2) // 1 2 "z:last" []
f(1) // 1 "z:last" undefined []
f(1, 2, 3) // 1 2 3 ["z:last"]
f(1, 2, 3, 4) // 1 2 3 [4,"z:last"]
