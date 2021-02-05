function getWeather() {
    const placeName = document.getElementById("input-place-name").value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=404bfe6ded5f4cb18bbfda11b56929b5&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => {

            //temperature properties
            const tempData = data.main;
            const humidity = tempData.humidity;
            const feelsLike = tempData.feels_like;
            const tempNow = tempData.temp;

            //weather properties
            const weather = data.weather[0];
            const weatherMain = weather.main;
            const wetherIcon = weather.icon;
            document.getElementById("place-name").innerText = placeName;
            document.getElementById("newTemp").innerText = tempNow;
            document.getElementById("tempFeels").innerText = feelsLike;
            document.getElementById("humidityNow").innerText = humidity;
            document.getElementById("weatherMain").innerText = weatherMain;
        });

document.getElementById("input-place-name").value = "";

}


// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=404bfe6ded5f4cb18bbfda11b56929b5
// Image url for icon 10d = URL is http://openweathermap.org/img/wn/10d@2x.png
