"use strict";
var a = 10;
console.log(a);
a = 10.0;
console.log(a);
a = 100000000;
console.log(a);
// type anotations
let name1 = "ajay"; // type annotation
//name1=1000;
let v1 = 1000;
let data; //unio
data = 200;
data = "Ajay";
console.log(data);
let v8 = 200;
v8 = "ajay";
let data1;
data1 = 200;
data1 = false;
let a1; // Any type
a1 = 1000;
a1 = true;
a1 = "Ajay";
a1 = 1000.5;
// if(typeof a1=="string"){
//     let res = a1.toUpperCase();
// }
// console.log(a1.toUpperCase());
// unknown type
let b;
b = "ajay";
b = 100;
//let result = b.toUpperCase();
// first type check
if (typeof b == "string") {
    let res = b.toUpperCase();
}
// void type
function print() {
    console.log("hey print() called");
}
//null type
let data4 = null;
let data5;
data5 = null;
data5 = "Ajjay";
// undefined
let a6 = undefined;
function add(a, b) {
    return a + b;
}
