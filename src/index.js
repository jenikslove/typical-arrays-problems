
exports.min = function min (array) {
  if (!array.length) {
  return Math.min.apply(null, array);
}
}

exports.max = function max (array) {
  if (!array.length){
  return Math.max.apply(null, array);
}
}

exports.avg = function avg (array) {
  if (!array.length) {
 return array.reduce((a, b) => (a + b)) / array.length;
}
}


