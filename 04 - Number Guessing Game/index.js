const answer = Math.floor(Math.random() *10 +1);
let guesses =0;

document.getElementById("submitbtn").onclick = function(){
    let guess = document.getElementById("guessfield").value;
    guesses ++;

    if(guess == answer){
        alert(`${answer} is the #. It took you ${guesses} guesses`)
    }
    else if(guess<answer){
        alert("Too small");
    }
    else {
       alert("Too Large");
    }
}