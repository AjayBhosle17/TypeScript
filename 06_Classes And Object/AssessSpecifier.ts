 class Category{
    id?:number;
    name?:string;

     constructor(){
        console.log("Constructor called");
    }

    public print(){
    // private print(){
     //protected print(){
      
        console.log('print() called');
    }
}

class product extends Category{

     productName:string="Mi";
     printA(){
        this.print();
     }
}
let obj1 = new Category();
obj1.print();
let obj2 = new product();





// parameter property in constructor


class Employee{
    // name:string;
    // salary:number;

    // constructor(name:string,salary:number){

    //     this.name=name;
    //     this.salary=salary;

    // }

    // use parameter property

    constructor(public name?:string ,public salary?:number){}

    display(){

        console.log(`name is ${this.name}  salary is ${this.salary}`);
    
    }

    static printA(){
        console.log(" static print A Called");
    }
}


console.log(Employee.printA());

let obj3= new Employee("Ajay Bhosle",48000000);
obj3.display();