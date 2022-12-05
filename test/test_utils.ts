import { STRIP_COMMENTS, STRIP_KEYWORDS, ARGUMENT_NAMES, ARGUMENT_SPLIT } from './suite.test';

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

// function prepend(char: string, text: string, expectedSize: number): string {
//   if (expectedSize - text.length <= 0) {
//     return text;
//   }
//   const arr = new Array(expectedSize - text.length).fill(char);
//   return arr.join('') + text;
// }
