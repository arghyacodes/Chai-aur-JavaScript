//Immediately Invoked Function Expression
/*
    this is used to protect certain cunctions from pollutions of variables of global scope
*/

(function chai(name){   //named IIFE
    console.log(`chai given to ${name}`);
})("abc");  //semivolone to end of scope

((num)=>{   //normal IIFE
    console.log(`code of line ${num}`);
})(22);