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
        // if input field is empty, clear out wages component
        if (document.getElementById('number-input').value === '') {
            this.setState({
                wage: ""
            })
        } else {
            let wage
            if (this.state.isAnnual)
                wage = wageCalc.toHourly(number)
            else
                wage = wageCalc.toAnnual(number)

            this.setState({
                wage: '$'+wage
                  
        })

        }
        
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
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h1 className='title m-1 p-1'>Wages</h1>
                </div>
                <div className="row justify-content-center">
                    <RateRadioBtn updateRate={this.updateRate}/>
                    <TextBox onNumberInput = {this.onNumberInput}/>
                </div>
                <div className="row justify-content-center">
                    <Wages wage = {this.state.wage}/>
                </div>

            </div>
        )
    }
}