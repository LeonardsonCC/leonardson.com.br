import React from 'react'
import './styles.scss'

const SliderItem = ({ image, title, description }) => {

    
    return (
        <div className="SliderItem">
            <div className="SliderImage" style={{backgroundImage: `url(${image})`}} />
            <div className="SliderText">
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default SliderItem