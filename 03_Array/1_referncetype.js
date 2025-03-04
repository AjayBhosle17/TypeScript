// ways to write array
var num1 = [10, 20, 30, 40];
for (var i = 0; i < num1.length; i++) {
    console.log(num1[i]);
}
console.log();
var num2 = new Array(10, 20, 30);
var num3 = new Array(1, 2, 3, 4, 5);
var num4 = [10, 20, 30, 40, 50];
for (var i = 0; i < num4.length; i++) {
    console.log(num4[i]);
}
num4.push(60);
num4.unshift(5);
console.log("now \n");
for (var i = 0; i < num4.length; i++) {
    console.log(num4[i]);
}
num4.pop();
num4.shift();
console.log('\nnow check\n');
for (var i = 0; i < num4.length; i++) {
    console.log(num4[i]);
}
//10 20 30 40 50
num4.splice(2, 2);
console.log('\nnow check\n');
for (var i = 0; i < num4.length; i++) {
    console.log(num4[i]);
}
num4.unshift(5);
//5 10,20,30
var num8 = num4.filter(function (v, i, arr) { return v % 2 != 0; }); // 5
console.log("filter then output is : ".concat(num8));
for (var i = 0; i < num8.length; i++) {
    console.log(num8[i]);
}
//input : 1,2,3,4,5
//output: 1,4,9,16,25
console.log('\n Square root\n');
var nums = [1, 2, 3, 4, 5];
// for(let i=0 ;i<nums.length ;i++){
//     console.log(nums[i]*nums[i])
// }
//map
var numsdata = nums.map(function (v, i, arr) { return v * v; });
numsdata.forEach(function (v1, i, arr) { return console.log(v1); });
// reduce
var reducedata = [10, 20, 30, 40];
var res = reducedata.reduce(function (pv, cv) { return pv + cv; });
console.log("result of reducedata is ".concat(res));
