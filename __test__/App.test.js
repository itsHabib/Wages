import React from 'react'
import App from '../src/App'
import TextBox from '../src/TextBox'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('<App/> - Main Container of Application', () => {

    // Initial State implies app is just loaded and
    // there is no input in the input box
    describe('Initial State of App', () => {

        // First ensure app renders correctly
        it('renders <App/> correctly', () => {
            const tree = renderer.create( < App / > ).toJSON()
            expect(tree).toMatchSnapshot()
        })

        // App is in charge of rendering the TextBox component
        it('it should render a TextBox component', () => {
            const wrapper = shallow(<App/>)
            expect(wrapper.find(TextBox)).toHaveLength(1)
        })
    })

})