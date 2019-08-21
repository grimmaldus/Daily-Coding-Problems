"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Prolly some testing javascript syntax
function product(inputArray) {
    let result = 1;
    inputArray.forEach(element => {
        result *= element;
    });
    return result;
}
function productOfArray(inputArray) {
    let result = new Array();
    let productOfAll = product(inputArray);
    inputArray.forEach(element => {
        result.push(productOfAll / element);
    });
    console.log(result);
}
exports.productOfArray = productOfArray;
//# sourceMappingURL=productOfArray.js.map