// todo: write general assumption that we never create matrix with negative values
// so we dont have to deal with edge case of negative values in matrices
export function sub(aa: number[], bb: number[] | number): number[] {
  return aa.map((_, i) => {
    const bbVal = Array.isArray(bb) ? bb[i] : bb;
    const total = aa[i] - bbVal;
    return total > 0 ? total : 0;
  });
}
