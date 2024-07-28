/*
// const tinderUser = new Object()  //singleton object

// console.log(tinderUser);
*/
const bumbleUser = {}    //non singleton object

bumbleUser.uId = "abc123"
bumbleUser.contactNo = 9883668661
bumbleUser.isLoggedIn = true

// console.log(bumbleUser);
/*
console.log(Object.keys(bumbleUser));
console.log(Object.values(bumbleUser));
console.log(Object.entries(bumbleUser));
console.log(bumbleUser.hasOwnProperty('userId'));
*/

/*
const Student = {
    username: {
        fullName: {
            firstName: "abc",
            middleName: "",
            lastName: "xyz"
        },
        dob : {
            day : 3,
            month : 10,
            year : 2005
        }
    },
    age: 23,
    subjects: {
        "first language": "Bengali",
        "second language": "English",
        elective1: "P",
        elective2: "C",
        elective3: "M",
        elective4: "B"
    }
}

// console.log(Student);
console.log(Student.username);
console.log(Student.username.fullName);
// console.log(Student.username.fullName.lastName);
console.log(Student.username.fullName?.lastName);   //if fullname exists then go further (to avoid if else in every line)
*/

//*********************************merger of objects
const student = {
    name : "abc",
    rollNumber : 21
}
const {rollNumber:roll} = student
// student.rollNumber ==roll
console.log(roll);
const marks = {
    sub1 : 97,
    sub2 : 93,
    sub3 : 95
}

/*
const data = Object.assign(student, marks)  //all objects are assigned to 'student'
// { name: 'abc', rollNumber: 21, sub1: 97, sub2: 93, sub3: 95 }
console.log(data);
console.log(student);
//{ name: 'abc', rollNumber: 21, sub1: 97, sub2: 93, sub3: 95 }
*/

/*
const data2 = new Object()
Object.assign(data2,student, marks) //better way (Object.assign(target, sources)) here target is given an empty object (data 2) or {}
// { name: 'abc', rollNumber: 21, sub1: 97, sub2: 93, sub3: 95 }
console.log(data2); //all items are assigned to data2 no changes in original objects
*/

//************************Spreading**************************** */
// const data3 = {...student, ...marks}
// console.log(data3);

/*
JSON STRUCTURE
{
    "name" : "abc",
    "age" : 26,
    "havePanCard" : true
}
*/

/*
// data maybe fetched from apis in this form
[
    {},
    {},
    {}
]
*/