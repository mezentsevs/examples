Promise
    .reject('The ')
    .catch(data => data + 'quick ')
    .catch(data => data + 'brown ')
    .then(data => data + 'fox ')
    .finally(data => data + 'jumps.')
    .then(data => console.log(data));

// The quick fox
