import React, {useState} from 'react'
import AppState from '../AppState/appState'
import {SetBudget} from '../AppState/flowBudgetActions'
const BudgetSet = (props) => {
	let [ showBudgetSet, setShow ] = useState(true)
	let [budget, setBudgetAmount] = useState(0)
	return(
	 	<AppState.Consumer>
	 		{({dispatch}) => (
	 			<div className = {  showBudgetSet ? ' card-panel  z-depth-5 budgetset' : 'hide'}>
	 				<div
	 					className='budgetset-close-button mdi mdi-close-circle-outline'
	 					onClick={e => setShow(!showBudgetSet) } />
	 				<p className='center'> How much do you have to budget </p>
	 				<div className='budgetset-lower-container'>
	 					<input
	 						type='text'
	 						className='budgetset-textfield'
	 						placeholder="1000000"
	 						onChange={e => setBudgetAmount(e.target.value)}
	 						/>
	 					<button
	 					 className='btn budgetset-button blue'
	 					 onClick={ e => {
	 						setShow(!showBudgetSet)
	 						dispatch(SetBudget(budget))
	 						}}> Okay </button>
	 				</div>
	 			</div>
	 		)}
	 	</AppState.Consumer>
	)
}

export default BudgetSet
