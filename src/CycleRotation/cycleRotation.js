"use strict";
// An array A consisting of N integers is given. Rotation of the array means that each element is 
// shifted right by one index, and the last element of the array is moved to the first place.
// For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one
// index and 6 is moved to the first place).
// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
exports.__esModule = true;
function cycleRotation(A, K) {
    var result = [];
    var newIndex = 0;
    for (var index = 0; index < A.length; index++) {
        newIndex = (A.length + index - K) % A.length;
        result[index] = A[newIndex];
    }
    return result;
}
exports.cycleRotation = cycleRotation;
// tslint:disable-next-line: no-console
console.log(cycleRotation([1, 2, 3, 4, 5, 6, 7], 3));
