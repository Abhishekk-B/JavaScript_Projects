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


