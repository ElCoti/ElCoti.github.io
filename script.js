
function showWeather(){
    const city =document.getElementById('cityInput').value
    console.log(city)
    getWeather(city)
}

function getWeather(city){
    let key="d6c3f1389970196a96ba963dec1b7184"

    //request for coordinate
    fetch("https://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=1&appid="+key).then(function(coordinate){
        return coordinate.json()
    }).then(function(data){
        const lat = data[0]['lat']
        const lon=data[0][`lon`]

        console.log(lat)
        console.log(lon)

        //request for weather
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&lang=it&appid="+key).then(function(result){
            return result.json()
        }).then(function(data){
            //request for air quality
            fetch("http://api.openweathermap.org/data/2.5/air_pollution?lat="+lat+"&lon="+lon+"&appid="+key).then(function(aqi){
                return aqi.json()
            }).then(function(data){
                aqi = data.list[0].main['aqi']

                document.getElementById('aqIndex').innerText = aqi+"/5"
            })

            const temperature = data.main['temp'] + "°C"
            const feltTemperature = data.main['feels_like']+ "°C"
            const pressure = data.main['pressure']+ " hPa"
            const humidity=data.main['humidity']+ "%"
            const wind=((data.wind['speed'])*3.6).toFixed(2)+" km/h"
            const description=data.weather[0]['description']
            const dateTime=new Date(data.dt * 1000)
            const clouds = data.clouds['all']+ "%"
            const sunset = new Date(data.sys['sunset']*1000)
            const sunrise = new Date(data.sys['sunrise']*1000)
            const maxTemp = data.main['temp_max']+ "°C"


            document.getElementById('temperature').innerText  = temperature
            document.getElementById('feltTemp').innerText = feltTemperature
            document.getElementById('pressure').innerText = pressure
            document.getElementById('wind').innerText = wind
            document.getElementById('humidity').innerText = humidity
            document.getElementById('description').innerText = description
            document.getElementById('dTime').innerText = dateTime
            document.getElementById('clouds').innerText = clouds
            document.getElementById('sunset').innerText = sunset
            document.getElementById('sunrise').innerText = sunrise
            document.getElementById('maxTemp').innerText = maxTemp

        })
    })
}

