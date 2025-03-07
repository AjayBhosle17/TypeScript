
// abstract class

abstract class customer{
    constructor(){

    }


    showtimings(){
        console.log("All Show Tiings");
    }

   abstract printTicket():void;
}

class silverCustomer extends customer{

    printTicket(){
        console.log(`silver customer price is 200`);
    }
}

class AdvanceSilver extends silverCustomer{

    printTicket(){
        console.log(`Advance silver customer price is 400`);
    }
}

let cust1:customer = new silverCustomer();
cust1.showtimings();
cust1.printTicket();

let cust2:customer=new AdvanceSilver();
cust2.showtimings();
cust2.printTicket();