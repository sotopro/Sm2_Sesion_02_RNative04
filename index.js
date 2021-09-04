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

// coditional statements

const balance = 70;
const shoes = 80;

if(shoes <= balance) {
    console.log('you have enogh money to purchase the item!');
} else {
    console.log('you do not have enough money to purchase the item!');
}


let grade = 70;

// check if the grade is an A, B, C, D, or F

if(grade >= 90) {
    console.log('A');
} else if(grade >= 80) {
    console.log('B');
} else if(grade >= 70) {
    console.log('C');
} else if(grade >= 60) {
    console.log('D');
} else {
    console.log('F');
}

// ternary operator

// (condition) ? expression on true : expression false

let age = 17;

const oldEnough = (age >= 18) ? 'You may enter' : 'You may not enter';

console.log(oldEnough)

// multiple conditions

const teeth = 74;

const promptForGuess = () => {
    const guess = prompt('How many teeth do alligators have?');
    if(guess <= 0) {
        alert(`It's definitely above zero!`);
        promptForGuess();
    } else if(guess >= 1 && guess <=39) {
        alert(`Quite a bit higher than that!`)
        promptForGuess();
    } else if(guess >= 40 && guess <= 73) {
        alert(`Getting closer. It's a little higher`)
        promptForGuess();
    } else if(guess >= teeth && guess <= 80){
        alert(`Yup. that sounds about right`);
    } else {
        alert(`Too many. Try lower than that`);
        promptForGuess();
    }
};

promptForGuess();