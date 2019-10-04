import React, {useState} from 'react'
import AppState from '../AppState/appState'

const ErrorView = (props) => {
	return(
		<AppState.Consumer>
		{ ({flowBudgetState}) => (
		<div className='error-view'>
		 <span className='mdi mdi-alert'/> { flowBudgetState.priceError && flowBudgetState.priceError }
		</div>
		 ) }
		</AppState.Consumer>
	)
}

export default ErrorView
