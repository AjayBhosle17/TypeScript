"use strict";
// Type Conversion
// string to int conversion
let num1 = "10";
let ans1 = parseInt(num1);
console.log(ans1);
ans1 = Number(num1); // through constructor
console.log(ans1);
ans1 = +num1; //through unary operator
console.log(`through unary operator ${ans1}`);
// bool to string 
console.log(typeof ans1);
let num4 = true;
let ans2 = String(num4);
console.log(`type of ans2 is ${typeof ans2}`);
// int to string
let num5 = 1000;
let num6 = num5.toString(); // use tostring
console.log(num6);
num6 = String(num5); // use constructor
console.log(`num6 is a ${num6}`);
