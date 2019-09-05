export function floodDepth(A: number[]) : number {
    let indexOfLeftBarrier = 0;
    let maxDepth = 0;
    let newDepth = 0;

    for (let index = 1; index < A.length; index++) {
        // Trivial usecase
        // Set up new leftBarrier
        if (A[indexOfLeftBarrier] <= A[index]){
            indexOfLeftBarrier = index;
            continue;
        }

        // Calculate depth
        newDepth = A[indexOfLeftBarrier] - A[index];
        maxDepth = newDepth > maxDepth ? newDepth : maxDepth;
    }

    return maxDepth;
}