// find the largest number in an array
const lgNum = (arr: (string|number)[]): number =>{
    let Large: number | string = 0;
    arr.forEach((y) =>{
        if(y > Large){
            Large = y;
        };
    })
    return Large;
};
  
  //sum
  const sum = (arr: number[], arr2: number): number => {
    let total = 0;
    arr.forEach((x) => {
      total += x;
    });
    return total + arr2; 
  };
  
  //multiply
  const multiply = (num1: string|number, num2: string|number) => {
    const result = (num1 as unknown as number) * (num2 as unknown as number);
    return result;
  };

  export default {
    lgNum,
    sum,
    multiply,
  };
  