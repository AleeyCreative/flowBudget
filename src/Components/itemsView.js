﻿import React from 'react'
import AppState from '../AppState/appState'
import * as _ from '../AppState/flowBudgetActions'
import Item from './item'


const ItemsView = () => {
	let emptyTextClass = 'card center blue-text text-lighten-3'
	return(
		<AppState.Consumer>
		{(appState)=> (
			<div className='items-view '>
			{appState.flowBudgetState.items.length > 0  ? appState.flowBudgetState.items.map((item,i) => (
				<Item item={item} key={i} />)) : <div className={emptyTextClass} > Don't feel like shopping yet </div>
			}
			<button 
				onClick={()=> appState.dispatch(_.AddItem())}
				className=' btn floatable-button mdi mdi-plus blue darken-4 mdi-36px z-depth-4' /> 
			
			<button 
				onClick={()=> appState.dispatch(_.SaveTemporarily())}
				className=' btn floatable-button save-button mdi mdi-disk blue darken-2 mdi-24px z-depth-4' /> 

			</div>
		)}
		</AppState.Consumer>
	)
}

export default ItemsView
