function contain(array, searchElement) {
    // TODO:
    for(let i = 0; i < array.length; i++) {
        if(array[i] === searchElement) {
            return true;
        }
    } return false;
}
