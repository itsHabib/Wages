import React, { Component } from 'react'

export default class TextBox extends Component {
    render() {
        return (
            <label htmlFor = "number-input">
                <input id="number-input"/>
            </label>
        )
    }
}