function diagonalDifference(arr) {
    // Write your code here
const n = arr[0].length;

let primaryDiagonal = 0;
let secondaryDiagonal = 0;
let i = 0;
let j = 0;
let x = n;

for (i ; i < n; i++) {
    j = i;
    primaryDiagonal += arr[i][j];
    
    x = x - 1;
    secondaryDiagonal += arr[i][x];
console.log ("primaryDiagonal: " + primaryDiagonal);
console.log ("secondaryDiagonal: " + secondaryDiagonal)     
}

console.log ("ALLprimaryDiagonal: " + primaryDiagonal);
console.log ("ALLsecondaryDiagonal: " + secondaryDiagonal)

    return Math.abs(primaryDiagonal - secondaryDiagonal);
};

let arr = [
[11, 2, 4],        //0.0         0.2
[4, 5, 6],         //1.1         1.1
[10, 8, -12]]      //2.2         2.0
                        


console.log ("diagonalDifference: " + diagonalDifference(arr))