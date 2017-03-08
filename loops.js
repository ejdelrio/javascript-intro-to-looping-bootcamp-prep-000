function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loop.`)
    }
  }
  return array
}

function whileLoop(n) {
  while( n > 0) {
    console.log(n)
    n -= 1
  }
  return "done"
}

function doWhileLoop(array) {
  var maybeTrue = function () {
    return Math.random() >= 0.5
  }
  do {
    array.pop()
  } while(array.length > 0 || maybeTrue() === false)
  return array
}
