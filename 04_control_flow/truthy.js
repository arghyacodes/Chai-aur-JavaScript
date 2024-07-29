let userEmail = []
if (userEmail) {
    // console.log("Got email");
}
else {
    // console.log("No email");
}

//truthy values are assumed to be true by js


//falsy values are assumed to be false by js
/*
falsy --> 0, -0, BigInt 0n, null, "", null, undefined, NaN, false

except these every things are truthy
*/

// truthy values

// "0", "false", " ", [], {}, function(){}

const emptyArray = []
const emptyObj = {}

if (emptyArray) {
    if (emptyArray.length === 0) {
        // console.log("array is empty");
    }
}

if (emptyObj) {
    if (Object.keys(emptyObj).length === 0) {
        // console.log("object is empty");
    }
}

//************************Nullish Coalescing Operator (??) : null, undefined [fallback mechanism for error handling]

let a;
let b;
let c = null;

a = 5 ?? 10
// console.log(`a is ${a}`);

a = c ?? 10
// console.log(`a is ${a}`);

a = b ?? 15
// console.log(`a is ${a}`);

a = b??20??c??40    //assigns first value that is not null or undefined
// console.log(`a is ${a}`);


//****************Ternary Operator */

// condition ? true statement : false statement

function greater(target)
{
    console.log(`price greater than ${target}`);
}

function lesser(target){
    console.log(`price lesser than ${target}`);
}

let price = 100
let target = 60

price<target ? lesser(target) : greater(target)