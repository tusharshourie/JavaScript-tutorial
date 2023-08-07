//Canvas API = a mean for drawing graphics
//              used for animations, games, data visualisations

let canvas= document.getElementById("mycanvas");
let context = canvas.getContext("2d");

/*
//DRAW LINES
context.lineWidth=10;
context.strokeStyle="orangered";
context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);

context.stroke();

*/


/*
//DRAW TRIANGLE
context.strokeStyle="yellow";
context.fillStyle="red";
context.lineWidth=10;
context.beginPath();
context.moveTo(250,0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250,0);
context.stroke();
context.fill();
*/



/*
//DRAW RECTANGLE
context.fillStyle="black";
context.strokeStyle="black";
context.fillRect(0,0,250,250);
context.strokeRect(0,0,250,250);

context.fillStyle="red";
context.strokeStyle="black";
context.fillRect(0,250,250, 250);
context.strokeRect(0,250,250,250);

context.fillStyle="green";
context.strokeStyle="black";
context.fillRect(250,250,250, 250);
context.strokeRect(250,250,250,250);

context.fillStyle="yellow";
context.strokeStyle="black";
context.fillRect(250,0,250, 250);
context.strokeRect(250,0,250,250);
*/


/*
//DRAW CIRCLE
//(x,y,r,sAngle, eAngel, counterclockwise)
context.fillStyle="green";
context.strokeStyle ="red";
context.lineWidth=10;
context.beginPath();
context.arc(250,250, 200, 0, 2*Math.PI,true)
context.fill();
context.stroke();
*/


//DRAW TEXT
context.font= "50px MV Boli"
context.fillStyle="red";
context.textAlign="center";
context.fillText("YOU WIN!", canvas.width/2, canvas.height/2);
