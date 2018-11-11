let binarySearch = (array, element) => {
    if(array.length === 1 && array[0] === element) {
        return element;
    }
    let middleElement = Math.floor(array.length/2);
    if(middleElement < element) {
        binarySearch(array.slice(0, middleElement), element);
    } else {
        binarySearch(array.slice(middleElement), element);
    }
}