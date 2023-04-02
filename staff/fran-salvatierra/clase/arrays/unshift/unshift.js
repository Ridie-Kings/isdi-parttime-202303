Array.prototype.unshift2 = function (...items) {
    const itemsLength = items.length;
    this.length += itemsLength;
    for (let i = this.length - 1; i >= itemsLength; i--) {
        this[i] = this[i - itemsLength];
    }
    for (let i = 0; i < itemsLength; i++) {
        this[i] = items[i];
    }
    return this.length;
}
