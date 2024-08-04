//forof loop
const myArr = [10,20,30,40,50,60,70,80,90]

for (const i of myArr) {
    // console.log(i);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(greet);
}

const map = new Map()

// map.set('key', 'value')

map.set('IN', 'India')
map.set('UK','United Kingdom')
map.set('FR', 'France')

for (const key of map) {
    // console.log(key);   

    // [ 'IN', 'India' ]
    // [ 'UK', 'United Kingdom' ]
    // [ 'FR', 'France' ]
}

for (const [key,value] of map) {
    console.log(`${key} is ${value}`);
}