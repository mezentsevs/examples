const never = () => new Promise((resolve, reject) => {
    console.log('Never: Start');

    // resolve('Never: Finish');
});

const delay = (sec) => new Promise((resolve, reject) => setTimeout(
    () => resolve(`Delay: ${sec} sec`),
    sec * 1000,
    ));

Promise.race([
    never(),
    delay(3),
]).then(console.log);

/*
Never: Start
Delay: 3 sec
*/
