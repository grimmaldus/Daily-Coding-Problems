// A binary gap within a positive integer N is any maximal sequence of 
// consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
function solution(N) {
    var binary = N.toString(2);
    console.log(binary);
    var maxGap = 0;
    var currentGap = 0;
    for (var i = 0; i < binary.length; i++) {
        // trailing 0
        if (binary[i] === '0')
            continue;
        // begin of gap
        if (binary[i] === '1') {
            // get size of gap
            currentGap = 0;
            i++;
            while (binary[i] === '0') {
                i++;
                if (i >= binary.length) {
                    console.log(0);
                    return 0;
                }
                currentGap++;
            }
            i--;
            maxGap = currentGap > maxGap ? currentGap : maxGap;
        }
    }
    console.log(maxGap);
    return maxGap;
}
//test
solution(95);
//# sourceMappingURL=main.js.map