function logger() {
    console.log("My name is Jonas");
}

logger()

function processFruit(fruits) {
    console.log(fruits)
    const juice = `${fruits}|${fruits.repeat(2)}`
    return juice;
}

const juice = processFruit("orange, banana, apple")

console.log(juice)

const lambda = a => a + 1
lambda(1) // 2

const lambda2 = (a, b) => a + b
lambda2(1, 2) // 3

const lambda3 = (a, b) => coeff => (a + b) * coeff

lambda3(1, 2)(5) // 15

const strAndIntFormatter = (str, int) => formatter => formatter(str.concat(int))

const func = num => fs => fs.map(f => f(num)).reduce((a, b) => a + b)

func(10)([a => a + 1, a => a / 2, a => a ** 2])