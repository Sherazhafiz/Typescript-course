"use strict";
class car {
    // constructor(){
    // this.model="toyota";
    // this.year=2023;
    // this.price=3000000;
    // this.color="Red"
    // }
    constructor(model, year, price, color) {
        this.model = "";
        this.year = 0;
        this.price = 0;
        this.color = '';
        this.model = model;
        this.year = year;
        this.price = price;
        this.color = color;
    }
}
let car1 = new car("toyota", 2023, 3000000, "Red");
// let car2:cartype=new car();
// car2.model="toyota";
// car2.year=2022;
// car2.color="Black";
// car2.price=2000000;
// console.log(car1);
console.log(car1);
