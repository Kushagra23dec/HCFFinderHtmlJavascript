 
function f (){
 

let no1 = +( document.getElementById("no1").value);
let no2 = +( document.getElementById("no2").value);

var s = no1 + no2;

console.log(s);
hcfFunction(no1,no2);

 
}


function hcfFunction(a,b){
 
let i,j=1;
if(a<b)
{ c = a;} 
else
{ c = b;}

for(i=2;i<=c;i++){

    if(a%i==0 && b%i==0){
        j = i;
    }
}

document.getElementById("result").innerText = j ;



}

        
       
  