import React, { Component } from 'react'
import TextColor from './TextColor'
import BackgroundColor from './BackgroundColor'
import Examples from './Examples'

const Body = ({textColor, changeText=f=>f, changeSlideText=f=>f, backgroundColor, changeBackground=f=>f, changeBackSlide=f=>f}) => {
    return (
        <div className='body'>
           <div className='container'>
               <TextColor textColor={textColor}
                          backgroundColor={backgroundColor}
                          changeText={changeText}
                          slide={changeSlideText}/>
               <BackgroundColor backgroundColor={backgroundColor}
                                textColor={textColor}
                                changeBackground={changeBackground}
                                slide={changeBackSlide}/>
           </div>
           <Examples />
        </div>
    )
}

export default Body