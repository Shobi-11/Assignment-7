//Get all the countries with a population of less than 2 lakhs using Filter function

let XMLHttpRequest = require();
let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all','true');
xhr.onload=function (){
 let countryData=JSON.parse(this.response);
 const popu=countryData.filter((element)=>{
     return element.population<200000;
 })
 console.log(popu);
};
xhr.send();
 