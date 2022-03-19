import React from 'react'
import './weather.css'

function Weather({ data }) {
    const dt = new Date(data.dt * 1000).getHours();
    let hour;
    if (dt == 0) hour = '12 PM';
    else if (dt > 12) hour = `${dt - 12} PM`;
    else hour = `${dt} AM`;

    return (
        <div className='weather'>
            <div className='weather_info'>
                <h1>{Math.round(data.main.temp) + '°C'}</h1>
                <div className='city_info'>
                    <h2 className='city'>{data.name}</h2>
                    <h2 className='clock'>{hour}</h2>
                </div>
                <div className='description'>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} className='icon' />
                    <h2 className='des'>{data.weather[0].main}</h2>
                </div>
            </div>
        </div>
    )
}

export default Weather;