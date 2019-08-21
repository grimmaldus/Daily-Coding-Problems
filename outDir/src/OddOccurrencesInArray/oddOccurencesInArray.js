"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function oddOccurencesInArray(array) {
    let result = 0;
    if (array.length < 2)
        return 0;
    result = array[0];
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        result = result <= 0 ? result + element : result - element;
    }
    return Math.abs(result);
}
exports.oddOccurencesInArray = oddOccurencesInArray;
//# sourceMappingURL=oddOccurencesInArray.js.map