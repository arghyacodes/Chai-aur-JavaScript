const myObj = {
    js : 'javascript',
    py : 'python',
    cpp : 'c++'
}

for (const key in myObj) {
    // console.log(`extension of ${myObj[key]} is ${key}`);
}

const arr = ['js','py','cpp','xlxs','docx']
for (const key in arr) {
    // console.log(key);   //  0   1   2   3   4
}

for (const key in arr) {
    console.log(arr[key]);
}

//you can not iterate map using forin loop as maps are not iteratable so they can not be iterated using loops, there are different method to iterate maps

