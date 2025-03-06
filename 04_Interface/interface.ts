
let c1:{id:number,name:string}={
    id:10,
    name:'Ajay'
};

console.log(`id is : ${c1.id} name is : ${c1.name}`)
let c2:{id:number,name:string}={
    
    id:20,
    name:"vijay"
};
console.log(`id is : ${c2.id} name is : ${c2.name}`)


// repeat things are found above

// now use interface overcome above problem repeatation

interface User{
    id:number | undefined,  //  we cannot intialize value
    name:string|undefined,
    gender?:string


}

let c3 : User={

    id:20,
    name:'Ajay Bhosle',
    role:'Developer'
    
    
}

console.error(`id is : ${c3.id} name is: ${c3.name} gender: ${c3.gender} role ${c3.role}`)

interface User{

    role:string;   // combine like union

}


