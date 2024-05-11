const person = {
    name: 'Max',
    age: 29,
    greet: function() {
        console.log('Hi, I am ' + this.name + ', my age is ' + this.age + '.');
    },
    greetv2() {
        console.log('Hi, I am ' + this.name + ', my age is ' + this.age + '.');
    },
    greetBug: () => {
        // this keyword focuses on global runtime scope not for the person object in this usage
        console.log('Hi, I am ' + this.name + ', my age is ' + this.age + '.');
    }
};

person.greet();
person.greetv2();
person.greetBug();

// console.log(person);