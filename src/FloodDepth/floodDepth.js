"use strict";
exports.__esModule = true;
function floodDepth(A) {
    var indexOfLeftBarrier = 0;
    var maxDepth = 0;
    var newDepth = 0;
    for (var index = 1; index < A.length; index++) {
        // Trivial usecase
        // Set up new leftBarrier
        if (A[indexOfLeftBarrier] <= A[index]) {
            indexOfLeftBarrier = index;
            continue;
        }
        // Calculate depth
        newDepth = A[indexOfLeftBarrier] - A[index];
        maxDepth = newDepth > maxDepth ? newDepth : maxDepth;
    }
    return maxDepth;
}
exports.floodDepth = floodDepth;
