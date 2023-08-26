import React from 'react'
import './WeatherApp.css';
import search from '../Assets/searchicon.png'



const WeatherApp = () => {
  return (
    <div  className='container'>
      <div className='top-bar'>
        <input type='text' className='cityinput' placeholder='search'/>
        <div className="search-icon ">
           <img src={search}  alt= ""/>
        </div>

      </div>
    </div>
   
  )
}

export default WeatherApp