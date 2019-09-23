"use strict";
exports.__esModule = true;
// A binary gap within a positive integer N is any maximal sequence of
// consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
function binaryGap(N) {
    var binary = N.toString(2);
    var maxGap = 0;
    var currentGap = 0;
    var foundOne = false;
    for (var i = 0; i < binary.length; i++) {
        if (foundOne && binary[i] === "1") {
            foundOne = false;
            if (maxGap < currentGap) {
                maxGap = currentGap;
            }
            currentGap = 0;
        }
        if (binary[i] === "1") {
            foundOne = true;
            continue;
        }
        if (foundOne) {
            currentGap++;
        }
    }
    if (foundOne && maxGap > 0) {
        return maxGap;
    }
    return maxGap;
}
exports.binaryGap = binaryGap;
