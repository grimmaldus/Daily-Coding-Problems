function stairs(n) {
    if (n <= 1)
        return 1;
    return stairs(n - 1) + stairs(n - 2);
}
function stairsSolution() {
    console.log(stairs(4));
}
//# sourceMappingURL=main.js.map