class Animal {

    type = "warm blooded";
    legs = 4;

}

class Dog extends Animal {

    skill() {
        console.log("Dogs")
    }

}

class Pillow extends Dog {
    name = "Pillow"

    skill() {
        console.log(this.name+ " can run faster")
    }
}

class Cat extends Animal {

}