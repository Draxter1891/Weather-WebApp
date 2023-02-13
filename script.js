const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1b30d12eb6mshf1329925f883a8ap1a8606jsn5d6d34810c36',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees


            let unix_timestamp = response.sunrise
            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var date = new Date(unix_timestamp * 1000);
            // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            // var seconds = "0" + date.getSeconds();

            // Will display time in 10:30:23 format
            var formattedTime = hours + ':' + minutes.substr(-2);
            document.getElementById("rise").innerHTML = formattedTime;

            let unix_timestamp2 = response.sunset
            var date2 = new Date(unix_timestamp2 * 1000);
            var hours2 = date2.getHours();
            var minutes2 = "0" + date2.getMinutes();
            var formattedTime2 = hours2 + ':' + minutes2.substr(-2);
            document.getElementById("set").innerHTML = formattedTime2;
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct2.innerHTML = response.cloud_pct
        temp2.innerHTML = response.temp
        feels_like2.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        min_temp2.innerHTML = response.min_temp
        max_temp2.innerHTML = response.max_temp
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees2.innerHTML = response.wind_degrees


        let unix_timestampSH = response.sunrise
            var dateSH = new Date(unix_timestampSH * 1000);
            var hoursSH = dateSH.getHours();
            var minutesSH = "0" + dateSH.getMinutes();
            var secondsSH = "0" + dateSH.getSeconds();
            var formattedTimeSH = hoursSH + ':' + minutesSH.substr(-2);
            document.getElementById("risesh").innerHTML = formattedTimeSH;
        let unix_timestampSH2 = response.sunset
            var dateSH2 = new Date(unix_timestampSH2 * 1000);
            var hoursSH2 = dateSH2.getHours();
            var minutesSH2 = "0" + dateSH2.getMinutes();
            var secondsSH2 = "0" + dateSH2.getSeconds();
            var formattedTimeSH2 = hoursSH2 + ':' + minutesSH2.substr(-2);
            document.getElementById("setsh").innerHTML = formattedTimeSH2;
    })
    .catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=washington', options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct3.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees

        let unix_timestampWA = response.sunrise
            var dateWA = new Date(unix_timestampWA * 1000);
            var hoursWA = dateWA.getHours();
            var minutesWA = "0" + dateWA.getMinutes();
            var secondsWA = "0" + dateWA.getSeconds();
            var formattedTimeWA = hoursWA + ':' + minutesWA.substr(-2);
            document.getElementById("risewa").innerHTML = formattedTimeWA;
        let unix_timestampWA2 = response.sunset
            var dateWA2 = new Date(unix_timestampWA2 * 1000);
            var hoursWA2 = dateWA2.getHours();
            var minutesWA2 = "0" + dateWA2.getMinutes();
            var secondsWA2 = "0" + dateWA2.getSeconds();
            var formattedTimeWA2 = hoursWA2 + ':' + minutesWA2.substr(-2);
            document.getElementById("setwa").innerHTML = formattedTimeWA2;
    })
    .catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct4.innerHTML = response.cloud_pct
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        min_temp4.innerHTML = response.min_temp
        max_temp4.innerHTML = response.max_temp
        wind_speed4.innerHTML = response.wind_speed
        wind_degrees4.innerHTML = response.wind_degrees

        
        let unix_timestamplu = response.sunrise
            var datelu = new Date(unix_timestamplu * 1000);
            var hourslu = datelu.getHours();
            var minuteslu = "0" + datelu.getMinutes();
            var formattedTimelu = hourslu + ':' + minuteslu.substr(-2);
            document.getElementById("riselu").innerHTML = formattedTimelu;
        let unix_timestamplu2 = response.sunset
            var datelu2 = new Date(unix_timestamplu2 * 1000);
            var hourslu2 = datelu2.getHours();
            var minuteslu2 = "0" + datelu2.getMinutes();
            var formattedTimelu2 = hourslu2 + ':' + minuteslu2.substr(-2);
            document.getElementById("setlu").innerHTML = formattedTimelu2;
    })
    .catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct5.innerHTML = response.cloud_pct
        temp5.innerHTML = response.temp
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        min_temp5.innerHTML = response.min_temp
        max_temp5.innerHTML = response.max_temp
        wind_speed5.innerHTML = response.wind_speed
        wind_degrees5.innerHTML = response.wind_degrees

        let unix_timestampko = response.sunrise
            var dateko = new Date(unix_timestampko * 1000);
            var hoursko = dateko.getHours();
            var minutesko = "0" + dateko.getMinutes();
            var formattedTimeko = hoursko + ':' + minutesko.substr(-2);
            document.getElementById("riseko").innerHTML = formattedTimeko;
        let unix_timestampko2 = response.sunset
            var dateko2 = new Date(unix_timestampko2 * 1000);
            var hoursko2 = dateko2.getHours();
            var minutesko2 = "0" + dateko2.getMinutes();
            var formattedTimeko2 = hoursko2 + ':' + minutesko2.substr(-2);
            document.getElementById("setko").innerHTML = formattedTimeko2;
    })
    .catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct6.innerHTML = response.cloud_pct
        temp6.innerHTML = response.temp
        feels_like6.innerHTML = response.feels_like
        humidity6.innerHTML = response.humidity
        min_temp6.innerHTML = response.min_temp
        max_temp6.innerHTML = response.max_temp
        wind_speed6.innerHTML = response.wind_speed
        wind_degrees6.innerHTML = response.wind_degrees


        let unix_timestampch = response.sunrise
        var datech = new Date(unix_timestampch * 1000);
        var hoursch = datech.getHours();
        var minutesch = "0" + datech.getMinutes();
        var formattedTimech = hoursch + ':' + minutesch.substr(-2);
        document.getElementById("risech").innerHTML = formattedTimech;
        let unix_timestampch2 = response.sunset
        var datech2 = new Date(unix_timestampch2 * 1000);
        var hoursch2 = datech2.getHours();
        var minutesch2 = "0" + datech2.getMinutes();
        var formattedTimech2 = hoursch2 + ':' + minutesch2.substr(-2);
        document.getElementById("setch").innerHTML = formattedTimech2;
    })
    .catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=maharashtra', options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct7.innerHTML = response.cloud_pct
        temp7.innerHTML = response.temp
        feels_like7.innerHTML = response.feels_like
        humidity7.innerHTML = response.humidity
        min_temp7.innerHTML = response.min_temp
        max_temp7.innerHTML = response.max_temp
        wind_speed7.innerHTML = response.wind_speed
        wind_degrees7.innerHTML = response.wind_degrees

        let unix_timestampma = response.sunrise
        var datema = new Date(unix_timestampma * 1000);
        var hoursma = datema.getHours();
        var minutesma = "0" + datema.getMinutes();
        var formattedTimema = hoursma + ':' + minutesma.substr(-2);
        document.getElementById("risema").innerHTML = formattedTimema;
        let unix_timestampma2 = response.sunset
        var datema2 = new Date(unix_timestampma2 * 1000);
        var hoursma2 = datema2.getHours();
        var minutesma2 = "0" + datema2.getMinutes();
        var formattedTimema2 = hoursma2 + ':' + minutesma2.substr(-2);
        document.getElementById("setma").innerHTML = formattedTimema2;
    })
    .catch(err => console.error(err));