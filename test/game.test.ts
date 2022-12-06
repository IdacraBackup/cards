import { assert, describe, expect, it } from 'vitest';
import { asMask, mask, Mask } from './mask';
import { sub } from './sub';
import { mul } from './mul';
import { tests } from './test_utils';
import { Matrix } from './matrix';

const pipe = (...fns: any[]) => (x: any) => fns.reduce((v, f) => f(v), x);
const compose = (...fns: any[]) => (x: any) => fns.reduceRight((v, f) => f(v), x);

// card description:
// Deal 4 damages to creatures with more than 3 health.

// logic:
// filter: creatures with health >= 3
// effect: sub 4 health

// remove 2 health to filter only creatures with > 3 health
const filter = (bb: Matrix) => asMask(sub(bb, 2));
// remove 4 health
const effect = (board: Matrix, mask: Mask) => sub(board, mul(mask, 4));

// filter produces a mask
// i can use the mask on the effect or on the board
// using it on the effect is not good because if I have a 0 I don't know if it means untouched
// so I use it to apply the effect to parts of the board
// i use the mask and multiply it by 4 and then use that to sub the board

// TODO use ReadonlyArray everywhere, ensure pure functions

// //TODO write it more top down like if i was exctracting keywords from the card description
// //or the tree questions
// const healths = [];
// const effect = sub(3);
// const filter = moreThan(3);
// apply(healths, effect, filter(healths));

// const card = [effect, filter];
// // pb de vouloir apply edits c que je dois produire une matrix avec valeur negative et je veux pas..
// // mon ideal c que l'effet de la carte soit un effet de type sub avec un matrix positive
// const cardEffect = (bb: number[]) => sub(bb, filter(bb, 3));
// BeforeUnloadEvent.applyEdits(card)

// TODO CONSIDER MAKING SUB ADD MUL MASK AS FUNCTIONAL BINDING LIKE THIS:
// (aa: number[]) => (bb: number[]) => (output: number[]) 
// functional style
export function card2(board: Matrix) {
    // const mask = filter(board);
    // const effectMasked = mask(effect(board), mask);

    // return sub(board, effectFiltered(board));
    return effect(board, filter(board));
  }

// mathematical style
export function card1(board: number[]) {
    const effect = mul([0, 1, 1, 0, 0], [4, 4, 4, 4, 4]);
    return sub(board, effect);
  }

const testCases = [
  [
    [2, 5, 3, 0, 1], //board
    // [0, 1, 1, 0, 0], //effectFilter
    // [4, 4, 4, 4, 4], //effectValue
    [2, 1, 0, 0, 1], //expect
  ],
];

describe('card1', () => {
  tests(card1, testCases);
});

describe('card2', () => {
  tests(card2, testCases);
});
