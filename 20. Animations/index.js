const mybutton = document.getElementById("mybutton");
const myanimation = document.getElementById("mydiv");

mybutton.addEventListener("click", begin);

/*
function begin(){
    let timerId= null;
    let x=0;
    let y=0;

    timerId=setInterval(frame, 5);
    function frame(){
        // if(x>=200){
        //     clearInterval(timerId);
        // }
        // else{
        //     x+=1;
        //     myanimation.style.left=x +"px";
        // }


        // if(y>=200){
        //     clearInterval(timerId);
        // }
        // else{
        //     y+=1;
        //     myanimation.style.top= y+"px";
        // }


        if(y>=200 || x>=200){
            clearInterval(timerId);
        }
        else{
            x+=1;
            y+=1;
            myanimation.style.left= x+"px";
            myanimation.style.top= y+"px";
        }
    }
}

*/

/*
function begin(){
    let timerId=null;
    let degrees=0;
    let x=0;
    let y=0;

    timerId =setInterval(frame, 5);

    function frame(){
        // if(degrees >= 360){
        //     clearInterval(timerId);
        // }
        // else{
        //     degrees+=1;
        //     myanimation.style.transform = "rotateX("+degrees+"deg)";
        // }

        // if(degrees >= 360){
        //     clearInterval(timerId);
        // }
        // else{
        //     degrees+=1;
        //     myanimation.style.transform = "rotateY("+degrees+"deg)";
        // }

        
        
        if(y>=200 || x>=200){
            clearInterval(timerId);
        }
        else{
            x+=1;
            y+=1;
            myanimation.style.left= x+"px";
            myanimation.style.top= y+"px";
        }


        if(degrees >= 360){
            clearInterval(timerId);
        }
        else{
            degrees+=5;
            myanimation.style.transform = "rotateZ("+degrees+"deg)";
        }
            }
}*/


        function begin(){
            let timerId=null;
            let scaleX=1;
            let scaleY=1;

            timerId=setInterval(frame,5);

            function frame(){
                // if(scaleX>=2){
                //     clearInterval(timerId);
                // }
                // else{
                //     scaleX+=0.01;
                //     myanimation.style.transform="scale("+scaleX+", "+scaleY+")";
                // }

                // if(scaleY>=2){
                //     clearInterval(timerId);
                // }
                // else{
                //     scaleY+=0.01;
                //     myanimation.style.transform="scale("+scaleX+", "+scaleY+")";
                // }

                // if(scaleY>=2 || scaleX>=2){
                //     clearInterval(timerId);
                // }
                // else{
                //     scaleY+=0.01;
                //     scaleX+=0.01;
                //     myanimation.style.transform="scale("+scaleX+", "+scaleY+")";
                // }

                if(scaleY<=0.1 || scaleX<=0.1){
                    clearInterval(timerId);
                }
                else{
                    scaleY-=0.01;
                    scaleX-=0.01;
                    myanimation.style.transform="scale("+scaleX+", "+scaleY+")";
                }
            }
        }
