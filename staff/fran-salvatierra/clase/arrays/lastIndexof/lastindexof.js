Array.prototype.liOf =
    function liOf(searchElement, index) {
        index = index || this.length - 1;

        for (var i = index; i >= 0; i--) {
            if (this[i] === searchElement) {
                return i;
            }
        }
        return -1;
    }