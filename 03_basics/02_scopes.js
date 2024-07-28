/*
const a = 10
let b = 20
var c = 30
 console.log("before update",a);
 console.log("before update",b);
 console.log("before update",c);
 if(true){
    const a = 100
    let b = 200
    var c = 300
 }
 console.log("after update",a);
 console.log("after update",b);
 console.log("after update",c);
*/

let a = 255

if(true){
    let a = 512
    console.log("block scope a", a);
}
console.log("global scope a", a);