
console.log(`================break statement===========`);

for (let i = 0; i < 11; i++) {
    console.log(i);
    if (i == 6) {
        break;
    }
}

console.log(`================continue statement===========`);

for (let i = 0; i < 11; i++) {
    console.log(i);
    if (i == 2) {
        continue;
    }
    console.log(`==================`);
}