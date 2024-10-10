const myArray = [1,2,30,4,5,6];
console.log(myArray[0]);

// //Array Methods

myArray.push(7);
myArray.pop();
myArray.unshift(8);
myArray.shift();
console.log(myArray);
console.log(myArray.includes(1))
console.log(myArray.indexOf(5))

const newArray = myArray.join();
console.log(typeof myArray);
console.log(typeof newArray);

//slice and splice

console.log ("A",myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1)
console.log ("B",myArray);
const myn2 = myArray.splice(1,3);
console.log ("C",myArray);
console.log(myn2)

/* main difference between slice and splice is 
   slice  dosent change the main array but splice change the main array */