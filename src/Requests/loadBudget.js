import React, {useState,useEffect} from 'react'
import {budget} from '../constants'

export default function loadBudget() {
	const [budget, setBudget] = useState({})
	useEffect(() => {
		const items = JSON.parse(localStorage.getItem(budget))
		setBudget(items)
	})
	
	return budget
}
