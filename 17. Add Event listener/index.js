// addEventListener(event, function, useCapture)
// You can add many event Handlers to one element.
// Even the same event invokes different functions

const innerdiv =document.getElementById("innerdiv");

const outerdiv =document.getElementById("outerdiv");
// innerdiv.addEventListener("mouseover", changered);
// innerdiv.addEventListener("mouseout", changegreen);


// function changered(){
//     innerdiv.style.backgroundColor="red";
// }
// function changegreen(){
//     innerdiv.style.backgroundColor="lightgreen";
// }

innerdiv.addEventListener("click", changeblue);
outerdiv.addEventListener("click", changeblue, true);

function changeblue(){
    alert(`you selected ${this.id}`)
    this.style.backgroundColor="blue";
}