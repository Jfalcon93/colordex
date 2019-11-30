import React, { Component } from 'react'

const Header = ({textColor}) => {
    return (
        <nav>
            <ul>
                <li><a style={{color: textColor}} href="https://jordanfalcon.dev">jordanfalcon</a></li>
                <li className='right'><a style={{color: textColor}} href="#"><i className="fab fa-twitter"></i></a></li>
                <li className='right'><a style={{color: textColor}} href='https://github.com/jfalcon93'><i className="fab fa-github"></i></a></li>
            </ul>
        </nav>
    )
}

export default Header