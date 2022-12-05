import { assert, describe, expect, it } from 'vitest';
import { sub } from './sub';
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
    [2, 4, 3, 0, 0], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    [1, 1, 1, 1, 1], //bb
    [1, 4, 2, 0, 0], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    1, //bb
    [1, 4, 2, 0, 0], //expect
  ],
  [
    [2, 5, 3, 0, 1], //aa
    [3, 4, 4, 1, 20], //bb
    [0, 1, 0, 0, 0], //expect
  ],
];

describe('sub', () => {
  tests(sub, testCases);
});
