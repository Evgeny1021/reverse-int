module.exports = function reverse (n){
  const nStr = n.toString();
  let strLength = nStr.length;
  result = ''
  if (strLength >= 3) {
    return result = (nStr.at(-1) + nStr.at(-2) + nStr.at(-3))
  }
  if (strLength == 2) {
    return result (nStr.at(-1) + nStr.at(-2))
  }
  if (strLength == 1) {
    return result (nStr.at(-1))
  }
}
