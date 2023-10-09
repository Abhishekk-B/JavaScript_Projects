const inputValue=document.querySelector("#input")
const button=document.querySelector("#btn")
let mainDisplay=document.querySelector(".display")
let info=document.querySelector(".info")
let err=document.querySelector(".error")
let wImage=document.querySelector(".weather-img")


const apiKey='30082ec9b647a4f8ea38c4cb20236f86';
const url='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

async function getData(value){
    try {
        const response=await fetch(url+value+"&appid="+apiKey);
        if (response.status==404){
            err.style.display='block';
            mainDisplay.style.display='none';
            info.style.display='none'; 
        }else{
            const data=await response.json();
            document.querySelector("#city").innerHTML=inputValue.value
            document.querySelector("#temperature").innerHTML="Temperature: "+Math.round(data["main"]['temp'])+"°C";
            document.querySelector("#humidity").innerHTML=data["main"]['humidity']+"%"
            document.querySelector("#speed").innerHTML=data["wind"]['speed']+" km/hr"
            let desc=data["weather"][0]['main'];
            if(desc=='Clouds'){
                document.querySelector("#description").innerHTML=data["weather"][0]['description'].toUpperCase();
                wImage.src="Images/cloudy.png"
            }else if(desc=='snow'){
                document.querySelector("#description").innerHTML=data["weather"][0]['description'].toUpperCase();
                wImage.src="Images/snow.png"
            }else if(desc=='Clear'){
                document.querySelector("#description").innerHTML=data["weather"][0]['description'].toUpperCase();
                wImage.src="Images/clear.png"
            }else if(desc=='Rain'){
                document.querySelector("#description").innerHTML=data["weather"][0]['description'].toUpperCase();
                wImage.src="Images/rain.png"
            }else if(desc=='Drizzle'){
                document.querySelector("#description").innerHTML=data["weather"][0]['description'].toUpperCase();
                wImage.src="Images/drizzle.png"
            }else if(desc=='Thunderstorm'){
                document.querySelector("#description").innerHTML=data["weather"][0]['description'].toUpperCase();
                wImage.src="Images/thunderstorm.png"
            }else{
                document.querySelector("#description").innerHTML=data["weather"][0]['description'].toUpperCase();
                wImage.src="Images/extra.png"
            }
            
            inputValue.value="";
            err.style.display='none';
            mainDisplay.style.display='block';
            info.style.display='flex'; 
        }
        
    } catch (error) {
        console.log(error);
        err.style.display='block';
    }
}

button.addEventListener('click',()=>{
    getData(inputValue.value.toLowerCase())   
})
