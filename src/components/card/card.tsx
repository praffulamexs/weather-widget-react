import React from 'react'
import './card.css'

const Card: React.FC = ({ children }) => {

    return (
        <div className='cardDiv'>
            {children}
        </div>
    )
}

export default Card