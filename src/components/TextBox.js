import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'


// Input field that notifies the app of numbers entered
const TextBox = ({ onNumberInput, switched }) => {
    let style = {
        width: 300
    }
    const getNumber = (event) => {
            let num = parseInt(event.target.value)
            if ( num != 0)
                onNumberInput(parseInt(num))
        
    }

    return (               
            <TextField
                hintText='Hourly or Annual Rate'
                type='number'
                min = '0'
                style={style}
                onChange={getNumber}
                id='number-input'
                    />

    )
}

module.exports = TextBox