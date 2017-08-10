import React, { Component } from 'react'
import propTypes from 'prop-types'
import wageCalc from '../wageCalc'

import TextBox from './TextBox'
import Wages from './Wages'

export default class App extends Component { 
    constructor() {
        super()

        this.state = {
            wage: "",
            isAnnual: false
        }
        
        this.onNumberInput = this.onNumberInput.bind(this)
    }
    // Converts number to correct wage and
    // sends to wages component
    onNumberInput(number) {
        console.log(`Change detected! ${number} entered`)
        this.setState({
            wage: number
        })

    }

    render() {
        return (
            <div>
                <h1>Wages</h1>
                <TextBox onNumberInput = {this.onNumberInput}/>
                <Wages wage = {this.state.wage}/>
            </div>
        )
    }
}