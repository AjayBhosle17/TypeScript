var A1 = /** @class */ (function () {
    function A1() {
    }
    Object.defineProperty(A1.prototype, "getter", {
        // getter():string{
        //     return this.firstName as string;
        // }
        // setter(name:string){
        //     this.firstName=name;
        // }
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A1.prototype, "setter", {
        set: function (name) {
            this.firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    return A1;
}());
var o1 = new A1();
o1.setter = "Ajay";
console.log(o1.getter);
