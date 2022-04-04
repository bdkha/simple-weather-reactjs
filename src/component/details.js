import React from 'react'
import './detail.css'

function Detail({ data }) {
    return (
        <div className='detail'>
            <div className='list_info'>
                <p>Weather Details</p>
                <div className='row'>
                    <p className='left'>Cloudy</p>
                    <p className='right'>{data.clouds.all}</p>
                </div>
                <div className='row'>
                    <p className='left'>Humidity</p>
                    <p className='right'>{data.main.humidity}</p>
                </div>
                <div className='row'>
                    <p className='left'>Wind</p>
                    <p className='right'>{data.wind.speed}</p>
                </div>
                <div className='row'>
                    <p className='left'>Feel like</p>
                    <p className='right'>{Math.round(data.main.feels_like) + '°C'}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail;