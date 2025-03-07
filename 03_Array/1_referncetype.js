"use strict";
// ways to write array
let num1 = [10, 20, 30, 40];
for (let i = 0; i < num1.length; i++) {
    console.log(num1[i]);
}
console.log();
let num2 = new Array(10, 20, 30);
let num3 = new Array(1, 2, 3, 4, 5);
let num4 = [10, 20, 30, 40, 50];
for (let i = 0; i < num4.length; i++) {
    console.log(num4[i]);
}
num4.push(60);
num4.unshift(5);
console.log("now \n");
for (let i = 0; i < num4.length; i++) {
    console.log(num4[i]);
}
num4.pop();
num4.shift();
console.log('\nnow check\n');
for (let i = 0; i < num4.length; i++) {
    console.log(num4[i]);
}
//10 20 30 40 50
num4.splice(2, 2);
console.log('\nnow check\n');
for (let i = 0; i < num4.length; i++) {
    console.log(num4[i]);
}
num4.unshift(5);
//5 10,20,30
let num8 = num4.filter((v, i, arr) => v % 2 != 0); // 5
console.log(`filter then output is : ${num8}`);
for (let i = 0; i < num8.length; i++) {
    console.log(num8[i]);
}
//input : 1,2,3,4,5
//output: 1,4,9,16,25
console.log('\n Square root\n');
let nums = [1, 2, 3, 4, 5];
// for(let i=0 ;i<nums.length ;i++){
//     console.log(nums[i]*nums[i])
// }
//map
let numsdata = nums.map((v, i, arr) => v * v);
numsdata.forEach((v1, i, arr) => console.log(v1));
// reduce
let reducedata = [10, 20, 30, 40];
let res = reducedata.reduce((pv, cv) => pv + cv);
console.log(`result of reducedata is ${res}`);
