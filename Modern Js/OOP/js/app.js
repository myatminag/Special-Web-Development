// Object

let iPhone12 = {
    model : "iphone12", //property
    storage : 128,
    color : ["Gold" , "Graphite" , "Midnbight" , "Green" , "Silver"],
    isWaterProof : true,
    ram : 6,

    //Methods
    showStorage : () => iPhone12.model + "has" + iPhone12.storage + "gb",
    promotion() {
        return this.model+" has "+this.ram+" ram and "+this.storage+" storage and available in "+this.color
    }
}
//Object , object.property , object.method()

// expression & statement


// function declaration
function aa() {
    return "this is aa"
}

// function expression
let bb = function () {
    return "this is bb"
}