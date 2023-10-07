## Random Background Change

### Image 1
---
![image](https://github.com/Abhishekk-B/JavaScript_Projects/assets/95995839/096d10fa-43c5-4254-a609-99a008457248)

---

### Image 2
---
![image](https://github.com/Abhishekk-B/JavaScript_Projects/assets/95995839/f2cc15a5-f6e1-4167-b937-73bc9e0fe32b)

---
```JavaScript
const hex='0123456789ABCDEF'
const main=document.querySelector(".main")
const colorCode=document.createElement('p')


function randomColor(){
    let rColor="#"
    for(let i=0;i<6;i++){
        rColor+=hex[Math.floor(Math.random()*16)]
    }
    return rColor;
}
const body=document.querySelector("body")
const start=document.querySelector("#start")
let setColor;

start.addEventListener("click",function(){
    if(!setColor){
        setColor = setInterval(bgColor,1000)
    }
})


const bgColor=function(){
    body.style.backgroundColor=randomColor()
}

const stop=document.querySelector("#stop")

stop.addEventListener("click",function(){
    clearInterval(setColor)
    colorCode.innerHTML=`<h2 style="background-color: red;color:white;text-align:center;padding:10px;">Hex Code: ${randomColor()}</h2>`;
    main.appendChild(colorCode)
    console.log(colorCode.innerHTML)
    setColor=null;
})
```
