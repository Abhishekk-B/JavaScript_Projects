# JavaScript_Projects
This folder contains all my JavaScript projects.

## Project 1: Background changer
```JavaScript

const buttons =document.querySelectorAll(".button");
const body = document.querySelector("body")
buttons.forEach(function(btn){
    btn.addEventListener("click",(e)=>{
        if (e.target.id==="grey"){
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id==="red"){
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id==="blue"){
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id==="yellow"){
            body.style.backgroundColor=e.target.id
        }
    })
})
```
