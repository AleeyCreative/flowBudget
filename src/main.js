import React, {useReducer, useEffect} from 'react'
import {AppState,initialState,setInitState} from './AppState/appState'
import * as _ from './AppState/flowBudgetActions'
import Reducer from './AppState/reducer'
import ItemsView from './Components/itemsView'
import Credit from './Components/credits'
import BudgetSet from './Components/budgetSet'
import StatusDisplay from './Components/statusDisplay'
import {handler} from './tools'

const FlowBudget = () => {
	const [flowBudgetState, dispatch] = useReducer(Reducer,initialState,setInitState)
	
	return(
	<AppState.Provider value={{flowBudgetState,dispatch}}>
		<div className='flowBudget'>
			<BudgetSet />
		<nav className='blue darken-4 center'> Welcome to flowBudget </nav>
		<ItemsView />
		<StatusDisplay />
		</div>
	</AppState.Provider>
	)
}

export default FlowBudget
