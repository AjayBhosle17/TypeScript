var num:number[]=[10,20,30,40];

console.error("for loop")
for(let i=0 ;i<num.length ;i++){

    console.log(num[i])
}

console.log("While loop")

let i:number=0;

while(i<num.length){
    console.log(num[i]);
    i++;
}

console.log('do while loop')

i=0;
do{
    console.log(num[i]);
    i++
}while(i<num.length);

console.log('for  in loop')

for(let i in num){

    console.warn(i);
}

console.log('for of loop')

for(let i of num){

    console.warn(i);
}





