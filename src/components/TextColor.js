import React, { Component } from 'react'
import HslSlider from './HslSlider'

const TextColor = ({textColor, backgroundColor, changeText=f=>f, slide=f=>f}) => {
    
    let _color
    
    const change = e => {
        e.preventDefault()
        changeText(_color.value)
    }
    
    return (
        <div className='sub-container'>
            <p>Text</p>
            <input ref={input => _color = input} type="text" value={textColor} onBlur={change} style={{background: backgroundColor, color: textColor}} disabled/>
            <HslSlider color={textColor}
                       textColor={textColor}
                       slide={slide}/>
        </div>
    )
}

export default TextColor