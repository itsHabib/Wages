import React, { Component } from 'react'

const TextBox = ({ onNumberInput }) => {

        const getNumber = (event) => {
            onNumberInput(event.target.value)
        }

        return (
            <label htmlFor = "number-input">
                <input onChange={getNumber} id="number-input"/>
            </label>
        )
}

module.exports = TextBox