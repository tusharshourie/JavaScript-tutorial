const mylabel = document.getElementById("mylabel");

update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    mylabel.innerHTML = formatTime(date);

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm = hours>=12?"pm":"am";

    hours= (hours%12) ||12;
    // hours = formatZeroes(hours);
    // hours = formatZeroes(minutes);
    // hours = formatZeroes(seconds);

    return `${hours}:${minutes}:${seconds} ${amorpm}`
}
// function formatZeroes(time){
//     time=time.toString();
//     return time.length <2 ? "0" + time : time;
// }
}