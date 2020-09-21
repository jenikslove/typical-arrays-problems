
exports.min = function min (array=[]) {
  if (array.length && arguments.length) {
  return Math.min.apply(null, array);
}else return 0;
}

exports.max = function max (array=[]) {
 if (array.length && arguments.length) {
  return Math.max.apply(null, array);
}else return 0;
}

exports.avg = function avg (array=[]) {
 if (array.length && arguments.length) {
 return array.reduce((a, b) => (a + b)) / array.length;
}else return 0;
}


