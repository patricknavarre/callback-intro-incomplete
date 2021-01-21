// returning whatever value is being passed in as a parameter

const identity = function (value) {
  return value;
};

const first = function (array, n) {
  // create an empty array
  let result = []; 
  // if undefined then return the first element in the array
  if(n === undefined){
    return array[0];
  }
  // if the index is greater than n push into the array the index
  for (let i = 0; i < n; i++) {
    if(i < array.length)
    result.push(array[i]);
  } 
  // return that array
  return result;
}

const last = function(array, n) {
  let result = [];
  if(n === undefined){
    return array.length;
  }
    for (let i = 0; i < n; i++){
      if(i < array.length){
        result.push(array[i]);
      }
    }
    return result;
  }

// const last = function(array, n) {
//   return array.slice(-1, n).join(' ');
// }


// executes the callback function "iterator" on each element in the array
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
