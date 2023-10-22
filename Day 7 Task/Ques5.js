//Print the country which use US Dollars as currency.

let XMLHttpRequest= require();
xhr.open('Get', 'https://restcountries.com/v3.1/all', 'true');
xhr.onload = function () {
        var data = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
    };
    xhr.send();