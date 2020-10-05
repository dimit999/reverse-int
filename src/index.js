module.exports = function reverse (n) {
  let stringValArr = n.toString().split('')
  let resultArr = []
  stringValArr.forEach(element => {
    if (!(element == '-')) {
      resultArr.push(element)
    }
  });
  return Number(resultArr.slice().reverse().join(''))
}
