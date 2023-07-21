const friends = ['George', 'Zach'];

const friends2 = new Array('George', 'Zach');

const friend = friends[0];
const friend2 = friends2[0];

// mutation
friends[0] = 'Nika' // ['Nika', 'Zach']

// add to the end
[1, 2, 3].push(4) // [1, 2, 3, 4]

[1, 2, 3].pop() // remove end

// add to the start
[2, 3, 4].unshift(1) // [1, 2, 3, 4]

[2, 3, 4].shift() // [3, 4] remove head

const arr = [1, 2, 3]

[1, 2, 3].includes(3) // true, last

[1, 2, 3].some(x => x >= 2) // true

const increment = int => int + 1

[1, 2, 3].map(increment) // [2, 3, 4]