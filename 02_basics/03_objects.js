



// key : value
const passWord = Symbol("password")   //symbol

const jsUser = {
    "full name" : "Arghya Ghoshal",
    userName : "arghyacodes",
    [passWord] : "ArghyaGhoshal",
    age : 22,
    colleges : ["RKMS", "JU"],
    email : "arghyaghoshal@gmail.com",
    isLoggesIn : false
}


//ways to access object values
// console.log(jsUser.userName);
// console.log(jsUser["userName"]);
// console.log(jsUser[passWord]);
// console.log(typeof jsUser[passWord]);
// console.log(jsUser["full name"]);
// console.log(jsUser.colleges);
// console.log(jsUser["colleges"]);

jsUser[passWord] = "Ag2024"
// Object.freeze(jsUser)
jsUser.age = 24

// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hi! ${jsUser["full name"]} Welcome to Js`)
}

jsUser.greeting()