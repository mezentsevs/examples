function outer() {
    function inner() {
        console.log(globalVar); // GV
        console.log(globalConst); // GC
        console.log(outerVar); // OV
        console.log(outerConst); // OC
        console.log(innerVar); // undefined
        // console.log(innerConst); // ReferenceError: Cannot access 'innerConst' before initialization

        var innerVar = 'IV';
        const innerConst = 'IC';
    }

    console.log(globalVar); // GV
    console.log(globalConst); // GC
    console.log(outerVar); // undefined
    // console.log(outerConst); // ReferenceError: Cannot access 'outerConst' before initialization
    // console.log(innerVar); // ReferenceError: innerVar is not defined
    // console.log(innerConst); // ReferenceError: innerConst is not defined

    var outerVar = 'OV';
    const outerConst = 'OC';

    inner();
}

console.log(globalVar); // undefined
// console.log(globalConst); // ReferenceError: Cannot access 'globalConst' before initialization
// console.log(outerVar); // ReferenceError: outerVar is not defined
// console.log(outerConst); // ReferenceError: outerConst is not defined
// console.log(innerVar); // ReferenceError: innerVar is not defined
// console.log(innerConst); // ReferenceError: innerConst is not defined

var globalVar = 'GV';
const globalConst = 'GC';

outer();
// inner(); // ReferenceError: inner is not defined
