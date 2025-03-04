
class Employee1 {
    id? :number;
    name:string |undefined;
    gender?:string;

    // constructor(){
    //     console.log("Employee Constructor Called");
    // }
    constructor(Id?:number,Name?:string,Gender?:string){
        
        this.id=Id;
        this.name=Name;
        this.gender=Gender
    }

    display(){

        console.log(`id: ${this.id}  name: ${this.name}  gender: ${this.gender}`);

    }
}

let res5 = new Employee1();
res5.display();

let res2 = new Employee1();

res2.id=1;
res2.name="Ajay";
res2.gender="Male";
res2.display();


let res3 = new Employee1(4,"Vijay",'Male');
res3.display();


