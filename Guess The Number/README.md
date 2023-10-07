## Guess the number

### Image 1
---
![image](https://github.com/Abhishekk-B/JavaScript_Projects/assets/95995839/a33c6124-77c8-47e8-a7f2-80943dccfc42)

### Image 2
---
![image](https://github.com/Abhishekk-B/JavaScript_Projects/assets/95995839/4b6b62a7-3002-42a3-899f-5d6df3ff0758)

### Image 3
---
![image](https://github.com/Abhishekk-B/JavaScript_Projects/assets/95995839/01648bcb-a1ac-4aa1-8136-9ab21074fa9f)

---

```JavaScript
let number=parseInt(Math.random()*100+1);
const form = document.querySelector("form");
const guessSlot = document.querySelector(".guessSlot");
const remaining = document.querySelector(".remaining");
const lorORhigh = document.querySelector(".lorORhigh");
const results = document.querySelector(".result");
const p=document.createElement("p");
const guessNumber=document.querySelector("#inputValue")
let prevGuess=[];
let numGuess=1;
let playGame=true;
if (playGame){
    form.addEventListener("submit",function(e){
        e.preventDefault()
        const guess=parseInt(guessNumber.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // to check whether the guess in between 1 and 100.
    if(isNaN(guess)){
            alert("Please enter a valid number.")
    }else if(guess<1){
        alert("Please enter a number greater than 1.")
    }else if(guess>100){
        alert("Please enter a number less than 100.")
    }else{
        if(numGuess<10 && numGuess>=1){
            prevGuess.push(guess)
            displayGuess(guess)
            checkGuess(guess)
        }else{
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${number}`)
            endGame()
        }
    }

}
function checkGuess(guess){
    // compare the guess number with the original number.
    if(guess===number){
        displayMessage("Great!, you guessed it correct.")
        endGame()
    }else if(guess<number){
        displayMessage("Number is too low.")
    }else if(guess>number){
        displayMessage("Number is too high.")
    }
}
function displayMessage(message){
    // display message either low or high
    lorORhigh.innerHTML=`<h2>${message}</h2>`
}
function displayGuess(guess){
    //update values
    guessNumber.value="";
    guessSlot.innerHTML+=`${guess}, `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}
function newGame(){
    const newGameButton=document.querySelector("#newgame");
    newGameButton.addEventListener("click",function(){
        number=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML="";
        remaining.innerHTML=`${11-numGuess}`;
        guessNumber.removeAttribute('disabled');
        check.removeAttribute('disabled');
        results.removeChild(p);
    })
}
function endGame(){
    guessNumber.value="";
    guessNumber.setAttribute('disabled',"");
    const check=document.querySelector("#btn");
    check.setAttribute('disabled',"");
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame" style="background-color: red; cursor:pointer; width:200px; margin:auto;">Start New Game</h2>`;
    results.appendChild(p)
    playGame=false;
    newGame();
}
```
