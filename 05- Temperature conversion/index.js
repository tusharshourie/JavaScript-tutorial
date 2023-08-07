document.getElementById("submitbtn").onclick = function(){
    let temp;
    if(document.getElementById("cBtn").checked){
        temp =document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";

    }
    else if(document.getElementById("fBtn").checked){
        temp =document.getElementById("textbox").value;
        temp = Number(temp);
        temp = tofahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";


}
    else{
        document.getElementById("tempLabel").innerHTML = "Select a Unit";
    }
}

function toCelsius(temp){
    return (temp-32)*(5/9);
}

function tofahrenheit(temp){
    return temp*9/5 +32;
}