
class Student{

    firstname?:string="Ajay";
    lastName?:string="Bhosle";

    // Normal Function 

     print():void{
        document.writeln(`FirstName: ${this.firstname}    LastName: ${this.lastName}`);
    
    }

    // Arrow Function

    addition=(a:number,b:number):number=>a+b; 


    // call back function 

    printB(a:number,fun:()=>void){

        document.writeln(" <br> call back");
        fun();
    }

   data=():void=>{
    console.log("hii");
   }
   

}

let obj7:Student= new Student();

obj7.print();
document.writeln("</br>");
let resultData:number=obj7.addition(4,5);
document.writeln(`sum is :  ${resultData}`);



document.writeln("</br> function Outside class");

document.writeln("</br> 1.Normal function => ");

function printA(){
    document.writeln("Normal")
}

printA();
document.writeln("</br> Annonymous function  1.function as Expression => ");

let resultdata=function():void{
    document.writeln("Annonymous Function")
}
resultdata();

// lamda Expression

let sub=(a:number,b:number):number=>b-a;
let ans= sub(5,10);
document.writeln(`ans: ${ans}`);

