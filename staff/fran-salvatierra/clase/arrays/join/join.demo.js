const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join2());
// Expected output: "Fire,Air,Water"

console.log(elements.join2(''));
// Expected output: "FireAirWater"

console.log(elements.join2('-'));
// Expected output: "Fire-Air-Water"

console.log(elements.join2('ww'));
// Expected output: "FirewwAirwwWater"