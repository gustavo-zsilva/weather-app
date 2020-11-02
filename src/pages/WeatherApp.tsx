import React, {useEffect, useState} from 'react';
import axios, {AxiosPromise} from 'axios';
import options from '../services/api';

// import api from '../services/api';

import '../styles/pages/weather-app.css';

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface ReturnedData {
    weather: Array<Weather>;
}

function WeatherApp() {
    const [weatherData, setWeatherData] = useState([])

    async function getWeatherData() {
        const response = await axios.request(options);
        console.log(response);
        
        return response.data.weather;
    }

    // useEffect(async () => {
    //     const response: [] = await getWeatherData();
    //     setWeatherData(response);
    // }, [])

    
      


    return (
        <div className="container">
            <main>
                <p className="current-weather-description">{}</p>
                <p className="current-weather">19 c</p>
                <p className="city">San Francisco</p>
                <p className="current-time" onClick={getWeatherData}>Today, 4:05am</p>

            </main>
        </div>
    )
}

export default WeatherApp;