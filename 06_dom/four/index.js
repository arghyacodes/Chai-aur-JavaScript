function addItem(lang) {
    const li = document.createElement("li")
    // li.innerHTML = `<li>${lang}</>`
    li.innerHTML = `${lang}`
    document.querySelector('.language').appendChild(li)
}

addItem("Java")


//optimised way of doing it
function addItemOptimised(lang, type) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${lang}`))
    let temp;
    type === "coding" ? temp = 0 : temp = 1
    document.querySelectorAll('.language')[temp].appendChild(li)
}

addItemOptimised("Bengali", "spoken")
addItemOptimised("C", "coding")
addItemOptimised("Python", "coding")


//Editing


function replaceLang(lang, index) {
    const changeLang = document.querySelector(`li:nth-child(${index})`)   //1 based indexing
    // changeLang.innerHTML = `${lang}`    //not optimised
    // changeLang.replaceWith(`${lang}`)   //optimised
                    //or
    const li = document.createElement("li")
    let newLang = li.appendChild(document.createTextNode(`${lang}`))
    changeLang.replaceWith(newLang)   //optimised
}

// replaceLang("C++",3)
// replaceLang("TypeScript",1)

//Deleting


function removeLang(index){
    const delLang = document.querySelector(`li:nth-child(${index})`)    //first-child, last-child, nth-child
    delLang.remove()
}

removeLang(2)

