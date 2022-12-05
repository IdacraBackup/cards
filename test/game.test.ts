import { assert, describe, expect, it } from 'vitest';
import { mask } from './mask';
import { sub } from './sub';
import { mul } from './mul';
import { tests } from './test_utils';

const pipe = (...fns: any[]) => (x: any) => fns.reduce((v, f) => f(v), x);
const compose = (...fns: any[]) => (x: any) => fns.reduceRight((v, f) => f(v), x);

// card description:
// Deal 4 damages to creatures with more than 3 health.

// logic:
// filter: creatures with health >= 3
// effect: sub 4 health

const filter = (bb: number[]) => sub(bb, 3);
const effect = (board: number[], mask: number[]) => sub(board, 4);

// TODO CONSIDER MAKING SUB ADD MUL MASK AS FUNCTIONAL BINDING LIKE THIS:
// (aa: number[]) => (bb: number[]) => (output: number[]) 
// functional style
export function card2(board: number[]) {
    const mask = filter(board);
    const effectMasked = mask(effect(board), mask);

    return sub(board, effectFiltered(board));
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
