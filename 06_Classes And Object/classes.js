var Employee1 = /** @class */ (function () {
    // constructor(){
    //     console.log("Employee Constructor Called");
    // }
    function Employee1(Id, Name, Gender) {
        this.id = Id;
        this.name = Name;
        this.gender = Gender;
    }
    Employee1.prototype.display = function () {
        console.log("id: ".concat(this.id, "  name: ").concat(this.name, "  gender: ").concat(this.gender));
    };
    return Employee1;
}());
var res5 = new Employee1();
res5.display();
var res2 = new Employee1();
res2.id = 1;
res2.name = "Ajay";
res2.gender = "Male";
res2.display();
var res3 = new Employee1(4, "Vijay", 'Male');
res3.display();
