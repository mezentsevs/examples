function greet(message, name) {
    console.log(`${message}, ${name}!`);
}

function callWithLimit(fn, limit) {
    let count = 0;

    const func = (...args) => {
        count++;

        if (count > limit) { return; }

        fn(...args);
    }

    func.reset = () => count = 0;

    return func;
}

const greetLimited = callWithLimit(greet, 2);

greetLimited('Hi', 'John'); // Hi, John!
greetLimited('Hey', 'Jack'); // Hey, Jack!
greetLimited('Greetings', 'Jim');
greetLimited('Greetings', 'Jim');
greetLimited('Greetings', 'Jim');

greetLimited.reset();

greetLimited('Hello', 'Joe'); // Hello, Joe!

/*
Hi, John!
Hey, Jack!
Hello, Joe!
*/
