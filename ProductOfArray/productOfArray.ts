// Prolly some testing javascript syntax
function product(inputArray: number[]): number{
    let result = 1;

    inputArray.forEach(element => {
        result *= element;
    });

    return result;
}

export function productOfArray(inputArray: number[]){
    let result = new Array();

    let productOfAll = product(inputArray);

    inputArray.forEach(element => {
        result.push(productOfAll / element);
    });

    console.log(result);
}