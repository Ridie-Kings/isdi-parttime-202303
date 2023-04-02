function iOf(array, searchElement, index) {
    for (var i = Math.abs(index) || 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i
        }
    } return -1
} 