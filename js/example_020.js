function greet(message, name) {
    console.log(`${message}, ${name}!`);
}

function callWithLimit(fn, limit, cb) {
    let count = 0;

    return (...args) => {
        count++;

        if (count > limit) {
            cb();

            return;
        }

        fn(...args);
    };
}

const greetLimited = callWithLimit(greet, 2, () => console.log('Limit exceeded'));

greetLimited('Hi', 'John'); // Hi, John!
greetLimited('Hey', 'Jack'); // Hey, Jack!
greetLimited('Greetings', 'Jim'); // Limit exceeded
