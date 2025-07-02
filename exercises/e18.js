/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from "../exercises/e17.js";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let counter = {};
  for (let i of data.asteroids.map((a) => a.discoveryYear)) {
    counter[i] = counter[i] ? counter[i] + 1 : 1;
  }
  return Number(maxBy(Object.entries(counter), (entry) => entry[1])[0]);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
