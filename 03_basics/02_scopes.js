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
// curly brace {} --> means scope
if(true){
    let a = 512
    // console.log("block scope a", a);
}
// console.log("global scope a", a);



//**************************************** */

function one(){
    let username = "abc"
    function two(){
        let password = "123"
        // console.log(username, password);
    }
    // console.log(password);   //out of scope
    two()
}

// console.log(username);   //out of scope
one()

//***********************************Function Declaration***************************** */

// console.log(addOne(5));
function addOne(num){   //can be accessed before declaration
    return (num + 1)
}

const addTwo = function(num){   //it is also called expression (can't be accessed before declaration)
    return (num + 2)
}
// console.log(addTwo(5));