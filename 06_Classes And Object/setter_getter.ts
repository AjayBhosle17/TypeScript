

class A1{

    firstName?:string;
    lastName?:string;

    // getter():string{

    //     return this.firstName as string;
    // }

    // setter(name:string){
    //     this.firstName=name;
    // }

   get getter():string{

        return this.firstName as string;
    }

   set setter(name:string){
        this.firstName=name;
    }

}

let o1:A1=new A1();
o1.setter="Ajay";
console.log(o1.getter);