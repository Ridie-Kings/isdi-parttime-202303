Array.prototype.join2 = function (sep = ',') {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += this[i];
        if (i !== this.length - 1) {
            result += sep;
        }
    }
    return result;
}