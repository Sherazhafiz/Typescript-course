"use strict";
class car {
    constructor() {
        this.model = "";
        this.year = 0;
        this.price = 0;
        this.color = '';
        this.model = "toyota";
        this.year = 2023;
        this.price = 3000000;
        this.color = "Red";
    }
}
let car1 = new car();
let car2 = new car();
car1.model = "toyota";
car1.year = 2022;
car1.color = "Black";
car1.price = 2000000;
console.log(car1);
console.log(car2);
