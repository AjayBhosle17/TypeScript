var user = 'Ajay';
console.log(user);
user = 'Vijay';
console.log('Vijay');
var numArray = [10, 20, 30];
console.log(numArray);
var names = ['Ajay', 'Vijay'];
console.log(names[0]);
var names2 = 'Vijay';
if (typeof names2 == 'string') {
    console.log(names2.toUpperCase());
}
var users = { name: 'Ajay', age: 10 };
var names1;
names1 = 10;
names1 = 'Ajay';
var customers = {
    name: 'AJay',
    mono: 9322864132,
    age: 21
};
var users4 = [
    { id: 10, name: 'AJay' },
    { id: 30, name: 'Vijay' }
];
users4.forEach(function (U) {
    console.log("Id: ".concat(U.id, " - ").concat(U.name));
});
function isAdult(age) {
    return age >= 20;
}
isAdult(20);
var data = [
    {
        id: 10,
        age: 12
    },
    {
        id: 12,
        age: 13
    }
];
function getadult(data) {
    return data.filter(function (x) { return x.age >= 20; });
}
var addnumbers = function (a, b) {
    return a + b;
};
function addnumber1s(a, b) {
    return a;
}
var EmployeeInfo = /** @class */ (function () {
    function EmployeeInfo(id, name) {
        this.Id = id;
        this.name = name;
    }
    EmployeeInfo.prototype.getdetails = function () {
        return "".concat(this.Id, " - ").concat(this.name);
    };
    return EmployeeInfo;
}());
var obj = new EmployeeInfo(10, "Ajay");
console.log(obj.getdetails());
var arr = [
    {
        id: 1,
        name: 'Ajay',
        price: 30
    },
    {
        id: 2,
        name: 'Vijay',
        price: 40
    }
];
arr.forEach(function (x) {
    console.log("Id= ".concat(x.id, " Name = ").concat(x.name, " price= ").concat(x.price));
});
var Employess = /** @class */ (function () {
    function Employess(id, name) {
        this.Id = id;
        this.Name = name;
    }
    Employess.prototype.getname = function () {
        return "".concat(this.Id, " - ").concat(this.Name);
    };
    return Employess;
}());
var obj1 = new Employess(20, 'AB');
console.log(obj1.getname());
function add(a) {
    return a;
}
var a = add('ajay');
var b = add(1);
var c = add(true);
var EmployeeInfoData = [{
        Id: 1,
        name: 'Ajay Bhosle',
        Address: {
            village: 'Kumbephal',
            city: 'Ambajogai',
            district: 'Beed'
        }
    }];
EmployeeInfoData.forEach(function (element) {
    console.log(element.Id + ' ' +
        element.name + ' ' +
        element.Address.village + ' ' +
        element.Address.city + ' ' +
        element.Address.district);
});
// var EmployeeInfoData = [
//     {
//         Id: 1,
//         name: 'Ajay Bhosle',
//         Address: {
//             village: 'Kumbephal',
//             city: 'Ambajogai',
//             district: 'Beed'
//         }
//     }
// ];
// EmployeeInfoData.forEach(element => {
//     console.log(
//         element.Id + ' ' +
//         element.name + ' ' +
//         element.Address.village + ' ' +
//         element.Address.city + ' ' +
//         element.Address.district
//     );
// });
