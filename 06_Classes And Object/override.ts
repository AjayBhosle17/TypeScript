// method  override like method hide working

class Parent{

    marry(){
        console.log("Mama chi Muli sobt lagn");
    }

}
class Child extends Parent{
    marry(){
        console.log("college chi aahe tichya sobt lagn");
    }
}

let lgn:Parent=new Child();
lgn.marry();