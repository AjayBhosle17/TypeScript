"use strict";
class Student {
    constructor() {
        this.firstname = "Ajay";
        this.lastName = "Bhosle";
        // Arrow Function
        this.addition = (a, b) => a + b;
        this.data = () => {
            console.log("hii");
        };
    }
    // Normal Function 
    print() {
        document.writeln(`FirstName: ${this.firstname}    LastName: ${this.lastName}`);
    }
    // call back function 
    printB(a, fun) {
        document.writeln(" <br> call back");
        fun();
    }
}
let obj7 = new Student();
obj7.print();
document.writeln("</br>");
let resultData = obj7.addition(4, 5);
document.writeln(`sum is :  ${resultData}`);
document.writeln("</br> function Outside class");
document.writeln("</br> 1.Normal function => ");
function printA() {
    document.writeln("Normal");
}
printA();
document.writeln("</br> Annonymous function  1.function as Expression => ");
let resultdata = function () {
    document.writeln("Annonymous Function");
};
resultdata();
// lamda Expression
let sub = (a, b) => b - a;
let ans = sub(5, 10);
document.writeln(`ans: ${ans}`);
