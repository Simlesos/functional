function bar(x, y, z) {
  console.log(`x:${x} y:${y} z:${z}`)
}

function spreadArgProps(
  fn,
  propOrder = fn
    .toString()
    .replace(
      /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/,
      '$1$2$3'
    )
    .split(/\s*,\s*/)
    .map(v => v.replace(/[=\s].*$/, ''))
) {
  return function spreadFn(argsObj) {
    return fn(...propOrder.map(k => argsObj[k]))
  }
}

function curryProps(fn, arity = 1) {
  return (function nextCurried(prevArgsObj) {
    return function curried(nextArgObj = {}) {
      var [key] = Object.keys(nextArgObj)
      var allArgsObj = Object.assign({}, prevArgsObj, {
        [key]: nextArgObj[key],
      })

      if (Object.keys(allArgsObj).length >= arity) {
        return fn(allArgsObj)
      } else {
        return nextCurried(allArgsObj)
      }
    }
  })({})
}

function partialProps(fn, presetArgs) {
  return function(lastArgs) {
    return fn(Object.assign({}, presetArgs, lastArgs))
  }
}

var f3 = curryProps(spreadArgProps(bar), 3)
var f4 = partialProps(spreadArgProps(bar), { y: 2 })

f3({ y: 2 })({ x: 1 })({ z: 3 })
// x:1 y:2 z:3

f4({ z: 3, x: 1 })
// x:1 y:2 z:3
