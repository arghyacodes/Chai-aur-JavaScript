//Dates


let myDate = new Date()
/*
console.log(myDate);
console.log(typeof myDate);
console.log("toString -> "+myDate.toString());
console.log("toDateString -> "+myDate.toDateString());
console.log("toISOString -> "+myDate.toISOString());
console.log("toLocaleDateString -> "+myDate.toLocaleDateString());
console.log("toLocaleString -> "+myDate.toLocaleString());
console.log("toLocaleTimeString -> "+myDate.toLocaleTimeString());
console.log("toTimeString -> "+myDate.toTimeString());
console.log("toUTCString -> "+myDate.toUTCString());
*/

/*
// let myCreatedDate = new Date(2024,0,23) //year,month,date (month starts from 0 i  js)
// let myCreatedDate = new Date(2024,9,2,23,59,59) //year,month,date,hour,minute,second
// let myCreatedDate = new Date("2024-01-23") //(YYYY-MM-DD)in this way month starts from 1
let myCreatedDate = new Date("01-23-2024") //(MM-DD-YYYY)in india this is followed
// console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());

*/

/*
//Timestamp count starts from 1st Jan 1970
let myTimeStamp = Date.now()
console.log(myTimeStamp);   //gives mili-second
console.log(Math.floor(myTimeStamp/1000));//second
console.log(Math.floor(myTimeStamp/60000));//minute
console.log(Math.floor(myTimeStamp/3600000));//hour
console.log(Math.floor(myTimeStamp/86400000));//day
console.log(Math.floor(myTimeStamp/2592000000));//month
console.log(Math.floor(myTimeStamp/31104000000));//year
*/

/*
let currentDate = new Date("2024-07-27")
console.log(currentDate.getMonth() + 1) //month is calculated on 0 based 
console.log(currentDate.getDay())//Sunday 0 ---> Saturday 6
*/

console.log(`Current timestamp is ${myDate.toLocaleString()}`);

/*
//customization of Date time format

myDate.toLocaleString('default',{
    // timeZone : "String"
    weekday : "long"
})
*/