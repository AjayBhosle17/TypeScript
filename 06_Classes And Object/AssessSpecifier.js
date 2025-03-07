"use strict";
class Category {
    constructor() {
        console.log("Constructor called");
    }
    print() {
        // private print(){
        //protected print(){
        console.log('print() called');
    }
}
class product extends Category {
    constructor() {
        super(...arguments);
        this.productName = "Mi";
    }
    printA() {
        this.print();
    }
}
let obj1 = new Category();
obj1.print();
let obj2 = new product();
// parameter property in constructor
class Employee {
    // name:string;
    // salary:number;
    // constructor(name:string,salary:number){
    //     this.name=name;
    //     this.salary=salary;
    // }
    // use parameter property
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(`name is ${this.name}  salary is ${this.salary}`);
    }
    static printA() {
        console.log(" static print A Called");
    }
}
console.log(Employee.printA());
let obj3 = new Employee("Ajay Bhosle", 48000000);
obj3.display();
