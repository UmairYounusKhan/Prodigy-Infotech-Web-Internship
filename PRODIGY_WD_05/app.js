// state
let currntCity = "Karachi";
let unitss = "metric";

// Selectors
let city = document.querySelector(".weather__city");
let weather_forecast = document.querySelector('.weather__forecast');
let dateTime = document.querySelector(".weather__datetime");
let weather_icon = document.querySelector(".weather__icon");
let weather_temperature = document.querySelector(".weather__temperature");
let weather_realfeel = document.querySelector('.weather__realfeel');
let weather_minmax = document.querySelector(".weather__minmax")
let weather_wind = document.querySelector('.weather__wind');
let weather_humidity = document.querySelector('.weather__humidity');
let weather_pressure = document.querySelector('.weather__pressure');

// search
document.querySelector(".weather__search").addEventListener('submit', e => {
    let search_w = document.querySelector(".weather__searchform");
    e.preventDefault();
    currntCity = search_w.value;
    getWeather();
    search_w.value = ""
})

// units
document.querySelector(".weather_unit_celsius").addEventListener('click', () => {
    if (unitss !== "metric") {
        unitss = "metric"
        getWeather()
    }
})

document.querySelector(".weather_unit_farenheit").addEventListener('click', () => {
    if (unitss !== "imperial") {
        unitss = "imperial"
        getWeather()
    }
})

function convertTimeStamp(timestamp, timezone) {
    const convertTimezone = timezone / 3600; 

    const date = new Date(timestamp * 1000);

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
        hour12: true,
    }
    return date.toLocaleString("en-US", options)

}

function convertCountryCode(country) {
    let region_Names = new Intl.DisplayNames(["en"], { type: "region" });
    return region_Names.of(country)
}

function getWeather() {
    const API_KEY = 'b16928918d8d27fdb0816e84643b863b'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currntCity}&appid=${API_KEY}&units=${unitss}`).then(res => res.json()).then(data => {
        console.log(data?.message)
        city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`
        weather_forecast.innerHTML = `<p>${data.weather[0].main}`
        dateTime.innerHTML = convertTimeStamp(data.dt, data.timezone);
        weather_icon.innerHTML = `   <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" />`
        weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
        weather_realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
        weather_minmax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176</p><p>Max: ${data.main.temp_max.toFixed()}&#176</p>`
        weather_wind.innerHTML = `${data.wind.speed} ${units === "imperial" ? "mph" : "m/s"}`
        weather_humidity.innerHTML = `${data.main.humidity}%`
        weather_pressure.innerHTML = `${data.main.pressure} hPa`
    }).catch((err) => console.log(err))
}
