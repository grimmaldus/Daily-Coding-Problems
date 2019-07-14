function productOfArray(inputArray) {
    var result = 1;
    inputArray.forEach(function (element) {
        result *= element;
    });
    return result;
}
function solution(inputArray) {
    var result = new Array();
    var productOfAll = productOfArray(inputArray);
    inputArray.forEach(function (element) {
        result.push(productOfAll / element);
    });
    console.log(result);
}
solution([1, 2, 3, 4, 5]);
//# sourceMappingURL=main.js.map