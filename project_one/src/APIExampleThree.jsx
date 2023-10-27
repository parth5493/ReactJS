import React, { useEffect, useState } from 'react';
import './apiexamplethree.css'

const APIExampleThree = () => {
    const [cityName, setCityname] = useState('')
    const [cityData, setCitydata] = useState(null) // null - API data will be stored in object. And If ([]), It will be stored in array.
    const [getWeather, setWeather] = useState(null)

    const getWeatherdata = async () => {

        // First, fetch latitude and longitude from API
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=faed4d9eb29d483a866000c901ccb680`)
        const data = await response.json();   
        // console.log(response);
        console.log(data);
        setCitydata(data) // Store API data in cityData state and It shows null. So, I put cityData as a dependancy in useEffect below
        const {lat, lng} = data.results[0].geometry // I use destructure method to get longitude and latitude from API data

        // console.log("lat is:", lat);
        // console.log("lng is:", lng);

        // Then, fetch weather data from API with the help of Latitude and Longitude

        const weatherResonse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ff431b01e24bf42cc8b9d90009e86b7f`)
        const weatherData = await weatherResonse.json();
        // console.log(weatherResonse);
        setWeather(weatherData)
    }
    
    useEffect(() => {
        console.log("cityData", cityData ); // I did this because without useEffect cityData will be showing null.
    }, [cityData]) 
    return (
        <>
            <div className="body-api">
                <div className="container">
                    <h2 className='text-center p-3 text-dark'>WEATHER INFORMATION</h2>
                    <input className='text-center p-1 rounded' type="text" placeholder='Enter City Name' value={cityName} onChange={(e) => setCityname(e.target.value)} /> &nbsp;
                    <button className='btn btn-primary' onClick={getWeatherdata}>Get Weather</button>
                    <div>
                        {/* Use Conditional rendering to print datas */}
                        {getWeather && 
                            <div>
                                <h2 className='text-center'>Weather in {cityName}</h2>
                                <p className='text-center'>Continent is {cityData.results[0].components.continent}</p>
                                <p className='text-center'>Country is {cityData.results[0].components.country}</p>
                                <p className='text-center'>State is {cityData.results[0].components.state}</p>
                                <p className='text-center'>Weather is {getWeather.weather[0].main}</p>
                                <p className='text-center'>Temperature is {getWeather.main.temp} °C</p>
                                <p className='text-center'>Longitude is {getWeather.coord.lon}</p>
                                <p className='text-center'>Latitude is {getWeather.coord.lat}</p>
                            </div>
                        }
                    </div>
                    <div className="page-align"></div>
                    <div className="page-align"></div>
                </div>
            </div>
        </>
    );
};

export default APIExampleThree;