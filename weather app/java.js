const apikey="bffbb52ec8de3fdc1ebbdbe5c099f1ee";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&appid=bffbb52ec8de3fdc1ebbdbe5c099f1ee&q="

const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weather =document.querySelector(".weather-icon")

async function checkWeather(city){
    const response=await fetch(apiurl+city);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"
    }
    else{
    var data=await response.json();

    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
 
   if(data.weather[0].main=="Clouds"){
        weather.src="images/clouds.png";
   }
   else if(data.weather[0].main=="Clear"){
    weather.src="images/clear.png"
   } 
   else if(data.weather[0].main=="Rain"){
    weather.src="images/rain.png"
   } else if(data.weather[0].main=="Drizzle"){
    weather.src="images/drizzle.png"
   } 
   else if(data.weather[0].main=="Mist"){
    weather.src="images/mist.png"
   } 

   document.querySelector(".weather").style.display="block";
   document.querySelector(".error").style.display="none";

 }
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})

