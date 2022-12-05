// class declaration
class Phone {
    
    // Property
    model = "iphone 12";
    storage = 128;
    color = ["Gold" , "Graphite" , "Midnbight" , "Green" , "Silver"];
    isWaterProof = true;
    #_ram = 6; //private property

    //getter
    get ram() {
        return this.#_ram;
    }

    //setter
    set ram(value) {
        this.#_ram = value;
    }

    // Methods
    showStorage = () => iPhone12.model + "has" + iPhone12.storage + "gb"
    promotion() {
        return this.model+" has "+this.ram+" ram and "+this.storage+" storage and available in "+this.color
    }

}


class myPhone {

    constructor(model , ram , storage) {
        this.model = model;
        this.ram = ram;
        this.storage = storage;
    }

    fullSpec() {
        console.log(` ${this.model} has ${this.ram} ram and ${this.storage} gb `)
    }
 
}

let iphone12 = new myPhone("iphone12" , 4 , 128);
let iphone12Pro = new myPhone("iphone12 Pro" , 4 , 256);
let iphone12ProMax = new myPhone("iphone12 ProMax" , 4 , 528);
