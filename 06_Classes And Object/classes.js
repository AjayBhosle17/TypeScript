"use strict";
class Employee1 {
    // constructor(){
    //     console.log("Employee Constructor Called");
    // }
    constructor(Id, Name, Gender) {
        this.id = Id;
        this.name = Name;
        this.gender = Gender;
    }
    display() {
        console.log(`id: ${this.id}  name: ${this.name}  gender: ${this.gender}`);
    }
}
let res5 = new Employee1();
res5.display();
let res9 = new Employee1();
res9.id = 1;
res9.name = "Ajay";
res9.gender = "Male";
res9.display();
let res3 = new Employee1(4, "Vijay", 'Male');
res3.display();
