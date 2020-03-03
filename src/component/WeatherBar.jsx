import React from 'react'
import WeatherCard from "./WeatherCard"
import './WeatherBar.css'

class WeatherBar extends React.Component{
    render() {
        return (
            
            <div className= "weather-bar">
              
                {this.props.weathers.map((w, i) => <WeatherCard weather={w} key={i}/>)}
           </div>
        );
    }
}
export default WeatherBar;