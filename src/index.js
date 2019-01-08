const city = process.argv[2].trim();
const WeatherClient = require("../lib/weather-client");

const weatherClient = new WeatherClient("a92051ec92e9b45b5bece67bae450ccd");

//console.log(weatherClient);

console.log(weatherClient.getWeather(city));
