class student1{

    rollno:number|undefined;
    name:string|undefined;
    static courseName:string|undefined;

     constructor(rollno:number,name:string,courseName:string){

        this.rollno=rollno;
        this.name=name;
        //this.courseName=courseName;
    }

    printB(){
        console.log(this);
    }

   static printA(){
        console.log('printA() called');
        console.log(`cousrse name : ${student1.courseName}}`)
    }

}

let result1:student1=new student1(1,"Ajay",student1.courseName="DOTNET");
console.log(result1);
result1.printB();
student1.courseName="Dotnet Framework";
//result1.printA();
student1.printA();
