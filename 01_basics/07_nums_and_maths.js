
const roll = 24
const balance = new Number(17500) //objectified as number

// console.log(roll);
// console.log(balance);
// console.log(balance.toFixed(2)); //17500.00
// console.log(balance.toString()); 
// console.log(balance.toString().length);

// const score = 98.6885
// console.log(score.toPrecision(1)); //1e+2  //prioritise number before decimal point
// console.log(score.toPrecision(2)); //99   //prioritise number before decimal point
// console.log(score.toPrecision(3)); //98.7    //prioritise number before decimal point
// console.log(score.toPrecision(4)); //98.69      //prioritise number before decimal point
// console.log(score.toPrecision(5)); //98.689     //prioritise number before decimal point
// console.log(score.toPrecision(6)); //98.6885    //prioritise number before decimal point


// const hundreads = 8000000000000
// console.log(hundreads.toLocaleString('en-US')) //8,000,000,000,000      //default is us standards
// console.log(hundreads.toLocaleString('en-IN')) //80,00,00,00,00,000     //indian standards



// console.log(Number.MAX_VALUE);  //1.7976931348623157e+308
// console.log(Number.MIN_VALUE);  //5e-324
// console.log(Number.MAX_SAFE_INTEGER);   //9007199254740991
// console.log(Number.MIN_SAFE_INTEGER);   //-9007199254740991


//**********************************Maths*****************************************
/*
// comes by default with Js
console.log(Math);

console.log(Math.abs(-6)); //6   //absolute
console.log(Math.round(4.5)); //5   //round off
console.log(Math.ceil(4.2)); //5    //upper value
console.log(Math.floor(4.9)); //4   //lower value
console.log(Math.sqrt(25));
console.log(Math.pow(5,2));
console.log(Math.max(2,4,6,5,3,1));
console.log(Math.min(2,4,6,1,3,5));
*/
/*
console.log(Math.random());//always comes b/w 0 and 1
console.log((Math.random()*10) + 1);//to get values b/w 1 to 10
*/
//generate random number b/w min and max

const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max-min+1))+min);