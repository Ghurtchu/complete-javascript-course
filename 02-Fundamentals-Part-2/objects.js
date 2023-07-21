
const object = {
    'name': 'nika',
    'age': 20,
    'income_sources': ['job', 'trading', 'online business']
}

object['name']?.charAt(0) // option read, if there get head char

object.name?.charAt(0) // if name is defined get char head

const functions = {
    sum: (a, b) => a + b,
    mult: (a, b) => a * b
}

const a = {
    age: 15,
    calcAge: () => 2050 - this.age
}