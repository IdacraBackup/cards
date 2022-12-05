import { assert, describe, expect, it } from 'vitest';
import { mask } from './mask';
import { tests } from './test_utils';

const testCases = [
  [
    [2, 5, 3, 0, 1], //aa
    [0, 0, 0, 0, 0], //mm
    [0, 0, 0, 0, 0], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    [0, 1, 0, 0, 1], //mm
    [0, 5, 0, 0, 1], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    [0, 1, 1, 0, 1], //mm
    [0, 5, 3, 0, 1], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    [1, 1, 1, 1, 1], //mm
    [2, 5, 3, 0, 1], //expect
  ],
];

describe('mask', () => {
  tests(mask, testCases);
  // testCases.forEach(([aa, mm, expect]) => {
  //   it("works with given examples", () => {
  //     const result = mask(aa, mm);
  //     assert.deepEqual(result, expect, error(mask, result, expect, aa, mm));
  //   });
  // });
});
