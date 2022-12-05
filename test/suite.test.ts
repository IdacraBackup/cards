import { assert, describe, expect, it } from 'vitest';

const STRIP_COMMENTS = /((\/\/.*$)|(\/\*.*\*\/))/gm;
const STRIP_KEYWORDS = /(\s*async\s*|\s*function\s*)+/;
const ARGUMENT_NAMES =
  /\(([^)]+)\)\s*=>|([a-zA-Z_$]+)\s*=>|[a-zA-Z_$]+\(([^)]+)\)|\(([^)]+)\)/;
const ARGUMENT_SPLIT = /[ ,\n\r\t]+/;
function getParamNames(func: any) {
  const fnStr = func
    .toString()
    .replace(STRIP_COMMENTS, '')
    .replace(STRIP_KEYWORDS, '')
    .trim();
  const matches = ARGUMENT_NAMES.exec(fnStr);
  var match: string;
  if (matches) {
    for (var i = 1; i < matches.length; i++) {
      if (matches[i]) {
        match = matches[i];
        break;
      }
    }
  }
  if (match === undefined) {
    return [];
  }
  return match.split(ARGUMENT_SPLIT).filter((part) => part !== '');
}

// function prepend(char: string, text: string, expectedSize: number): string {
//   if (expectedSize - text.length <= 0) {
//     return text;
//   }
//   const arr = new Array(expectedSize - text.length).fill(char);
//   return arr.join('') + text;
// }

function error(fn: any, result: any, expect: any, ...inputs: any[]) {
  let params = getParamNames(fn);
  let text = 'inputs:';
  inputs.forEach((val, i) => (text += `\n ${inputs[i]} ${params[i]}`));
  return (text += `\n ${expect} expect\n ${result} result`);
}

const add = (a: number, b: number) => a + b;
const sub = (a: number, b: number) => a - b;
const mul = (a: number, b: number) => a * b;
const div = (a: number, b: number) => a / b;
const mod = (a: number, b: number) => a % b;

function mask(aa: number[], mm: number[]): number[] {
  return aa.map((a, i) => (mm[i] ? a : 0));
}

/*
You are Cody, a Typescript programmer. You produce functional code in a code-golf style meaning you use short variable names. To name variables of type array you use 2 identical characters like "aa" and to name an element of that array you use the same character as a single character like "a". You produce code and tests following the pattern below:

function mask(aa: number[], bb: number[]): number[] {
  return aa.map((a, i) => bb[i] ? a : 0);
}

const testCases = [
  [[2, 5, 3, 0, 1], [0, 1, 0, 0, 1], [0, 5, 0, 0, 1]],
  [[2, 5, 3, 0, 1], [0, 1, 1, 0, 1], [0, 5, 3, 0, 1]],
];

tests(mask, testCases);

Acknowledge if you understood and ask me what I need you to implement.
*/

/*
implement mask(aa: number[], bb: number[]): number[] that transforms the given inputs to the given outputs with tests using assert from Chai:
[2,5,3,0,1], [0,0,0,0,0] => [0,0,0,0,0]
[2,5,3,0,1], [0,1,0,0,1] => [0,5,0,0,1]
[2,5,3,0,1], [0,1,1,0,1] => [0,5,3,0,1]
[2,5,3,0,1], [1,1,1,1,1] => [2,5,3,0,1]
*/

/*
implement mask(aa: number[], bb: number[]): number[] that transforms the given inputs to the given outputs as specified in this testCases:

const testCases = [
  [
    [2, 5, 3, 0, 1],//aa
    [0, 0, 0, 0, 0],//mm
    [0, 0, 0, 0, 0],//expect
  ],
  [
    [2, 5, 3, 0, 1],//aa
    [0, 1, 0, 0, 1],//mm
    [0, 5, 0, 0, 1],//expect
  ],
  [
    [2, 5, 3, 0, 1],//aa
    [0, 1, 1, 0, 1],//mm
    [0, 5, 3, 0, 1],//expect
  ],
  [
    [2, 5, 3, 0, 1],//aa
    [1, 1, 1, 1, 1],//mm
    [2, 5, 3, 0, 2],//expect
  ],
];
*/

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
    [2, 5, 3, 0, 2], //expect
  ],
];

function tests(fn: any, testCases: any[][]) {
  testCases.forEach((testCase) => {
    const fnInputs = testCase.slice(0, testCase.length - 1);
    const expect = testCase[testCase.length - 1];
    it('works with given examples', () => {
      const result = fn.apply(this, fnInputs);
      assert.deepEqual(result, expect, error(fn, result, expect, ...fnInputs));
    });
  });
}

describe('mask', () => {
  tests(mask, testCases);
  // testCases.forEach(([aa, mm, expect]) => {
  //   it("works with given examples", () => {
  //     const result = mask(aa, mm);
  //     assert.deepEqual(result, expect, error(mask, result, expect, aa, mm));
  //   });
  // });
});
