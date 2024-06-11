import React, { useState } from 'react';
import './weather.css';
import { FaSearch, FaWind } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';
import { WiHumidity } from 'react-icons/wi';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const API_KEY = "591560ae004a7556556c6f96c9f35820";

    const handleOnChange = (event) => {
        setCity(event.target.value);
    }

    const fetchData = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
            let response = await fetch(url);
            let output = await response.json();

            if (response.ok) {
                setWeather(output);
                setError('');
            } else {
                setError('Pas de données trouvées, entrez le nom d\'une ville valide');
                setWeather(null);
            }
        } catch (error) {
            setError('Erreur lors de la récupération des données');
            setWeather(null);
        }
    }

    return (
        <div className='container'>
            <div className='city'>
                <input type='text' value={city} onChange={handleOnChange} placeholder='Enter the name of a city' />
                <button onClick={fetchData}>
                    <FaSearch />
                </button>
            </div>
            {error && <p className='error'>{error}</p>}
            {weather && weather.weather && (
                <div className='weather'>
                    <div className='weather-image'>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Weather Icon' />
                        <h3 className='desc'>{weather.weather[0].description}</h3>
                    </div>

                    <div className='weather-city'>
                        <div className='location'>
                            <MdLocationOn />
                        </div>
                        <p>{weather.name}, <span>{weather.sys.country}</span></p>
                    </div>

                    <div className='weather-stats'>
                        <div className='temperature'>
                            <h2 className='ella'>{Math.round(weather.main.temp - 273.15)}°C</h2>
                        </div>
                        <div className='wind'>
                            <div className='wind-icon'>
                                <FaWind />
                            </div>
                            <h3 className='wind-speed'>{weather.wind.speed} <span>km/h</span></h3>
                            <h3 className='wind-heading'>Vitesse du vent</h3>
                        </div>
                        <div className='humidity'>
                            <div className='humidity-icon'>
                                <WiHumidity />
                            </div>
                            <h3 className='humidity-percent'>{weather.main.humidity} <span>%</span></h3>
                            <h3 className='humidity-heading'>Humidité</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
