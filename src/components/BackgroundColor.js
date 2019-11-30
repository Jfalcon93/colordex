import React, { Component } from 'react'
import HslSlider from './HslSlider'

const BackgroundColor = ({backgroundColor, textColor, changeBackground=f=>f, slide=f=>f}) => {
    
    let _color
    
    const change = e => {
        e.preventDefault()
        changeBackground(_color.value)
    }
    
    return (
        <div className = 'sub-container'>
            <p>Background</p>
            <input ref={input => _color = input} type="text" value={backgroundColor} onBlur={change} style={{background: backgroundColor, color: textColor}} disabled />
            <HslSlider color={backgroundColor}
                       textColor={textColor}
                       slide={slide}/>
        </div>
    )
}

export default BackgroundColor