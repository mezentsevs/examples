const sum = (b) => (a) => a + b;
const sub = (b) => (a) => a - b;
const mult = (b) => (a) => a * b;
const div = (b) => (a) => a / b;

const pipe = (operations) => {
    return (ini) => {
        let res = ini;
        operations.forEach((o) => res = o(res));

        return res;
    };
};

const calc = pipe([
    sum(4), // 9
    sub(3), // 6
    mult(2), // 12
    div(1), // 12
]);

console.log(calc(5)); // 12
