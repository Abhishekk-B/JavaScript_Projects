## BMI Calculator

### Image 1
---
!![image](https://github.com/Abhishekk-B/JavaScript_Projects/assets/95995839/cb35469c-c43f-406c-b2e7-7e5411e08bb8)

### Image 2
---
![image](https://github.com/Abhishekk-B/JavaScript_Projects/assets/95995839/997ddf17-3546-40b0-86ab-94eacf72bf63)

---

```JavaScript

const form = document.querySelector("form")
form.addEventListener("submit",function(e){
    e.preventDefault()
    const height=parseFloat(document.querySelector("#height").value);
    const weight=parseFloat(document.querySelector("#weight").value);
    console.log(height)
    const result =document.querySelector("#result");
    if (height==""||height<0||isNaN(height)){
        result.innerHTML="Height is not valid.";
        console.log(result)
    }
    else if (weight==""||weight<0||isNaN(weight)){
        result.innerHTML="Weight is not valid.";
    }
    else{
        const bmi=(weight/(height*height)).toFixed(2)
        result.innerHTML=`Your BMI is ${bmi}`
    }
})
```
