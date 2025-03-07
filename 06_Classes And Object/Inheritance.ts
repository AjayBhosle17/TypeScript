
interface A{
    name:string|undefined;
     getname():string;    
}

interface B extends A{
    print():void;
}
interface D{
    salary:number;
}

class C implements B,D{

    name="ajay";
    salary=8000000;
    getname():string{
        return this.name;
    }

    print():void{
        console.log(`name is : ${this.name}`)
    }
}

let obj4:C=new C();
obj4.print();
console.log(obj4.getname())
console.log(`salary is : ${obj4.salary}`)



