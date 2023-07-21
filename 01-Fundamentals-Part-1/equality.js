const age = 18

// value comparison + type comparison
if (age === 18) {
    // do something
}

const ageStr = '18'
if (ageStr == 18) {
    // will be executed
}

if (ageStr === 18) {
    // will not be executed, type mismatch
}

let nm = prompt("name?")
if (nm == 'nika') {
    comsole.log("sagol zamia")
}

// !== is better than !=