var CallBack = /** @class */ (function () {
    function CallBack() {
        this.ano1 = function () {
        };
    }
    CallBack.prototype.info = function (fn, ln, fun) {
        console.log('Hii Ajay');
        fun();
    };
    CallBack.prototype.fun = function () {
        console.log("are Ajay Kya Hua");
    };
    // optional Para
    CallBack.prototype.info1 = function (Name, Age) {
        console.log("Name: ".concat(Name, " Age: ").concat(Age));
    };
    // default para
    CallBack.prototype.info2 = function (Name, Age) {
        if (Age === void 0) { Age = 30; }
        console.log("Name: ".concat(Name, " Age: ").concat(Age));
    };
    CallBack.prototype.info3 = function (num) {
        for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
            var element = num_1[_i];
            console.log("".concat(element, " ,"));
        }
    };
    return CallBack;
}());
var datares = new CallBack();
datares.info('ajay', 'bhosle', datares.fun);
datares.info1("Ajay", 20);
datares.info1("Ajay");
datares.info2("Ajay", 5);
datares.info3([10, 20, 30]);
