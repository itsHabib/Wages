import React, { Component } from 'react'
import propTypes from 'prop-types'
import wageCalc from '../util/wageCalc'
import commatize from '../util/commatize'
import { INFO } from '../constants' 

import TextBox from './TextBox'
import Wages from './Wages'
import RateRadioBtn from './RateRadioBtn'

// needed to apply material ui elements
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { lightGreen700 } from 'material-ui/styles/colors'

// Base Material theme for application
const muiTheme = getMuiTheme({
    palette : {
        primary1Color: lightGreen700
    }
})



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
        }  else {
            let wage
            if (this.state.isAnnual)
                wage = wageCalc.toHourly(number)
            else
                wage = wageCalc.toAnnual(number)

            this.setState({
                wage: '$'+commatize(wage)
                  
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
                    <h1 className='title m-1 pr-4'>Wages</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <p className="info p-1">
                            {INFO}
                        </p>
                    </div>
                </div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div className="row justify-content-center">
                        <TextBox onNumberInput = {this.onNumberInput}/>
                        <RateRadioBtn updateRate={this.updateRate}/>
                    </div>
                </MuiThemeProvider>

                <div className="row justify-content-center">
                    <Wages wage = {this.state.wage}/>
                </div>

            </div>
        )
    }
}