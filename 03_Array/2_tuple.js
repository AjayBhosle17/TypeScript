//tuple        // here fixed size collection
var res1 = [10, "Ajay"];
var res2 = [20, 'Ajay']; // here fixed size collection
console.log(res2[0]);
console.log(res2[1]);
console.log(res2[2]);
// enum
var statuscode;
(function (statuscode) {
    statuscode[statuscode["unauthrized"] = 401] = "unauthrized";
    statuscode[statuscode["NotFound"] = 404] = "NotFound";
    statuscode[statuscode["Forbidden"] = 403] = "Forbidden";
    statuscode[statuscode["BadRequest"] = 400] = "BadRequest";
})(statuscode || (statuscode = {}));
var e1 = statuscode.BadRequest;
console.log(e1);
