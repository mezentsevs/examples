function User(name) {
    this.name = name;
}

User.prototype.sayHello = function () {
    return 'Hello!';
};

const user = new User('John');
console.log(user.sayHello()); // Hello!

User.sayGoodbye = function () {
    return 'Goodbye!';
};

console.log(User.sayGoodbye()); // Goodbye!
