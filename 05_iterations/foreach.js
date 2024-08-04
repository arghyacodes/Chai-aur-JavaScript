const coding = ['js','cpp','py','rb','java']

coding.forEach(function (element) { //nameless parmeterised callback function
    // console.log(element);
})

coding.forEach((item)=>{
    // console.log(item);
})

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    // conso/le.log(item, index, arr);
})
/*
js 0 [ 'js', 'cpp', 'py', 'rb', 'java' ]
cpp 1 [ 'js', 'cpp', 'py', 'rb', 'java' ]
py 2 [ 'js', 'cpp', 'py', 'rb', 'java' ]
rb 3 [ 'js', 'cpp', 'py', 'rb', 'java' ]
java 4 [ 'js', 'cpp', 'py', 'rb', 'java' ]
*/

const arrayOfObj = [
    {
        name : "abc",
        age : 18
    },
    {
        name : "def",
        age : 19
    },
    {
        name : "ghi",
        age : 10
    }
]

arrayOfObj.forEach((obj)=>{
    console.log(obj);
    console.log(obj["name"]);
    console.log(obj.age);
})
