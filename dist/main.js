"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaryGap_1 = require("./src/BinaryGap/binaryGap");
const oddOccurencesInArray_1 = require("./src/OddOccurrencesInArray/oddOccurencesInArray");
const stairs_1 = require("./src/Stairs/stairs");
const productOfArray_1 = require("./src/ProductOfArray/productOfArray");
const cycleRotation_1 = require("./src/CycleRotation/cycleRotation");
const frogJmp_1 = require("./src/FrogJmp/frogJmp");
const floodDepth_1 = require("./src/FloodDepth/floodDepth");
// Tests
// Arrange 
const test = [9, 3, 9, 3, 9, 7, 9];
// Act/Assert
// TODO
// Print out
console.log(binaryGap_1.binaryGap(95));
console.log(oddOccurencesInArray_1.oddOccurencesInArray(test));
console.log(stairs_1.stairs(4));
console.log(productOfArray_1.productOfArray(test));
console.log(cycleRotation_1.cycleRotation(test, 3));
console.log(frogJmp_1.frogJmp(10, 80, 30));
console.log(floodDepth_1.floodDepth(test));
//# sourceMappingURL=main.js.map