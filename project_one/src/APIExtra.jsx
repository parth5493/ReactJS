{/*import React, { useState } from 'react';

const Weather = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = 'ff431b01e24bf42cc8b9d90009e86b7f'; // Replace with your API key

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};



const getWeatherdata = async () => {
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=23.0218734&lon=72.5984903&appid=ff431b01e24bf42cc8b9d90009e86b7f");
            const data = await response.json();
            setWeather(data);
        };
        getWeatherdata();
export default Weather;*/}