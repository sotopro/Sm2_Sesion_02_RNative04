// map()

let fishs = ['angel', 'clown', 'trumpet', 'sturgeon'];

// Print out each item in the array

let printFish = fishs.map((fish) => {
    return `${fish}s`
});

console.log(printFish);

// filter()
let seaCreatures = ['whale', 'octopus', 'squid', 'starfish', 'shark', 'fish', 'cuttlefish'];

// filter all creatures that start with 's' into a new list

let filterSeaCreatures = seaCreatures.filter((creature) => {
    return creature[0] === 's';
});

console.log(filterSeaCreatures);

// reduce ()
let numbers = [12, 55, 3, 45, 5];

let sum = numbers.reduce((acc, curr) => {
    return acc + curr;
});

console.log(sum);

// find()

// check if a given is a cephalopod

const isCephalopod = (creature) => {
    return ['cuttlefish', 'octopus'].includes(creature);
}

// seaCreatures.find(isCephalopod);

console.log(seaCreatures.find(isCephalopod));

// findIndex()

console.log(seaCreatures.findIndex(isCephalopod));