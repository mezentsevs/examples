function reverseLog(item) {
    if (item.next) { reverseLog(item.next); }

    console.log(item.value);
}

reverseLog({
    value: 'first',
    next: {
        value: 'second',
        next: {
            value: 'third',
            next: null,
        },
    },
});

/*
third
second
first
*/
