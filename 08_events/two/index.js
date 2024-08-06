document.querySelector("#images").addEventListener('click', (e)=>{
    let removeIt = e.target.parentNode
    console.log(removeIt);
    if(e.target.tagName === 'IMG')  //to prevent unnecessary removal of ul
    {
         // removeIt.remove()
        removeIt.parentNode.removeChild(removeIt)
    }
})