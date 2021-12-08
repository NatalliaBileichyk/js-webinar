//https://www.hackerrank.com/challenges/array-left-rotation/problem
// d = 4;
// arr = [1,2,3,4,5] => [2,3,4,5,1] => [3,4,5,1,2] => [4,5,1,2,3] => [5,1,2,3,4]

function rotateLeft(d, arr) {
    for(let i = 1; i <= d; i++){    
        arr.push(arr.shift());    
    }
    return arr;
}

arr1 = [1,2,3,4,5]
d1 = 1;
d2 = 2;
d3 = 3;
d4 = 4;
d5 = 5;

console.log(`rotateLeft(d1, arr1): ${rotateLeft(d1, arr1)}`);
console.log(`rotateLeft(d2, arr1): ${rotateLeft(d2, arr1)}`);
console.log(`rotateLeft(d3, arr1): ${rotateLeft(d3, arr1)}`);
console.log(`rotateLeft(d4, arr1): ${rotateLeft(d4, arr1)}`);
console.log(`rotateLeft(d5, arr1): ${rotateLeft(d1, arr1)}`);