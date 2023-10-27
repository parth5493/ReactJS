import React, { useEffect, useState } from 'react';

const APIExampleThree = () => {
    const [cityName, setCityname] = useState('')
    const [getWeather, setWeather] = useState([])
    const [loader, setLoading] = useState(false)

    const getWeatherdata = async () => {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=faed4d9eb29d483a866000c901ccb680`)
        const data = await response.json();   
        console.log(response);
        setLoading(true)
        const weatherData = Object.entries(data.results).map(([key,val], index)=> {
            console.log("Key is:", key);
            console.log("Value is", val);
            //console.log(val.components.continent);
            return <p key={key}>
                Continent is: {val.components.continent} <br/>
                Country is: {val.components.country} <br/>
                State is: {val.components.state} <br/>
                Latitude is: {val.geometry.lat} <br/>
                Longitude is: {val.geometry.lng}
            </p> 
        })
        setWeather(weatherData)
        // console.log(response);
        // console.log(data);
    }
    // console.log(getWeather);
    
    
    // console.log(getWeatherdata);
    
    // console.log(weatherData);
    
    // useEffect(()=> {

    //     getWeatherdata()
    //     // fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=faed4d9eb29d483a866000c901ccb680`)
    //     // .then(res =>  res.json())
    //     // .then((results) => {console.log(results);
        
    //     //     const weatherData = Object.entries(results).map(([key,val], index) => {
    //     //         console.log("Key is:", key);
    //     //         console.log(("value is:", val));
    //     //         console.log(index);
    //     //         return <li>{getWeather}</li>
    //     //     })
    //     //     setWeather(weatherData)
    //     // })
         
        
    // },[])

    
  
    return (
        <>
            <div className="container">
                <h2 className='text-center'>Weather App</h2>
                <input type="text" placeholder='Enter City Name' value={cityName} onChange={(e) => setCityname(e.target.value)}/> &nbsp;
                <button className='btn btn-primary' onClick={getWeatherdata}>Get Weather</button>
                {/* {getWeather &&  */}
                {loader ? <div>
                        <h2>Weather in {cityName}</h2>
                        {getWeather}
                        {/* {JSON.stringify(getWeather)} */}
                    </div> : <>Loading...</>}
                    
      {/* } */}
            </div>
        </>
    );
};

export default APIExampleThree;