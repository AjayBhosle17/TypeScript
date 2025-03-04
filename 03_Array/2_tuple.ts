
//tuple        // here fixed size collection

let res1:[number,string]=[10,"Ajay"]

let res2:[number,string,number?]=[20,'Ajay'];   // here fixed size collection

console.log(res2[0]);
console.log(res2[1]);
console.log(res2[2]);




// enum

enum statuscode{

    unauthrized=401,
    NotFound=404,
    Forbidden=403,
    BadRequest=400

}

let e1:statuscode=statuscode.BadRequest;
console.log(e1)


let e2:statuscode=statuscode.NotFound;
console.log(e2)
