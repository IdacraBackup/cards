import { assert, describe, expect, it } from 'vitest';
import { mul } from './mul';
import { tests } from './test_utils';

const testCases = [
  [
    [2, 5, 3, 0, 1], //aa
    [0, 0, 0, 0, 0], //bb
    [0, 0, 0, 0, 0], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    [0, 1, 0, 0, 1], //bb
    [0, 5, 0, 0, 1], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    [0, 1, 1, 0, 1], //bb
    [0, 5, 3, 0, 1], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    [1, 1, 1, 1, 1], //bb
    [2, 5, 3, 0, 1], //expect
  ],
];

describe('mul', () => {
  tests(mul, testCases);
});
