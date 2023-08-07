//cookies= small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs
// to delete a cookie set the expiration date to a past date


// console.log(navigator.cookieEnabled);

/*
document.cookie = "firstname = SpongeBob; expires=Sun, 1 January 2030 12:00:00 IST; path=/";
document.cookie = "lastname = SquarePants; expires=Sun, 1 January 2030 12:00:00 IST; path=/";
console.log(document.cookie);

*/

// setCookie("email","Sponge@gmail.com", 365);

// deleteCookie("email");
// deleteCookie("firstname");
// deleteCookie("lastname");

// setCookie("firstname", "SpongeBob", 365);
// setCookie("lastname", "SquarePants", 365);

// console.log(getCookie("firstname"));
// console.log(getCookie("lastname"));

// console.log(document.cookie);



const firsttext = document.querySelector("#firsttext");
const lasttext = document.querySelector("#lasttext");
const submitbtn = document.querySelector("#submitbtn");
const cookiesbtn = document.querySelector("#cookiesbtn");

submitbtn.addEventListener("click", ()=>{
    setCookie("firstname", firsttext.value, 365);
    setCookie("lastname", lasttext.value, 365);
});

cookiesbtn.addEventListener("click", ()=>{
    firsttext.value=getCookie("firstname");
    lasttext.value=getCookie("lastname"); 
});

function setCookie(name, value, daysToLive){
    const date=new Date();
    date.setTime(date.getTime() + (daysToLive *24*60*60*1000))
    let expires= "expires=" + date.toUTCString();
    document.cookie =`${name} = ${value}; ${expires}; path=/`

}



function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded=decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    // console.log(cArray);
    let result = null;
    cArray.forEach(element =>{
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1);
        }
    })
    return result;
}