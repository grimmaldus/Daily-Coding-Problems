function permMissingElem(A) {
    let sum = (A.length + 1) * (A.length + 2) / 2;

    A.forEach((element: number) => {
        sum -= element;
    });

    return sum;
}
