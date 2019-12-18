import React from 'react'
import { SliderItemTheme } from './styles'

const SliderItem = ({ image, title, description }) => {

    
    return (
        <SliderItemTheme>
            <div className="SliderImage" style={{backgroundImage: `url(${image})`}} />
            <div className="SliderText">
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </div>
        </SliderItemTheme>
    )
}

export default SliderItem