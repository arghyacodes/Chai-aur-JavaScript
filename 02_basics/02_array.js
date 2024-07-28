const marvel_heroes = ["thor","iron man","captain america"]
const dc_heroes = ["super man", "bat man"]
/*
marvel_heroes.push(dc_heroes)   //array can contain multiple data types in it like here string + array
// [ 'thor', 'iron man', 'captain america', [ 'super man', 'bat man' ] ]
console.log(marvel_heroes);
*/

/*
const temp = marvel_heroes.concat(dc_heroes)
// [ 'thor', 'iron man', 'captain america', 'super man', 'bat man' ]
console.log(temp);
*/

/*
//spread
const newArr = [...marvel_heroes, ...dc_heroes] //converts array to single elements
// [ 'thor', 'iron man', 'captain america', 'super man', 'bat man' ]
console.log(newArr);
*/

/*
//flat
const complexArray = [1,2,3,[4,5],6,[7,8,[9,[10]]]]
console.log(complexArray);
const flatArray = complexArray.flat(3)   //3 is depth of array (if depth is unknown you can put Infinity)
console.log(flatArray);
*/

//isArray, from, of
// console.log(Array.isArray(marvel_heroes));
// console.log(Array.isArray("Arghya"));

const temp = Array.from("Arghya")
// console.log(temp);
// console.log(Array.isArray(temp));

const name1 = "ram"
const name2 = "shyam"
const name3 = "jadu"

console.log(Array.of(name1,name2,name3));