let x;
let y; 
let z;

document.getElementById("rollbutton").onclick = function(){
 x= Math.floor(Math.random() * 20) +1;
 y= Math.floor(Math.random() * 20) +1;
 z= Math.floor(Math.random() * 20) +1;

 document.getElementById("xlabel").innerHTML=x;
 document.getElementById("ylabel").innerHTML=y;
 document.getElementById("zlabel").innerHTML=z;
}