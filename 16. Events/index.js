// const element = document.getElementById("mybutton");
// const element = document.body;
// const element = document.getElementById("mytext");
const element = document.getElementById("myDiv");

// element.onclick=doSomething;
// element.onload=doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething(){
    // alert("you did something");
    element.style.backgroundColor="lightcoral";
}

function doSomethingElse(){
    // alert("you did something");
    element.style.backgroundColor="lightgreen";
}