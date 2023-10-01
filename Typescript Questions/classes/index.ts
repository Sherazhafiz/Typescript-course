type cartype={model:string, year:number, price:number,color:string}
class car{
    model:string="";
    year:number=0
    price:number=0;
    color:string=''

    // constructor(){
    // this.model="toyota";
    // this.year=2023;
    // this.price=3000000;
    // this.color="Red"
    // }
    constructor(model:string, year:number, price:number,color:string){
    this.model=model;
    this.year=year;
    this.price=price;
    this.color=color;
    }
}

let car1:cartype=new car("toyota",2023,3000000,"Red");
// let car2:cartype=new car();
// car2.model="toyota";
// car2.year=2022;
// car2.color="Black";
// car2.price=2000000;


// console.log(car1);
console.log(car1);



