import React, { useEffect, useState } from 'react';

const APIExampleTwo = () => {
    const [weather, setWeather] = useState()

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=23.0218734&lon=72.5984903&appid=ff431b01e24bf42cc8b9d90009e86b7f')
        .then(res => res.json())
        .then((results) => {console.log(results);setWeather(results)})
    }, [])
    console.log(weather);
    return (
        <>
            <div className="container">
                <h2 className='text-center'>Display Latitude and Longitude of city from API</h2>
                {weather && (
                    <div>
                        <h2>Weather in {weather.name}</h2>
                        <p>Temperature: {weather.main.temp} °C</p>
                        <p>Longitude is: {weather.coord.lon}</p>
                        <p>Latitude is: {weather.coord.lat}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default APIExampleTwo;




