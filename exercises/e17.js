/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods.
 * In order to do this it is ok to use any type of FOR loops.
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

//import { useCallback } from "react";

export function minBy(array, cb) {
  // Your code goes here...
  let min = array[0];
  for (let i of array) {
    if (cb(i) < cb(min)) {
      min = i;
    }
  }
  return min;
}

export function maxBy(array, cb) {
  // Your code goes here...
  let max = array[0];
  for (let j of array) {
    if (cb(j) > cb(max)) {
      max = j;
    }
  }
  return max;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
