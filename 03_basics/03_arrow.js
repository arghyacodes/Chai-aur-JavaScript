const user = {
    username : "abc",
    deposite : 999,
    welcomeMessage : function(){
        console.log(`welcome to website ${this.username}`);
        console.log(this);
    }
}

/*
user.welcomeMessage()
user.username = "def"
user.welcomeMessage()
*/
// console.log(this);  //current context in js outside browser is empty object {}, inside browser global object becomes current context 


//********************************************Arrow function***************************************** */
/*
const chai = () =>{
    liquor = "water",
    sugar = "2 tsp",
    milk = true
}
*/

const summer = (num1, num2) => {
    return (num1+num2)  //arrow func. with explicit return
}

console.log(summer(3,5));

//Arrow func with implicit return
//if we include curly braces we have to write return if we use parentheses then we don't have to write 'return' keyword

const divider = (num1, num2) => (num1/num2)

console.log(divider(8,2));