"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const obj_js_1 = __importDefault(require("./obj.js"));
console.log(obj_js_1.default + 5);
// object
// var car={
//     company:"honda",
//     model:2023,
//     newcondition:true
// }
// custom car type
// type CarType = { company?: string, model: number, newcondition: boolean }
// var car1:CarType={
//     company: "Oodi",
//     model: 2022,
//     newcondition: false
// }
// var car2:CarType={
//     company: "honda",
//     model: 2023,
//     newcondition: true
// }
// var car3:CarType={
//     company: "Toyota",
//     model: 2021,
//     newcondition: true  
// }
// var car4:CarType={
//     company: "Lemozeen",
//     model: 2019,
//     newcondition: true 
// }
// var car5:CarType={
//     company: "Farari",
//     model: 2021,
//     newcondition: true  
// }
// var cars:CarType[]=[car1,car2,car3,car4,car5];
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
// for (let index = 0; index < cars.length; index++) {
//     console.log("Company : ",cars[index].company);
//     console.log("model : ",cars[index].model);
// }
// cars.map((car)=>{
//     console.log(`Company : ${car.company}  ||  model : ${car.model}`);
// })