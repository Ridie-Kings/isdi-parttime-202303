Array.prototype.concat2 = function (...args) {
    let result = [...this];
    for (let i = 0; i < args.length; i++) {
        result = [...result, ...args[i]];
    }
    return result;
}