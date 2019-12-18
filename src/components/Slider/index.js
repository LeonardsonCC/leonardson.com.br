import React from 'react'
import { SliderTheme } from './styles'

import SliderItem from '../SliderItem'

const Slider = ({ items }) => {
    
    return (
        <SliderTheme>
            {
                items.map((item) => <SliderItem 
                                        key={item.id} 
                                        image={item.image} 
                                        title={item.title} 
                                        description={item.description} />)
            }
        </SliderTheme>
    )
}

export default Slider