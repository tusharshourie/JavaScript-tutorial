                        //STRING METHODS

// let userName = "Tushar Shourie";
// let phoneNo = "123-456-7890"
// console.log(userName.length);
// console.log(userName.charAt(5));
// console.log(userName.indexOf("a"));
// console.log(userName.lastIndexOf("r"));
// userName=userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();
// phoneNo =phoneNo.replaceAll("-", "/");

// console.log(userName);
// console.log(phoneNo);


                        //Slice method
                    
//EXTRACTS A SECTION OF A STRING AND RETURNS IT AS A NEW STRING
//WITHOUT MODIFYING THE STRING

// let fullName="Snoop Dogg";
// let firstName;
// let lastName;

// lastName=fullName.slice(7);
// firstName=fullName.slice(0,6);

// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);



                        //METHOD CHAINING

//CALLING ONE METHOD AFTER THE ANOTHER IN A SINGLE LINE OF CODE
// let userName ="tushar";
// let letter = userName.charAt(0).toUpperCase();

// console.log(letter);


                        // IF STATEMENTS
/*
let age =15;
if(age>=18){
    console.log("you are an adult");
}
else if(age>10 && age<18){
    console.log("you are a teen")
}
else{
    console.log("you are a child")
}
*/

// let online = false;
// if(online){
//     console.log("you are online");
// }
// else{
//     console.log("you are offline");
// }


                    //CHECKED PROPERTY
/*
document.getElementById("mybutton").onclick=function(){
    const myCheckBox=document.getElementById("mycheckbox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    if(myCheckBox.checked){
        console.log("you are subscribed!");
    }
    else{
        console.log("you are not subscribed");
    }

    if(visaBtn.checked){
        console.log("You are paying with a Visa");
    }
    else if(mastercardBtn.checked){
        console.log("You are paying with a mastercard");
    }
    else if(paypalBtn.checked){
        console.log("you are paying with paypal")
    }
    else{
        console.log("you must select a payment type");
    }
}
*/



                    //SWITCH
                
// let grade=95;
// switch(true){
//     case grade>=90: 
//         console.log("you did great");
//         break;
//     case grade>=80: 
//         console.log("you did good");
//         break;
//     case grade>=50: 
//         console.log("you could have done better");
//         break;
//     default: 
//         console.log(grade, "is not a letter grade");
    
// }



                        //AND OR LOGICAL OPERATOR

// let temp=15;
// if(temp>0 && temp <30){
//     console.log("the weather is good")
// }
// else{
//     console.log("the weather is bad");
// }

// let temp=50;
// if(temp<=0 || temp >=30){
//     console.log("the weather is bad")
// }
// else{
//     console.log("the weather is good");
// }

// let temp=15;
// let sunny=false;
// if(temp>0 && temp <30 && sunny){
//     console.log("the weather is good")
// }
// else{
//     console.log("the weather is bad");
// }


                        //NOT LOGICAL OERATOR
/*                    
let temp=15;
let sunny =false;
if(!(temp>0)){
    console.log("it's cold outside");
}
else{
    console.log("it's warm outside");
}
if(!sunny){
   console.log("it's cloudy outside"); 
}
else{
    console.log("it's sunny outside");
}
*/


                        //WHILE LOOP

// let userName ="";
// while(userName == "" || userName == null){
//     userName = window.prompt("Enter your name");
// }

// console.log("Hello", userName);


                        //DO WHILE LOOP

// let userName;
// do{
//     userName = window.prompt("Enter your name");
// }while(userName == "" )

// console.log("Hello", userName);


                        //FOR LOOP

// for(let i=1; i<=10; i++){
//     console.log(i);
// }


                        //BREAK & CONTINUE

// for(let i=1; i<=10; i++){
//     if(i==7){
//         // break;
//         continue;
//     }
//     console.log(i);
// }


                        //NESTED LOOPS

// let symbol = window.prompt("enter a symbol to use");
// let rows=window.prompt("enter no. of rows");
// let columns = window.prompt("Enter no of columns");
// for(let i=1; i<=rows; i++){
//     for(let j=1;j<=columns; j++){
// document.getElementById("myrect").innerHTML += symbol;
// }
// document.getElementById("myrect").innerHTML+="<br>";
// }



                        //FUNCTIONS
/* 
startProgram();
function startProgram(){
let userName="tushar shourie";
let age=21;                        

happyBirthday(userName, age);
}
function happyBirthday(a,b){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", a);
    console.log("Happy birthday to you!");
    console.log("You are", b, "years old");
}
*/



                        //RETURN STATEMENT

/*
let area;
let width;
let height;

width = window.prompt("Enter Width");
height = window.prompt("Enter Height");

area = getarea(width, height);
console.log("the area is", area);

function getarea(width, height){
    return width*height;
}
*/



                        //TERNARY OPERATOR


// let adult = checkAge(11);
// console.log(adult);
// function checkAge(age){
//     return age>=18?true: false;
// }

// checkWinner(false);
// function checkWinner(win){
//     win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
// }



                    //LET VS VAR
                    
//variable scope= where a variable is accessible
//let = variables are limited to block space()
//var = variables are limited to a function()
//global variable = declared outside any function
//if global, var will change browser's window properties


                    //TEMPLATE LITERALS

//delimited with (`) instead of double or single quotes
//allows embedded variables and expressions

// let userName = "tushar";
// let items = 3;
// let total = 75;

// console.log(`hello ${userName}`);
// console.log(`you have ${items} items in your cart`);
// console.log(`your total is ${total}`);

// let text = `hello ${userName}<br>
// you have ${items} items in your cart <br>
// your total is ${total} <br>`;

// document.getElementById("mylabel").innerHTML = text;




                        //FORMAT CURRENCY


/* toLocaleString() = returns a string with a language sensitive
                    representation of this number */

//number.toLocaleString(locale, {options});
//'options' = object with formatting options

// let myNum = 123456.789;

// let myNum = 100;

// myNum = myNum.toLocaleString("en-US");   //us english
// myNum = myNum.toLocaleString("hi-IN");     //Hindi
// myNum = myNum.toLocaleString("de-DE");      //standard german

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// myNum = myNum.toLocaleString(undefined, {style: "percent"});

// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "kilometer"});

// console.log(myNum);