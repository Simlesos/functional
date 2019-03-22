function identity(v) {
  return v
}

const identity2 = v => v

var words = '   Now is the time for all...  '.split(/\s|\b/)
console.log(words)

// 谓词
console.log(words.filter(identity))
console.log(words.filter(Boolean))
// ["Now","is","the","time","for","all","..."]

// 默认函数
function output(msg, formatFn = identity) {
  msg = formatFn(msg)
  console.log(msg)
}

function upper(txt) {
  return txt.toUpperCase()
}

output('Hello World', upper)
output('Hello World')
