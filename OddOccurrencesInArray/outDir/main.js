function OddOccurencesInArray(array) {
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
const test = [9, 3, 9, 3, 9, 7, 9];
console.log(OddOccurencesInArray(test));
//# sourceMappingURL=main.js.map