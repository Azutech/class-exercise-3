"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr;
};
const addArr = (arr) => {
    let result = 0;
    arr.forEach((num) => {
        result += num;
    });
    return result;
};
const concatArr = (arr1, arr2) => {
    let result = [...arr1, ...arr2];
    return result;
};
exports.default = { cut3, addArr, concatArr };
