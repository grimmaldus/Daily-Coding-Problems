function permMissingElem(A) {
    var sum = (A.length + 1) * (A.length + 2) / 2;
    A.forEach(function (element) {
        sum -= element;
    });
    return sum;
}
