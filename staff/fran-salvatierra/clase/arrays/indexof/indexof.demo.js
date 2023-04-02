const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(iOf(beasts, 'bison'));
// Expected output: 1

// Start from index 2
console.log(iOf(beasts, 'bison', 2));
// Expected output: 4

console.log(iOf(beasts, 'giraffe'));
// Expected output: -1