let user:string = 'Ajay';

console.log(user);

user='Vijay';
console.log('Vijay')


let numArray:number[]=[10,20,30];

console.log(numArray)

let names:Array<string>=['Ajay','Vijay'];
console.log(names[0])

let names2:string='Vijay';

if(typeof names2=='string'){
    console.log(names2.toUpperCase());
}

let users:{name:string,age:number}={name:'Ajay',age:10}


let names1:(string| number);

names1=10;
names1='Ajay';

let customers:{name:string,mono:number,age:number}={

    name:'AJay',
    mono:9322864132,
    age:21
}

interface Usersdata{
    id:number;
    name:string;
}

let users4:Usersdata[]=[
    {id:10,name:'AJay'},
    {id:30,name:'Vijay'}
]

users4.forEach(U=>{
    console.log(`Id: ${U.id} - ${U.name}` );
})

function isAdult(age:number):boolean{

   return age>=20;
}
isAdult(20);


interface abc{

    id:number;
    age:number;
}

let data: abc[]=[
    {
        id:10,
        age:12   
    },
    {
        id:12,
        age:13
    }
]

function getadult(data:abc[]):abc[]{

    return data.filter(x=>x.age>=20);

}

const addnumbers=(a:number,b:number):number=>{

    return a+b;

}

function addnumber1s(a:number,b:number):number{

    return a;
}




class EmployeeInfo {
    Id:number;
    name:string;

    constructor(id:number,name:string){
        this.Id=id;
        this.name=name;
    }

    getdetails():string{

        return `${this.Id} - ${this.name}`

    }
}

var obj=new EmployeeInfo(10,"Ajay");

console.log(obj.getdetails());

interface Product{
    id:number;
    name:string;
    price:number;
}

let arr:Product[]=[
    {
        id:1,
        name:'Ajay',
        price:30
    },
    {
        id:2,
        name:'Vijay',
        price:40

    }
]

arr.forEach(x => {
    console.log(`Id= ${x.id} Name = ${x.name} price= ${x.price}`);
});

class Employess{

    Id:number;
    Name:string;

    constructor(id:number,name:string){
        this.Id=id;
        this.Name=name;
    }

    getname():string{
        return `${this.Id} - ${this.Name}`;
    }
}

var obj1= new Employess(20,'AB');
console.log(obj1.getname());


function add<T>(a:T):T{
    return a
}

var a=add('ajay')
var b=add(1)
var c=add(true)

