import React from 'react'


export default function CurrentWeather() {
    return (
        <div className='weather'>
            <div className="top">
                <div>
                    <p className="city">Cairo</p>
                    <p className="weather_desc">Sunny</p>
                </div>
                <img className='weather_icon' src="icons/01d.png" alt="weather" />
            </div>
            <div className="bottom">
                <p className="temperature">20°C</p>
                <div className="details">
                        <p className="parameter_header">Details</p>
                    <div className="parameter_row">
                        <span className="parameter_label">Feels Like</span>
                        <span className="parameter_value">24°C</span>
                    </div>
                    <div className="parameter_row">
                        <span className="parameter_label">Wind</span>
                        <span className="parameter_value">10 m/s</span>
                    </div>
                    <div className="parameter_row">
                        <span className="parameter_label">Humidity</span>
                        <span className="parameter_value">20%</span>
                    </div>
                    <div className="parameter_row">
                        <span className="parameter_label">Pressure</span>
                        <span className="parameter_value">10 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
