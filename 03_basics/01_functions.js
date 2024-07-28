//
function sayMyName()
{
    console.log("A");
    console.log("R");
    console.log("G");
    console.log("H");
    console.log("Y");
    console.log("A");
}

//  sayMyName --> Reference
//  sayMyName() --> Execution

// sayMyName()

function addTwoNum(num1, num2)  //(parameters in parentheses)
{
    return(num1+num2)
}

addTwoNum(2,4)  //(arguments inside parentheses)
// console.log(addTwoNum(2,4));

function loginMessage(username) //parameter 'username', default value 'unknown' (username = "unknown")
{
    if(username===undefined)
    {
        return `anonymous login alert`
    }
    return `${username} logged in successfully`
}

// console.log(loginMessage("abc"));


//*****************************Rest Operator********************************** */

function calculateCartValue(...price)
{
    return price
}

// console.log(calculateCartValue(100,250,450));

function secondElement(inputArray)
{
    return inputArray[1]
}

console.log(secondElement([100,200,300,400,500]));




function userData(inputUser)
{
    return `${inputUser["name"]} is of age ${inputUser.age}`
}


console.log(userData({
    name : "abc",
    age : 27
}))
