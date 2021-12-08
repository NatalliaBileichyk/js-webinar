//https://www.hackerrank.com/challenges/crush/problem
function arrayManipulation(n, queries){
   let newArray = new Array(n + 1).fill(0)
   let maxValue = 0;

   queries.forEach(([a, b, k]) => {
     
       for (let i = a; i <= b; i++) {
         newArray[i] += k;
         maxValue = Math.max(newArray[i], maxValue)
       }
   })
  //  console.log(`newArray: ${newArray}`)
  //  console.log(`maxValue: ${maxValue}`)
   return maxValue
}



let n1 = 10;
let queries1 = [
       // a - index at which start adding
       // b - index at which finish adding
       // k - value to add
   // a, b, k
     [1, 5, 3],
     [4, 8, 7],
     [5, 9, 1]
];

let n2 = 10;
let queries2 = [
     [1, 2, 100],
     [2, 5, 100],
     [3, 4, 100]
];
console.log(arrayManipulation(n2, queries2))
console.log(arrayManipulation(n1, queries1))