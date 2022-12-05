import { assert, describe, expect, it } from 'vitest';
import { add } from './add';
import { tests } from './test_utils';

const testCases = [
  [
    [2, 5, 3, 0, 1], //aa
    [0, 0, 0, 0, 0], //bb
    [2, 5, 3, 0, 1], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    [0, 1, 0, 0, 1], //bb
    [2, 6, 3, 0, 2], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    [0, 1, 1, 0, 1], //bb
    [2, 6, 4, 0, 2], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    [1, 1, 1, 1, 1], //bb
    [3, 6, 4, 1, 2], //expect
  ],
];

describe('add', () => {
  tests(add, testCases);
  // testCases.forEach(([aa, bb, expect]) => {
  //   it("works with given examples", () => {
  //     const result = add(aa, bb);
  //     assert.deepEqual(result, expect, error(add, result, expect, aa, bb));
  //   });
  // });
});
