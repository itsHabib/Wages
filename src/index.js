import React from 'react'
import { render } from 'react-dom'
import App from './App'

render(<App/>, document.getElementById('root'))

if (module.hot) {
    module.hot.accept('./App.js', () => {
        const NextApp = require('./App.js').default
        render(<NextApp/>, document.getElementById('root'))
    })
}