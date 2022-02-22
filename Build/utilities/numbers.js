"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// find the largest number in an array
const lgNum = (arr) => {
    let Large = 0;
    arr.forEach((y) => {
        if (y > Large) {
            Large = y;
        }
        ;
    });
    return Large;
};
//sum
const sum = (arr, arr2) => {
    let total = 0;
    arr.forEach((x) => {
        total += x;
    });
    return total + arr2;
};
//multiply
const multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
};
exports.default = {
    lgNum,
    sum,
    multiply,
};
