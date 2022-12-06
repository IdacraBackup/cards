// it's only a 1D Matrix and our operations don't satisfy Math Matrix ops so think of another name...
export type Matrix = ReadonlyArray<number>;

export function newMatrix(): Matrix {
    return Array(10).fill(0);
}