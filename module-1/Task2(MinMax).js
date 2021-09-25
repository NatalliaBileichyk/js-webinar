let arr = [7, 69, 2, 221, 8974];

let sum = arr.reduce((total, value) => (total + value));
let sumWithoutIndex = arr.map(element => sum - element);

let minSum = sumWithoutIndex[0];
for (let i of sumWithoutIndex) {
    if (i < minSum) {
        minSum = i
    };
}; 

let maxSum = sumWithoutIndex[0];
for (let j of sumWithoutIndex) {
    if (j > maxSum) {
        maxSum = j
    }
};