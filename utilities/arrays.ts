const cut3 = (arr: (number | string)[]): (number | string)[]=> {
    arr.splice(2, 1);
    return arr;
  };
  
  // concatenate two arrays
  const concatArr = (
    arr1arr: (number | string)[],
    arr2arr: (number | string)[]
  ): (number | string)[] => {
    return [...arr1arr, ...arr2arr];
  };
  
  const addArr = (arr: number[]): number => {
    let total = 0;
    arr.forEach((x) => {
      total += x;
    });
    return total;
  };
  export default {
    cut3,
    addArr,
    concatArr,
  };
  