function stairs(n: number): number {
    if (n <= 1) 
        return 1;
    
    return stairs(n - 1) + stairs(n - 2);
}

function stairsSolution(): void {
    console.log(stairs(4));
}