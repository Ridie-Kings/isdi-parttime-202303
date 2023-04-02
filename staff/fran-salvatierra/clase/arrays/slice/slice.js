Array.prototype.slice2 = function(start, end) {
    start = start || 0;
    end = end || this.length;
    for (var i = start; i < end; i++) {
        this[i] = this[i + 1];
    }
    return this;
}