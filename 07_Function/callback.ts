

class CallBack{


    info(fn:string,ln:string,fun:()=>void){

        console.log('Hii Ajay');
        fun();
    }


    fun(){
        console.log("are Ajay Kya Hua");
    }

    ano1 = ()=>{

    }

    // optional Para

    info1(Name:string,Age?:number):void{

        console.log(`Name: ${Name} Age: ${Age}`);

    }

    // default para
    info2(Name:string,Age:number=30){
        console.log(`Name: ${Name} Age: ${Age}`);

    }

    info3(num:number[]){

        for (let element of num) {
            
           console.log(`${element},`)
        }
    }

    
}

let datares:CallBack = new CallBack();
datares.info('ajay','bhosle', datares.fun);

datares.info1("Ajay",20);
datares.info1("Ajay");
datares.info2("Ajay",5);
datares.info3([10,20,30]);