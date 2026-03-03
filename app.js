const API_KEY = "01ca74b9b8dbfcd544d64ab9e13b71b4";

const searchBtn = document.getElementById('search');

searchBtn.addEventListener("click",async ()=>{
    const cityName = document.getElementById("city").value;

    if(cityName === ""){
        alert("Please enter city name");
        return;
    }
    const URL  = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    const response = await fetch(URL);
    const data = await response.json();
    
    console.log(data);
    document.getElementById("temperature").innerText = Math.round(data.main.temp) + "°C"
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("condition").innerText = data.weather[0].description;
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
    document.getElementById("wind").innerText = "Wind Speed: " + data.wind.speed + " m/s";

    const iconCode = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("icon").src = iconURL;
    document.getElementById("icon").style.display = "block";

})