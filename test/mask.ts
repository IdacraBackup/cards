// todo: rename to bitwise AND &
// todo: consider using EffectTS to be able to override operators
export function mask(aa: number[], mm: number[]): number[] {
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
