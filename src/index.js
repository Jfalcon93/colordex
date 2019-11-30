import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

http.createServer(onRequest).listen(process.env.PORT || 6000)

ReactDOM.render(<App />, document.getElementById('app'))