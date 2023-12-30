import './App.css';
import React, { useEffect, useState } from 'react';
import WeatherCard from './components/weather';
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {

  const [lat, setLat] = useState()
  const [long, setLong] = useState()
  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    const fetchData = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeatherData(result);
        });  
    }
    if (lat && long) {
      fetchData()
    }
  }, [lat, long])
  return (
    <div className="App">
      {(typeof weatherData.main != 'undefined') ? (
        <WeatherCard data={weatherData}/>
      ): (
        <div>
          <Dimmer active>
            <Loader>
              Loading...
            </Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}

export default App;