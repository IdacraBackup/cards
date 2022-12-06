// todo: write general assumption that we never create matrix with negative values
// so we dont have to deal with edge case of negative values in matrices
export function mul(aa: ReadonlyArray<number>, bb: ReadonlyArray<number> | number): ReadonlyArray<number> {
    return aa.map((_, i) => aa[i] * (Array.isArray(bb) ? bb[i] : bb));
  }
  