/*
// ***********comparison of different data types should be avoided
console.log(null == 0);
console.log(null>0);
console.log(null<0);
console.log(null>=0);//for >= or <= null is treated as a number 0
console.log(null<=0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined<0);
console.log(undefined>=0);
console.log(undefined<=0);
*/

// strict check === checks both value and data type
console.log("strict check");
console.log("2" == 2);
console.log("2" === 2);