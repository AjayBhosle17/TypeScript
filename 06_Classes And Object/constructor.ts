
class A{

    constructor( public name:string|undefined){
        console.log(`construtoe A called`);
    }
}

class B extends A{

    constructor(){
        super("Ajay");
        console.log("COnstrutor B Called");
    }
}

let obj5:B = new B();
let obj6:A = new B();

