"use strict";
exports.__esModule = true;
function oddOccurencesInArray(array) {
    var result = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        result ^= element;
    }
    return result;
}
exports.oddOccurencesInArray = oddOccurencesInArray;
