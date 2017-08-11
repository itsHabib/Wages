import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

// very simple component which just notifies the app
// that the user wants to switch between annual salary & hourly rate
const RateRadioBtn = ({ updateRate }) => {

    // notifies app that a radio button has been clicked
   const handleClick = (event) =>{
        updateRate(event.target.value)
    }

    return (
        <div>
            <RadioButtonGroup name="rate" 
                              defaultSelected='hourly'
                              className='pt-3'
                              style={{display: 'flex', flexDirection: 'row'}}
                              onChange={handleClick}
            >
                <RadioButton
                    value='annual'
                    label='Annual'
                    className='m-1'
                    style={{display: 'inline-block', width:'auto'}}
                />
                <RadioButton
                    value='hourly'
                    className='m-1'
                    label='Hourly'
                    style={{display: 'inline-block', width:'auto'}}
                />
            </RadioButtonGroup>
        </div>
    )
}

module.exports = RateRadioBtn
