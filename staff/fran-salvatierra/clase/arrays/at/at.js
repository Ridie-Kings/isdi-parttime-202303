function ati(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    } else if (index < 0 && Math.abs(index) <= array.length) {
        return array[array.length + index];
    } else {
        return undefined;
    }
}