import { PI,getCircumference,getArea,getVoluem, getCircumference } from "./demo28";


function myprint(data){
    var mydiv = document.getElementById("mydiv");
     mydiv.innerHTML=mydiv.innerHTML+data +"<br/>";
 }
console.log(PI);
myprint(PI);
const Circumference = getCircumference(10);
console.log(`${Circumference.toFixed(2)}cm`);