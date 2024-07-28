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

console.log(loginMessage("abc"));