import React, { Component } from 'react'
import propTypes from 'prop-types'
import wageCalc from '../util/wageCalc'

import TextBox from './TextBox'
import Wages from './Wages'
import RateRadioBtn from './RateRadioBtn'

export default class App extends Component { 
    constructor() {
        super()

        this.state = {
            wage: "",
            isAnnual: false,
            switched: false
        }
        
        this.onNumberInput = this.onNumberInput.bind(this)
        this.updateRate = this.updateRate.bind(this)
    }
    // Converts number to correct wage and
    // sends to wages component
    onNumberInput(number) {
        let wage
        if (this.state.isAnnual)
            wage = wageCalc.toHourly(number)
        else
            wage = wageCalc.toAnnual(number)

        this.setState({
            wage: wage
                  
        })
    }

    // Checks to see if isAnnual state variable
    // needs to be udpated, and updates if so
    updateRate(rate) {
        if (rate === 'annual' && !this.state.isAnnual) {
            this.setState({
                isAnnual: true,
                wage: ""
            })
            document.getElementById('number-input').value = ""
        } else if(rate === 'hourly' && this.state.isAnnual) {
            this.setState({
                isAnnual: false,
                wage: ""
            })
            document.getElementById('number-input').value = ""

        }
        
        

    }


    render() {
        return (
            <div>
                <h1>Wages</h1>
                <RateRadioBtn updateRate={this.updateRate}/>
                <TextBox onNumberInput = {this.onNumberInput}/>
                <Wages wage = {this.state.wage}/>
            </div>
        )
    }
}