type cartype={model:string, year:number, price:number,color:string}
class car{
    model:string="";
    year:number=0
    price:number=0;
    color:string=''

    constructor(){
    this.model="toyota";
    this.year=2023;
    this.price=3000000;
    this.color="Red"
    }
}

let car1:cartype=new car();
let car2:cartype=new car();
car1.model="toyota";
car1.year=2022;
car1.color="Black";
car1.price=2000000;


console.log(car1);
console.log(car2);



