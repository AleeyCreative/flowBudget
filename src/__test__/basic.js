/**
	testing Codes in React
	filenames : __test__/myComponent.spec.js
**/

import React from 'react'
import {create, act} from 'jest-test-renderer'

// testing a component snapshot
describe('Loader Component', () => {
	test("Loader is same as snapshot", () => {
		let loader = create(<Loader />)
		expect(loader.toJSON()).toMatchSnapshot()
	})
})

//testing a component with action and possibly state
describe("Visible Component", () => {
	test("The component behaves as expected", () => {
		let VisComp = create(<Visibility value={false}>)
		let instance = VisiComp.root
		let checker = instance.findByType('radio')
		act(() => checker.props.onChange())
		expect(button.props.value).toBe(true)
	})
	})

	
