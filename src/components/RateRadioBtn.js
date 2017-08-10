import React from 'react'

// very simple component which just notifies the app
// that the user wants to switch between annual salary & hourly rate
const RateRadioBtn = ({ updateRate }) => {

    // notifies app that a radio button has been clicked
   const handleClick = (event) =>{
        updateRate(event.target.value)
    }

    return (
        <div>
                <input type="radio" name="rate" value="annual" onClick=    {handleClick}/>Annual
                <input type="radio" value="hourly" name="rate" onClick={handleClick} defaultChecked={true}/>Hourly
        </div>
    )
}

module.exports = RateRadioBtn
