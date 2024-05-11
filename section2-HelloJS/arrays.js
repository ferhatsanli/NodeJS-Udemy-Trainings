const person = {
    name: 'Max',
    age: 29,
    greet: function() {
        console.log('Hi, I am ' + this.name + ', my age is ' + this.age + '.');
    }
}
// Arrays
const hobbies  = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
hobbies.push('Programming'); // const only holds the address of variable
console.log(hobbies);

person.greet();