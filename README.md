# JavaScript_Projects
This folder contains all my JavaScript projects.

## Project 1: Background changer

![bgc1](https://github.com/Abhishekk-B/JavaScript_Projects/assets/95995839/b00e09f2-3507-4ea6-84de-16bc578ee4cc)
![bgc2](https://github.com/Abhishekk-B/JavaScript_Projects/assets/95995839/3853fc7a-d884-4dd6-a857-f848fd7d1a51)
![bgc3](https://github.com/Abhishekk-B/JavaScript_Projects/assets/95995839/2a86c020-7b75-445f-9201-94ca9165dec8)

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
