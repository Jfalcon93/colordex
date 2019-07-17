import React, { Component } from 'react'
import icon from '../../images/icon.svg'

const Header = ({textColor}) => {
    return (
        <nav>
            <ul>
                <li><a style={{color: textColor}} href="#">jordanfalcon</a></li>
                <li className='right'><a style={{color: textColor}} href="#"><i className="fab fa-twitter"></i></a></li>
                <li className='right'><a style={{color: textColor}} href='#'><i className="fab fa-github"></i></a></li>
            </ul>
        </nav>
    )
}

export default Header