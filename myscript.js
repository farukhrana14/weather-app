function getWeather() {
    const placeName0 = document.getElementById("input-place-name").value;
    const placeName = titleCase(placeName0);


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=404bfe6ded5f4cb18bbfda11b56929b5&units=metric`
    fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                // console.log("Not 200");
                errorMessage()
            } else {
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        //get temperature properties
                        const tempData = data.main;
                        const humidity = tempData.humidity;
                        const feelsLike = tempData.feels_like;
                        const tempNow = tempData.temp;

                        //get weather properties
                        const weather = data.weather[0];
                        const weatherMain = weather.main;
                        const icon = weather.icon;

                        //push data to UI
                        document.getElementById("weather-image").src = `https://openweathermap.org/img/wn/${icon}@2x.png`
                        document.getElementById("place-name").innerText = placeName;
                        document.getElementById("newTemp").innerText = tempNow;
                        document.getElementById("tempFeels").innerText = feelsLike;
                        document.getElementById("humidityNow").innerText = humidity;
                        document.getElementById("weatherMain").innerText = weatherMain;

                    });
            }

        })


document.getElementById("input-place-name").value = "";

}

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

function errorMessage(){
    window.dialog.showModal();

}


// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=404bfe6ded5f4cb18bbfda11b56929b5
// Image url for icon 10d = URL is http://openweathermap.org/img/wn/10d@2x.png
