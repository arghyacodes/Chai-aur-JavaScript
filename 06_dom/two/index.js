const parent = document.querySelector('.week')
// console.log(parent);
// console.log(parent.children);

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);



let tempArr = Array.from(parent.children)
// console.log(tempArr);

// console.log(tempArr[2].innerText);


tempArr.forEach((i)=>i.style.backgroundColor = 'green')

for (let index = 0; index < parent.children.length; index++) {
    // console.log(parent.children[index].innerHTML);
}

const dayOne = document.querySelector('.day')

// console.log(dayOne.parentElement);

// console.log(dayOne);

// console.log(dayOne.nextElementSibling);

console.log("Nodes : ", parent.childNodes);
