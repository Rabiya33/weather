import React from 'react'
import './WeatherApp.css';
import cloud from '../Assets/cloud.png'
import humidity from '../Assets/humidity.png'
import wind from '../Assets/wind.png'





const WeatherApp = () => {
  return (
    <div  className='container'>
      <div className='top-bar'>
        <input type='text' className='cityinput' placeholder='search'/>
        <div className="search-icon ">
          </div>
        </div>
        <div className="weather-image ">
          <img src= {cloud} alt =""/>

        </div>
        <div className="waether-temp">24°C</div>
        <div className="weather-location">London</div>
         <div className="data-container">
            <div className="element">
              <div  src={humidity} alt="" className="icon"></div>
                <div className="data">
                  <div className="humidity-percent">64%</div>
                   <div className="text"> Humidity</div>
            </div>
          </div>
          <div className="element">
              <div  src={wind} alt="" className="icon"></div>
                <div className="data">
                  <div className="humidity-percent">18 km/h</div>
                   <div className="text">wind speed</div>
            </div>
          </div>
          
         </div>
      </div>
   
   
  )
}

export default WeatherApp