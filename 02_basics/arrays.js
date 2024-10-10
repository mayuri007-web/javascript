// const marvel_Heros = ['IronMan','CaptionAmerica','Thor']
// const DC_Heros = ['BatMan','Flash','SuperMan']
// // const All_Heros = marvel_Heros.concat(DC_Heros);
// // console.log(All_Heros);              // to merg the arrays we use concatination(concat)
 
// // sprad operator

// const All_Heros = [...marvel_Heros, ...DC_Heros]   // this is the sprad operator it also use to merge the array
// console.log(All_Heros); 

// const another_Array = [1,2,3,[2,3,6],7,[23,34,19],[8,9,[19,23,35]]]
// const real_an_Array = another_Array.flat();
// console.log(real_an_Array);
// console.log(another_Array)


console.log(Array.isArray("Mayuri"))  //to ask following array is array or not we use isArray it give us boolean value true/false
console.log(Array.from("Mayuri"))     // to convert  Array
console.log(Array.from({name: "Mayuri"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));