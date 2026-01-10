import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
    return (
        <div className="weatherInfo">              
                            <div className="weatherContainer">
                                <div className="weatherContainerHeader">
                                        <span className="dot1"></span>
                                        <span className="dot2"></span>
                                        <span className="dot3"></span>
                                        Current Weather
                                    </div>
                                    <div className="row">
                                <div className="col-9">
                                    <h1 className="cityBox">{props.data.city}</h1>
                                </div>
                                <div className="col-3">
                                    <div className="float-right">
                                        <WeatherIcon 
                                        code={props.data.icon} size={150}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="weatherContainerInfo">
                                <ul className="date-forecast">
                                    <li className="dateInfo">
                                        <FormattedDate date={props.data.date} />
                                    </li>
                                    <li className="conditionInfo">{props.data.description}</li>
                                </ul>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="starburst-2">
                                            <div className="starburst">
                                                <WeatherTemperature celsius={props.data.temperature}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <ul className="condition">
                                            <li>
                                                Humidity: {props.data.humidity}%
                                            </li>
                                            <li>
                                                Wind: {Math.round(props.data.wind)}km/h
                                            </li>
                                        </ul>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}