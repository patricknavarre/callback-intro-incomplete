const identity = function (value) {
  return value;
};

const first = function (array, n) {
  let result = []; 
  if(n === undefined)
  return array[0];
  for (let i = 0; i < n; i++) {
    if(i < array.length)
    result.push(array[i]);
  } 
  return result;
}

const last = function(array, n) {
  let result = [];
  if(n === undefined)
    return array.length;
    for (let i = 0; i < n; i++){
      if(i < array.length){
        result.push(array[i]);
      }
    }
    return result;
  }


const each = function (collection, iterator) {
  return collection.forEach(iterator)
};

const indexOf = function (array, target) {
  return array.indexOf(target)
  
};
const map = function (collection, iterator) {
  return collection.map(iterator)
};

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};
