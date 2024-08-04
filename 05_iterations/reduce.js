const numbers = [1,2,3,4,5,6,7,8,9,10]

// let newNum = numbers.reduce((accumulator, currentValue)=>accumulator + currentValue,0)

// let newNum = numbers.reduce(function(acc,current){
let newNum = numbers.reduce((acc,current)=>{
    // console.log(`value of acc is ${acc} and value of current is ${current}`);
    return acc + current
},0)    //here 0 is initial value

// console.log(newNum);


const shoppingCart = [
    {
        course : "Js",
        price : 2999
    },
    {
        course : "py",
        price : 999
    },
    {
        course : "cpp + DSA",
        price : 3499
    },
    {
        course : "DS",
        price : 12999
    }
]

let cartValue = shoppingCart.reduce((accumulator, current)=>accumulator + current.price,0)


console.log(`Total Cart Value is ${cartValue}`);
