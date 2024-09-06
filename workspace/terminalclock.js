
function timeLogic(){
    let hrTimer = 00;
let minTimer = 00;
let secTimer = 00;
let intervalId;


function finalSectimer(){ 
        value = secTimer + 1;
        secTimer++
        if(secTimer == 60){
            secTimer = 0
            finalMintimer();
            
        }
        console.log(" The time is = ",  hrTimer, ":", minTimer, ":", secTimer)
       
    
    
    return value;
}

function finalMintimer(){
    value = minTimer + 1;
    minTimer ++
    if(minTimer == 60){
        minTimer = 0;
        finalHourtimer();
    }

}

function finalHourtimer(){
    value = hrTimer + 1;
    hrTimer++;
    if(hrTimer == 24){
        console.log("The day is over...lets start anew")
        resetClock();
    }
}

function resetClock(){
    clearInterval(intervalId);
    timeLogic();


}


intervalId = setInterval(finalSectimer, 1000)
}



timeLogic();
/*
function finalMintimer(){

    value = minTimer + 1;
    minTimer++
   


}

setInterval(finalMintimer, 1000 )
*/


/* tested and found out setInterval
function ab(){
    let bc = 0;
    bc = bc+1;
    bc++;
    console.log(bc)
}

setInterval(ab, 1000)
*/