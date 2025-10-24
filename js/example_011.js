new Promise((resolve) => {
    console.log('Step 3');

    setTimeout(() => {
        console.log('Step 4');

        resolve('Resolve from timeout');
    }, 0);

    resolve('Resolve');
}).then(() => {
    console.log('Step 2');
});

console.log('Step 1');

/*
Step 3
Step 1
Step 2
Step 4
*/
