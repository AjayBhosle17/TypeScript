var student1 = /** @class */ (function () {
    function student1(rollno, name, courseName) {
        this.rollno = rollno;
        this.name = name;
        //this.courseName=courseName;
        student1.courseName = courseName;
    }
    student1.prototype.printB = function () {
        console.log(this);
    };
    student1.printA = function () {
        console.log('printA() called');
        console.log("cousrse name : ".concat(student1.courseName, "}"));
    };
    return student1;
}());
var result1 = new student1(1, "Ajay", student1.courseName = "DOTNET");
console.log(result1);
result1.printB();
//result1.printA();
student1.printA();
