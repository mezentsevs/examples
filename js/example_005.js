const myAllSettled = (promises) => {
    return Promise.all(promises.map((p) => {
        return p
            .then((data) => ({
                status: 'Success',
                data,
            }))
            .catch((error) => ({
                status: 'Error',
                error,
            }));
    }));
};

myAllSettled([
    Promise.reject('First'),
    new Promise((resolve) => setTimeout(() => resolve('Second'), 3000)),
    Promise.resolve('Third'),
]).then(console.log);

/*
[
  { status: 'Error', error: 'First' },
  { status: 'Success', data: 'Second' },
  { status: 'Success', data: 'Third' }
]
*/
