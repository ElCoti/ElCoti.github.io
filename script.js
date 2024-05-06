function showWeather(){
    city =document.getElementById('cityInput').value
    getWeather(city)
}

function getWeather(city){
    let key="d6c3f1389970196a96ba963dec1b7184"

    //coordinate
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=1&appid="+key).then(function(coordinate){
        return coordinate.json()
    }).then(function(data){
        lat = data[0]['lat']
        lon=data[0]['lon']

    })
}

