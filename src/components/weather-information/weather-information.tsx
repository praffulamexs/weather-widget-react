import React from 'react'
import './weather-information.css'

type WeatherInformationType = {
    imageURL: string
    location: string
    temperatureValue: number
    windValue: number
    windDegree: number
    showWind: boolean
}

const WeatherInformation: React.FC<WeatherInformationType> = ({ imageURL, location, temperatureValue, windValue, windDegree, showWind }) => {
    const direction: string = windDegree === 0 || windDegree === 360 ? 'E' :
        windDegree > 0 && windDegree < 90 ? 'NE' :
            windDegree === 90 ? 'N' :
                windDegree > 90 && windDegree < 180 ? 'NW' :
                    windDegree === 180 ? 'W' :
                        windDegree > 180 && windDegree < 270 ? 'SW' :
                            windDegree === 270 ? 'S' : 'SE';
    // windDegree > 270 && windDegree < 360 ? 'SE'
    return (
        <div className='weatherInfoDiv'>
            <div className='weatherDisplay'>
                <img className='weatherIcon' src={imageURL} alt='icon' />
                {/* <img className='weatherIcon' src='http://openweathermap.org/img/w/01d.png' alt='icon' /> */}
            </div>
            <div className='weatherInfo'>
                <p className='location'>{location}</p>
                <p className='tempValue'><span id='span'>{temperatureValue}</span>°</p>
                {showWind ? <p className='windInfo'><b>Wind</b> {direction} {((windValue * 18) / 5).toFixed(2)}Km/h </p> : <p className='windInfo'>&nbsp;</p>}
            </div>
        </div>
    )
}

export default WeatherInformation