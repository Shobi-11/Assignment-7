//Print the following details name, capital, flag using forEach function.

let XMLHttpRequest= require('xhr2');
let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all','true');
xhr.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })
};
xhr.send();