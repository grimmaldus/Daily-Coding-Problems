function productOfArray(inputArray: number[]): number{
    let result = 1;

    inputArray.forEach(element => {
        result *= element;
    });

    return result;
}

function solution(inputArray: number[]){
    let result = new Array();

    let productOfAll = productOfArray(inputArray);

    inputArray.forEach(element => {
        result.push(productOfAll / element);
    });

    console.log(result);
}

solution([1,2,3,4,5]);