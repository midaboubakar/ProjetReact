import React, { useState } from 'react';
import './weather.css';
import { FaSearch } from "react-icons/fa";


const Weather = () => {

    const [city,setCity]=useState('');
    const API_KEY = "591560ae004a7556556c6f96c9f35820";
    const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API_KEY}';

    function handleOnChange(event){
        setCity(event.target.value);
        console.log(event.target.value);
    }

  return (
    <div className='container'>
      <div className='city'>
        <input type='text' value={city} onChange={handleOnChange} placeholder='Enter the name of a city'></input>
        <button>
            <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Weather;
