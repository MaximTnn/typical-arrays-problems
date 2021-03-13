
exports.min = function min (array = [0]) {
     return array.length == 0 ? 0 : Math.min.apply(Math, array);
}

exports.max = function max (array = [0]) {
    return array.length == 0 ? 0 : Math.max.apply(Math, array);
}

exports.avg = function avg (array = [0]) {
    let sum = 0
    array.forEach(element => {sum += element});
    return  array.length == 0 ? 0 : (sum / array.length);
}


