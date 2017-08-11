import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'


// Input field that notifies the app of numbers entered
const TextBox = ({ onNumberInput, switched }) => {

    const getNumber = (event) => {
        onNumberInput(event.target.value)
    }

    return (               
            <TextField
                hintText='Hourly or Annual Rate'
                type='number'
                onChange={getNumber}
                id='number-input'
                    />

    )
}

module.exports = TextBox