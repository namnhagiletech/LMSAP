export const isEqualArray = (array1: number[], array2: number[]) => {
  const sameArray =
    array1.length === array2.length &&
    array1.every((value, index) => value === array2[index]);
  return sameArray;
};
