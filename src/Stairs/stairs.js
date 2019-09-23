"use strict";
exports.__esModule = true;
function stairs(n) {
    if (n <= 1)
        return 1;
    return stairs(n - 1) + stairs(n - 2);
}
exports.stairs = stairs;
