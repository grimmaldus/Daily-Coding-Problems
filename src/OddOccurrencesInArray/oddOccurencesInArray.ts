export function oddOccurencesInArray(array: number[]): number {
    let result = 0;

    for (let element of array) {
        result ^= element;
    }

    return result;
}

