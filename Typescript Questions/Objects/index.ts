import c from "./obj.js"
import {a,b} from "./obj.js";
console.log(c+5);


// object
// var car={
//     company:"honda",
//     model:2023,
//     newcondition:true
// }
// custom car type
type CarType = { company?: string, model: number, newcondition: boolean }

// var cars:CarType[] = [{
//     company: "honda",
//     model: 2023, 
//     newcondition: true
// },
// {
//     company: "Oodi",
//     model: 2022,
//     newcondition: false
// },
// {
//     company: "Farari",
//     model: 2021,
//     newcondition: true  
// },
// {
//     company: "Lemozeen",
//     model: 2019,
//     newcondition: true  
// },
// {
//     company: "Toyota",
//     model: 2021,
//     newcondition: true  
// }]

var car1:CarType={
    company: "Oodi",
    model: 2022,
    newcondition: false
}
var car2:CarType={
    company: "honda",
    model: 2023,
    newcondition: true
}
var car3:CarType={
    company: "Toyota",
    model: 2021,
    newcondition: true  
}
var car4:CarType={
    company: "Lemozeen",
    model: 2019,
    newcondition: true 
}
var car5:CarType={
    company: "Farari",
    model: 2021,
    newcondition: true  
}
var cars:CarType[]=[car1,car2,car3,car4,car5];
cars.map((car)=>{
    console.log(`Company : ${car.company}  ||  model : ${car.model}  NewCondition : ${car.newcondition}`);
    
})

// for (let index = 0; index < cars.length; index++) {
//     console.log("Company : ",cars[index].company);
//     console.log("model : ",cars[index].model);
// }

// cars.map((car)=>{
//     console.log(`Company : ${car.company}  ||  model : ${car.model}`);
    
// })
type perType={name:string,age:number,IsStudent:boolean}
var person1:perType={
    name:"Ali",
    age:23,
    IsStudent:true
}
var person2:perType={
    name:"Ahsan",
    age:20,
    IsStudent:true
}
var person3:perType={
    name:"Bilal",
    age:28,
    IsStudent:false
}
let count=0;
var persons:perType[]=[person1,person2,person3]
for (let index = 0; index < persons.length; index++) {
    if(persons[index].IsStudent==true){
    count++;
    }
   
}
console.log(`there are ${count} students in the list of onbjects`);

