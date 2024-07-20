/*
"use strict"; //all codes will be treated as new js version
// alert(3+3) //we are using nodeJs not browser so it will not act similar to browser
let name = "Arghya"//string
let age = 22//int
let isLoggedIn = true//boolean
let state;//null

//other data types
/*
bigint,
null -> standalone value,
undefined,
symbol ->unique,

object
*/
/*
console.log(typeof null) //object
console.log(typeof state) //undefined
*/

//data types are divided into two types on the basis of how they are stored and retrived in memory 1> premitive     2> non-premitive / reference type

/*
primitive data types are call by value.
eg. - string, number, null, boolean, undefined, symbol,bigint
*/

/*
non premitive/reference type - references are given
eg. - arrays, objects, functions
*/

//symbol
/*
const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1 === id2);

console.log(typeof id1);

const bigNum = 6666666666666666666666666n
console.log(typeof bigNum)
*/
/*
const sampleArray = ["Iron man", "Captain America", "Hulk"]
console.log(typeof sampleArray);
let sampleObject = {
    name : "Arghya",
    age : 22
}

console.log(typeof sampleObject);

function add(n) {
    console.log(n+n)
}
add(5)
console.log(typeof add);
*/