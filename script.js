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
            const temperature = data.main['temp']
            const feltTemperature = data.main['feels_like']
            const pressure = data.main['pressure']
            const seaLevel=data.main['sea_level']
            const humidity=data.main['humidity']
            const wind=data.wind['speed']
            const visibility=data.visibility
            const description=data.weather[0]['description']

            document.getElementById('temperature').innerText  = temperature
            document.getElementById('feltTemp').innerText = feltTemperature
            document.getElementById('pressure').innerText = pressure
            document.getElementById('seaLevel').innerText = seaLevel
            document.getElementById('wind').value = wind
            document.getElementById('visibility').value = visibility
            document.getElementById('humidity').value = humidity
            document.getElementById('description').value = description
        })
    })
}

