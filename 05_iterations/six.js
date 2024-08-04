const lang = ['js','java','cpp','py']

const val = lang.forEach((item) => {    //foreach doesn't returns anything
    // console.log(item);
    return item
})

// console.log(val);

const myNum = [1,2,3,4,5,6,7,8,9,10]

let myAns = myNum.filter((num)=> num%2==0)  //filter also takes a callback function and it returns values

// console.log(myAns);

let oddNum = myNum.filter((num)=>{  //if we use curly braces then we have to return explicitly as it starts a different scope
    return num%2 != 0
})

// console.log(oddNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let response = books.filter((book)=>book.genre==="Non-Fiction" && book.publish>=1989)

console.log(response, typeof response);

console.log(Object.keys(response[0]));