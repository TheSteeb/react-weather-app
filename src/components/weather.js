import React from 'react';
import './styles.css';
import moment from 'moment'
import { Button } from 'semantic-ui-react';

const refresh = () => {
    window.location.reload();
  }

function WeatherCard({data}){
    console.log(data);
    //adjust background color based on Temprature
    let tempColor = data.main.temp > 20.0 ? 'red' :  
                    data.main.temp > 15 ? 'green' :
                    'blue';
    let imgSrc = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
     
    return (
        <div className="main" style={{backgroundColor: tempColor}}>
            <p className="header">{data.name}</p>
            <Button className="button" inverted color={tempColor}circular icon='refresh' onClick={refresh} />

            <div className="flex">
            <p className="day">Day: {moment().format('dddd')}</p>
            <p className="day">{moment().format('LL')}</p>
            </div>

            <div className='flex'>
                <p className='current-conditions'>Current Conditions: {data.weather[0].main}</p>
                <img src={imgSrc} alt={data.weather[0].description}></img>
            </div>

            <div className="flex">
            <p className="temp">Temprature: {data.main.temp} &deg;C</p>
            <p className="temp">Humidity: {data.main.humidity} %</p>
            </div>
            
            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </div>
    )
}

export default WeatherCard;