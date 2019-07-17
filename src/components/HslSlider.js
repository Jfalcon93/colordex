import React, { Component } from 'react'
import colorConvert from 'color-convert'

const HslSlider = ({color, textColor, slide=f=>f}) => {
    
    let convertedColor = colorConvert.hex.hsl(color)
    
    const changeHue = e => {
        e.preventDefault()
        convertedColor[0] = e.target.value
        let color = `#${colorConvert.hsl.hex(convertedColor)}`
        slide(color)
    }
    
    const changeSat = e => {
        e.preventDefault()
        convertedColor[1] = e.target.value 
        let color = `#${colorConvert.hsl.hex(convertedColor)}`
        slide(color)
    }
    
    const changeLight = e => {
        e.preventDefault()
        convertedColor[2] = e.target.value 
        let color = `#${colorConvert.hsl.hex(convertedColor)}`
        slide(color)
    }
    
    return (
        <div className='slider-container'>
           <div className='single-slider'>
              <p>Hue {convertedColor[0]}</p>
              <input className='slider'
                     type="range" 
                     min='0' 
                     max='360'
                     defaultValue={convertedColor[0]}
                     style={{background: textColor}}
                     step='1'
                     onChange={changeHue}
                     />
           </div>
           <div className='single-slider'>
               <p>Saturation {convertedColor[1]/100}</p>
               <input className='slider' 
                      type="range" 
                      min="0" 
                      max="100" 
                      defaultValue={convertedColor[1]}
                      style={{background: textColor}}
                      step='1'
                      onChange={changeSat} 
                      />
           </div>
           <div className='single-slider'>
               <p>Lightness {convertedColor[2]/100}</p>
           </div>
            <input className='slider' 
                   type="range" 
                   min="0" 
                   max="100" 
                   defaultValue={convertedColor[2]}
                   style={{background: textColor}}
                   step='1' 
                   onChange={changeLight}
                   />
        </div>
    )
}

export default HslSlider