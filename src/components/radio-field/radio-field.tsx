import React from 'react'
import RadioInterface from '../../interfaces/radio-interface'
import './radio-field.css'

type RadioType = {
    title: string
    name: string
    selected: string | boolean
    radios: RadioInterface[]
    change: (newValue: string) => void
}

const RadioField: React.FC<RadioType> = ({ title, name, selected, radios, change }) => {

    const onRadioChange = (event: any) => {
        change(event.target.value)
    }

    return (
        <div className='radioDiv' onChange={onRadioChange}>
            <p className='title'>{title}</p>
            <div className='radioGroup'>
                {radios.map((radio, index) => (
                    <div key={index} className='radioButtonDiv'>
                        <input type='radio' name={name} value={radio.value} defaultChecked={selected === radio.value ? true : false} />
                        <label>{radio.label}</label>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RadioField