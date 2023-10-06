import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

export default function Forecast({ forecastData }) {

    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const daysInAWeek = new Date().getDay();

    const forecastDay = weekDays.slice(daysInAWeek, weekDays.length).concat(weekDays.slice(0, daysInAWeek));


    return (
        <div className='forecast'>
            <div className="container">
                <h3>Daily</h3>
                <Accordion allowZeroExpanded>
                    {
                        forecastData.list.splice(0, 7).map((item, index) =>
                            <AccordionItem key={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className="daily_item">
                                            <img className='icon' src={`icons/${item.weather[0].icon}.png`} alt="forecast" />
                                            <p className="day">{forecastDay[index]}</p>
                                            <p className="desc">{item.weather[0].description}</p>
                                            <p className="min_max">{`${Math.floor(item.main.temp_min)}°C / ${Math.floor(item.main.temp_max)}°C`}</p>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="daily_details">
                                        <div className="daily_detail">
                                            <span>Pressure</span>
                                            <span>{item.main.pressure} hPa</span>
                                        </div>
                                        <div className="daily_detail">
                                            <span>Sea Level</span>
                                            <span>{item.main.sea_level} m</span>
                                        </div>
                                        <div className="daily_detail">
                                            <span>Wind Speed</span>
                                            <span>{item.wind.speed} m/s</span>
                                        </div>
                                        <div className="daily_detail">
                                            <span>Cloud</span>
                                            <span>{item.clouds.all}%</span>
                                        </div>
                                        <div className="daily_detail">
                                            <span>Humidity</span>
                                            <span>{item.main.humidity}%</span>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    }
                </Accordion>
            </div>
        </div>
    )
}
