import { p } from "vitest/dist/index-5aad25c1.d.ts"; //There was a typo here, this didn't have the "...5c1.d.ts" it was just "...5c1.ts"
import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  return data.planets
    .filter((p) => p?.moonsCount < 10 || p?.moons === undefined) //tried p.moons.length first and kept getting error, then did .moonsCount thanks for adding it in :)
    .map((p) => p.name);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
