                        //ERROR HANDLING

//errors: Cant open a file
//         lose connection
//         user types incorrect input
//         TypeError

//throw = executes a user defined error

/*
try{
    let x= window.prompt("Enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number";
    if(x=="") throw "That was Empty";

    console.log(`${x} is a Number`);
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always executes");
}
*/


                        //setTimeout() Method

//setTimeout() = invokes a function after a number of milliseconds
//          asynchronous function(doesn't pause execution)

/*
let item ="cryptocurrency";
let price =420.69;

let timer1 = setTimeout(firstMsg, 3000, item, price);
let timer2 = setTimeout(secondMsg, 6000);
let timer3 = setTimeout(thirdMsg, 9000);

function firstMsg(item, price){
    alert(`Buy this ${item} for ${price}!`);
}
function secondMsg(){
    alert(`This is not a scam`);
}
function thirdMsg(){
    alert(`DO IT!`);
}

document.getElementById("mybutton").onclick=function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for Buying!`)
}
*/


                        //SET INTERVALS

//setInterval() = invokes a function repeatedly after a number of milliseconds
//          asynchronous function(doesn't pause execution of program)


/*let count =0;
let max=window.prompt("Count up to what #?");
max=Number(max);

const mytimer=setInterval(countup, 1000);

function countup(){
    count+=1;
    console.log(count);
    if(count>=max){
        clearInterval(mytimer);
    }
}
*/


                        //DATE OBJECTS

//The Date Object is used to work with dates & times


// let date = new Date();
// let date = new Date(0);
// let date = new Date(2023, 0, 1, 2 ,3, 4, 5);
                //(hours, month(0=jan), day, hour, minutes, seconds, milliseconds)

// let date = new Date("January 1, 2023 00:00:00");
/*
let year= date.getFullYear();
let dayofMonth = date.getDate();
let dayofWeek = date.getDay();
let month = date.getMonth();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/

// date.setFullYear(2024);
// date.setMonth(11);
// date.setDate(30);         //similarly we can set hours, mins, seconds and ms

// date = date.toLocaleString();
// document.getElementById("mylabel").innerHTML=formatDate(date);
// document.getElementById("mylabel").innerHTML=formattime(date);


// console.log(date);

// document.getElementById("mylabel").innerHTML=dayofMonth;
// document.getElementById("mylabel").innerHTML=dayofWeek;    //(0-sunday and so on)
// document.getElementById("mylabel").innerHTML=month;           //(0-jan and so on)
// document.getElementById("mylabel").innerHTML=hours;
// document.getElementById("mylabel").innerHTML=minutes;
// document.getElementById("mylabel").innerHTML=seconds;
// document.getElementById("mylabel").innerHTML=ms;

/*
function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`;
}

function formattime(date){
    let hours = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm = hours>=12?"pm":"am";

    hours = (hours%12) ||12;
    return `${hours}:${mins}:${seconds} ${amorpm}`
}
tushar shourie and teo shourie will be successful one day and will earn loads of money
//to fulfil his desires and also his family;s desires and needs
*/



                    //SYNCHRONOUS AND ASYNCHRONOUS

//SYNCHRONOUS - IN AN ORDERED SEQUENCE.
//              STEP BY STEP LINEAR INSTRUCTIONS
//              (START NOW, FINISH NOW)

//ASYNCHRONOUS - OUT OF SEQUENCE
//              EX. ACCESS A DATABASE
//                  FETCH FILE
//                  TASKS THAT TAKE TIME
//                  (sTART NOW, FINISH SOMETIME LATER)


/* 
console.log("START");
console.log("This step is synchronous")
console.log("END"); */

/*
console.log("START");
setTimeout(()=>console.log("this is asynchronous"), 5000)
console.log("END")
*/



                        //console.time()

//console.time() = starts a timer you can use to track how long an
//                  operation takes. Give each timer a unique name

/*
//start
console.time("Response time");

// alert("CLICK THE OK BUTTON");
setTimeout(()=> console.log("HELLO!"), 3000);

//end
console.timeEnd("Response time");
*/



                        //PROMISES

//PROMISE = OBJECT THAT ENCAPSULATES THE RESULT OF AN ASYNCHRONOUS OPERATION
//          LET ASYNCHRONOUS METHODS RETURN VALUES LIKE SYNCHRONOUS METHODS
//          "I PROMISE TO RETURN SOMETHING IN THE FUTURE"

// STATE IS 'pending' then: 'fulfilled' or 'rejected'
//the RESULT is what can be returned
// 2 parts producing & consuming

/*
const promise = new Promise((resolve, reject)=>{
    let fileLoaded = false;
    if(fileLoaded){
        resolve("File Loaded");
    }
    else{
        reject("File NOT loaded");
    }
});

promise.then(value => console.log(value))
.catch(error => console.log(error));
*/

/*
const wait  = time =>new Promise(resolve => {
    setTimeout(resolve,time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));
*/


                        //ASYNC

//async = makes a function return a Promise

/*
async function loadFile(){
    let fileLoaded = false;
    if(fileLoaded){
        return "File Loaded";
    }
    else{
        throw "File NOT loaded";
    }
}



loadFile().then(value => console.log(value))
.catch(error => console.log(error));

*/



                        //AWAIT KEYWORD

//AWAIT = MAKES AN ASYNC FUNCTION WAIT FOR A PROMISE
/*
async function loadFile(){
    let fileLoaded = false;
    if(fileLoaded){
        return "File Loaded";
    }
    else{
        throw "File NOT loaded";
    }
}





loadFile().then(value => console.log(value))
.catch(error => console.log(error));
*/



                        //ES6 MODULES

//THE IDEA BEHIND A MODULE IS THAT IT'S A FILE PF REUSABLE CODE
//WE CAN IMPORT SECTIONS OF PRE WRITTEN CODE TO USE WHENEVER
//HELPS TO MAKE YOUR CODE MORE REUSABLE AND MAINTANABLE
//THINK OF MODULES AS SEPARATE CHAPTERS OF A BOOK

