import React, {useState} from 'react'
import AppState from '../AppState/appState'

const StatusDisplay = () => {
	function warningMsg({flowBudgetState}) {
		let { total,budget,remaining } = flowBudgetState
		if(total > budget)
			return `It seems that your budget has exceeded your cash by ₦${total - budget}` 
		else return null 
	
	}
	return(
	 <AppState.Consumer>
		 {(appState) => (
		 	<div className='status-display'>
		 		{ warningMsg(appState) && <DisplayMessage message={warningMsg(appState)}/> }
		 		<div className='info-box-container'>
		 			<div className='info-box blue lighten-4 remaining-box'> {appState.flowBudgetState.remaining} </div>
		 			<div className='info-box blue lighten-4 total-box'> {appState.flowBudgetState.total} </div>
		 		</div> 
		 	</div> )}
	 </AppState.Consumer>
	)
}


const DisplayMessage = ({message}) => (
		<div className='error alertbox red lighten-4 red-text'>
			<span className='mdi mdi-alert'> </span>
			{message} 
			</div>
		)  
		
		

export default StatusDisplay
