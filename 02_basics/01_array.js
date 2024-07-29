// const arr1 = [10,20,30,40]
// console.log(arr1);
// console.log(arr1[2]);

// const arr2 = new Array(50,60,70,80,90)
// console.log(arr2);

//methods

// arr2.push(100)
// console.log(arr2);
// arr2.pop();
// console.log(arr2);
// arr2.pop();
// console.log(arr2);

// arr2.unshift(40)//add element to starting of the array
// console.log(arr2);
// arr2.shift()    //remove frontal element
// console.log(arr2);

// console.log(arr2.includes(70));
// console.log(arr2.indexOf(70));
// console.log(arr2.indexOf(7));// -1 means not exists

// const arr3 = arr2.join()    //joints both arrays and convert them to string
// console.log(`joint array is ${arr3} it's type is ${typeof arr3}`);

//**********************************slice splice********************************************

// slice makes a copy of array from [Start, end) original array remains unchanged
// splice cuts the original array from [start, end] the original array is changed to remaining elements after splicing

/*
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90,100]
console.log(`original array before any operation ${arr}`);
const newArr1 = arr.slice(2,5)
console.log(`sliced array is ${newArr1}`);
console.log(`original array after slicing ${arr}`);
const newArr2 = arr.splice(2,5)
console.log(`spliced array is ${newArr2}`);
console.log(`original array after splicing ${arr}`);
*/