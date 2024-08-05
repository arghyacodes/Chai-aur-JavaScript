/*
const div = document.createElement("div")
console.log(div);
div.className = "primary"   //overwrites defaults
div.id = Math.round(Math.random() * (6 - 1) + 1)  //overwritten
div.setAttribute("title", "chai")    //creates new
div.style.backgroundColor = 'green'
div.style.padding = "15px"
// div.innerText = "chai aur code"

div.appendChild(document.createTextNode("Chai aurCode"))    //better optimised way to attach textNode

document.body.appendChild(div)  //attaching div

*/

function createNewElement(name) {
    const div = document.createElement(name)
    console.log(div);
    div.className = "primary"   //overwrites defaults
    div.id = Math.round(Math.random() * 10 + 1)  //overwritten
    div.setAttribute("title", "chai")    //creates new
    div.style.backgroundColor = 'green'
    div.style.padding = "15px"
    // div.innerText = "chai aur code"
    div.style.display = "block"
    // div.style.margine = "55px"
    div.style.padding = "10px"

    div.appendChild(document.createTextNode("Chai aurCode"))    //better optimised way to attach textNode

    document.body.appendChild(div)  //attaching div
}


createNewElement("first")
createNewElement("second")
createNewElement("third")
createNewElement("fourth")


//************************************************************************************************************* */

/*
let para = document.createElement("paragraph")
console.log(para);

para.setAttribute("title","first para")
para.appendChild(document.createTextNode(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam perspiciatis non deleniti asperiores nam, illum quam ducimus, nostrum voluptas atque saepe vero rerum officia iusto? Similique harum quis odit ut!"
))
document.body.appendChild(para)

para.style.color = 'orange'
para.style.textAlign = 'centre'
*/