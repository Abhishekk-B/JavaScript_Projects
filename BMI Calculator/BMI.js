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

