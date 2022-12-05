import { assert, describe, expect, it } from 'vitest';

export const STRIP_COMMENTS = /((\/\/.*$)|(\/\*.*\*\/))/gm;
export const STRIP_KEYWORDS = /(\s*async\s*|\s*function\s*)+/;
export const ARGUMENT_NAMES =
  /\(([^)]+)\)\s*=>|([a-zA-Z_$]+)\s*=>|[a-zA-Z_$]+\(([^)]+)\)|\(([^)]+)\)/;
export const ARGUMENT_SPLIT = /[ ,\n\r\t]+/;

export function getParamNames(func: any) {
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

export function error(fn: any, result: any, expect: any, ...inputs: any[]) {
  let params = getParamNames(fn);
  let text = 'inputs:';
  inputs.forEach((val, i) => (text += `\n ${inputs[i]} ${params[i]}`));
  return (text += `\n ${expect} expect\n ${result} result`);
}

export function tests(fn: any, testCases: any[][]) {
  testCases.forEach((testCase) => {
    const fnInputs = testCase.slice(0, testCase.length - 1);
    const expect = testCase[testCase.length - 1];
    it('works with given examples', () => {
      const result = fn.apply(this, fnInputs);
      assert.deepEqual(result, expect, error(fn, result, expect, ...fnInputs));
    });
  });
}

// function prepend(char: string, text: string, expectedSize: number): string {
//   if (expectedSize - text.length <= 0) {
//     return text;
//   }
//   const arr = new Array(expectedSize - text.length).fill(char);
//   return arr.join('') + text;
// }
