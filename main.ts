import { binaryGap } from "./src/BinaryGap/binaryGap";
import { oddOccurencesInArray } from "./src/OddOccurrencesInArray/oddOccurencesInArray";
import { stairs } from "./src/Stairs/stairs";
import { productOfArray } from "./src/ProductOfArray/productOfArray";
import { cycleRotation } from "./src/CycleRotation/cycleRotation";
import { frogJmp } from "./src/FrogJmp/frogJmp";
import { floodDepth } from "./src/FloodDepth/floodDepth";


// Tests


// Arrange 
const test: number[] = [9,3,9,3,9,7,9];


// Act/Assert
 // TODO

// Print out
console.log(binaryGap(95));
console.log(oddOccurencesInArray(test));
console.log(stairs(4));
console.log(productOfArray(test));
console.log(cycleRotation(test, 3));
console.log(frogJmp(10,80,30));
console.log(floodDepth(test));
