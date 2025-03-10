
class student<T>{

    getvalue(val:T):T{

        return val;
    }

    getData<T>(val:T){
        return val;
    }

}

let sw1:student<number> = new student<number>();
sw1.getvalue(20);
let sw2:student<string> = new student<string>();
sw1.getData("Ajay Bhosle");

