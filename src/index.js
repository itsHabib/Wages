import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

// still needed fot material-ui to function
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'
render(<App/>, document.getElementById('root'))

// if (module.hot) {
//     module.hot.accept('./component/App.js', () => {
//         const NextApp = require('./App.js').default
//         render(<NextApp/>, document.getElementById('root'))
//     })
// }