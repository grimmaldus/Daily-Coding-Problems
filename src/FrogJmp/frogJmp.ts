// Write a function:
// class Solution { public int solution(int X, int Y, int D); }
// that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

export function frogJmp(X: number, Y: number, D: number){
    return Math.trunc((Y - X) / D) + 1;
}