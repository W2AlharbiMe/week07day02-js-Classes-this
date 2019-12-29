
// first way
function addNum() {
    let x = 0;

    return function() {
        ++x;
        return x;
    }
}

const plus = addNum();

// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());


// second way
let add = (function() {
    let x = 0;
    return () => {
        x += 1;
        return x;
    }
})();

// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())








