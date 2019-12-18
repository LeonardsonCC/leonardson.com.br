import React from 'react'
import './styles.scss'

import SliderItem from '../SliderItem'

const Slider = ({ items }) => {
    return (
        <div className="Slider">
            {
                items.map((item) => <SliderItem 
                                        key={item.id} 
                                        image={item.image} 
                                        title={item.title} 
                                        description={item.description} />)
            }
        </div>
    )
}

export default Slider