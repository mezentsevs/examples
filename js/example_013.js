function outer() {
    function inner() {
        console.log(v); // Function
    }

    // console.log(v); // ReferenceError: Cannot access 'v' before initialization

    let v = 'Function';

    inner();
}

var v = 'Global';

console.log(v); // Global

outer();

/*
Global
Function
*/
