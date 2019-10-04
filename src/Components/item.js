import React, { useState } from 'react'
import AppState from '../AppState/appState'
import * as _ from '../AppState/flowBudgetActions.js'
import ErrorView from './errorView'

const Item = ({item}) => {
	const [error,setError] = useState('no-error')
	
	function handlePriceChange(e,appState){
		let price = e.target.value
		const isOkay = true
		if(isOkay == true )
			{
				price = price === '' ? 0 : price
				appState.dispatch(_.FieldChange('price',item.id, price))
				setError('no-error')
			}
		else setError('price-error')
	}
	return(
		<AppState.Consumer>
		{(appState)=> (
			<div className='item-container'>
				<div className='item-delete mdi mdi-close-circle-outline'  onClick={(e) => appState.dispatch(_.DeleteItem(item.id)) }> </div>
				<div className='item'>
					<input 
						type='text'
						placeholder='spaceships'
						className='input-field'
						defaultValue={item.title}
						onChange = {(e) => appState.dispatch(_.FieldChange('title', item.id, e.target.value) )}
						/>
					
						<input 
						type='number'
						pattern='/[0-9\.]/'
						placeholder='₦0'
						className={ 'input-field ' + error}
						defaultValue={item.price}
						onChange = {(e) => handlePriceChange(e,appState) }
						/>
						</div>
			</div>
		)}
		</AppState.Consumer>
	)
}

export default Item
