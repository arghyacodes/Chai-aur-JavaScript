//stack(primitive) & heap memory(non-primitive)

//in the primitive data types which are stored in stack we get a copy of that variable or data

//in non-primitive data types we get reference or address to opiginal variable or data stored in heap

//stack or primitive
/*
let name1 = "abc"
let name2 = name1

console.log(name2);
console.log(name1);
name2 = "def"
console.log(name2);
console.log(name1);
*/

//non primitive or heap
/*
let user1 = {
    email : "abc@xyz",
    upi : "abc@okhdfc"
}


let user2 = user1

console.log("user1");
console.log(user1);
console.log("user2");
console.log(user2);

user2.upi = "abc@ybl"

console.log("user1");
console.log(user1);
console.log("user2");
console.log(user2);
*/