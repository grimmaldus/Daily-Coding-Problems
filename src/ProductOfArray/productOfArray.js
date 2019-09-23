"use strict";
exports.__esModule = true;
// Prolly some testing javascript syntax
function product(inputArray) {
    var result = 1;
    inputArray.forEach(function (element) {
        result *= element;
    });
    return result;
}
function productOfArray(inputArray) {
    var result = new Array();
    var productOfAll = product(inputArray);
    inputArray.forEach(function (element) {
        result.push(productOfAll / element);
    });
    console.log(result);
}
exports.productOfArray = productOfArray;
