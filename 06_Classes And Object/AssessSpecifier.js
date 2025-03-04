var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Category = /** @class */ (function () {
    function Category() {
        console.log("Constructor called");
    }
    Category.prototype.print = function () {
        // private print(){
        //protected print(){
        console.log('print() called');
    };
    return Category;
}());
var product = /** @class */ (function (_super) {
    __extends(product, _super);
    function product() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.productName = "Mi";
        return _this;
    }
    product.prototype.printA = function () {
        this.print();
    };
    return product;
}(Category));
var obj1 = new Category();
obj1.print();
var obj2 = new product();
// parameter property in constructor
var Employee = /** @class */ (function () {
    // name:string;
    // salary:number;
    // constructor(name:string,salary:number){
    //     this.name=name;
    //     this.salary=salary;
    // }
    // use parameter property
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.display = function () {
        console.log("name is ".concat(this.name, "  salary is ").concat(this.salary));
    };
    Employee.printA = function () {
        console.log(" static print A Called");
    };
    return Employee;
}());
//console.log(Employee.printA());
var obj3 = new Employee("Ajay Bhosle", 48000000);
obj3.display();
