const log = (arg) => {
    console.log(arg);

    let carry;

    return carry = (carryArg) => {
        console.log(carryArg);

        return carry;
    };
};

log('Hello')('world')('!');

/*
Hello
world
!
*/
