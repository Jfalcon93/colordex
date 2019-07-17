import React, { Component } from 'react'
import colorContrast from 'color-contrast'

const AccessibilityHeader = ({textColor, backgroundColor}) => {
    
    let wcag = Math.round(colorContrast(textColor, backgroundColor) * 100)/100
    
    
    const calcRating = (num) => {
        if (num < 3.0) {
            return rating = "Fail"
        } else if (num >= 3.0 && num < 4.5) {
            return rating = "AA Large"
        } else if (num >= 4.5 && num < 7.0) {
            return rating = "AA"
        } else {
            return rating = "AAA"
        }
    }
    
    let rating = calcRating(wcag)
    
    return (
        <div className='accessibility'>
            <span className='big-text'>Aa</span><span className='wcag'>{wcag}</span><span className='rating'>{rating}</span>
        </div>
    )
    
}

export default AccessibilityHeader