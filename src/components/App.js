import React, {Component} from 'react'
import Header from './Header'
import AccessibilityHeader from './AccessibilityHeader'
import Body from './Body'
import Footer from './Footer'
import '../../stylesheets/App.css'

export default class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            textColor: '#00ffff',
            backgroundColor: '#111111'
        }
        this.changeTextColor = this.changeTextColor.bind(this)
        this.changeBackgroundColor = this.changeBackgroundColor.bind(this)
        this.changeSlideText = this.changeSlideText.bind(this)
        this.changeBackSlide = this.changeBackSlide.bind(this)
    }
    
    changeTextColor (color) {
        if(color !== "") {
            this.setState({textColor: color})
        }
    }
    
    changeBackgroundColor (color) {
        if(color !== '') {
            this.setState({backgroundColor: color})
        }
    }
    
    changeSlideText (color) {
        this.setState({textColor: color})
    }
    
    changeBackSlide (color) {
        this.setState({backgroundColor: color})
    }
    
    render() {
        const {changeTextColor, changeBackgroundColor, changeSlideText, changeBackSlide} = this
        const {textColor, backgroundColor} = this.state
        return (
            <div className="app" style={{color: textColor, background: backgroundColor}}>
                <Header textColor={textColor}/>
                <AccessibilityHeader textColor={textColor}
                                     backgroundColor={backgroundColor} />
                <Body textColor={textColor}
                      changeText={changeTextColor}
                      changeSlideText={changeSlideText}
                      backgroundColor={backgroundColor}
                      changeBackground={changeBackgroundColor}
                      changeBackSlide={changeBackSlide}
                      />
                <Footer />
            </div>
        )
    }
}