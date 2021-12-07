 

 
function f (){
 

let no1 = +( document.getElementById("no1").value);
let no2 = +( document.getElementById("no2").value);

var s = no1 + no2;

console.log(s);
hcfFunction(no1,no2);

 
}


function hcfFunction(a,b){

    console.log(a);
    console.log("*************************");
var p = 0;
     
let i,j=1;
for(i=2;i<=b;i++){

    if(a%i==0 && b%i==0){
        j= i;
    }
}

document.getElementById("result").innerText = "<h1>" + j + "</h1>";



}

        
       
  