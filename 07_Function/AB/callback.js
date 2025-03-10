"use strict";
class CallBack {
    constructor() {
        this.ano1 = () => {
        };
    }
    info(fn, ln, fun) {
        console.log('Hii Ajay');
        fun();
    }
    fun() {
        console.log("are Ajay Kya Hua");
    }
    // optional Para
    info1(Name, Age) {
        console.log(`Name: ${Name} Age: ${Age}`);
    }
    // default para
    info2(Name, Age = 30) {
        console.log(`Name: ${Name} Age: ${Age}`);
    }
    info3(num) {
        for (let element of num) {
            console.log(`${element},`);
        }
    }
}
let datares = new CallBack();
datares.info('ajay', 'bhosle', datares.fun);
datares.info1("Ajay", 20);
datares.info1("Ajay");
datares.info2("Ajay", 5);
datares.info3([10, 20, 30]);
