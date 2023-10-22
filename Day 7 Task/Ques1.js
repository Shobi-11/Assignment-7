//Get all the countries from Asia continent /region using Filter function

let XMLHttpRequest= require();
let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all','true');
xhr.onload=function (){
    let countryData=JSON.parse(xhr.responseText);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
        console.log(xhr.responseText);
        console.log(countryData['asia']);
    })
   };
   xhr.send();


   