const axios = require("axios");

module.exports = class WeatherClient {
  constructor(apiKey) {
    this.apiKey = `&APPID=${apiKey}`;

    this.baseURL = `http://api.openweathermap.org/data/2.5/weather?q=`;
  }

  getDescription(weather) {
    return weather.map(entry => entry.description);
  }

  getWeather(city) {
    console.log(axios.get(`${this.baseURL}${city}${this.apiKey}`));
    return axios
      .get(`${this.baseURL}${city}${this.apiKey}`)
      .then(res => console.log(res.data.weather));
  }
};
