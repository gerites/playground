export let iterativeFactorial = (num) => {
    let result = 1;
    for(let i=1; i<num+1; i++) {
        result = result*(i+1)
    }
    return result;
}

export let recursiveFactorial = (num) => {
    if(num = 1) {
        return 1;
    }
    return (num)*recursiveFactorial(num-1);
}

export let es6Factorial = (num) => {
    return [...Array(num+1).keys()].slice(1).reduce((a,b) => a*b);
}

export let iterativeFibonacci = (num) => {
    let result = [];
    for(let i = 0; i < num; i++) {
        result[i] = result[i-2] !== undefined && result[i-2] + result[i-1] || i;
    }
	return result;
}

export let recursiveFibonacci = (num) => {
    if(num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }
    return recursiveFibonacci(num - 1) + recursiveFibonacci(num-2)
}

//Right now, Works only for num = 2
export let generateCombinations = (array, num) => {
    let combinations = [];
    for(let i = 0; i<array.length; i++) {
        for(let j=i+1;j<array.length;j++) {
            combinations.push([array[i], array[j]]);
        }
    }
    return combinations;
}