//Dates


let myDate = new Date()
/*
console.log(myDate);    //2024-08-14T03:29:49.979Z
console.log(typeof myDate); //object
console.log("toString -> "+myDate.toString());  //toString -> Wed Aug 14 2024 08:59:49 GMT+0530 (India Standard Time)
console.log("toDateString -> "+myDate.toDateString());  //toDateString -> Wed Aug 14 2024
console.log("toISOString -> "+myDate.toISOString());    //toISOString -> 2024-08-14T03:29:49.979Z
console.log("toLocaleDateString -> "+myDate.toLocaleDateString());  //toLocaleDateString -> 14/8/2024
console.log("toLocaleString -> "+myDate.toLocaleString());  //toLocaleString -> 14/8/2024, 8:59:49 am ***
console.log("toLocaleTimeString -> "+myDate.toLocaleTimeString());  //toLocaleTimeString -> 8:59:49 am
console.log("toTimeString -> "+myDate.toTimeString());  //toTimeString -> 08:59:49 GMT+0530 (India Standard Time)
console.log("toUTCString -> "+myDate.toUTCString());    //toUTCString -> Wed, 14 Aug 2024 03:29:49 GMT
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
//***Timestamp count starts from 1st Jan 1970
let myTimeStamp = Date.now()
console.log(myTimeStamp);   //gives mili-second             1723606607731
console.log(Math.floor(myTimeStamp/1000));//second          1723606607
console.log(Math.floor(myTimeStamp/60000));//minute         28726776
console.log(Math.floor(myTimeStamp/3600000));//hour         478779
console.log(Math.floor(myTimeStamp/86400000));//day         19949
console.log(Math.floor(myTimeStamp/2592000000));//month     664
console.log(Math.floor(myTimeStamp/31104000000));//year     55
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