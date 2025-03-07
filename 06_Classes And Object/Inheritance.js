var C = /** @class */ (function () {
    function C() {
        this.name = "ajay";
        this.salary = 8000000;
    }
    C.prototype.getname = function () {
        return this.name;
    };
    C.prototype.print = function () {
        console.log("name is : ".concat(this.name));
    };
    return C;
}());
var obj4 = new C();
obj4.print();
console.log(obj4.getname());
console.log("salary is : ".concat(obj4.salary));
