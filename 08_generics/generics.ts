
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
sw2.getData("Ajay Bhosle");

let sw3:student<boolean> = new student<boolean>();
sw3.getData(true);

