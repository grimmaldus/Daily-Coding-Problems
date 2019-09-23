// A binary gap within a positive integer N is any maximal sequence of
// consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
export function binaryGap(N: number): number {
    const binary = N.toString(2);
    let maxGap = 0;
    let currentGap = 0;
    let foundOne = false;

    for (let i = 0; i < binary.length; i++) {
        
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
