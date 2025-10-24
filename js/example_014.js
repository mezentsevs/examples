function second() {
    console.log(v); // Global
}

function first() {
    console.log(v); // undefined

    var v = 'Function';

    second();
}

var v = 'Global';

console.log(v); // Global

first();

/*
Global
undefined
Global
*/
