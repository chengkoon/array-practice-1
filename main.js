// importing our helper method, helper.test()
var helper = require('./test-helper-functions')

/* ---------------------- EXERCISE 1 ---------------------- */
// Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. (Sample input: 025486, Sample output: 0-254-8-6)

function dash (numString) {
  // define your function here
  var result = ''
  for (var i=0; i<numString.length; i++) {
    if ((parseInt(numString[i])%2===0) && (parseInt(numString[i+1])%2===0)) {
      result += numString[i]+'-';
    }
    else {
      result += numString[i];
    }
  }
  return result;
}

helper.test(dash('025486'), '0-254-8-6') // check that your function works as expected

/* ---------------------- EXERCISE 2 ---------------------- */
// Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

function mostFrequentItem (arr) {
  var resultArr = [];
  var intermittentArr = [];

  arr.sort(); // arr is now [ 2, 2, 3, 3, 3, 3, 4, 9, 'b', 'b', 'b', 'b', 'b' ]

  while ((arr.length >= 1) || (intermittentArr.length >= 1)) { // the second condition is needed to execute the last push when arr is already empty
    if (intermittentArr.length === 0) { //for when intermittentArr is empty
      intermittentArr.push(arr.shift());
      
    }
    else if (intermittentArr[0] === arr[0]) {
      intermittentArr.push(arr.shift());
    }
    else { //if the current arr[0] is a new value...
      resultArr.push(intermittentArr);
      intermittentArr = [];
    }
  }
  resultArr.sort(function(a,b) {
    return b.length - a.length; //[ [ 'b', 'b', 'b', 'b', 'b' ],[ 3, 3, 3, 3 ],[ 2, 2 ],[ 9, 9 ],[ 4 ] ]
  })
  var finalResult = resultArr[0][0] + " (" + resultArr[0].length + " times)";
  return finalResult; // 'b (5 times)'
}

// uncomment the following test to run it
helper.test(mostFrequentItem([3, 'b', 'b', 'b', 2, 3, 'b', 3, 'b', 2, 4, 9, 3]), 'b (5 times)')

/* ---------------------- EXERCISE 3 ---------------------- */
// Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
function removeDuplicateItems (arr) {
  arr = arr.map(function(elem) {
    return typeof elem === 'string' ? elem.toLowerCase() : elem;
  }) //arr is now integers and lower-case letters
  var resultArr = [];
  for (var i=0; i<arr.length; i++) {
    if (!resultArr.includes(arr[i])) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

helper.test(removeDuplicateItems([1, 'a', 'A', 'b', 2, 2]), [1, 'a', 'b', 2])

/* ---------------------- EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function union (arr1, arr2) {
  var arr3 = arr1.concat(arr2).sort(function(a,b){
    return a-b;
  });
  return removeDuplicateItems(arr3)
}

helper.test(union([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100])

/* ---------------------- EXERCISE 5 ---------------------- */
// Write a JavaScript function to merge two arrays and removes all duplicates elements.
// (Sample input: mergeArray([1, 2, 3], [2, 30, 1]), expected output: [3, 2, 30, 1])
function mergeArray (arr1, arr2) {
  return union (arr1, arr2);
}

helper.test(mergeArray([1, 2, 3], [2, 30, 1]), [3, 2, 30, 1])
