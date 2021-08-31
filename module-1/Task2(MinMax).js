let arr = [7, 69, 2, 221, 8974]

let sum = arr.reduce((total, value) => (total + value));
let sumWithoutIndex = arr.map(element => sum - element);

let minSum = sumWithoutIndex[0];
for (let i of sumWithoutIndex) {
    if (i > minSum) {continue;} else {minSum = i;};
}; 

let maxSum = sumWithoutIndex[0];
for (let j of sumWithoutIndex) {
    if (j < maxSum) {
        continue;
    } else {maxSum = j;}
};

console.log (minSum + " " + maxSum);

console.log("miniMaxSum:" +  miniMaxSum);
console.log("sum:" + maxSum);    
console.log("maxSum:" + maxSum);
console.log("minSum:" + minSum);
console.log("sumWithoutIndex:" + sumWithoutIndex)