function constant(v) {
  return function value() {
    return v
  }
}

const constant2 = v => () => v

p1.then(foo)
  .then(p2)
  .then(bar)

p1.then(foo)
  .then(function() {
    return p2
  })
  .then(bar)

p1.then(foo)
  .then(() => p2)
  .then(bar)

p1.then(foo)
  .then(constant(p2))
  .then(bar)
