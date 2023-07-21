// js type coercion = scala implicit conversion

const year = '1999';
console.log(year + 19) // implicitly to string

// manual coercion
console.log(Number(year) + 19) // int

// manual coercion
Number('not a number') // NaN value, type of 'number'
// manual coercion
String(23) // stringify 23

// implicit coercion
console.log('I am ' + 23 + ' years old') // stringify
console.log('10' - '5') // number

let n = '1' - 1 // 0
n--; // -1

Boolean(0) // false
