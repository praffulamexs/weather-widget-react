import React from 'react'
import './input-field.css'

type InputType = {
    title: string
    placeholder: string
    value: string
    change: (newValue: string) => void
}

const InputField: React.FC<InputType> = ({ title, placeholder, value, change }) => {

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        change(event.target.value)
    }

    return (
        <div className='inputDiv'>
            <p className='title'>{title}</p>
            <input className='inputField' maxLength={13} type='text' value={value} placeholder={placeholder} onChange={changeValue} />
        </div>
    )
}

export default InputField