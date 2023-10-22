//Print the total population of countries using reduce function 

let XMLHttpRequest= require('xhr1');
let xhr= new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all','true');
xhr.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);
};
xhr.send();
