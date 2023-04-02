console.log(Array.iAnA([1, 3, 5]));
// Expected output: true

console.log(Array.iAnA('[]'));
// Expected output: false

console.log(Array.iAnA(new Array(5)));
// Expected output: true

console.log(Array.iAnA(new Int16Array([15, 33])));
// Expected output: false
