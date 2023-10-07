## Digital Clock

### Image 1
---
![image](https://github.com/Abhishekk-B/JavaScript_Projects/assets/95995839/3b5b03ed-babd-4957-b072-4469782e4e28)

---
```JavaScript
const clock=document.querySelector(".clock");
// To update the time for every 1 second.
setInterval(function(){
    let date=new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString()
},1000)
```
