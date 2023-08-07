const mybutton = document.querySelector("#mybutton")
const myimage = document.querySelector("#myimage")

mybutton.addEventListener("click", ()=>{
    console.log(myimage.style.display)
    if(myimage.style.visibility=="hidden"){
        myimage.style.visibility="visible";
    }
    else{
        myimage.style.visibility="hidden";
    }
})