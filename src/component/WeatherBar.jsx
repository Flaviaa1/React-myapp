import React from 'react'
import WeatherCar from "./WeatherCar"
import './WeatherBar.css'

class WeatherBar extends React.Component{
    render() {
        return (
            <div className= "weather-bar">
                <h1>bar</h1>
                {this.props.weathers.map((w, i) => <WeatherCar weather={w} key={i}/>)}
           </div>
        );
    }
}
export default WeatherBar;