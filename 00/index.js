// console.log("I like pizza!");
// console.log("hi i am Tushar")
// window.alert("i really love pizza");  // pop up


                    //VARIABLES

// A VARIABLE IS A CONTAINER FOR STORING DATA
//TWO STEPS:
// 1. DECLARATION (var, let, const)
// 2. Assignment (=assignment operator)

// let firstname = "Tushar";   //string
// let age =20;                //number
// let student = true;        //boolean
// age=age+1;

// console.log("Hello", firstname);
// console.log("You are", age,"years old" );
// console.log("Enrolled:", student);

// document.getElementById("p1").innerHTML ="Hello "+firstname;
// document.getElementById("p2").innerHTML ="You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: "+ student; 


                        //ARITHMETIC EXPRESSIONS
// let people= 20;
// people = people+10;
// people = people-10;
// people = people*10;
// people = people/10;
// people = people%6;

//people +=1;
//people -=1;
//people /=1;
//people *=1;

// console.log(people);

/* OPERATOR PRECEDENCE
1. parenthesis ()
2. exponents 
3. multiplication and division
4. addition and subtraction
*/

// let result = 1+2*(3+4);
// console.log(result);


                        //USER INPUT
                
//EASY WAY

// let username = window.prompt("what's your name?");
// console.log(username);

// DIFFICULT WAY HTML textbox

// let username;
// document.getElementById("mybutton").onclick = function(){
//     username = document.getElementById("mytext").value;
//     console.log(username);
//     document.getElementById("mylabel").innerHTML ="Hello " + username;
// }


                        //TYPE CONVERSION

//Change the datatype of a value to another
//(strings, numbers, booleans)

/*
let age = window.prompt("How old are you?");
console.log(typeof age);
age = Number(age);
age +=1;
console.log("Happy Birthday! You are", age, "years old");
*/

/*
let x;
let y;
let z;
x= Number("3.14");   // if we try to convert a string eq: pizza, it'll return NaN
y = String(3.14);
z= Boolean("apple");  // empty string gives false
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/


                        //CONST
            
//A VARIABLE THAT CAN'T BE CHANGED
/*
const PI= 3.14159
let radius;
let circumference;
let area;

radius = window.prompt("Enter the radius of the circle");
circumference = 2*PI*radius;
area = 2*PI*radius*radius;

console.log("The circumference of the circle is", circumference);
console.log("The area of the circle is", area);
*/



                        //MATH
/*
let x;
let y = 5;
let z= 9;
let max;
let min;
// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);
// max = Math.max(x,y,z);
// min = Math.min(x,y,z);
x = Math.PI;

console.log(x);
*/


//HYPOTENUSE PROGRAM
// let a; 
// let b;
// let c;


// a = window.prompt("Enter side a of the triangle:");
// a= Number(a);

// b = window.prompt("Enter side b of the triangle:");
// b=Number(b)

// c =Math.pow(a,2) + Math.pow(b,2);
// c = Math.sqrt(c);
// console.log("The value of side c is", c);


//USING HTML FILE

// document.getElementById("submitbutton").onclick = function(){
//     a = document.getElementById("atextbox").value;
//     a= Number(a);

//     b = document.getElementById("btextbox").value;
//     b=Number(b)

//     c =Math.sqrt(Math.pow(a,2) + Math.pow(b,2));   
//     console.log("The value of side c is", c);

//     document.getElementById("clabel").innerHTML = "Side C: "+c;
// }

