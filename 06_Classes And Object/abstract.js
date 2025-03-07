// abstract class
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
var customer = /** @class */ (function () {
    function customer() {
    }
    customer.prototype.showtimings = function () {
        console.log("All Show Tiings");
    };
    return customer;
}());
var silverCustomer = /** @class */ (function (_super) {
    __extends(silverCustomer, _super);
    function silverCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    silverCustomer.prototype.printTicket = function () {
        console.log("silver customer price is 200");
    };
    return silverCustomer;
}(customer));
var AdvanceSilver = /** @class */ (function (_super) {
    __extends(AdvanceSilver, _super);
    function AdvanceSilver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvanceSilver.prototype.printTicket = function () {
        console.log("Advance silver customer price is 400");
    };
    return AdvanceSilver;
}(silverCustomer));
var cust1 = new silverCustomer();
cust1.showtimings();
cust1.printTicket();
var cust2 = new AdvanceSilver();
cust2.showtimings();
cust2.printTicket();
