let insertionSort = (array) => {
    for(let i=0; i<array.length; i++) {
        let min = array[i];
        for(let j=i; j<array.length; j++) {
            if(array[j] < array[i]) {
                min = array[j];
                array[j] = array[i];
                array[i] = min;
            }
        }
    }
    return array;
}