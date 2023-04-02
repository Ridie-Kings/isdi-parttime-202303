Array.prototype.fill2 = function fill2(value, startIndex, endIndex) {
    startIndex = startIndex || 0;
    endIndex = endIndex || this.length;
    for (let i = startIndex; i < endIndex; i++) {
        this[i] = value;
    } return this;
}