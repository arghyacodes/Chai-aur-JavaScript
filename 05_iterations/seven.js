const myNum = [1,2,3,4,5,6,7,8,9,10]

// let newNum = myNum.map((num) => num + 10)

// console.log(newNum);

//chaining

let newNum = myNum
            .map((num)=>num*10)
            .map((num)=>num+1)
            .filter((num)=>num%3 == 0)

console.log(newNum);