import React, {EffectCallback, useEffect, useState} from 'react';
import { useAsyncEffect } from 'use-async-effect';
import axios from 'axios';
import api from '../services/api';

import '../styles/pages/weather-app.css';

interface Location {
    city: string;
    country: string;
}

function WeatherApp() {
    let time = new Date;

    const [weather, setWeather] = useState<string>('clear')
    const [temperature, setTemperature] = useState<number>(300)
    const [location, setLocation] = useState<Location>({city: 'London', country: 'UK'})
    const [timestamp, setTimestamp] = useState(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)

    setInterval(() => {
        time = new Date;
        setTimestamp(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
    }, 1000)
    
    useAsyncEffect(async () => {
        const response = await axios.request(api);

        setTemperature(response.data.main.temp);
        setLocation({city: response.data.name, country: response.data.sys.country});
        setWeather(response.data.weather[0].description);
    }, [])
      
    console.log(String(time.getMinutes()).length);

    return (
        <div className="container">
            <main>
                <p className="current-weather-description">{ weather }</p>
                <p className="current-weather">{ Math.round(temperature - 273.15) }°C</p>
                <p className="city">{ location.city }, { location.country }</p>
                <div className="current-time">
                    <div>Today</div>
                    ,
                    <div className="hours-minutes">
                        {timestamp}
                    </div>
                    <div className="year">
                        {time.getFullYear()}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default WeatherApp;