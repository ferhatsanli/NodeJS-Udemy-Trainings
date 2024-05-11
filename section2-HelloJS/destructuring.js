const hobbies = ["fitness", "guitar"];
const [hobby1, hobby2] = hobbies;
console.log([hobby1, hobby2]);

const person = {
    name : "ferhat",
    age : 29,
    male : true
};

const sayHi = ({name, age}) => {
    console.log("hello " + name);
    console.log("your age is " + age);
};


sayHi(person);


// error try:::
// what happens we have more elements in array than
// the variable amount at left value side
const printAll = function ({var1}) {
    console.log(var1);
};
const [var1, var2] = ["hi", "it's me", "ferhat"];
printAll([var1, var2]);