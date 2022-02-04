console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    info() {
        console.log(`${this.name}\n${this.pets}\n${this.residence}\n${this.hobbies}`);
    }
    soundoff() {console.log(`${this.name}\n${this.pets}\n${this.residence}\n${this.hobbies}`);
    }
    greeting() {console.log ("Hello fellow person!");
}
}
class Coder extends Person {
    constructor(name, pets, residence, hobbies){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }
    greeting (){
        console.log ("Have an excellent week, TrueCoder!");
    }
    
}
const Kia = new Person("Kia", 1, "Ohio", ["Painting", "Exercising"]);
    const Mike = new Person("Mike", 0, "Ohio", ["Cooking", "Playing Video Games"]);

    Kia.info();
    Mike.info();
