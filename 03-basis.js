/* Defaulting Parameters */
function foo1(x = 3) {
  console.log(x)
}

foo1()
foo1(1)

/* Counting Inputs */
function foo2(x, y, z) {}
console.log(foo2.length)

// if (fn.length == 1) {
//   fn( x );
// }
// else if (fn.length == 2) {
//   fn( undefined, x );
// }
// else if (fn.length == 3) {
//   fn( undefined, undefined, x );
// }

function foo3(x, y = 2) {}
function bar(x, ...args) {}
function baz({ a, b }) {}
console.log(foo3.length)
console.log(bar.length)
console.log(baz.length)

function foo4(x, y, z) {
  console.log(arguments.length)
}
foo4(3, 4)

function foo5(x, y, z, ...args) {
  console.log(x, y, z, args)
}
foo5()
foo5(1, 2, 3)
foo5(1, 2, 3, 4)
foo5(1, 2, 3, 4, 5)

/** Arrays of Arguments  */
function foo6(...args) {
  console.log(args[3])
}
var arr = [1, 2, 3, 4, 5]
foo6(...arr)

var arr = [2]
foo6(1, ...arr, 3, ...[4, 5])

function foo7([x, y, ...args] = []) {
  console.log(x, y, args)
}
foo7([1, 2, 3])

/** Named Arguments & Unordered Parameters */
function foo8({ x, y } = {}) {
  console.log(x, y)
}

foo8({
  y: 3,
})

/** Function Output */
function foo9() {}
function bar10() {
  return
}
function baz11() {
  return undefined
}
function foo12() {
  var retValue1 = 11
  var retValue2 = 31
  return [retValue1, retValue2]
}
const [x, y] = foo12()
console.log(x, y)

// Early Returns
function foo13(x) {
  if (x > 10) return x + 1
  var y = x / 2
  if (y > 3) {
    if (x % 2 == 0) return x
  }
  if (y > 1) return y
  return x
} // x = 2, 4, 8, 12

function foo14(x) {
  var retValue
  if (retValue == undefined && x > 10) {
    retValue = x + 1
  }
  var y = x / 2
  if (y > 3) {
    if (retValue == undefined && x % 2 == 0) {
      retValue = x
    }
  }
  if (retValue == undefined && y > 1) {
    retValue = y
  }
  if (retValue == undefined) {
    retValue = x
  }
  return retValue
}

function sum(list) {
  var total = 0
  for (let i = 0; i < list.length; i++) {
    if (!list[i]) list[i] = 0
    total = total + list[i]
  }
  return total
}
var nums = [1, 3, 9, 27, , 84]
console.log(sum(nums))
// console.log(nums)

// anonymous function
// people.map(function getPreferredName(person) {
//   return person.nicknames[0] || person.firstName
// })

// people.map(person => person.nicknames[0] || person.firstName)
