class Person{
    constructor(name) {
        this.name = name;
        this.planet = "Земя";
    }
    print() {
        console.log("Здравей," + `${this.name}` + "от планетата" + `${this.planet}`);
    }
}


let p1 = new Person("Чък Норис");
let p2 = new Person("Красимира Станкова");
let p3 = new Person("Марк Русев");

p1.print();
p2.print();
p3.print();