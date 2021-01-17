import React, { useEffect, useState } from 'react'
import { Card, InputField, RadioField, WeatherInformation } from '../../components/'
import RadioInterface from '../../interfaces/radio-interface'
import token from '../../token'
import './weather-widget.css'

interface Information {
    title: string
    temperature: string
    temperatureValue: number
    wind: string
    windValue: number
    windDegree: number
    image: string
    location: string
}

const temperatureRadios: RadioInterface[] = [
    { label: '°C', value: 'C' },
    { label: '°F', value: 'F' },
]

const windRadios: RadioInterface[] = [
    { label: 'On', value: 'on' },
    { label: 'Off', value: 'off' },
]

const defaultInformation: Information = {
    title: '',
    temperature: 'C',
    temperatureValue: 0,
    wind: 'on',
    windValue: 0,
    windDegree: 0,
    image: 'http://openweathermap.org/img/w/01d.png',
    location: 'Default'
}

const WeatherWidget: React.FC = () => {
    const [information, setInformation] = useState<Information>(defaultInformation)

    const getInformation = () => {
        if (navigator.geolocation) {
            const units: string = information.temperature === 'C' ? 'metric' : 'imperial'
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${units}&appid=${token}`)
                    .then((response) => response.json())
                    .then((weatherData) => {
                        if (weatherData.main.temp !== information.temperatureValue) { // Only update the state if the new temperature values are different i.e F or C value
                            setInformation({
                                ...information,
                                temperatureValue: weatherData.main.temp,
                                windValue: weatherData.wind.speed,
                                windDegree: weatherData.wind.deg,
                                image: 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png',
                                location: weatherData.name
                            })
                        }
                    })
                    .catch(error => {
                        // alert('Could not hit the API. Error!')
                        console.log('Could not hit the API. Error!')
                    })
            })
        } else {
            // alert('Enable Geolocation.')
            console.log('Enable Geolocation.')
        }
    }

    useEffect(() => { // Will run every time the component is loaded
        // if (information === defaultInformation) getInformation()
        getInformation()
    })

    return (
        <div className='weatherWidget'>
            <div className='leftContent'>
                <InputField
                    title='Title'
                    placeholder='Title of Widget'
                    value={information.title}
                    change={(newValue: string) => {
                        setInformation({ ...information, title: newValue })
                    }}
                />
                <RadioField
                    title='Temperature'
                    name='temperature'
                    selected={information.temperature}
                    radios={temperatureRadios} change={(newValue) => setInformation({ ...information, temperature: newValue })}
                />
                <RadioField
                    title='Wind'
                    name='wind'
                    selected={information.wind}
                    radios={windRadios} change={(newValue) => setInformation({ ...information, wind: newValue })}
                />
            </div>
            <div className='rightContent'>
                <Card>
                    {information.title !== '' ? <h3 className='widgetTitle'>{information.title}</h3> : <h3 className='widgetTitle'>Title of Widget</h3>} {/* To show a default title when no title value is entered */}
                    {/* <h3>Title of Widget</h3> */}
                    <WeatherInformation
                        imageURL={information.image}
                        location={information.location}
                        temperatureValue={information.temperatureValue}
                        windValue={information.windValue}
                        windDegree={information.windDegree}
                        showWind={information.wind == 'on' ? true : false}
                    />
                </Card>
            </div>
        </div>
    )
}

export default WeatherWidget