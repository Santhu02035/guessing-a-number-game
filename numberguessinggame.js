const minNum=1;
const maxNum=100;
const ans=Math.floor(Math.random()*(maxNum-minNum+1));

let attemps=0;
let guess;
let running=true;


while(running){
    guess=window.prompt(`Enter a number between ${minNum}-${maxNum}:`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valud one");
    }

    else if(guess < minNum || guess >maxNum){
        window.alert("Out of range guess");
    }

else{
    attemps++;
    if(guess<ans){
        window.alert("Too low try again");
    }
    else if(guess>ans){
        window.alert("Too high");
    }
    else{
        window.alert(`CORRECT!! The answer was ${ans} and You took ${attemps} attempts to find.`);
        running=false;
    }
}


}