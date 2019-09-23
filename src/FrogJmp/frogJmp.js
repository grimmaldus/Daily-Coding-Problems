"use strict";
// Write a function:
// class Solution { public int solution(int X, int Y, int D); }
// that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.
exports.__esModule = true;
function frogJmp(X, Y, D) {
    return Math.ceil((Y - X) / D);
}
exports.frogJmp = frogJmp;
