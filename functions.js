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
  // checking to see if n is undefined
  if(n === undefined){
    // if it is than get the last index in the array
    return array[array.length -1];
    // if n is equal to 0 return the array
  } else if (n === 0) {
    return [];
    // if n is greater than the array length return the array
  } else if(n > array.length) {
    return array;
    // if it isn't than splice the last index in the array
  } else {
    return array.splice(n - 1)
  }
}


// executes the callback function "iterator" on each element in the array
const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++){
      iterator(collection[i], i, collection);
    }
  }else {
    for (let prop in collection){
      iterator(collection[prop], prop, collection);
    }
  }
};

// return the first index at which a given target can be found in the array.
const indexOf = function (array, target) {
  return array.indexOf(target)
};

// const map = function (collection, iterator) {
//   return collection.map(iterator)
// };

const map = (collection, iterator) => {
  let result = [];
  //  loop through the collection and perform the iterator on each index
  for (let i = 0; i < collection.length; i++) {
    // push the result of that into the result array
    result.push(iterator(collection[i]))
  }
  return result
};


module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};
