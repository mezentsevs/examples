const p = Promise.reject('Reason');

p
    .then(() => console.log('Then 1'))
    .then(() => console.log('Then 2'))
    .catch(() => console.log('Catch'))
    .then(() => console.log('Then 3'))
    .finally(() => console.log('Finally'));

/*
Catch
Then 3
Finally
*/
