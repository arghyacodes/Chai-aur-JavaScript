document.querySelector("li:nth-child(4)").onclick = ()=>{
    alert('Owl Clicked')
}

document.getElementById('japan').addEventListener('click',()=>{
    alert("Japan Clicked")
}, false)   //Event Propagation : this false comes by default

//attachEvent()
//jQuery - on

document.querySelectorAll('li')[2].addEventListener('click', (e)=>{
    // console.log(e);
    //get info about this event object
    /*
    type
    timestamp
    defaultPrevented
    target
    toElement
    srcElement
    currentTarget
    clientX, clientY
    screenX, screenY
    altkey, ctrlkey, shiftkey, ketCode
    */
})

//default event propagation is like bubbling moves from child towards parent li --> ul (false)
//If we set it to event capturing mode it will propagate from parent to child ul--> li


document.getElementById("images").addEventListener('click', ()=>{
    console.log("Image Clicked");
});

document.getElementById("river").addEventListener('click', (e)=>{
    console.log("River clicked");
    e.stopPropagation() //stops propagation of event
})

/*
//Capturing
document.getElementById("images").addEventListener('click', ()=>{
    console.log("Image Clicked");
},true);

document.getElementById("river").addEventListener('click', ()=>{
    console.log("River clicked");  
},true)
*/

document.getElementById('google').addEventListener('click', (e)=>{
    e.preventDefault()
    e.stopPropagation()
    console.log("Google Clicked");
})