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
                    <p className='right'>26%</p>
                </div>
                <div className='row'>
                    <p className='left'>Wind</p>
                    <p className='right'>{data.wind.speed}</p>
                </div>
                <div className='row'>
                    <p className='left'>Rain</p>
                    <p className='right'>26%</p>
                </div>
            </div>
        </div>
    )
}

export default Detail;