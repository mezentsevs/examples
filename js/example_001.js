const carry = (f) => {
    return (a) => {
        return (b) => {
            return f(a, b);
        };
    };
};

const sum = (a, b) => a + b;

const carriedSum = carry(sum);

console.log(carriedSum(1)(2)); // 3
