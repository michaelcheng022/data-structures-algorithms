// ARRAYS =========================================================================

// _.first - Returns an array of the first n elements of an array

const first = (arr, n) => {
  if (arr.length === 0) {
    return null;
  }
  else if (n > 0) {
    let result = [];
    let i = 0;
    while (i < n) {
      result.push(arr[i]);
      i++;
    }
    return result;
  }
  console.log(arr);
  return arr[0];
};
// _.last - Returns an array of the last n elements of an array

const last = (arr, n) => {
  if (arr.length === 0) {
    return null;
  }
  else if (n > 0) {
    let result = [];
    let i = n - 1;
    while (i < arr.length) {
      result.push(arr[i]);
      i++;
    }
    return result;
  }
  return arr[arr.length - 1];
}

// _.each - Calls the iterator for each element of a collection (array or object)

const each = (list, iteratee, context) => {
  for (let i = 0; i < list.length; i++) {
    list[i] = iteratee(list[i], i, list);
  }
  return list
};

const test = (curr, i, arr) => {
  return curr * 2;
};

// console.log(each([1,2,3,4,5], test));


// _.indexOf - Returns the index at which the target can be found in the array
const binarySearch = (sortedArray, value) => {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (value === sortedArray[middleIndex]) {
      return middleIndex;
    } 
    else if (value < sortedArray[middleIndex]) {
      endIndex = middleIndex - 1;
    } 
    else {
      startIndex = middleIndex + 1;
    }
  }
  return -1;
}
const indexOf = (arr, value, isSorted) => {
  if (isSorted) {
    binarySearch(arr, value)
  }
  for(let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }
  }
  return -1; 
}

// console.log(indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6, true));

// _.filter - Return all elements of an array that pass a truth test
const filter = (arr, predicate, context) => {
  let filtered = [];
  for(let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

// console.log(filter(([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), (ele)=>(ele !== 5)));

// _.reject - Return all elements of an array that do not pass a truth test

const reject = (arr, predicate, context) => {
  let filtered = [];
  for(let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

// console.log(reject(([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), (ele)=>(ele !== 5 && ele !== 7)));

// _.uniq - Produce a duplicate-free version of the array
const uniq = (array, isSorted, iteratee) => {
  let map = {};
  let removedDup = [];
  // if (isSorted) {

  // }
  for(let i = 0; i < array.length; i++) {
    if(!map.hasOwnProperty(array[i])) {
      map[array[i]] = 1;
    }
  }
  for (const prop in map) {
    removedDup.push(parseInt(prop));
  }
  return removedDup;
}

// console.log(uniq([1, 2, 2, 4, 5, 4, 6, 7, 7]));

// _.map - Return the results of applying an iterator to each element
const map = (arr, iteratee, context) => {
  let mapped = [];
  for(let i = 0; i < arr.length; i++) {
    mapped.push(iteratee(arr[i]));
  }

  return mapped;
}

// console.log(map([1, 2, 3, 4, 5], (num)=>(num * 2)));

// _.pluck - Takes an array of objects and returns an array of the values of a certain property in it
const pluck = (arr, propertyName) => {
  let plucked = [];
  for (let i = 0; i < arr.length; i++) {
    if (propertyName in arr[i]) {
      plucked.push(arr[i][propertyName]);
    }
  } 
  return plucked;
}

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// console.log(pluck(stooges, 'name'));

// _.reduce - Reduces an array or object to a single value
const reduce = (arr, iteratee, acc, context) => {
  for(let i = 0; i < arr.length; i++) {
    if (acc === undefined) {
      acc = arr[i];
    } 
    else {
      acc = iteratee(acc, arr[i], i, arr);  
    }
    
  }
  return acc;
}

//console.log(reduce([1, 2, 3, 4, 5], (acc, curr) => (acc + curr)));

// _.contains - Determine if the array of object contains a given value
const contains = (list, value, fromIndex) => {
  if (indexOf(list, value) !== -1) {
    return true;
  }
  return false;
}

//console.log(contains([1, 2, 3], 5));

// _.every - Determine whether all of the elements match a truth test
const every = (list, predicate, context) => {
  for(let i = 0; i < list.length; i++) {
    if(!predicate(list[i])) {
      return false;
    }
  }
  return true;
}
//console.log(every([2, 4, 5], function(num) { return num % 2 == 0; }));

// _.some - Determine whether any of the elements pass a truth test
const some = (list, predicate, context) => {
  for(let i = 0; i < list.length; i++) {
    if (typeof predicate === 'function') {
      return predicate(list[i]);
    }  
    else if (list[i]) {
      return true;
    }
  }
  return false;
}

// console.log(some([2, 4, 5], function(num) { return num % 2 == 0; }));
// console.log(some([null, 0, 'yes', false]));

// _.shuffle - Randomizes the order of an array's contents
const shuffle = (arr) => {
  let i = arr.length - 1;
  let indexSwap = 0;
  let temp = 0;
  while (i > 0) {
    temp = arr[i];
    indexSwap = Math.floor(Math.random() * (i - 0) + 0);
    arr[i] = arr[indexSwap]
    arr[indexSwap] = temp;
    i--;
  }
  return arr;
}

// console.log(shuffle([1,2,3,4,5]));

// _.zip - Zip together two or more arrays with elements of the same index going together
const zip = (...arrays) => {

}

// _.flatten - Takes a multidimensional array and converts it to a one-dimensional array
// _.intersection - Takes an arbitrary number of arrays and produces an array that contains every item shared between all the passed-in arrays
// _.difference - Takes the difference between one array and a number of other arrays. Only the elements present in just the first array will remain
// _.invoke - Calls the method named by function or key on each value in the list

// Objects ====================================================================

// _.extend - Extend a given object with all of the properties of the passed in object(s)
// _.defaults - Like _.extend, but does not overwrite a key that already exists in the object
// _.sortBy - Sort the object's values by a criterion produced by an iterator

// Functions ==================================================================

// _.once - Return a function that can be called at most one time
// _.memoize - Memorize an expensive function's results by storing them
// _.delay - Delays a function for the given number of milliseconds, and then calls it with the arguments supplied