const nums = [1, 2, 3];
const letters = ['f', 'e', 'r'];

// spread operator
const combined = [...nums, ...letters];

console.log(combined);

// rest operator
const printArray = (...args) => {
    return args;
};

console.log(printArray(4, 5, 6, 'h', 'a', 't'));