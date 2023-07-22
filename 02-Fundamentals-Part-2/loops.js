for (let i = 0; i <= 10; i++) {
    // do something
}

const arr = [1, 2, 3, 4, 5]

for (let i = 0; i <= arr.length; i++) { console.log(arr[i]); }

const apply = (arr, f) => arr.forEach(f)

apply([1, 2, 3, 4], a => console.log(a))

const types = arr => arr.map(a => typeof a)

// break and continue
for (let i = 0; i <= 10; i++) {
    if (i == 5) break; // breaks out of loop as soon as i == 5
}

for (let i = 0; i <= 10; i++) {
    if (i == 5) continue; // skips the body and continues for the next iteration as soon as i == 5
}