/*
//old way of writting strings
let name = "arghya"//old way of defining string
let roll = 24
// console.log(name.charAt(3); This doesn't work here as this is a simple string not string object

console.log("I am "+ name + " and my roll is " + roll);//ye hai aam zindegi

//Modern way of writting strings
console.log(`I am ${name} and my roll is ${roll}`);//ye hai mentos zindegi

*/

let department = new String("Department of Electrical Engineering")//new way of defining string as an object in this way we can use methods and functions of string but as a string object it is stored in stack
/*
console.log(department);
console.log(typeof department);
console.log(department.toLowerCase());
console.log(department.charAt(1));
console.log(department.indexOf('d'));//gives -1(not found) so it is case sensitive
console.log(department.indexOf('D'));
*/

/*
let sub1 = department.substring(0,10)//from 0 to 9th index doesnt support negative indexing
console.log(sub1);

let sub2 = department.slice(14, 20)
console.log(sub2);

//trim
let temp = "      temporary      "
console.log(temp);
console.log(temp.trim());

let url1 = "https://en.wikipedia.org/wiki/Shah%20Rukh%20Khan"
console.log(url1);
console.log(url1.replace('%20','_'))

console.log(url1.includes('Shah'));
console.log(url1.split('/'));
*/
let temp = "     temp      string"
console.log(temp);
console.log(temp.trim());

