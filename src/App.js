import React, { Component } from 'react'
import propTypes from 'prop-types'
import TextBox from './TextBox'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Wages</h1>
                <TextBox/>
            </div>
        )
    }
}