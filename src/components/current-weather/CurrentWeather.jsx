import React from 'react'


export default function CurrentWeather({ currentWeatherData }) {
    return (
        <div className='weather'>
            <div className="top">
                <div>
                    <p className="city">{currentWeatherData.city}</p>
                    <p className="weather_desc">{currentWeatherData.weather[0].description}</p>
                </div>
                <img className='weather_icon' src={`icons/${currentWeatherData.weather[0].icon}.png`} alt="weather" />
            </div>
            <div className="bottom">
                <p className="temperature">{`${Math.floor((currentWeatherData.main.temp))}°C`}</p>
                <div className="details">
                    <p className="parameter_header">Details</p>
                    <div className="parameter_row">
                        <span className="parameter_label">Feels Like</span>
                        <span className="parameter_value">{`${Math.floor((currentWeatherData.main.feels_like))}°C`}</span>
                    </div>
                    <div className="parameter_row">
                        <span className="parameter_label">Wind</span>
                        <span className="parameter_value">{`${currentWeatherData.wind.speed} m/s`}</span>
                    </div>
                    <div className="parameter_row">
                        <span className="parameter_label">Humidity</span>
                        <span className="parameter_value">{`${currentWeatherData.main.humidity}%`}</span>
                    </div>
                    <div className="parameter_row">
                        <span className="parameter_label">Pressure</span>
                        <span className="parameter_value">{`${currentWeatherData.main.pressure} hPa`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
